import React from 'react'
import Header from '../../Components/Header/header';
import Menu from '../../Components/Menu/menu';
import Banner from '../../Components/banner/banner';
import RowPost from '../../Components/RowPost/RowPost';

function Home(){
    return(
        <div>
            <Header login newbie />
            <Menu/>
            <Banner/>
            <RowPost/>
        </div>
    );
}
export default Home;