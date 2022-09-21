import React from 'react';
import StackedChart from '../charts/StackedChart';
import MapChart from '../charts/MapChart';

const GeogCountryTargeting = () => {
    return (
        <div className='flex flex-col pt-10'>
            <h3 className='font-bold text-2xl'>Geography and Country targeting</h3>
            <p className='text-sm text-[#86888A]'>Rank of country access based on Twitter followers</p>
            <div className='flex flex-row justify-between'>
                <div>
                    <p className='pt-10 pb-5'>Country registration from Twitter followers</p>
                    <MapChart />
                </div>
                <div className='w-1/4 flex flex-col justify-start'>
                    <p className='pt-10 pb-5'>Top Countries</p>
                    <div className="stats stats-vertical shadow-xl border p-10">
                        <p>United States</p>
                        <p>United States</p>
                        <p>United States</p>
                        <p>United States</p>
                        <p>United States</p>
                        <p>United States</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeogCountryTargeting;