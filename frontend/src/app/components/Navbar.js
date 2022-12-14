import React, {useState, useEffect } from 'react'

import { ethers } from 'ethers'
import { Link } from 'react-router-dom'
// import LOCK from './Lock.json'
import NFT from './DynamicNFT.json'

const contractNFT = {
  address: '0xe8064A58DB953834595595E4Aa9d171DAEbB071D',
  abi: NFT.abi,
}

const Navbar = () => {
  const [nftContract, setNftContract] = useState(null)

  const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()
    const nftContract = new ethers.Contract(
      contractNFT.address,
      contractNFT.abi,
      signer
    )
    // setNftContract(nftContract);
    // const res = await nftContract.mint('0x005544FA66A5ec8CeCa6C9A313FFCf2A6eDC46Be', 'ipfs://something')
    // console.log(res)
    // console.log(result);

    // const res = await nftContract.mint();
  }

  useEffect(() => {

    // connectWallet()
  }, [])


  return (
    <div className="navbar bg-slate-900 text-white p-5 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex="0">
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">TribeViz</a>
      </div>
      {/* <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </div> */}
      <div className="navbar-end">
        <button className="btn btn-primary" onClick={() => { connectWallet(); }}>Connect Wallet</button>
      </div>
    </div>
  )
}

export default Navbar
