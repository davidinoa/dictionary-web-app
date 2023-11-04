import { Fragment, useState } from 'react'
import IconArrowDown from './assets/images/icon-arrow-down.svg?react'
import { Listbox } from '@headlessui/react'

const fontOptions = [
  { id: 'sansSerif', name: 'Sans Serif', className: 'font-sans' },
  { id: 'serif', name: 'Serif', className: 'font-serif' },
  { id: 'mono', name: 'Mono', className: 'font-mono' },
]

export default function FontSelect() {
  const [selectedFont, setSelectedFont] = useState(fontOptions[0])

  return (
    <div className="relative gap-4 text-sm font-bold">
      <Listbox value={selectedFont} onChange={setSelectedFont}>
        <Listbox.Button className="flex items-center gap-3">
          {selectedFont.name}
          <IconArrowDown />
        </Listbox.Button>
        <Listbox.Options className="absolute right-0 top-8 z-10 flex min-w-[180px] flex-col gap-4 rounded-3xl bg-white p-6 shadow-xl">
          {fontOptions.map((font) => (
            <Listbox.Option key={font.id} value={font} as={Fragment}>
              {({ selected }) => (
                <li
                  className={`${font.className} ${
                    selected || selectedFont.name === font.name
                      ? 'text-lavender'
                      : ''
                  }`}
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
