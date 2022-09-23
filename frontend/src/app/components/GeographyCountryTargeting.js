import React from 'react'
import StackedChart from '../charts/StackedChart'
import MapChart from '../charts/MapChart'

const GeogCountryTargeting = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-3xl">Geography and Country targeting</h3>
        <p className="text-sm text-[#86888A]">
          Rank of country access based on Twitter followers
        </p>
      </div>
      <div className="flex flex-wrap gap-20">
        <div className="flex flex-col gap-4 flex-auto">
          <p className="text-lg font-bold">
            Country registration from Twitter followers
          </p>
          <MapChart />
        </div>

        <div className="flex flex-col gap-4 flex-auto">
          <p className="text-lg font-bold">Top Countries</p>
          <div className="stats stats-vertical shadow-xl border p-10">
            <p>United States</p>
            <p>United States</p>
            <p>United States</p>
            <p>United States</p>
            <p>United States</p>
            <p>United States</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GeogCountryTargeting
