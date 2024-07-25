import React from 'react'
import Header from '../../Components/Header/header';
import Menu from '../../Components/Menu/menu';
import Banner from '../../Components/banner/banner';
import RowPost from '../../Components/RowPost/RowPost';
import { action, animation, anime, letest, orginals, romance, trending, tvweek, upcoming } from '../../Constants/urls'

function Home(){
    return(
        <div>
            <Header login newbie />
            <Menu/>
            <Banner/>
            <RowPost url={upcoming} title={'Up Coming Movies'} class={'poster'} poster />
            <RowPost url={anime} title={'TV'} class={'poster'} poster />
            <RowPost url={action} title={'Action'} class={'poster-small'} poster />
            <RowPost url={animation} title={'Animation'} class={'poster-small'} poster />
            <RowPost url={romance} title={'Romance'} class={'poster-small'} poster />
        </div>
    );
}
export default Home;