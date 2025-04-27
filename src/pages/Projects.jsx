import { Button, Divider, Form, Input } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { useCVStore } from '../store/useCVStore'
import { useEffect } from 'react'
import projectsLottie from '../assets/lottie/projects.lottie'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const Projects = () => {
  const [form] = Form.useForm()
  const values = Form.useWatch([], form)
  const { projects, setProjects } = useCVStore()

  useEffect(() => setProjects(values?.projects), [values, setProjects])

  const onFinish = values => {
    setProjects(values.projects || [])
  }

  return (
    <div className='w-full flex justify-between items-center'>
      <div className='flex-1 hidden md:block'>
        <DotLottieReact
          width={100}
          height={100}
          src={projectsLottie}
          loop
          autoplay
        />
      </div>
      <Divider className='md:min-h-96' type='vertical' />
      <div className='flex-1 pl-0 md:pl-6'>
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
    </div>
  )
}

export default Projects
