import { useCVStore } from "../../store/useCVStore";
const TemplateFour = ({ data, printRef }) => {
  const { personalDetails, experience, projects, academics } = data;
  const { colorTheme, font } = useCVStore();
  console.log(projects);
  const style = {
    fontFamily: font,
    color: colorTheme.primary,
  };

  const accent = {
    color: colorTheme.accent,
  };
  // console.log(personalDetails);
  return (
    <div
      ref={printRef}
      style={{ ...style, minHeight: "995px", mainHeight:"1124px" }}
      className="space-y-4 p-0 "
    >
      <section className="flex justify-between items-start gap-4">
        {/* Left side: Name and Role */}
        <div className="flex flex-col justify-start relative">
          <p className="text-3xl font-bold" style={accent}>
            {personalDetails?.name}
          </p>
          <p className="text-base font-semibold  absolute -bottom-4">
            {/* You can uncomment this to use dynamic role */}
            {/* {personalDetails?.developerRole} */}
            {personalDetails?.role}
          </p>
        </div>

        {/* Right side: Contact Info */}
        <div className="text-right ">
          <h1 className="font-medium">{personalDetails?.address}</h1>
          <h1>Email: {personalDetails?.email}</h1>
          <h1>Phone: {personalDetails?.phone}</h1>
        </div>
      </section>

      <hr />
      <section>
        <h2 className="text-lg font-semibold">Overview</h2>
        <p className="break-words whitespace-pre-line">
          {personalDetails?.overview}
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Skills</h2>
        <p>{personalDetails?.skills}</p>
      </section>
      <section>
        <h2 className="text-lg font-semibold">Experience</h2>
        {experience?.map((exp, i) => (
          <p key={i}>
            <strong>{exp?.position}</strong> at {exp?.company} ({exp?.duration})
          </p>
        ))}
      </section>

      <section>
        <h2 className="text-lg font-semibold">Projects</h2>
        {projects?.map((proj, i) => (
          <p key={i} className="space-x-1">
            <strong>{proj?.title} </strong>
            <a
              href={proj?.live}
              className="text-[#2377ff] font-semibold underline"
            >
              Demo
            </a>{" "}
            ||
            <a
              href={proj?.github}
              className="text-[#2377ff] font-semibold underline pl-2"
            >
              Code Link
            </a>
            <br />
            <p className="pt-2 px-2.5">{proj?.description}</p>
          </p>
        ))}
      </section>

      <section>
        <h2 className="text-lg font-semibold">Academics</h2>
        <p>{academics?.education}</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Extracurriculars</h2>
        <p>{academics?.["extracurricular-activity"]}</p>
      </section>
    </div>
  );
};

export default TemplateFour;
