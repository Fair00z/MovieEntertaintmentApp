import React from 'react'
import Header from '../../Components/Header/header';
import Menu from '../../Components/Menu/menu';
import Banner from '../../Components/banner/banner';
import RowPost from '../../Components/RowPost/RowPost';
import { action, orginals, romance, trending } from '../../Constants/urls'

function Home(){
    return(
        <div>
            <Header login newbie />
            <Menu/>
            <Banner/>
            <RowPost url={orginals} title={'React Orginals'} class={'poster'} />
            <RowPost url={trending} title={'Trending'} class={'poster-small'} />
            <RowPost url={action} title={'Action'} class={'poster-small'} />
            <RowPost url={romance} title={'Romance'} class={'poster-small'} />
        </div>
    );
}
export default Home;