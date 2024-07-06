import React, { Suspense } from 'react'
import { FetchAndDisplayData } from '../../app/utils/supabase';
import DataSet from './dataSet';
import Skeleton from './skeleton';

export default async function DataList() {
    
    const data = await FetchAndDisplayData();
    const tableHead = [ 'id', 'Full Name', 'Email Address', 'Phone Number', 'Message', 'Edit' ]
    
    return (
        <>
            <div className='w-full overflow-x-auto'>
                <table className="table-fixed border-separate border-spacing-2 border border-slate-500">
                    <thead className='text-left bg-cyan-900'>
                        <tr>
                            {tableHead.map((item, i) => (
                                <th 
                                    className='table-head-column table-body-column' 
                                    key={i}
                                >
                                    {item}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((set) => (
                            <tr key={set.id}>
                                <td className='table-body-column'>
                                    {set.id}
                                </td>
                                <td className='table-body-column'>
                                    {set.name}
                                </td>
                                <td className='table-body-column'>
                                    {set.email}
                                </td>
                                <td className='table-body-column'>
                                    {set.phoneNumber}
                                </td>
                                <td className='table-body-column'>
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
