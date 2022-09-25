import React from 'react'
import PieChart from '../charts/PieChart'
import BarChart from '../charts/BarChart'

const NFTSales = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h3 className="font-bold text-3xl">On-chain activity</h3>
      </div>

      <section className="flex gap-20 flex-wrap">
        <div className="flex-auto w-1/2 flex gap-4 flex-col">
          <p className="text-lg font-bold"># of NFTs held by holders</p>
          <p className="text-sm text-[#86888A]">
            Measures holders' interest in other NFT communities
          </p>
          <PieChart />
        </div>

        <div className="w-1/2 flex-auto w-1/3">
          <p className="text-lg font-bold">Weekly unique wallet sales</p>
          <p className="text-sm text-[#86888A]">
            Are sales of nfts coming from many vs few wallets?
          </p>
          <BarChart className="" />
        </div>
      </section>
    </div>
  )
}

export default NFTSales
