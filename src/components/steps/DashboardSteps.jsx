import { Divider, Steps } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router'

const DashboardSteps = ({ current, steps }) => {
  const navigate = useNavigate()
  return (
    <>
      <Steps
        current={current}
        onChange={index => navigate(steps[index].path)}
        items={steps}
      />
      <Divider />
    </>
  )
}

export default DashboardSteps
