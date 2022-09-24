import React from 'react'
import LineChart from '../charts/LineChart'
import nftImg from '../assets/img/nft.png'

const CommunityReach = (props) => {
  return (
    <div className="flex flex-col gap-20">
      {/* Reach of community */}
      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-3xl">Community Engagement</h3>
          <p className="text-sm text-[#86888A]">
            Volume of tweets and discord messages by the community
          </p>
        </div>

        <div className="flex flex-wrap gap-20">
          <div className="flex flex-col flex-auto gap-4">
            <p className="text-lg font-bold">Weekly overview</p>
            <div className="stats stats-vertical shadow">
              <div className="stat gap-2">
                <div className="stat-title"># of tweets in the last 7d</div>
                <div className="stat-value">1320</div>
                <div className="stat-desc">↘︎ 10 (0.8%)</div>
              </div>

              <div className="stat gap-2">
                <div className="stat-title">
                  # of discord messages in the last 7d
                </div>
                <div className="stat-value">300</div>
                <div className="stat-desc">↗︎ 25 (9%)</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-1/2 flex-auto gap-4">
            <p className="text-lg font-bold">Weekly community engagement</p>
            <LineChart />
          </div>
        </div>
      </section>

      {/* PFP changes */}
      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-3xl">Recent Twitter pfp changes</h3>
          <p className="text-sm text-[#86888A]">
            Twitter accounts to recently changed their pfps
          </p>
        </div>
        <div className="flex flex-row gap-4 pt-5 flex-wrap justify-center">
          {[1, 2, 3, 4, 5, 6].map((k, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 rounded-lg border p-8 items-center text-sm"
            >
              <img
                className="rounded-full w-20"
                src={
                  Math.random() > 0.3
                    ? props.data?.nfts[k + 6].cached_file_url
                    : nftImg
                }
              />
              <div>@Ryou_chi</div>
              <div className="text-slate-400 text-xs">changed 3h ago</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CommunityReach
