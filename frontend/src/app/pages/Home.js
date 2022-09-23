import React, { useEffect, useState } from 'react'
import LineChart from '../charts/LineChart'
import CommunityMembers from '../components/CommunityMembers'
import NFTSales from '../components/NFTSales'
import DiscordActiveMembers from '../components/DiscordActiveMembers'
import CommunityReach from '../components/CommunityReach'
import TopCommunityMembers from '../components/TopCommunityMembers'
import GeogCountryTargeting from '../components/GeographyCountryTargeting'
import Stats from '../components/Stats'

import LOCK from './Lock.json'
import NFT from './DynamicNFT.json'

import nftImg from '../assets/img/nft.png'

const contract = {
  address: '0x65ed7B4675e22e2D529F8613f51445dE37806670',
  abi: LOCK.abi,
}

const contractNFT = {
  address: '0xe8064A58DB953834595595E4Aa9d171DAEbB071D',
  abi: NFT.abi,
}

import { ethers } from 'ethers'

const Home = () => {
  const [nftContract, setNftContract] = useState(null)

  useEffect(() => {
    const connectWallet = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      await provider.send('eth_requestAccounts', [])
      const signer = provider.getSigner()
      const nftContract = new ethers.Contract(
        contractNFT.address,
        contractNFT.abi,
        signer
      )
      setNftContract(nftContract)
      // const res = await nftContract.mint('0x005544FA66A5ec8CeCa6C9A313FFCf2A6eDC46Be', 'ipfs://something')
      // console.log(res)
      // console.log(result);

      // const res = await nftContract.mint();
    }
    // connectWallet()
  }, [])

  const mint = async () => {
    const res = await nftContract.mint(
      '0x005544FA66A5ec8CeCa6C9A313FFCf2A6eDC46Be',
      'ipfs://something'
    )
    console.log(res)
  }

  const getTotalSupply = async () => {
    const result = await nftContract.totalSupply()
    console.log(ethers.utils.formatEther(result))
  }

  return (
    <div>
      <div className="flex flex-col p-10 gap-20 max-w-6xl mx-auto">
        {/* <button className="btn btn-secondary m-10">Button</button> */}
        {/* <LineChart /> */}
        {/* <button className="btn btn-outline" onClick={mint}>
        Mint NFT
      </button> */}
        {/* <button className="btn btn-outline" onClick={getTotalSupply}>
        get total supply
      </button> */}
        {/* <Stats />
            <CommunityMembers /> */}

        <div className="flex flex-wrap gap-20 items-stretch">
          <div className="flex flex-col gap-4">
            <img className="w-48 rounded-full" src={nftImg} />
            <h1 className="font-bold text-5xl">Fireball NFT Project</h1>
          </div>

          {/* stats */}
          <div className="flex gap-4 flex-auto flex-wrap">
            <div className="flex flex-col gap-10 justify-between flex-auto">
              <div className="stats stats-vertical shadow-xl border h-full">
                <div className="stat">
                  <div className="stat-title">Community Power</div>
                  <div className="stat-value text-center">4.1</div>
                </div>

                <div className="stat">
                  <div className="stat-title">Community Measurement</div>
                  <ul>
                    <li className="flex flex-row justify-between items-center">
                      <span>Growth</span>
                      <svg width={60} height={15}>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          style={{ fill: '#ff0000' }}
                        />
                        <rect
                          width={10}
                          height={10}
                          x={12}
                          y={0}
                          style={{ fill: '#ff0000' }}
                        />
                        <rect
                          width={10}
                          height={10}
                          x={24}
                          y={0}
                          style={{ fill: '#ff0000' }}
                        />
                        <rect
                          width={10}
                          height={10}
                          x={36}
                          y={0}
                          style={{ fill: '#ff0000' }}
                        />
                        <rect
                          width={10}
                          height={10}
                          x={48}
                          y={0}
                          style={{ fill: '#ff0000' }}
                        />
                      </svg>
                    </li>
                    <li className="flex flex-row justify-between items-center">
                      <span>Quality</span>
                      <svg width={60} height={15}>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          style={{ fill: '#ff0000' }}
                        />
                        <rect
                          width={10}
                          height={10}
                          x={12}
                          y={0}
                          style={{ fill: '#ff0000' }}
                        />
                      </svg>
                    </li>
                    <li className="flex flex-row justify-between items-center">
                      <span>Loyalty</span>
                      <svg width={60} height={15}>
                        <rect
                          width={10}
                          height={10}
                          x={0}
                          y={0}
                          style={{ fill: '#ff0000' }}
                        />
                        <rect
                          width={10}
                          height={10}
                          x={12}
                          y={0}
                          style={{ fill: '#ff0000' }}
                        />
                        <rect
                          width={10}
                          height={10}
                          x={24}
                          y={0}
                          style={{ fill: '#ff0000' }}
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 justify-between flex-auto">
              <div className="aspect-square bg-slate-800 rounded-md"></div>
              <button className="btn btn-primary">Mint Dynamic NFT</button>
            </div>
          </div>
        </div>

        <div className="stats shadow-lg border stats-vertical lg:stats-horizontal">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Discord Members</div>
            <div className="stat-value text-primary">1.2K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Twitter Followers</div>
            <div className="stat-value text-secondary">9.5K</div>
            <div className="stat-desc">31% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Monthly Active Members</div>
            <div className="stat-value text-secondary">1,200</div>
          </div>

          <div className="stat">
            <div className="stat-title">Active rate</div>
            <div className="stat-value">5%</div>
          </div>
        </div>

        <div class="divider"></div>

        <CommunityMembers />
        <div class="divider"></div>

        <NFTSales />
        <div class="divider"></div>

        <DiscordActiveMembers />
        <div class="divider"></div>

        <CommunityReach />
        <div class="divider"></div>

        <TopCommunityMembers />
        <div class="divider"></div>

        <GeogCountryTargeting />
      </div>
    </div>
  )
}

export default Home
