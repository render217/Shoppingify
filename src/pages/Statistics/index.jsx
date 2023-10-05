import React from 'react'
import TopItemList from './components/TopItemList'
import TopCategoryList from './components/TopCategoryList'
import SummaryChart from './components/SummaryChart'

export const Statistics = () => {
    return (

        <section className='py-5 px-10 space-y-8' >
            <div className='flex max-sm:flex-col gap-10 '>
                <div className='flex-1'>
                    <TopItemList />
                </div>
                <div className='flex-1'>
                    <TopCategoryList />
                </div>
            </div>
            <div >
                <SummaryChart />
            </div>
        </section>
    )
}
