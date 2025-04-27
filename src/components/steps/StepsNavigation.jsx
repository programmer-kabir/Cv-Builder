import { Button } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router'

const StepsNavigation = ({ current, setCurrent, steps }) => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-between'>
      <div>
        {current > 0 && (
          <Button
            style={{ margin: '0 8px' }}
            onClick={() => {
              setCurrent(current - 1)
              navigate(steps[current - 1].path)
            }}
          >
            Previous
          </Button>
        )}
      </div>
      <div>
        {current < steps.length - 1 && (
          <Button
            type='primary'
            onClick={() => {
              setCurrent(current + 1)
              navigate(steps[current + 1].path)
            }}
          >
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
  )
}

export default StepsNavigation
