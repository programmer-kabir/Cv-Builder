import React from 'react'
import { Link, useNavigate } from 'react-router'
import CustomButton from '../ui/CustomButton'
import {
  BackwardOutlined,
  EyeOutlined,
  ForwardOutlined,
} from '@ant-design/icons'

const StepsNavigation = ({ current, setCurrent, steps }) => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-between'>
      <div>
        {current > 0 && (
          <CustomButton
            style={{ margin: '0 8px' }}
            onClick={() => {
              setCurrent(current - 1)
              navigate(steps[current - 1].path)
            }}
            label='Previous'
            icon={<BackwardOutlined />}
          />
        )}
      </div>
      <div>
        {current < steps.length - 1 && (
          <CustomButton
            onClick={() => {
              setCurrent(current + 1)
              navigate(steps[current + 1].path)
            }}
            label='Next'
            styles='px-8'
            icon={<ForwardOutlined />}
          />
        )}
        {current === steps.length - 1 && (
          <Link to='/preview'>
            <CustomButton label='Preview' icon={<EyeOutlined />} />
          </Link>
        )}
      </div>
    </div>
  )
}

export default StepsNavigation
