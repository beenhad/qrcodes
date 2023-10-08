"use client"
import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import StatisticDataRow from './statisticDataRow'
import { useSelector } from 'react-redux'

export default function Statistics() {
  const {version, mask, characterCount, level} = useSelector((state: any) => state.handleState);
  return (
    <div className="w-full h-full pt-4">
      <div className="w-full bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between items-center px-3 py-2 text-[#111928] text-lg font-semibold">
              <div className="space-y-2 text-left">
                                    <h1 className='text-[#111928] text-lg font-semibold'>Statistics</h1>
                                    <p className='text-[#6B7280] text-xs font-normal'>QR code statistics for insights and optimization</p>
                                </div>
                <Image src={"/arrow.svg"} alt='minus image' width={18} height={18} className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}></Image>
              </Disclosure.Button>
              <Disclosure.Panel className=" px-3 pb-3 w-full" id="statistics-output">
                <StatisticDataRow title="QR code Version" value={version}></StatisticDataRow>
                <StatisticDataRow title="Mask Pattern" value={mask}></StatisticDataRow>
                <StatisticDataRow title="Character Count" value={characterCount}></StatisticDataRow>
                <StatisticDataRow title="Encoding Mode" value="none"></StatisticDataRow>
                <StatisticDataRow title="Error correction" value={"Level " + level}></StatisticDataRow>
                <StatisticDataRow title="Data bits" value="0"></StatisticDataRow>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
