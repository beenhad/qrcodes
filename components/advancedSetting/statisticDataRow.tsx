import React from 'react';

const StatisticDataRow = ({ title, value }: any) => {
    return (
        <div className="flex items-center justify-between border-b py-2 ">
            <h1 className='text-[#404040] text-sm font-medium'>{title}</h1>
            <p className='text-base font-semibold text-black'>{value}</p>
        </div>
    );
};

export default StatisticDataRow;