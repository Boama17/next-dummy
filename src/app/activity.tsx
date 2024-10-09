export default function Activity (){
    return  <div className="act flex flex-col">
<div className="rec flex font-bold text-xl">
      <span className="text-gray-400">Recent activity on</span><span className="text-black ml-2">main-db</span>
</div>

<div className="marks flex">

    <div className="drop flex mt-5 bg-gray-100 w-44 h-10 mr-4">
        <div className="cont flex text-xs mt-3 ml-4">
        <span className="text-gray-400">Read and write rows </span>
<svg 
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5 ml-2 -mt-0.5">
  <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>
        </div>
    </div>
    
    <div className="drop flex mt-5 bg-gray-100 w-32 h-10">
        <div className="cont flex text-xs mt-3 ml-4">
        <span className="text-gray-400">Past 8 hours</span>
<svg 
xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5 ml-2 -mt-0.5">
  <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>
        </div>
        
    </div>


<div className="views mt-5">
    <ul className="list-disc ml-48 text-sm">
       <li>
          <span className="text-gray-400 mr-2">Reads:</span> <span className="font-semibold">2.7k rows/s</span>
        </li>
        <li className="mt-1 green">
          <span className="text-gray-400 mr-2">Writes:</span> <span className="font-semibold  text-black">32.1 <span className="ml-0.5">rows/s</span></span>
        </li>
    </ul>
</div>
<div className="graph h-64">
<div className="top-bars flex">
    <div className="w-2 h-28 bg-gray-100 flex">
    </div>
    <div className="blak w-2 h-6 bg-black">
    </div>
    <div className="flex w-2 h-28 bg-gray-100 ml-9">
    </div>
    <div className="mt-12 w-2 h-16 bg-black">
    </div>
    <div className="w-2 h-28 bg-gray-100 flex ml-9">
    </div>
    <div className="th w-2 h-5 bg-black">
    </div>
    <div className="w-2 h-28 bg-gray-100 flex ml-9">
    </div>
    <div className="tr w-2 h-12 bg-black">
    </div>
    <div className="flex w-2 h-28 bg-gray-100 ml-9">
    </div>
    <div className="mt-8 w-2 h-22 bg-black">
    </div>
    <div className="flex w-2 h-28 bg-gray-100 ml-9">
    </div>
    <div className="mt-10 w-2 h-18 bg-black">
    </div>
    <div className="flex w-2 h-28 bg-gray-100 ml-9">
    </div>
    <div className="mt-12 w-2 h-16 bg-black">
    </div>
    <div className="flex w-2 h-28 bg-gray-100 ml-9">
    </div>
    <div className="mt-4 w-2 h-24 bg-black">
    </div>
    <div className="flex w-2 h-28 bg-gray-100 ml-9">
    </div>
    <div className="mt-14 w-2 h-14 bg-black">
    </div>
    <div className="flex w-2 h-28 bg-gray-100 ml-9">
    </div>
    <div className="mt-9 w-2 h-19 bg-black">
    </div>
    <div className="flex w-2 h-28 bg-gray-100 ml-9">
    </div>
    <div className="mt-5 w-2 h-23 bg-black">
    </div>
    <div className="flex w-2 h-28 bg-gray-100 ml-9">
    </div>
    <div className="mt-14 w-2 h-14 bg-black">
    </div>
    <div className="flex w-2 h-28 bg-gray-100 ml-9">
    </div>
    <div className="mt-20 w-2 h-8 bg-black">
    </div>
    <div className="flex w-2 h-28 bg-gray-100 ml-9">
    </div>
    <div className="mt-10 w-2 h-18 bg-black">
    </div>

</div>
      <div
       className="times mt-5">
        <span className="  text-gray-300    text-xs">8h</span>
        <span className="time text-gray-300 text-xs">7h</span>
        <span className="time text-gray-300 text-xs">6h</span>
        <span className="time text-gray-300 text-xs">5h</span>
        <span className="time text-gray-300 text-xs">4h</span>
        <span className="time text-gray-300 text-xs">3h</span>
        <span className="time text-gray-300 text-xs">2h</span>
        <span className="time text-gray-300 text-xs">1h</span>
      </div>
  <div className="bottom flex mt-4">
  <div className="w-2 h-28 bg-gray-100 flex">
    </div>
    <div className="w-2 h-6 bg-green-500">
    </div>
    <div className="flex w-2 h-28 bg-gray-100 ml-9">
    </div>
    <div className="w-2 h-16 bg-green-500">
    </div>
    <div className="w-2 h-28 bg-gray-100 flex ml-9">
    </div>
    <div className=" w-2 h-5 bg-green-500">
    </div>
    <div className="w-2 h-28 bg-gray-100 flex ml-9">
    </div>
    <div className=" w-2 h-12 bg-green-500">
    </div>
    <div className="flex w-2 h-28 bg-gray-100 ml-9">
    </div>
    <div className="w-2 h-20 bg-green-500">
    </div>
    <div className="flex w-2 h-28 bg-gray-100 ml-9">
    </div>
    <div className="w-2 h-16 bg-green-500">
    </div>
    <div className="flex w-2 h-28 bg-gray-100 ml-9">
    </div>
    <div className="w-2 h-16 bg-green-500">
    </div>
    <div className="flex w-2 h-28 bg-gray-100 ml-9">
    </div>
    <div className="w-2 h-24 bg-green-500">
    </div>
    <div className="flex w-2 h-28 bg-gray-100 ml-9">
    </div>
    <div className="w-2 h-14 bg-green-500">
    </div>
    <div className="flex w-2 h-28 bg-gray-100 ml-9">
    </div>
    <div className="w-2 h-20 bg-green-500">
    </div>
    <div className="flex w-2 h-28 bg-gray-100 ml-9">
    </div>
    <div className="half w-2 bg-green-500">
    </div>
    <div className="flex w-2 h-28 bg-gray-100 ml-9">
    </div>
    <div className="w-2 h-14 bg-green-500">
    </div>
    <div className="flex w-2 h-28 bg-gray-100 ml-9">
    </div>
    <div className="w-2 h-8 bg-green-500">
    </div>
    <div className="flex w-2 h-28 bg-gray-100 ml-9">
    </div>
    <div className="w-2 h-20 bg-green-500">
    </div>
  </div>
</div>
      </div>
            </div>
}