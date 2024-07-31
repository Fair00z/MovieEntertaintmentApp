import React from 'react'
import Menu from '../../Components/Menu/menu';
import Header from '../../Components/Header/header';
import RowPost from '../../Components/RowPost/RowPost';
import { Action, Fantasy, Orginals, Romance, TVMovie, UpComing,Adventure,Animation,Comedy,Crime,Documentary,Drama,Family,History,Horror,Music,Mystery,ScienceFiction,Thriller,War,Western } from '../../Constants/urls';
import './MovieList.css'

function MovieList() {
  return (
    <div>
        <Header newbie />
        <Menu/>
        <div className='movie-list'>
            <RowPost url={UpComing} title={'Up Coming Movies'} class={'poster'} />
            <RowPost url={TVMovie} title={'TV'} class={'poster'} poster />
            <RowPost url={Action} title={'Action'} class={'poster-small'} poster />
            <RowPost url={Fantasy} title={'Fantasy'} class={'poster-small'} poster />
            <RowPost url={Romance} title={'Romance'} class={'poster-small'} poster />
            <RowPost url={Adventure} title={'Adventure'} class={'poster-small'} poster />
            <RowPost url={Animation} title={'Animation'} class={'poster-small'} poster />
            <RowPost url={Comedy} title={'Comedy'} class={'poster-small'} poster />
            <RowPost url={Crime} title={'Crime'} class={'poster-small'} poster />
            <RowPost url={Documentary} title={'Documentary'} class={'poster-small'} poster />
            <RowPost url={Drama} title={'Drama'} class={'poster-small'} poster />
            <RowPost url={Family} title={'Family'} class={'poster-small'} poster />
            <RowPost url={History} title={'History'} class={'poster-small'} poster />
            <RowPost url={Horror} title={'Horror'} class={'poster-small'} poster />
            <RowPost url={Music} title={'Music'} class={'poster-small'} poster />
            <RowPost url={Mystery} title={'Mystery'} class={'poster-small'} poster />
            <RowPost url={ScienceFiction} title={'Science Fiction'} class={'poster-small'} poster />
            <RowPost url={Thriller} title={'Thriller'} class={'poster-small'} poster />
            <RowPost url={War} title={'War'} class={'poster-small'} poster />
            <RowPost url={Western} title={'Western'} class={'poster-small'} poster />
        </div>
    </div>
  )
}

export default MovieList;