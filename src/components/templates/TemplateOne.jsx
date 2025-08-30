import { useCVStore } from "../../store/useCVStore";
const TemplateOne = ({ data, printRef }) => {
  const { personalDetails, experience, projects, academics } = data;
  const { colorTheme, font } = useCVStore();
  console.log(personalDetails);
  const style = {
    fontFamily: font,
    color: colorTheme.primary,
  };

  const accent = {
    color: colorTheme.accent,
  };
  return (
    <div
      ref={printRef}
      style={{ ...style, minHeight: "995px" }}
      className="space-y-4 p-0"
    >
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-center" style={accent}>
          {personalDetails?.name}
        </h1>

        <p className="text-center  font-semibold">{personalDetails?.role}</p>
        <p className="text-center">
          {personalDetails?.email} | {personalDetails?.phone}
        </p>
      </div>
      <hr />
      <section>
        <h2 className="text-lg font-semibold">Overview</h2>
        <p className="break-words whitespace-pre-line">{personalDetails?.overview}</p>
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
          <p key={i}>
            <strong>{proj?.title}:</strong> {proj?.description}
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

export default TemplateOne;
