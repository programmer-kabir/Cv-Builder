import { Divider, Form, Input } from 'antd'
import { useCVStore } from '../store/useCVStore'
import { useEffect } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import educationLottie from '../assets/lottie/education.lottie'
const Academics = () => {
  const [form] = Form.useForm()
  const values = Form.useWatch([], form)
  const { academics, setAcademics } = useCVStore()

  useEffect(() => setAcademics(values), [values, setAcademics])

  return (
    <div className='w-full flex justify-between items-center'>
      <div className='flex-1 pr-0 md:pr-6'>
        <Form form={form} initialValues={academics} layout='vertical'>
          <Form.Item
            name='education'
            label='Education Details (degrees, institutions, GPA)'
          >
            <Input.TextArea rows={3} />
          </Form.Item>
          <Form.Item
            name='extracurricular-activity'
            label='Extracurricular Activities'
          >
            <Input.TextArea rows={3} />
          </Form.Item>
        </Form>
      </div>
      <Divider className='md:min-h-96' type='vertical' />
      <div className='flex-1 hidden md:block'>
        <DotLottieReact
          width={100}
          height={100}
          src={educationLottie}
          loop
          autoplay
        />
      </div>
    </div>
  )
}
export default Academics
