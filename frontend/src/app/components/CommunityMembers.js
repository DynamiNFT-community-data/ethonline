import React from 'react'
import StackedChart from '../charts/StackedChart'

const data = {}

const CommunityMembers = () => {
  return (
    <div className="flex flex-col gap-10 items-stretch">
      <div>
        <h3 className="font-bold text-3xl">Total Community members</h3>
        <p className="text-sm text-[#86888A]">
          Daily based # of Twitter followers and Discord server members
        </p>
      </div>

      <section className="flex gap-20 flex-wrap">
        <div className="flex flex-col gap-4 flex-auto w-1/2">
          <p className="text-lg font-bold">
            Daily Twitter and Discord member trend
          </p>
          <StackedChart data={data} />
        </div>

        <div className="flex-auto flex flex-col gap-4">
          <p className="text-lg font-bold">Today’s Twitter and Discord stats</p>
          <div className="stats stats-vertical shadow">
            <div className="stat">
              <div className="stat-title">Current Discord Members</div>
              <div className="stat-value">525</div>
              <div className="stat-desc">↗︎ 20 (10%) since yesterday</div>
            </div>

            <div className="stat">
              <div className="stat-title">Current Twitter Followers</div>
              <div className="stat-value">1400</div>
              <div className="stat-desc">↘︎ 30 (3%) since yesterday</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CommunityMembers
