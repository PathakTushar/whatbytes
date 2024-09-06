import React from 'react'

const SkillWise = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 w-full">
            <div className="mb-6 text-xl font-bold">Syllabus Wise Analysis</div>
            <div className="mb-3 text-base font-medium text-slate-700 dark:text-slate-500">HTML Tools, Forms, History</div>
            <div className="flex items-center space-x-4 mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-blue-200">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ "width": "80%" }}></div>
                </div>
                <div className="text-lg text-blue-600 font-bold">80%</div>
            </div>

            <div className="mb-3 text-base font-medium text-slate-700 dark:text-slate-500">Tags & References in HTML</div>
            <div className="flex items-center space-x-4 mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-orange-200">
                    <div className="bg-orange-600 h-2.5 rounded-full dark:bg-orange-500" style={{ "width": "60%" }}></div>
                </div>
                <div className="text-lg text-orange-600 font-bold">60%</div>
            </div>
            <div className="mb-3 text-base font-medium text-slate-700 dark:text-slate-500">Tables & References in HTML</div>
            <div className="flex items-center space-x-4 mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-red-200">
                    <div className="bg-red-600 h-2.5 rounded-full dark:bg-red-500" style={{ "width": "24%" }}></div>
                </div>
                <div className="text-lg text-red-600 font-bold">24%</div>
            </div>
            <div className="mb-3 text-base font-medium text-slate-700 dark:text-slate-500">Tables & CSS Basics</div>
            <div className="flex items-center space-x-4 mb-6">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-green-200">
                    <div className="bg-green-600 h-2.5 rounded-full dark:bg-green-500" style={{ "width": "96%" }}></div>
                </div>
                <div className="text-lg text-green-600 font-bold">96%</div>
            </div>
        </div>
    )
}

export default SkillWise