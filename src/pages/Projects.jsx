// pages/Projects.jsx
import { Button, Form, Input, Space } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { useCVStore } from '../store/useCVStore'
import { useEffect } from 'react'

export default function Projects() {
  const [form] = Form.useForm()
  const values = Form.useWatch([], form)
  const { projects, setProjects } = useCVStore()

  useEffect(() => setProjects(values?.projects), [values, setProjects])

  const onFinish = values => {
    setProjects(values.projects || [])
  }

  return (
    <div className='p-6 w-full'>
      <h2 className='text-xl font-semibold mb-4'>Projects</h2>
      <Form
        form={form}
        onFinish={onFinish}
        initialValues={{
          projects:
            Array.isArray(projects) && projects.length > 0 ? projects : [{}],
        }}
        layout='vertical'
      >
        <Form.List name='projects'>
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <div
                  key={key}
                  className='flex mb-4 w-full gap-2'
                  align='baseline'
                >
                  <Form.Item
                    {...restField}
                    name={[name, 'title']}
                    label='Project Title'
                    className='flex-1'
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'description']}
                    label='Description'
                    className='flex-1'
                  >
                    <Input.TextArea rows={1} />
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
                  Add Project
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
    </div>
  )
}
