
import React, { useState, useEffect, useLayoutEffect} from 'react';
import { getAvrgCountRatings} from '../service/UserfeedbackService';
import { getStats, updateDate, updateViewCount } from '../service/StatService';


const StatsComponent = () => {
    const [averageRatings, setAverageRatings] = useState([]);
    const [stats, setStats] = useState ([]);


    useEffect(()=>
    {   
        updateDate();
        updateViewCount();
    },[])
    useLayoutEffect(()=>{
        getAverageAndCountRatings();
        getStatsViewAndDate();
    },[])
    function getAverageAndCountRatings (){
        getAvrgCountRatings().then((response)=> {
              setAverageRatings(response.data)
            }).catch(console.error());
    }
    function getStatsViewAndDate(){
        getStats().then((response)=>{
            setStats(response.data)
        }).catch(console.error());
    }

    return(
    <div className="bg-gradient-to-b from-[#DCD6F7] to-white py-16 pt-32" id ="stat">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                 A Closer Look at Your User Journey
                </h2>
                <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                   Feedback Statistics
                </p>
            </div>
        </div>
        <div className="mt-10 pb-1">
            <div className="relative">
                <div className="absolute inset-0 h-1/2"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <dl className="rounded-lg bg-[#DCF2F1] shadow-lg sm:grid sm:grid-cols-3">
                            <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                   Views
                                </dt>
                                <dd className="order-1 text-5xl font-extrabold text-gray-700">{stats.viewCount}</dd>
                            </div>
                            <div
                                className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                    User Feedback
                                </dt>
                                <dd className="order-1 text-5xl font-extrabold text-gray-700">{averageRatings.count}</dd>
                            </div>
                            <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                    Review
                                </dt>
                                <dd className="order-1 text-5xl font-extrabold text-gray-700">{averageRatings.avgRating}★</dd>
                            </div>
                            
                        </dl>
                        <div className="flex flex-col text-center">
                            <p className="text-lg font-bold text-gray-500"> Last Updated {stats.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default StatsComponent