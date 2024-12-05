import React from 'react';
import { Fade } from 'react-awesome-reveal';

const PageHeading = ({title, subtitle}) => {
    return (
        <div>
           <Fade direction='down'>
           <h1 className='text-4xl font-bold text-black text-center mt-6'>{title}</h1>
           </Fade>
           <Fade direction='up'>
           <p className='text-center text-black font-semibold'>{subtitle}</p>
           </Fade>
        </div>
    );
};

export default PageHeading;