import React from 'react'
import StackedChart from '../charts/StackedChart'
import BarChart from '../charts/BarChart'
import nftImg from '../assets/img/nft.png'

const DiscordActiveMembers = () => {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-3xl">Discord active members</h3>
          <p className="text-sm text-[#86888A]">
            # of Discord accounts which sent messages within 30 days
          </p>
        </div>
        {/* <p className="pt-10 pb-5">Weekly active members</p> */}
        <div className="flex gap-20 flex-wrap">
          <div className="gap-4 w-1/2 block flex-auto">
            <p className="text-lg font-bold">Weekly active members</p>
            <BarChart type="discord-active" />
          </div>

          <div className="flex flex-col flex-auto gap-4">
            <p className="text-lg font-bold">Active member info</p>
            <div className="stats stats-vertical shadow ">
              <div className="stat">
                <div className="stat-title ">Total Monthly active members</div>
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
      </section>

      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-3xl">Top 7-days active members</h3>
          <p className="text-sm text-[#86888A]">
            List of Discord accounts which sent any messages within 7 days
          </p>
        </div>

        <div className="flex flex-row gap-4 pt-5 flex-wrap justify-center">
          {[1, 2, 3, 4, 5, 6].map((k, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 rounded-lg border p-8 items-center text-sm flex-auto"
            >
              <img className="rounded-full w-20" src={nftImg} />
              <div>@Ryo.take#8136</div>
              <div className="font-bold text-xl">20</div>
              <div>messages</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default DiscordActiveMembers
