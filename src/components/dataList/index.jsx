import React, { Suspense } from 'react'
import { FetchAndDisplayData } from '../../app/utils/supabase';
import DataSet from './dataSet';
import Skeleton from './skeleton';

export default async function DataList() {
    
    const data = await FetchAndDisplayData();
    
    return (
        <>
            <div>
                <table className="table-fixed border-separate border-spacing-2 border border-slate-500">
                    <thead className='text-left'>
                        <tr>
                            <th className='border border-slate-600 py-2 px-4 transition-all duration-300 bg-cyan-900 hover:bg-cyan-600'>id</th>
                            <th className='border border-slate-600 py-2 px-4 transition-all duration-300 bg-cyan-900 hover:bg-cyan-600'>Full Name</th>
                            <th className='border border-slate-600 py-2 px-4 transition-all duration-300 bg-cyan-900 hover:bg-cyan-600'>Email Address</th>
                            <th className='border border-slate-600 py-2 px-4 transition-all duration-300 bg-cyan-900 hover:bg-cyan-600'>Phone Number</th>
                            <th className='border border-slate-600 py-2 px-4 transition-all duration-300 bg-cyan-900 hover:bg-cyan-600'>Message</th>
                            <th className='border border-slate-600 py-2 px-4 transition-all duration-300 bg-cyan-900 hover:bg-cyan-600'>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((set) => (
                            <tr key={set.id}>
                                <td className='border border-slate-700 py-2 px-4'>
                                    {set.id}
                                </td>
                                <td className='border border-slate-700 py-2 px-4'>
                                    {set.name}
                                </td>
                                <td className='border border-slate-700 py-2 px-4'>
                                    {set.email}
                                </td>
                                <td className='border border-slate-700 py-2 px-4'>
                                    {set.phoneNumber}
                                </td>
                                <td className='border border-slate-700 py-2 px-4'>
                                    {set.message}
                                </td>
                                <td className='border border-slate-700 py-2 px-4 cursor-pointer text-center'>
                                    <svg xmlns="https://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='mx-auto'>
                                        <path fill="currentColor" d="M3 21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm2-2.92l9.06-9.06l.92.92L5.92 19H5zM18.37 3.29a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41z" />
                                    </svg>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Suspense fallback={<Skeleton/>}>
                <DataSet/>
            </Suspense>
        </>
    )
}
