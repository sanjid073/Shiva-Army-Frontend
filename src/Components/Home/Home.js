import React from 'react';
import About from '../About/About';
import Accordion from './Accordion/Accordion';
import BrandPartner from './BrandPartner/BrandPartner';
import Intro from './Intro/Intro';
import RoadMapSection from './RoadMapSection/RoadMapSection';
import ShivaToken from './ShivaToken/ShivaToken';
import TokenomicsSection from './TokenomicsSection/TokenomicsSection';

const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <BrandPartner></BrandPartner>
            <About></About>
            <TokenomicsSection></TokenomicsSection>
            <RoadMapSection/>
            <Accordion></Accordion>
            <ShivaToken></ShivaToken>
        </div>
    );
};

export default Home;