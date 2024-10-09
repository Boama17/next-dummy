import "./globals.css";
import adolf from './img/adolf.png';

export default function Corner (){
 return <div className="corner flex pl-64">
    <div className="sect border-8 rounded-full border-gray-200 bg-gray-200 mt-4 mb-5 mr-4">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
    </div>
    <div className="border-8 rounded-full border-gray-200 bg-gray-200 mt-4 mb-5">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
    </svg>
    </div>
    
    <img src={adolf.src} alt="" className="mr-2 mt-2 ml-8 rounded-full w-12 h-12"/>
    

    <div className="ml-2 mt-3.5">
    <h3 className="font-bold text-sm">Adolf<span className="pl-1">Hitler</span></h3>
    </div>
    <div className="flex">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 mt-3 ml-2">
      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
    <p className="nein text-xs text-gray-500 font-light tracking-widest">TG1226789</p>
    </div>
    
      </div>
}