import { useCVStore } from '../../store/useCVStore'

const TemplateThree = ({ data, printRef }) => {
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
      className='flex  rounded shadow overflow-hidden'
      style={style}
    >
      <div
        style={{ backgroundColor: '#f3f4f6', minHeight: '995px' }}
        className='w-[37%]  p-4 space-y-4 wrap-break-word'
      >
        <h1 className='text-xl font-bold' style={accent}>
          {personalDetails?.name}
        </h1>
        <p className='text-sm'>{personalDetails?.email}</p>
        <p className='text-sm leading-0'>{personalDetails?.phone}</p>
        <div className='mt-8'>
          <h2 className='text-lg'>
            <strong>Overview</strong>
          </h2>

          <p>{personalDetails?.overview}</p>
        </div>
        <div className='mt-8'>
          <h2 className='text-lg'>
            <strong>Skills</strong>
          </h2>

          <p>{personalDetails?.skills}</p>
        </div>

        <div className='mt-8'>
          <h2 className='text-lg'>
            <strong>Extracurricular Activities:</strong>
          </h2>

          <p>{academics?.['extracurricular-activity']}</p>
        </div>
      </div>

      <div className='w-[63%] p-4 space-y-4'>
        <section className='space-y-8'>
          <h2 className='text-lg'>
            <strong>Experience</strong>
          </h2>

          {experience?.map((exp, i) => (
            <div
              key={i}
              style={{ backgroundColor: '#f3f4f6' }}
              className=' p-4 my-2'
            >
              <p>Position: {exp?.position}</p>
              <p>Company: {exp?.company}</p>
              <p>Duration: {exp?.duration}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className='text-lg'>
            <strong>Projects</strong>
          </h2>
          {projects?.map((proj, i) => (
            <div
              key={i}
              style={{ backgroundColor: '#f3f4f6' }}
              className=' p-4 my-2'
            >
              <p>Title: {proj?.title}</p>
              <p>Description: {proj?.description}</p>
            </div>
          ))}
        </section>
        <section className='space-y-8'>
          <h2 className='text-lg'>
            <strong>Academics</strong>
          </h2>

          <p>{academics?.education}</p>
        </section>
      </div>
    </div>
  )
}

export default TemplateThree
