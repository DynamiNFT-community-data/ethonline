import React from 'react';
import LineChart from '../charts/LineChart';

const Home = () => {
    return (<div>
        <h1 className="text-3xl font-bold underline p-10">
            We are Dynamic NFT
        </h1>
        <button className="btn btn-secondary m-10">Button</button>
        <LineChart />
    </div>)
};

export default Home;