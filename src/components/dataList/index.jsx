import React, { Suspense } from 'react'
import DataSet from './dataSet';
import Skeleton from './skeleton';

export default async function DataList() {  
    return (
        <>
            <Suspense fallback={<Skeleton/>}>
                <DataSet/>
            </Suspense>
        </>
    )
}
