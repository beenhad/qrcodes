"use client"
import { setMask } from '@/redux/features/handleState'
import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'

export default function MaskPattern() {
  const dispatch = useDispatch()
  return (
    <div className="w-full h-full pt-4">
      <div className="w-full bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between items-center px-3 py-2 text-[#111928] text-lg font-semibold">
                <div className="space-y-2 text-left">
                  <h1 className='text-[#111928] text-lg font-semibold'>Mask Pattern</h1>
                  <p className='text-[#6B7280] text-xs font-normal'>Apply a mask pattern for QR code customization</p>
                </div>
                <Image src={"/arrow.svg"} alt='minus image' width={18} height={18} className={`${open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}></Image>
              </Disclosure.Button>
              <Disclosure.Panel className=" px-3 pb-3 w-full">
                <div className="px-3 lg:px-[16px] py-2 lg:py-[12px] border border-[#D1D5DB] bg-transparent rounded-lg mt-3 w-full">
                  <input type="number" onChange={(e) => dispatch(setMask(parseFloat(e.target.value)))} defaultValue="-1" min="-1" max="7" step="1" id="mask-input" name="light" className='text-[#6B7280] outline-none focus:ring-1 focus:ring-[#EB6D5B] rounded focus:outline-none w-full text-base h-7 border-none bg-transparent'></input>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
