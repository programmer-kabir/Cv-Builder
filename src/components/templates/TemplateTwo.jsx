import { useCVStore } from '../../store/useCVStore'

const TemplateTwo = ({ data, printRef }) => {
  const { personalDetails, experience, projects, academics } = data
  const { colorTheme, font } = useCVStore()

  const style = {
    fontFamily: font,
    color: colorTheme.primary,
  }

  const accent = {
    color: colorTheme.accent,
  }
  return (
    <div
      ref={printRef}
      style={{ ...style, backgroundColor: '#f3f4f6', minHeight: '995px' }}
      className='  p-4 rounded space-y-2 font-mono'
    >
      <div className='text-center '>
        <h1 className='text-3xl font-extrabold' style={accent}>
          {personalDetails?.name}
        </h1>
        <p>
          {personalDetails?.email} | {personalDetails?.phone}
        </p>
      </div>

      <hr />
      <div>
        <h2 className='text-xl underline'>Overview</h2>
        <p>{personalDetails?.overview}</p>
      </div>
      <div>
        <h2 className='text-xl underline'>Skills</h2>
        <p>{personalDetails?.skills}</p>
      </div>
      <div>
        <h2 className='text-xl underline'>Experience</h2>
        {experience?.map((exp, i) => (
          <div key={i}>
            {exp?.position} at {exp?.company} ({exp?.duration})
          </div>
        ))}
      </div>

      <div>
        <h2 className='text-xl underline'>Projects</h2>
        {projects?.map((proj, i) => (
          <div key={i}>
            <strong>{proj?.title}</strong>: {proj?.description}
          </div>
        ))}
      </div>

      <div>
        <h2 className='text-xl underline'>Academics</h2>
        <p>{academics?.education}</p>
      </div>

      <div>
        <h2 className='text-xl underline'>Extracurriculars</h2>
        <p>{academics?.['extracurricular-activity']}</p>
      </div>
    </div>
  )
}
export default TemplateTwo
