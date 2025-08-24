import { Card } from 'antd'

const CVcard = ({ loading, title, description, children }) => {
  return (
    <Card loading={loading}  className='w-full' >
      <Card.Meta
        title={title}
        className='text-center '
        description={
          <div>
            <p>{description}</p>
          </div>
        }
      />
      {children}
    </Card>
  )
}

export default CVcard
