// pages/Experience.jsx
import { Button, Form, Input } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { useCVStore } from '../store/useCVStore'
import { useEffect } from 'react'

export default function Experience() {
  const [form] = Form.useForm()
  const values = Form.useWatch([], form)

  const { experience, setExperience } = useCVStore()
  useEffect(() => setExperience(values?.experiences), [values, setExperience])

  return (
    <div className='p-6 w-full'>
      <Form
        form={form}
        initialValues={{
          experiences:
            Array.isArray(experience) && experience.length > 0
              ? experience
              : [{}],
        }}
        layout='vertical'
      >
        <Form.List name='experiences'>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <div key={key} className='w-full flex gap-4' align='baseline'>
                  <Form.Item
                    {...restField}
                    name={[name, 'position']}
                    label='Position'
                    className='flex-1'
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'company']}
                    label='Company'
                    className='flex-1'
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'duration']}
                    label='Duration'
                    className='flex-1'
                  >
                    <Input />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </div>
              ))}
              <Form.Item>
                <Button
                  type='dashed'
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                >
                  Add Experience
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </div>
  )
}
