import React from 'react';
import LineChart from '../charts/LineChart';
import nftImg from '../assets/img/nft.png';

const CommunityReach = () => {
    return (
        <div className='flex flex-col pt-10'>
            <h3 className='font-bold text-2xl'>Reach of community</h3>
            <p className='text-sm text-[#86888A]'>Daily volume of Tweets with project mentions and hashtags</p>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-col'>
                    <p className='pt-10 pb-5'>Active member info</p>
                    <div className="stats stats-vertical shadow">
                        <div className="stat">
                            <div className="stat-title">Last week # of hashtags</div>
                            <div className="stat-value">3500</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Weekly change</div>
                            <div className="stat-value">12.5%</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Last week # of mentions</div>
                            <div className="stat-value">6000</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Weekly change</div>
                            <div className="stat-value">5%</div>
                        </div>
                    </div>
                </div>
                <div className='w-3/4 flex flex-col items-end'>
                    <p className='pt-10 pb-5'>Weekly # of hastags and # of mentions</p>
                    <LineChart />
                </div>
            </div>
            <h3 className='font-bold text-2xl pt-10'>Recent members who changed to other PFP</h3>
            <p className='text-sm text-[#86888A]'>List of Twitter accounts which change PFP to other project's</p>
            <div className='flex flex-row gap-4 pt-5'>
                {[1,2,3,4,5,6].map((k, i) => 
                    <div key={i} className='flex flex-col gap-2 rounded-lg shadow-xl p-5 items-center'>
                        <img className='rounded-full w-32' src={nftImg} />
                        <h3>@Ryou_chi</h3>
                        <p>Ryounosuke Takeuchi</p>
                        <p>PFP changed 3 hours ago</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CommunityReach;