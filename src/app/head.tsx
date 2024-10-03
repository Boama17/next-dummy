import Cards from './cards';
import overview from './img/overview.png';
import mickey from './img/mickey.jpg';
import donald from './img/donald.jpg';
import goofy from './img/goofy.jpg';
import pluto from './img/pluto.jpg';
import daisy from './img/daisy.jpg';



export default function Main() {
  return  <div className="flex w-max">
      <div className="overview">
    <h1 className="text-3xl font-bold ml-14 mt-4">Overview</h1>
  </div>
        <div className="line flex">
            <div className="chart w-12 h-12">
            <img src={overview.src} alt="acme" />
            </div>
            <div className="txt mt-2 flex">
            <span className='font-bold text-lg'>acme-project 
                 
            </span>
            <span className='text-gray-400 ml-2'>/</span>
            <div className="stack flex ml-2">
              <img src={mickey.src} alt="" className='w-7 h-7 border-gray-50 border-2 rounded-full -mt-1 -mr-3'/>
              <img src={daisy.src} alt="" className='w-7 h-7 border-gray-50 border-2 rounded-full -mt-1 -mr-3'/>
              <img src={donald.src} alt="" className='w-7 h-7 border-gray-50 border-2 rounded-full -mt-1 -mr-3'/>
              <img src={pluto.src} alt="" className='w-7 h-7 border-gray-50 border-2 rounded-full -mt-1 -mr-3'/>
              <img src={goofy.src} alt="" className='w-7 h-7 border-gray-50 border-2 rounded-full -mt-1 -mr-3'/>
            </div>
            <span className='text-gray-500 ml-4 text-xs pt-0.5'>Members: <span className='text-black'>8 / Add member +</span></span>
            </div>
            <Cards />
        </div>
    </div>
    

}