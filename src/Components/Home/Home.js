import React from 'react';
import About from '../About/About';
import Accordion from './Accordion/Accordion';
import BrandPartner from './BrandPartner/BrandPartner';
import Intro from './Intro/Intro';
import ShivaToken from './ShivaToken/ShivaToken';
import Sliders from './Slider/Sliders';
import TokenomicsSection from './TokenomicsSection/TokenomicsSection';

const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <BrandPartner></BrandPartner>
            <About></About>
            <TokenomicsSection></TokenomicsSection>
            <Sliders></Sliders>
            <Accordion></Accordion>
            <ShivaToken></ShivaToken>
        </div>
    );
};

export default Home;