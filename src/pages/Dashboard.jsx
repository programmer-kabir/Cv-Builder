import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import { Link, Outlet, useLocation } from 'react-router'
import DashboardSteps from '../components/DashboardSteps'
import Container from '../components/Container'
const steps = [
  { title: 'Personal Details', path: '/dashboard' },
  { title: 'Experience', path: '/dashboard/experience' },
  { title: 'Projects', path: '/dashboard/projects' },
  { title: 'Academics', path: '/dashboard/academics' },
  { title: 'Preview', path: '/dashboard/preview' },
]

const Dashboard = () => {
  const [current, setCurrent] = useState(0)
  const location = useLocation()
  useEffect(() => {
    setCurrent(steps.findIndex(s => s.path === location.pathname))
  }, [location.pathname])

  return (
    <Container>
      <DashboardSteps current={current} steps={steps} />
      <Outlet />

      <div className='flex justify-between'>
        <div>
          {current > 0 && (
            <Button
              style={{ margin: '0 8px' }}
              onClick={() => setCurrent(current - 1)}
            >
              Previous
            </Button>
          )}
        </div>
        <div>
          {current < steps.length - 1 && (
            <Button type='primary' onClick={() => setCurrent(current + 1)}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Link to='/preview'>
              <Button type='primary'>Preview</Button>
            </Link>
          )}
        </div>
      </div>
    </Container>
  )
}
export default Dashboard
