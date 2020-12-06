import React from 'react';
import SplitTemplate from '../../components/templates/SplitTemplate';
import Hero from '../../components/organism/Hero';
import SignUpForm from '../../components/organism/SignUpForm';


const SignUp =()=>{
    const HeroLeft=(
        <Hero 
        title="One Stop Electronics shopping destination"
        subtitle="Stay Home Stay Safe"

        />
    );
    return <SplitTemplate leftChild={HeroLeft} rightChild={ <SignUpForm /> } />;
    
}
export default SignUp;