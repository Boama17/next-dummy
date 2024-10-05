import chart from './img/chart.png';
import branch from './img/branch.png';
import connect from './img/connect.png';
import daisy from './img/daisy.jpg';
import mickey from './img/mickey.jpg';

export default function Cards (){
    return <div className="rect">
        <div className="cards mt-16 flex">
          <div className="card w-48 h-20 bg-green-100 flex mr-5">
            <div className="content flex ml-2">
            <img src={chart.src} alt="" className='w-25 h-18 pb-2 pt-2 ml-1' />
      <div className="capt flex mt-4">
        <h2 className='text-xl'>20</h2><p className='text-gray-400 mt-7 -ml-6 text-sm'>Tables</p>
      </div>
            </div>
          </div>
          <div className="card w-48 h-20 bg-purple-100 flex mr-5">
            <div className="content flex">
            <img src={branch.src} alt="" className='w-25 h-14 pt-4' />
      <div className="capt flex mt-4 ">
        <h2 className='text-xl'>13</h2><p className='text-gray-400 mt-7 -ml-5 text-sm'>Branches</p>
      </div>
            </div>
          </div>
          <div className="card w-48 h-20 bg-slate-200 flex">
            <div className="content flex">
            <img src={connect.src} alt="" className='w-25 h-18' />
      <div className="capt flex mt-4 ">
        <h2 className='text-xl'>10</h2><p className='text-gray-400 mt-7 -ml-6 text-sm'>Connections</p>
      </div>
            </div>
          </div>
          <div className="boxes flex">
            <button className='cect w-flex text-xs font-bold h-10 bg-gray-100 mr-3' >
                Connect
            </button>
            <button className='cect w-flex text-xs font-semibold h-10 bg-black text-white' >
                New branch
            </button>
        </div>
        </div>
        <div className="stats text-xl mt-11">
<div className="lead font-bold">
    Statistics
</div>
<div className="row mt-5">
    <div className="ratio flex mb-1">
    <span className="text-gray-400 text-xs">Row reads</span>
    <p className="percent text-gray-400 text-xs float-end"><span className="text-black font-bold">12k</span> of 100k</p>
    </div>
    <div className="bar w-56 h-4 bg-gray-200">
        <div className="fill w-4/5 h-4 bg-black"></div>
    </div>
    <div className="ratio flex mb-1">
    <span className="text-gray-400 text-xs">Row writes</span>
    <p className="percentt text-gray-400 text-xs float-end"><span className="text-black font-bold">44k</span> of 100k</p>
    </div>
    <div className="bar w-56 h-4 bg-gray-200">
        <div className="fill w-2/5 h-4 bg-black"></div>
    </div>
    <div className="ratio flex mb-1">
    <span className="text-gray-400 text-xs">Storage</span>
    <p className="percenttt text-gray-400 text-xs float-end"><span className="text-black font-bold">1 GB</span> of 5 GB</p>
    </div>
    <div className="bar w-56 h-4 bg-gray-200">
        <div className="fill w-1/5 h-4 bg-black"></div>
    </div>
</div>
<div className="recent mt-11">
<h2 className="head text-xl font-bold flex">
Recent Activity
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 ml-14 mt-1 hover:text-gray-500">
  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
</svg>
</h2>
<div className="people mt-7">
  <div className="person flex">
    <img src={daisy.src} alt="" className='flex w-8 h-8 rounded-full' />
    <div className="decr flex flex-col text-xs">
    <span className='font-semibold ml-3'>add-comments</span>
    <span className='font-light ml-3'>Daisy <span className='text-gray-400'>opened </span>#126   <span className="dot font-bold">   •   </span><span className='text-gray-400'>2 hours ago</span></span>
    </div>
  </div>

  <div className="person flex mt-7">
    <img src={mickey.src} alt="" className='flex w-8 h-8 rounded-full' />
    <div className="decr flex flex-col text-xs">
    <span className='font-semibold ml-3'>add-comments</span>
    <span className='font-light ml-3'>Mickey <span className='text-gray-400'>opened </span>#125   <span className="dot font-bold">   •   </span><span className='text-gray-400'>4 hours ago</span></span>
    </div>
  </div>
  
</div>

</div>
</div>
    </div>
}