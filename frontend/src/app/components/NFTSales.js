import React from 'react';
import PieChart from '../charts/PieChart';
import BarChart from '../charts/BarChart';

const NFTSales = () => {
    return (
        <div className='flex flex-col pt-10'>
            <h3 className='font-bold text-2xl'>Sales of NFT</h3>
            <p className='text-sm text-[#86888A]'>Weekly NFT sales per Wallet address and # of NFTs holding</p>
            <p className='pt-10 pb-5'># of Wallet address based on NFT holds</p>
            <div className='flex flex-row justify-between'>
                <PieChart />
                <BarChart />
            </div>
        </div>
    );
};

export default NFTSales;