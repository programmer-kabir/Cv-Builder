// pages/Academics.jsx
import { Form, Input } from 'antd'
import { useCVStore } from '../store/useCVStore'
import { useEffect } from 'react'

export default function Academics() {
  const [form] = Form.useForm()
  const values = Form.useWatch([], form)
  const { academics, setAcademics } = useCVStore()

  useEffect(() => setAcademics(values), [values, setAcademics])

  return (
    <div className='p-6 w-full'>
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
  )
}
