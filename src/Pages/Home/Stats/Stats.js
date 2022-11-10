import React from 'react';
import img from '../../../assets/logo/favicon.png'
import { FaTiktok, FaTwitter, FaYoutube, FaTwitch } from "react-icons/fa";
const Stats = () => {
    return (
        <div className='my-20'>
            <h1 className="my-5 text-5xl font-bold text-rose-600 text-center">Achievements</h1>
            <div className="stats bg-rose-50 stats-vertical lg:stats-horizontal shadow text-center w-full">

                <div className="stat">
                    <div className="stat-figure text-red-600 text-5xl">
                        <FaYoutube></FaYoutube>
                    </div>
                    <div className="stat-title">Total Subs</div>
                    <div className="stat-value text-red-600">30M</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-blue-400 text-5xl">
                        <FaTwitter></FaTwitter>
                    </div>
                    <div className="stat-title">Total Follower</div>
                    <div className="stat-value  text-blue-400">2.6M</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-5xl">
                        <FaTiktok></FaTiktok>
                    </div>
                    <div className="stat-title">Total Likes</div>
                    <div className="stat-value ">85M</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-purple-600 text-5xl">
                        <FaTwitch />
                    </div>
                    <div className="stat-title">Total Follower</div>
                    <div className="stat-value text-purple-600">7M</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src={img} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">75</div>
                    <div className="stat-title">clients</div>
                </div>

            </div>
        </div>
    );
};

export default Stats;