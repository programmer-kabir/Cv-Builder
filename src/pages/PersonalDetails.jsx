// pages/PersonalDetails.jsx
import { Form, Input, Button } from 'antd'
import { useCVStore } from '../store/useCVStore'
import { useEffect } from 'react'

export default function PersonalDetails() {
  const [form] = Form.useForm()
  const values = Form.useWatch([], form)
  const { personalDetails, setPersonalDetails } = useCVStore()

  useEffect(() => setPersonalDetails(values), [values, setPersonalDetails])

  return (
    <div className='p-6 w-full'>
      <Form form={form} layout='vertical' initialValues={personalDetails}>
        <Form.Item name='name' label='Full Name' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='email' label='Email' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='phone' label='Phone Number'>
          <Input />
        </Form.Item>
      </Form>
    </div>
  )
}
