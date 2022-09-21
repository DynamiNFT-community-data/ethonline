import React from 'react';
import StackedChart from '../charts/StackedChart';
import nftImg from '../assets/img/nft.png';

const TopCommunityMembers = () => {
    return (
        <div className='flex flex-col pt-10'>
            <h3 className='font-bold text-2xl'>Top community members</h3>
            <p className='text-sm text-[#86888A]'>
                List of Discord accounts and Twitter accounts which have most messages, reactions, followers, and tweets with project’s mentions and hashtags
            </p>
            <div className='flex flex-row justify-between gap-8'>
                <div className='flex flex-col gap-4 items-center w-1/2'>
                    <p className='pt-10 pb-5'>Top Members from Discord</p>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full text-center">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Account</th>
                                    <th># of messages</th>
                                    <th># of reactions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th><img className='rounded-full w-16' src={nftImg} /></th>
                                    <td>Ryo.take#8136</td>
                                    <td>300</td>
                                    <td>300</td>
                                </tr>
                                <tr>
                                    <th><img className='rounded-full w-16' src={nftImg} /></th>
                                    <td>Ryo.take#8136</td>
                                    <td>300</td>
                                    <td>300</td>
                                </tr>
                                <tr>
                                    <th><img className='rounded-full w-16' src={nftImg} /></th>
                                    <td>Ryo.take#8136</td>
                                    <td>300</td>
                                    <td>300</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='flex flex-col gap-4 items-center w-1/2'>
                    <p className='pt-10 pb-5'>Top Members from Twitter</p>
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full text-center">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Account</th>
                                    <th># of messages</th>
                                    <th># of reactions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th><img className='rounded-full w-16' src={nftImg} /></th>
                                    <td>Ryo.take#8136</td>
                                    <td>300</td>
                                    <td>300</td>
                                </tr>
                                <tr>
                                    <th><img className='rounded-full w-16' src={nftImg} /></th>
                                    <td>Ryo.take#8136</td>
                                    <td>300</td>
                                    <td>300</td>
                                </tr>
                                <tr>
                                    <th><img className='rounded-full w-16' src={nftImg} /></th>
                                    <td>Ryo.take#8136</td>
                                    <td>300</td>
                                    <td>300</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCommunityMembers;