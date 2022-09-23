import React from 'react'
import LineChart from '../charts/LineChart'
import nftImg from '../assets/img/nft.png'

const CommunityReach = () => {
  return (
    <div className="flex flex-col gap-20">
      {/* Reach of community */}
      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-3xl">Reach of community</h3>
          <p className="text-sm text-[#86888A]">
            Daily volume of Tweets with project mentions and hashtags
          </p>
        </div>

        <div className="flex flex-wrap gap-20">
          <div className="flex flex-col flex-auto gap-4">
            <p className="text-lg font-bold">Active member info</p>
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

          <div className="flex flex-col w-1/2 flex-auto gap-4">
            <p className="text-lg font-bold">
              Weekly social engagement on Twitter
            </p>
            <LineChart />
          </div>
        </div>
      </section>

      {/* PFP changes */}
      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-3xl">
            Recent members who changed to other PFP
          </h3>
          <p className="text-sm text-[#86888A]">
            List of Twitter accounts which change PFP to other project's
          </p>
        </div>
        <div className="flex flex-row gap-4 pt-5 flex-wrap justify-center">
          {[1, 2, 3, 4, 5, 6].map((k, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 rounded-lg border p-8 items-center text-sm"
            >
              <img className="rounded-full w-20" src={nftImg} />
              <div>@Ryou_chi</div>
              <div>Ryounosuke Takeuchi</div>
              <div className="text-slate-400 text-xs">changed 3h ago</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CommunityReach
