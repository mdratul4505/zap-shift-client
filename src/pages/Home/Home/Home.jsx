import React from 'react';
import Banner from '../Banner/Banner';
import HowToWork from '../../../Components/HowToWork';
import OurServices from '../../../Components/OurServices';
import SalesTeam from '../../../Components/SalesTeam';
import Reviews from '../../../Components/Reviews';
import ServicesSection from '../../../Components/ServicesSection';


const reviewsPromise = fetch('./reviews.json').then(res => res.json())

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowToWork></HowToWork>
            <OurServices></OurServices>
            <SalesTeam></SalesTeam>
            <ServicesSection></ServicesSection>
            <Reviews reviewsPromise={reviewsPromise}></Reviews>
        </div>
    );
};

export default Home;