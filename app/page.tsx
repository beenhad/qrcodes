"use client"
import Form from '@/components/form'
import { setInputText } from '@/redux/features/handleState';
import { RootState } from '@/redux/store';
import downloadQRCodeFunc from '@/utls/download-qr-code';
import Image from 'next/image'
import React from 'react'
import QRCode from 'react-qr-code';
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {
  const { inputText, bgColor, textColor, level, scale, outputFormat }: any = useSelector((state: RootState) => state.handleState)
  const dispatch = useDispatch();
  const qrRef = React.useRef(null);

  const downloadQRCode = async (evt: React.FormEvent) => {
    evt.preventDefault();
    // @ts-ignore
    let svgElement = qrRef.current.querySelector("svg");
    // if vector format is selected, download the svg as a svg file
    if (outputFormat === 'vector') {
      const svgXml = new XMLSerializer().serializeToString(svgElement);
      const blob = new Blob([svgXml], { type: 'image/svg+xml' });
      const blobURL = URL.createObjectURL(blob);
      const downloadLink = document.createElement('a');
      downloadLink.href = blobURL;
      downloadLink.download = 'qr-code.svg';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(blobURL);
      dispatch(setInputText(''))
      return;
    }
    downloadQRCodeFunc(svgElement)
    dispatch(setInputText(''))
  };

  const qrCode = (
    <QRCode
      id="qrCodeElToRender"
      size={scale * 50}
      value={inputText}
      bgColor={bgColor}
      fgColor={textColor}
      level={level}
    />
  );
  return (
    <main className='min-h-screen h-full w-full bg-gradient-body'>
      <div className="flex flex-col sm:flex-row justify-center items-center  w-full h-fit gap-1 md:gap-2.5 py-[20px] md:py-10 lg:py-[60px] max-w-[1536px] mx-auto px-2.5 sm:px-4 md:px-6 lg:px-7 xl:px-8">

        <div className="mt-1.5 ">
          <Image src={'/logo.png'} width={40} height={40} alt='' />
        </div>
        <h1 className='text-[24px] md:text-[48px] font-semibold sm:leading-[72px] text-center'><span className='text-primary'>QR code</span> generator Library</h1>
      </div>

      <div className="flex flex-col md:grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[40px] lg:gap-[60px] xl:gap-[80px]  max-w-[1536px] mx-auto px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 ">
        <Form />
        <div className='lg:col-start-3 lg:col-end-4 w-full order-1 md:order-none'>
          <h1 className='text-[#111928] text-lg font-semibold hidden md:inline-block'>Generated QR Code</h1>
          {/* qr code container */}
          <div className=" py-16 md:py-0 md:max-w-[460px] md:max-h-[457px] border h-full w-full mt-3 rounded-lg flex justify-center items-center" style={{
            border: "1px solid #D1D5DB",
            background: "linear-gradient(180deg, #FFF8D7 0%, rgba(255, 248, 215, 0.00) 100%)",
            boxShadow: "0px 4px 6px -4px rgba(235, 109, 91, 0.10), 0px 10px 15px -3px rgba(235, 109, 91, 0.15)"
          }}>
            <div className={` w-fit h-fit  border-[16px] border-[#E8E8E8]`}>
              <div className="w-full h-full" ref={qrRef}>
                {qrCode}
              </div>
            </div>
          </div>
          <form onSubmit={downloadQRCode} className="flex items-center md:justify-end mt-4 w-full">
            <button type='submit' className='w-full md:w-fit px-4 md:px-6 py-2 md:py-[10px] bg-[#EB6D5B] rounded-lg text-base md:text-lg text-white font-medium flex items-center justify-center gap-1.5 sm:gap-2.5' style={{ boxShadow: "0px 2px 4px -2px rgba(0, 0, 0, 0.10), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)" }}>Download <Image src={"/download.svg"} alt="download icon" width={24} height={24} className='w-4 h-4 md:w-6 md:h-6'></Image></button>
          </form>
        </div>
      </div>
    </main>
  )
}
