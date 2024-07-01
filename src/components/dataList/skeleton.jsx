import React from 'react'

export default function Skeleton() {
    return (
        <div className="border border-blue-300 shadow rounded-md p-4 max-w-screen-xl w-full mx-auto">
            <div className='animate-pulse grid gap-x-2 gap-y-4 grid-cols-12 my-4'>
              <div className="h-4 bg-slate-500 rounded col-span-1"></div>
              <div className="h-4 bg-slate-600 rounded col-span-2"></div>
              <div className="h-4 bg-slate-500 rounded col-span-2"></div>
              <div className="h-4 bg-slate-600 rounded col-span-2"></div>
              <div className="h-4 bg-slate-600 rounded col-span-4"></div>
              <div className="h-4 bg-slate-500 rounded col-span-1"></div>
            </div>     
            <div className='animate-pulse grid gap-x-2 gap-y-4 grid-cols-12 my-4'>
              <div className="h-4 bg-slate-500 rounded col-span-1"></div>
              <div className="h-4 bg-slate-600 rounded col-span-2"></div>
              <div className="h-4 bg-slate-500 rounded col-span-2"></div>
              <div className="h-4 bg-slate-600 rounded col-span-2"></div>
              <div className="h-4 bg-slate-600 rounded col-span-4"></div>
              <div className="h-4 bg-slate-500 rounded col-span-1"></div>
            </div>     
            <div className='animate-pulse grid gap-x-2 gap-y-4 grid-cols-12 my-4'>
              <div className="h-4 bg-slate-500 rounded col-span-1"></div>
              <div className="h-4 bg-slate-600 rounded col-span-2"></div>
              <div className="h-4 bg-slate-500 rounded col-span-2"></div>
              <div className="h-4 bg-slate-600 rounded col-span-2"></div>
              <div className="h-4 bg-slate-600 rounded col-span-4"></div>
              <div className="h-4 bg-slate-500 rounded col-span-1"></div>
            </div>     
            <div className='animate-pulse grid gap-x-2 gap-y-4 grid-cols-12 my-4'>
              <div className="h-4 bg-slate-500 rounded col-span-1"></div>
              <div className="h-4 bg-slate-600 rounded col-span-2"></div>
              <div className="h-4 bg-slate-500 rounded col-span-2"></div>
              <div className="h-4 bg-slate-600 rounded col-span-2"></div>
              <div className="h-4 bg-slate-600 rounded col-span-4"></div>
              <div className="h-4 bg-slate-500 rounded col-span-1"></div>
            </div>     
        </div>
    )
}
