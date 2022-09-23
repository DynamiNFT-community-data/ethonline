import React from 'react'
import StackedChart from '../charts/StackedChart'
import nftImg from '../assets/img/nft.png'

const TopCommunityMembers = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-3xl">Top community members</h3>
        <p className="text-sm text-[#86888A]">
          Most engaged accounts from Discord and Twitter
        </p>
      </div>

      <div className="flex flex-row gap-8 flex-wrap">
        <div className="flex flex-col gap-4 w-full md:w-[450px] flex-auto">
          <p className="font-bold">Top Members from Discord</p>
          <div className="overflow-x-auto">
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
                  <th>
                    <img className="rounded-full w-16" src={nftImg} />
                  </th>
                  <td>Ryo.take#8136</td>
                  <td>300</td>
                  <td>300</td>
                </tr>
                <tr>
                  <th>
                    <img className="rounded-full w-16" src={nftImg} />
                  </th>
                  <td>Ryo.take#8136</td>
                  <td>300</td>
                  <td>300</td>
                </tr>
                <tr>
                  <th>
                    <img className="rounded-full w-16" src={nftImg} />
                  </th>
                  <td>Ryo.take#8136</td>
                  <td>300</td>
                  <td>300</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-[450px] flex-auto">
          <p className="font-bold">Top Members from Twitters</p>
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
                  <th>
                    <img className="rounded-full w-16" src={nftImg} />
                  </th>
                  <td>Ryo.take#8136</td>
                  <td>300</td>
                  <td>300</td>
                </tr>
                <tr>
                  <th>
                    <img className="rounded-full w-16" src={nftImg} />
                  </th>
                  <td>Ryo.take#8136</td>
                  <td>300</td>
                  <td>300</td>
                </tr>
                <tr>
                  <th>
                    <img className="rounded-full w-16" src={nftImg} />
                  </th>
                  <td>Ryo.take#8136</td>
                  <td>300</td>
                  <td>300</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopCommunityMembers
