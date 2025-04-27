import { Form, Input, Divider } from 'antd'
import { useCVStore } from '../store/useCVStore'
import { useEffect } from 'react'
import PersonalDetailsLottie from '../assets/lottie/personalDetails.lottie'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
const PersonalDetails = () => {
  const [form] = Form.useForm()
  const values = Form.useWatch([], form)
  const { personalDetails, setPersonalDetails } = useCVStore()

  useEffect(() => setPersonalDetails(values), [values, setPersonalDetails])

  return (
    <div className='w-full flex justify-between items-center'>
      <div className='flex-1 hidden md:block'>
        <DotLottieReact
          width={120}
          height={120}
          src={PersonalDetailsLottie}
          loop
          autoplay
        />
      </div>
      <Divider className='md:min-h-96' type='vertical' />
      <div className='flex-1 pl-0 md:pl-6'>
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
          <Form.Item
            name='overview'
            label='Overview'
            rules={[{ required: true }]}
          >
            <Input.TextArea rows={2} />
          </Form.Item>
          <Form.Item name='skills' label='Skills' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default PersonalDetails
