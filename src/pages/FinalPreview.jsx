// pages/FinalPreview.jsx
import { useCVStore } from '../store/useCVStore'
import { Button } from 'antd'
import { useRef } from 'react'
import TemplateOne from '../components/templates/TemplateOne'
import TemplateTwo from '../components/templates/TemplateTwo'
import TemplateThree from '../components/templates/TemplateThree'
import TemplateSelector from '../components/TemplateSelector'
import ThemeCustomizer from '../components/ThemeCustomizer'
import Container from '../components/ui/Container'
import { useNavigate } from 'react-router'
import { downloadDOC, downloadPDF } from '../utils'
import Navbar from '../components/Navbar'
const templates = {
  template1: TemplateOne,
  template2: TemplateTwo,
  template3: TemplateThree,
}

const FinalPreview = () => {
  const navigate = useNavigate()
  const printRef = useRef(null)

  const { personalDetails, experience, projects, academics, template, reset } =
    useCVStore()
  const cvData = { personalDetails, experience, projects, academics }
  const SelectedTemplate = templates[template]
  return (
    <Container>
      <div className='py-6'>
        <Navbar />
      </div>
      <div className='flex justify-between gap-8 py-6 px-2'>
        <div className='space-y-6 flex-1'>
          <h2 className='text-xl font-semibold'>CV Preview</h2>
          <div className='bg-white p-6 shadow-lg rounded'>
            <SelectedTemplate printRef={printRef} data={cvData} />
          </div>
        </div>
        <div className=' flex-1 space-y-6'>
          <div className='flex justify-between gap-6 items-start'>
            <div className='space-y-6 flex-2/3 '>
              <h2 className='text-xl font-semibold'>Choose Your CV Template</h2>
              <TemplateSelector />
            </div>
            <div className='space-y-6 flex-1/3'>
              <h2 className='text-xl font-semibold'>Customize Theme</h2>
              <ThemeCustomizer />
            </div>
          </div>
          <div className='space-y-6'>
            <h2 className='text-xl font-semibold'>Export Options:</h2>
            <div className='flex  gap-4'>
              <Button type='primary' onClick={() => downloadPDF(printRef)}>
                Download PDF
              </Button>
              <Button onClick={() => downloadDOC(cvData)}>Download DOC</Button>
            </div>
          </div>
          <div className='space-y-6'>
            <div className='flex  gap-4'>
              <Button onClick={() => navigate(-1)} color='green'>
                Back To Edit
              </Button>
              <Button onClick={() => navigate('/')}>Save & Exit</Button>
              <Button
                onClick={() => {
                  reset()
                  navigate('/')
                }}
                danger
              >
                Delete & Exit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default FinalPreview
