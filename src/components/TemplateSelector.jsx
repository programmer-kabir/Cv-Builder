import { useCVStore } from '../store/useCVStore'
import { cn } from '../utils'

const templates = [
  { id: 'template1', label: 'Modern', img: '/templates/template1.png' },
  { id: 'template4', label: 'Modern (Sleek)', img: '/templates/template4.png' },
  { id: 'template2', label: 'Mono', img: '/templates/template2.png' },
  { id: 'template3', label: 'Sidebar', img: '/templates/template3.png' },
]

const TemplateSelector = () => {
  const { template, setTemplate } = useCVStore()

  return (
    <div className='grid grid-cols-3 gap-4'>
      {templates.map(t => (
        <div
          key={t.id}
          onClick={() => setTemplate(t.id)}
          className={cn(
            'cursor-pointer border rounded-lg overflow-hidden hover:shadow-md transition-all',
            template === t.id
              ? 'border-blue-500 ring-2 ring-blue-400'
              : 'border-gray-300'
          )}
        >
          <img src={t.img} alt={t.label} className='w-full h-40 object-cover' />
          <div className='p-2 text-center text-sm font-medium'>{t.label}</div>
        </div>
      ))}
    </div>
  )
}
export default TemplateSelector
