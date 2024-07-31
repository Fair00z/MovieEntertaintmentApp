import React from 'react'
import Header from '../../Components/Header/header';
import Menu from '../../Components/Menu/menu';
import Banner from '../../Components/banner/banner';
import RowPost from '../../Components/RowPost/RowPost';
import { Action, Fantasy, Romance, TVMovie, UpComing } from '../../Constants/urls'

function Home(){
    return(
        <div>
            <Header login newbie />
            <Menu/>
            <Banner/>
            <RowPost url={UpComing} title={'Up Coming Movies'} class={'poster'} poster />
            <RowPost url={TVMovie} title={'TV'} class={'poster'} poster />
            <RowPost url={Action} title={'Action'} class={'poster-small'} poster />
            <RowPost url={Fantasy} title={'Fantasy'} class={'poster-small'} poster />
            <RowPost url={Romance} title={'Romance'} class={'poster-small'} poster />
        </div>
    );
}
export default Home;