"use client"
import { setCharacterCount, setInputText, setLevel, setOutputFormat, setScale } from "@/redux/features/handleState";
import AdvancedSetting from "./advancedSetting/advancedSetting";
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";

export default function Form() {
    // const [outputFormat, setOutputFormat] = useState<string>('bitmap');
    const { inputText, level, outputFormat }: any = useSelector((state: RootState) => state.handleState)
    const dispatch = useDispatch();
    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value;
        dispatch(setInputText(value));
        dispatch(setCharacterCount(value.length));
    }
    useEffect(() => {
        if (inputText === '') {
            const inputField = document.getElementById('inputField') as HTMLInputElement;
            inputField.innerHTML = '';
        }
    }, [inputText])
    return (
        <form className="lg:col-start-1 lg:col-end-3 order-2 md:order-none" >
            <div className="space-y-4">
                <div className="col-span-full">
                    <label htmlFor="inputField" className="block text-lg font-semibold leading-6 text-gray-900">
                        Text String
                    </label>
                    <div className="mt-4">
                        <textarea
                            id="inputField"
                            name="about"
                            rows={3}
                            onChange={handleOnChange}
                            className="block w-full rounded-md border-0 py-[13px] px-[20px] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#EB6D5B] text-sm sm:leading-6 min-h-[146px]"
                            defaultValue={""}
                            placeholder="Enter your text to be put into the QR Code"
                        />
                    </div>
                </div>
                <div className=" pb-12">

                    <div className="mt-6 space-y-6">

                        <fieldset>
                            <legend className="text-lg font-semibold leading-6 text-[#111928]">Error Correction</legend>
                            <p className="text-xs text-[#6B7280] font-normal mt-2">Error correction aids data recovery from damage</p>
                            <div className="flex flex-wrap lg:items-center justify-between lg:justify-start lg:gap-x-5 mt-3 cursor-pointer">
                                <div className="flex items-center gap-x-2 cursor-pointer">
                                    <input
                                        id="errcorlvl-low"
                                        name="errcorlvl"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-[#EB6D5B] outline-none focus:outline-none focus:ring-2 focus:ring-transparent cursor-pointer"
                                        checked={level === 'L'}
                                        onClick={() => dispatch(setLevel('L'))}
                                    />
                                    <label htmlFor="errcorlvl-low" className="block text-sm font-medium leading-6 text-[#111928] cursor-pointer">Low
                                    </label>
                                </div>
                                <div className="flex items-center gap-x-2 cursor-pointer">
                                    <input
                                        id="errcorlvl-medium"
                                        name="errcorlvl"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-[#EB6D5B] outline-none focus:outline-none focus:ring-2 focus:ring-transparent cursor-pointer"
                                        onClick={() => dispatch(setLevel('M'))}
                                        checked={level === 'M'}
                                    />
                                    <label htmlFor="errcorlvl-medium" className="cursor-pointer block text-sm font-medium leading-6 text-gray-900">Medium
                                    </label>
                                </div>
                                <div className="flex items-center gap-x-2 cursor-pointer">
                                    <input
                                        id="errcorlvl-quartile"
                                        name="errcorlvl"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-[#EB6D5B] outline-none focus:outline-none focus:ring-2 focus:ring-transparent cursor-pointer"
                                        checked={level === 'Q'}
                                        onClick={() => dispatch(setLevel('Q'))}
                                    />
                                    <label htmlFor="errcorlvl-quartile" className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer">Quartile
                                    </label>
                                </div>
                                <div className="flex items-center gap-x-2 cursor-pointer">
                                    <input
                                        id="errcorlvl-high"
                                        name="errcorlvl"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-[#EB6D5B] outline-none focus:outline-none focus:ring-2 focus:ring-transparent cursor-pointer"
                                        checked={level === 'H'}
                                        onClick={() => dispatch(setLevel('H'))}
                                    />
                                    <label htmlFor="errcorlvl-high" className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer">High
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend className="text-lg font-semibold leading-6 text-[#111928]">Output format</legend>
                            <p className="text-xs text-[#6B7280] font-normal mt-2">Select QR code output format</p>
                            <div className="flex gap-3 lg:gap-5 mt-3 items-center cursor-pointer">
                                <div className="flex items-center gap-x-2">
                                    <input
                                        id="output-format-bitmap"
                                        name="output-format"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-[#EB6D5B] outline-none focus:outline-none focus:ring-2 focus:ring-transparent cursor-pointer"
                                        checked={outputFormat === 'bitmap'}
                                        onChange={() => { dispatch(setOutputFormat('bitmap')), dispatch(setScale(4)) }}
                                    />
                                    <label htmlFor="output-format-bitmap" className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer">Bitmap
                                    </label>
                                </div>
                                <div className="flex items-center gap-x-2">
                                    <input
                                        id="output-format-vector"
                                        name="output-format"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-[#EB6D5B] outline-none focus:outline-none focus:ring-2 focus:ring-transparent cursor-pointer"
                                        checked={outputFormat === 'vector'}
                                        onChange={() => { dispatch(setScale(6)), dispatch(setOutputFormat('vector')) }}
                                    />
                                    <label htmlFor="output-format-vector" className="block text-sm font-medium leading-6 text-gray-900 cursor-pointer">Vector
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                        <AdvancedSetting></AdvancedSetting>
                    </div>
                </div>
            </div>
        </form>
    )
}
