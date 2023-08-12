import React from 'react'
import '../../css/homePage.css'
import HomeNav from './HomeNav'
import SongCard from './SongCard'
import ViewAllCard from './ViewAllCard'
import SongRow from './SongRow'
import PlayerStream from '../player/PlayerStream'
export default function HomePage() {
  return (
    <div className='col-10 homePage'>

      <div className="container">
        <HomeNav></HomeNav>
        <div className='mainHome'>
          <p className='mt-4 text-light-purple fs-12'>RECENTLY PLAYED</p>
          <div className="d-flex justify-content-between flex-wrap mb-4">
            <SongCard></SongCard>
            <SongCard></SongCard>
            <SongCard></SongCard>
            <SongCard></SongCard>
            <SongCard></SongCard>
            <SongCard></SongCard>
            <ViewAllCard></ViewAllCard>
          </div>
          <div className='mt-4 mb-4'></div>
          <p className='mt-4 pt-4 text-light-purple fs-12'>TOP PLAYED SONGS</p>

          <button className="episode" data-spotify-id="spotify:track:4mtGAPsQCIlD4ZXdpRi0wf">
            My Path to Spotify: Women in Engineering
          </button>
          <button className="episode" data-spotify-id="spotify:playlist:37i9dQZF1EpxAHn0edZMGv">
            What is Backstage?
          </button>
          <button className="episode" data-spotify-id="spotify:track:4mtGAPsQCIlD4ZXdpRi0wf">
            Introducing Nerd Out@Spotify
          </button>
          <SongRow id='#1'></SongRow>
          <SongRow id='#2'></SongRow>
          <SongRow id='#3'></SongRow>
          <SongRow id='#4'></SongRow>
          <SongRow id='#4'></SongRow>
          <SongRow id='#4'></SongRow>
          <SongRow id='#4'></SongRow>
          <SongRow id='#4'></SongRow>
          <SongRow id='#4'></SongRow>
          <SongRow id='#4'></SongRow>
          <SongRow id='#4'></SongRow>

        </div>
        <PlayerStream></PlayerStream>
      </div>

    </div>
  )
}
