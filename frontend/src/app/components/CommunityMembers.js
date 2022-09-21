import React from 'react';
import StackedChart from '../charts/StackedChart';

const CommunityMembers = () => {
    return (
        <div className='flex flex-col pt-10'>
            <h3 className='font-bold text-2xl'>Total Community members</h3>
            <p className='text-sm text-[#86888A]'>Daily based # of Twitter followers and Discord server members</p>
            <p className='pt-10 pb-5'>Daily Twitter and Discord member trend</p>
            <div className='flex flex-row justify-between'>
                <StackedChart />
                <div className='w-1/4 flex justify-end'>
                    <div className="stats stats-vertical shadow">

                        <div className="stat">
                            <div className="stat-title">Downloads</div>
                            <div className="stat-value">31K</div>
                            <div className="stat-desc">Jan 1st - Feb 1st</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">New Users</div>
                            <div className="stat-value">4,200</div>
                            <div className="stat-desc">↗︎ 400 (22%)</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">New Registers</div>
                            <div className="stat-value">1,200</div>
                            <div className="stat-desc">↘︎ 90 (14%)</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityMembers;