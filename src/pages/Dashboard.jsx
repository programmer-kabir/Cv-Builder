import React, { useEffect, useState } from 'react'
import { useCVStore } from '../store/useCVStore'
import { useNavigate } from 'react-router'
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons'
import { message } from 'antd'
import CVcard from '../components/ui/CVcard'
const Dashboard = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  const { reset } = useCVStore()
  useEffect(() => {
    reset()
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [reset])
  const updateWarning = () => {
    messageApi.open({
      type: 'warning',
      content: 'Feature Coming Soon!',
    })
  }
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mt-6 gap-5 '>
        <CVcard
          title={'Create New CV'}
          description='Get started quickly and build your professional CV in just 4 simple steps!'
          loading={loading}
        >
          <div className='text-center'>
            <button
              onClick={() => navigate('personal-details')}
              className='rounded-full px-5 py-4 bg-gray-200 hover:bg-gray-300  cursor-pointer'
            >
              <PlusOutlined />
            </button>
          </div>
        </CVcard>
        <CVcard
          loading={loading}
          title={'Manage Your CV'}
          description='View your existing CVs. Editing and deleting features are coming soon!'
        >
          <div className='flex justify-around'>
            <button
              onClick={updateWarning}
              className='rounded-full px-5 py-4 bg-gray-200 hover:bg-gray-300  cursor-pointer'
            >
              <EditOutlined />
            </button>
            <button
              onClick={updateWarning}
              className='rounded-full px-5 py-4 bg-gray-200 hover:bg-gray-300  cursor-pointer'
            >
              <DeleteOutlined />
            </button>
          </div>
        </CVcard>
        <CVcard loading={true} />
        <CVcard loading={true} />
        <CVcard loading={true} />
        <CVcard loading={true} />
        <CVcard loading={true} />
        <CVcard loading={true} />
      </div>
      {contextHolder}
    </div>
  )
}

export default Dashboard
