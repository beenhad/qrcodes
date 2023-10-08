"use client"
import { Disclosure } from '@headlessui/react'
import { useState } from 'react'
import { Switch } from '@headlessui/react'


export default function BoostEcc() {
  const [enabled, setEnabled] = useState(false)
  return (
    <div className="w-full h-full pt-4">
      <div className="w-full bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
        <div>
              <div className="flex w-full justify-between items-center px-3 py-2 text-[#111928] text-lg font-semibold">
                <div className="space-y-2 text-left">
                  <h1 className='text-[#111928] text-lg font-semibold'>Boost ECC</h1>
                  <p className='text-[#6B7280] text-xs font-normal'>Enhance QR code error correction for greater reliability</p>
                </div>
                <div className="">
                  <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${enabled ? 'bg-[#EB6D5B]' : 'bg-[#EB6D5B]'}
          relative inline-flex h-[20px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      className={`${enabled ? 'translate-x-[19px]' : 'translate-x-0'}
            pointer-events-none inline-block h-[16.5px] w-[16.5px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                  </Switch>
                </div>
              </div>
        </div>
      </div>
    </div>
  )
}
