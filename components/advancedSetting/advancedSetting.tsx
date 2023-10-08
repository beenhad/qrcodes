"use client"
import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import ColorSetting from './colorSetting'
import BorderScale from './borderScale'
import BoostEcc from './boostEcc'
import Statistics from './statistics'
import VersionRange from './versionRange'
import MaskPattern from './maskPattern'

export default function AdvancedSetting() {
    return (
        <div className="w-full h-full">
            <div className="h-full w-full border p-2.5 rounded-lg bg-white">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between items-center">
                                <div className="space-y-1 text-left">
                                    <h1 className='text-[#111928] text-lg font-semibold'>Advanced Settings</h1>
                                    <p className='text-[#6B7280] text-xs'>Advanced settings allow for greater QR code customization</p>
                                </div>
                                {open ? <Image src={"/vector.svg"} alt='vector image' width={24} height={24}></Image> : <Image src={"/plus-circle.svg"} alt='plus image' width={30} height={30}></Image>}
                            </Disclosure.Button>
                            <Disclosure.Panel className="pt-4 text-sm text-gray-500">
                                <ColorSetting />
                                <BorderScale />
                                <BoostEcc />
                                <Statistics />
                                <VersionRange />
                                <MaskPattern />
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}
