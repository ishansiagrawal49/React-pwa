import React from 'react'

export default function Card() {
    return (
        <div className="rounded overflow-hidden mx-2 shadow-lg border border-blue-400 bg-gray-100 mx-auto w-full mb-6 md:w-5/12 md:mx-10">
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                Blessing Krofegha
                </div>
                <p className="text-gray-700 text-base">
                When i’m not coding i switch to netflix with biscuits and cold tea as my companion. <span></span>
                </p>
            </div>
            <div className="px-2 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Software Engineer</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Writter</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Public Speaker</span>
            </div>
            <div className="px-2 py-4">
            <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-800 mr-2">5 comments</span>
            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-800 mr-2"> View </span>
            <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-800 mr-2 float-right"> Save </span>
            </div>
        </div>
    )
}
