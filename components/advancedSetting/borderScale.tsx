"use client"
import { setBorderSize, setScale } from '@/redux/features/handleState';
import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'

export default function BorderScale() {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-full pt-2">
      <div className="w-full bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
        <Disclosure as="div">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between items-center px-3 py-2 text-[#111928] text-lg font-semibold">
                <div className="space-y-2 text-left">
                  <h1 className='text-[#111928] text-lg font-semibold'>Border & Scale</h1>
                  <p className='text-[#6B7280] text-xs font-normal'>Adjust border and scale settings for QR code customization</p>
                </div>
                <Image src={"/arrow.svg"} alt='minus image' width={18} height={18} className={`${open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}></Image>
              </Disclosure.Button>
              <Disclosure.Panel className=" px-3 pb-3 flex items-center justify-between mt-4 gap-3">
                <div className="">
                  <div className="flex items-center justify-between">
                    <h1 className='text-[#000] font-medium'>Border</h1>
                    <Image src={"/info.svg"} alt='info' width={24} height={24} />
                  </div>
                  <div className="px-3 lg:px-[16px] py-2 lg:py-[12px] border border-[#D1D5DB] bg-transparent rounded-lg mt-2.5 gap-1 flex justify-between items-center">
                    <input type='number' onChange={(e) => dispatch(setBorderSize(parseFloat(e.target.value)))} min="0" max="100" step="1" id="border-input" defaultValue={16} name="light" className='text-[#6B7280] outline-none focus:ring-1 focus:ring-[#EB6D5B] rounded focus:outline-none w-full text-base h-7 border-none bg-transparent px-1'></input>
                    <p className='text-[14px] text-[#6B7280]'>Modules</p>
                  </div>
                </div>
                <div className="">
                <div className="flex items-center justify-between">
                    <h1 className='text-[#000] font-medium'>Scale</h1>
                    <Image src={"/info.svg"} alt='info' width={24} height={24} />
                  </div>
                  <div className="px-3 lg:px-[16px] py-2 lg:py-[12px] border border-[#D1D5DB] bg-transparent rounded-lg mt-2.5 flex gap-1 justify-between items-center">
                    <input type='number' onChange={(e) => dispatch(setScale(parseFloat(e.target.value)))} min="1" max="8" step="1" id="scale-input" defaultValue={4} name="scale" className='text-[#6B7280] outline-none focus:outline-none w-full focus:ring-1 focus:ring-[#EB6D5B] rounded text-base h-7 border-none bg-transparent px-1'></input>
                    <p className='text-[14px] text-[#6B7280]'>PX/Modules</p>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
