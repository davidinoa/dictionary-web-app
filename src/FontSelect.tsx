import { Fragment } from 'react'
import { Listbox } from '@headlessui/react'
import IconArrowDown from './assets/images/icon-arrow-down.svg?react'
import useFontStore from './stores/useFontStore'

const fontOptions = [
  { id: 'sansSerif', name: 'Sans Serif', className: 'font-sans' },
  { id: 'serif', name: 'Serif', className: 'font-serif' },
  { id: 'mono', name: 'Mono', className: 'font-mono' },
]

export default function FontSelect() {
  const { font: selectedFont, setFont } = useFontStore()

  return (
    <div className="relative gap-4 text-sm font-bold">
      <Listbox value={selectedFont} onChange={setFont}>
        <Listbox.Button className="flex items-center gap-3">
          {selectedFont.name}
          <IconArrowDown />
        </Listbox.Button>
        <Listbox.Options className="absolute right-0 top-8 z-10 flex min-w-[180px] flex-col rounded-3xl bg-white py-4 shadow-xl">
          {fontOptions.map((font) => (
            <Listbox.Option key={font.id} value={font} as={Fragment}>
              {({ selected, active }) => (
                <li
                  className={`px-6 py-2 ${font.className} ${
                    selected || selectedFont.name === font.name
                      ? 'text-lavender'
                      : ''
                  } ${active ? 'bg-gray-platinum' : ''}`}
                >
                  {font.name}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}
