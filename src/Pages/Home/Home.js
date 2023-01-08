import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Reviews from './Reviews';
import Tools from './Tools';
import ToolSummery from './ToolSummery';
import OrderToHand from './OrderToHand';


const Home = () => {
    return (
        <div>
        <Banner/>
        <Tools/>
        <BusinessSummery/>
        <Reviews/>
        <ToolSummery/>
        <OrderToHand/>
       
           
        </div>
    );
};

export default Home;