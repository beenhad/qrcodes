"use client"
import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setVersion } from '@/redux/features/handleState';

export default function VersionRange() {
    const [version, setLocalVersion] = useState("40");
    const dispatch = useDispatch()
    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLocalVersion(value);
        dispatch(setVersion(value));
    }
    return (
        <div className="w-full h-full pt-4">
            <div className="w-full bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between items-center px-3 py-2 text-[#111928] text-lg font-semibold">
                                <div className="space-y-2 text-left">
                                    <h1 className='text-[#111928] text-lg font-semibold'>Version Range</h1>
                                    <p className='text-[#6B7280] text-xs font-normal'>Select the QR code version within a specified range</p>
                                </div>
                                <Image src={"/arrow.svg"} alt='minus image' width={18} height={18} className={`${open ? 'rotate-180 transform' : ''
                                    } h-5 w-5 text-purple-500`}></Image>
                            </Disclosure.Button>
                            <Disclosure.Panel className=" px-3 pb-3 w-full h-full">
                                <div className="w-full ">
                                    <div className="">
                                    <input
                                        type="range"
                                        defaultValue="1"  min="1" max="100" step="1" id="version-min-input"
                                        name="rangeInput"
                                        onChange={handleChanges}
                                        className="w-full h-2 appearance accent-[#EB6D5B] rounded-full border-none focus:outline-none "
                                    />
                                        <div className="flex justify-between mt-2">
                                            <span className="text-gray-600">Min: 0</span>
                                            <span className="text-gray-600">Max: {version}</span>
                                        </div>
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
