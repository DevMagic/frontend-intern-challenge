import React from 'react'
import Footer from '../components/footer/Footer'
import FormHomePage from '../components/formHome/FormHomePage'
import Header from '../components/header/Header'
import ShowRanking from '../components/ranking/ShowRanking'

const HomePage = () =>{

    return (
        <>
        <Header/>
        <FormHomePage/>
        <ShowRanking/>
        <Footer/>
        </>
    );
}

export default HomePage