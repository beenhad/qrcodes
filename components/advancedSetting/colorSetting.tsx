"use client"
import { setBgColor, setTextColor } from '@/redux/features/handleState';
import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'

export default function ColorSetting() {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-full pt-4">
      <div className="w-full bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between items-center px-3 py-2 text-[#111928] text-lg font-semibold">
              <div className="space-y-2 text-left">
                                    <h1 className='text-[#111928] text-lg font-semibold'>Colors</h1>
                                    <p className='text-[#6B7280] text-xs font-normal'>Need to specify two colors for dark and light region</p>
                                </div>
                <Image src={"/arrow.svg"} alt='minus image' width={18} height={18} className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}></Image>
              </Disclosure.Button>
              <Disclosure.Panel className=" px-3 pb-3 flex gap-3 items-center justify-between">
                <div className="">
                    <h1 className='text-[#000] font-medium'>Light</h1>
                    <div className="px-3 lg:px-[16px] py-2 lg:py-[12px] border border-[#D1D5DB] bg-transparent rounded-lg mt-4 flex items-center justify-center gap-[5px]">
                        <div className="w-[20px] h-[20px] rounded-full ">
                          <Image src={"/pen.svg"} alt='pen' width={14} height={17}/>
                        </div>
                        <input type='text' onChange={(e)=> dispatch(setBgColor(e.target.value))}  defaultValue={"#FFFFFF"} name="light" id="light-color-input"  className='text-[#6B7280] outline-none focus:outline-none w-full rounded focus:ring-1 focus:ring-[#EB6D5B] text-base h-7 border-none bg-transparent px-1'></input>
                    </div>
                </div>
                <div className="">
                    <h1 className='text-[#000] font-medium'>Dark</h1>
                    <div className="px-3 lg:px-[16px] py-2 lg:py-[12px] border border-[#D1D5DB] bg-transparent rounded-lg mt-4 flex items-center justify-center gap-[5px]">
                    <div className="w-[20px] h-[20px] rounded-full ">
                          <Image src={"/pen.svg"} alt='pen' width={14} height={17}/>
                        </div>
                        <input type='text' onChange={(e)=> dispatch(setTextColor(e.target.value))} id="dark-color-input" defaultValue={"#000000"} name="dark" className='text-[#6B7280] outline-none focus:outline-none w-full rounded focus:ring-1 focus:ring-[#EB6D5B] text-base h-7 border-none bg-transparent px-1'></input>
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
