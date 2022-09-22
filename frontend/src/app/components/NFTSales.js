import React from 'react'
import PieChart from '../charts/PieChart'
import BarChart from '../charts/BarChart'

const NFTSales = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h3 className="font-bold text-3xl">Sales of NFT</h3>
        <p className="text-sm text-[#86888A]">
          Weekly NFT sales per Wallet address and # of NFTs holding
        </p>
      </div>

      <section className="flex gap-20 flex-wrap">
        <div className="flex-auto w-1/2 flex gap-4 flex-col">
          <p className="text-lg font-bold">
            # of Wallet address based on NFT holds
          </p>
          <PieChart />
        </div>

        <div className="w-1/2 flex-auto w-1/3">
          <p className="text-lg font-bold">Weekly Unique Wallet sales</p>
          <BarChart className="" />
        </div>
      </section>
    </div>
  )
}

export default NFTSales
