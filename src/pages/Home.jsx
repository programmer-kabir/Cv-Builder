import { Button, Space, DatePicker, version } from 'antd'
import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div style={{ padding: '0 24px' }}>
      <h1 className='text-xl'>Welcome To CV Builder</h1>
      <h1>antd version: {version}</h1>
      <Space>
        <DatePicker />
        <Link to='/dashboard'>
          <Button type='primary'>Start Building Your CV</Button>
        </Link>
      </Space>
    </div>
  )
}

export default Home
