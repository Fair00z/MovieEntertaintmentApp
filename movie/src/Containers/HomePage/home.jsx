import React from 'react'
import Header from '../../Components/Header/header';
import Menu from '../../Components/Menu/menu';
import Banner from '../../Components/banner/banner';

function Home(){
    return(
        <div>
            <Header/>
            <Menu/>
            <Banner/>
        </div>
    );
}
export default Home;