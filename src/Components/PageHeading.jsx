import React from 'react';

const PageHeading = ({title, subtitle}) => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-black text-center mt-6'>{title}</h1>
            <p className='text-center text-black font-semibold'>{subtitle}</p>
        </div>
    );
};

export default PageHeading;