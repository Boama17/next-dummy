import chart from './img/chart.png';
import branch from './img/branch.png';
import connect from './img/connect.png';

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
</div>
    </div>
}