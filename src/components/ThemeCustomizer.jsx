// components/ThemeCustomizer.jsx
import { useCVStore } from '../store/useCVStore'
import { Input, Select } from 'antd'

const fonts = [
  { label: 'Sans Serif', value: 'sans-serif' },
  { label: 'Serif', value: 'serif' },
  { label: 'Monospace', value: 'monospace' },
  { label: 'Poppins', value: 'poppins' },
  { label: 'Lora', value: 'lora' },
]

export default function ThemeCustomizer() {
  const { colorTheme, font, setColorTheme, setFont } = useCVStore()

  return (
    <div className='space-y-4'>
      <div className='flex gap-4'>
        <div>
          <p className='font-medium mb-1'>Primary</p>
          <Input
            type='color'
            value={colorTheme.primary}
            onChange={e =>
              setColorTheme({ ...colorTheme, primary: e.target.value })
            }
          />
        </div>
        <div>
          <p className='font-medium mb-1'>Accent</p>
          <Input
            type='color'
            value={colorTheme.accent}
            onChange={e =>
              setColorTheme({ ...colorTheme, accent: e.target.value })
            }
          />
        </div>
      </div>

      <div>
        <p className='font-medium mb-1'>Font</p>
        <Select
          value={font}
          onChange={setFont}
          style={{ width: 200 }}
          options={fonts}
        />
      </div>
    </div>
  )
}
