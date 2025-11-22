import React from 'react';
import Logo from '../Components/Logo';
import { Outlet } from 'react-router';
import authImg from '../assets/authImage.png'

const AugthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Logo></Logo>
            <div className='flex items-center  justify-center min-h-screen'>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1  flex items-center justify-center min-h-screen bg-[linear-gradient(to_bottom,rgba(250,253,240,1),white)]'>
                    <img className='items-center' src={authImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AugthLayout;