import React from 'react';
import StackedChart from '../charts/StackedChart';
import BarChart from '../charts/BarChart';
import nftImg from '../assets/img/nft.png';

const DiscordActiveMembers = () => {
    return (
        <div className='flex flex-col pt-10'>
            <h3 className='font-bold text-2xl'>Discord active members</h3>
            <p className='text-sm text-[#86888A]'># of Discord accounts which sent messages within 30 days</p>
            <p className='pt-10 pb-5'>Weekly active members</p>
            <div className='flex flex-row justify-between'>
                <BarChart />
                <div className='flex flex-col justify-end'>
                    <p className='pt-10 pb-5'>Active member info</p>
                    <div className="stats stats-vertical shadow">

                        <div className="stat">
                            <div className="stat-title">Total Monthly active members</div>
                            <div className="stat-value">300</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">% of Monthly active rate</div>
                            <div className="stat-value">12.5%</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Total Weekly active members</div>
                            <div className="stat-value">120</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">% of Weekly active rate</div>
                            <div className="stat-value">5%</div>
                        </div>

                    </div>
                </div>
            </div>
            <h3 className='font-bold text-2xl pt-10'>Top 7-days active members</h3>
            <p className='text-sm text-[#86888A]'>List of Discord accounts which sent any messages within 7 days</p>
            <div className='flex flex-row gap-4 pt-5'>
                {[1,2,3,4,5,6].map((k, i) => 
                    <div key={i} className='flex flex-col gap-2 rounded-lg shadow-xl p-5 items-center'>
                        <img className='rounded-full w-32' src={nftImg} />
                        <h3>@Ryo.take#8136</h3>
                        <p>7-days # of messages sent</p>
                        <p className='font-bold text-xl'>20</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DiscordActiveMembers;