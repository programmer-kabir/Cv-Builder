import { useNavigate } from "react-router";
import { useCVStore } from "../store/useCVStore";
import { message, Tooltip } from "antd";
import { useRef } from "react";
import TemplateOne from "../components/templates/TemplateOne";
import TemplateTwo from "../components/templates/TemplateTwo";
import TemplateThree from "../components/templates/TemplateThree";
import TemplateSelector from "../components/TemplateSelector";
import ThemeCustomizer from "../components/ThemeCustomizer";
import Container from "../components/ui/Container";
import { downloadDOC, downloadPDF } from "../utils";
import Navbar from "../components/Navbar";
import CustomButton from "../components/ui/CustomButton";
import {
  FilePdfOutlined,
  FileWordOutlined,
  LeftSquareOutlined,
  RightSquareOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import TemplateFour from "../components/templates/TemplateFour.jsx";
const templates = {
  template1: TemplateOne,
  template2: TemplateTwo,
  template3: TemplateThree,
  template4: TemplateFour,
};

const FinalPreview = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const printRef = useRef(null);

  const { personalDetails, experience, projects, academics, template, reset } =
    useCVStore();
  const cvData = { personalDetails, experience, projects, academics };
  const SelectedTemplate = templates[template];
  const success = () => {
    console.log("hello");
    messageApi.open({
      type: "loading",
      content: "File Generating..",
      duration: 0,
    });
    // Dismiss manually and asynchronously
    setTimeout(messageApi.destroy, 1000);
  };
  return (
    <Container>
      <div className="py-6">
        <Navbar />
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-8 py-6 px-2">
        <div className="space-y-6 flex-1 order-2 md:order-1 w-[520px]">
          <h2 className="text-xl font-semibold">CV Preview</h2>
          <div className="bg-white p-6 shadow-lg rounded">
            <SelectedTemplate printRef={printRef} data={cvData} />
          </div>
        </div>
        <div className="flex-1 space-y-6 order-1 md:order-2">
          <div className="flex flex-col xl:flex-row justify-between gap-6 items-start">
            <div className="space-y-6 flex-2/3 ">
              <h2 className="text-xl font-semibold">Choose Your CV Template</h2>
              <TemplateSelector />
            </div>
            <div className="space-y-6 flex-1/3">
              <h2 className="text-xl font-semibold">Customize Theme</h2>
              <ThemeCustomizer />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Export Options:</h2>
            <div className="flex  gap-4">
              <CustomButton
                onClick={() => {
                  success();
                  downloadPDF(printRef);
                }}
                label="Download PDF"
                icon={<FilePdfOutlined />}
              />
              <Tooltip title="Currently Doc Format Only Supports Modern Template.">
                <div>
                  <CustomButton
                    onClick={() => {
                      success();
                      downloadDOC(cvData);
                    }}
                    label="Download DOC"
                    icon={<FileWordOutlined />}
                  />
                </div>
              </Tooltip>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Actions:</h2>
            <div className="flex  gap-4">
              <CustomButton
                onClick={() => navigate(-1)}
                label="Back To Edit"
                icon={<LeftSquareOutlined />}
              />
              <CustomButton
                onClick={() => {
                  messageApi.open({
                    type: "warning",
                    content: "Feature Coming Soon!",
                  });
                }}
                label="Save"
                icon={<SaveOutlined />}
              />
              <CustomButton
                onClick={() => {
                  reset();
                  navigate("/dashboard");
                }}
                label="Exit"
                icon={<RightSquareOutlined />}
              />
            </div>
          </div>
        </div>
      </div>
      {contextHolder}
    </Container>
  );
};

export default FinalPreview;
