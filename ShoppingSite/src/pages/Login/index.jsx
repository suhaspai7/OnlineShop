import React from 'react';
import SplitTemplate from '../../components/templates/SplitTemplate';
import Hero from '../../components/organism/Hero';
import UserForm from '../../components/organism/LoginForm';


const Login =()=>{
    const HeroLeft=(
        <Hero 
        title="One Stop Electronics shopping destination"
        subtitle="Stay Home Stay Safe"

        />
    );
    return <SplitTemplate leftChild={HeroLeft} rightChild={ <UserForm /> } />;
    
}
export default Login;