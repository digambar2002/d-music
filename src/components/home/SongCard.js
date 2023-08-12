import React from 'react'
import Tilt from 'react-parallax-tilt';
export default function SongCard() {
    return (
        <Tilt scale={1.1}>


        <div className='songCard'>
            <img src="https://c.saavncdn.com/334/Laila-Majnu-Hindi-2018-20190506111426-500x500.jpg" width="150" height="150" className="rounded float-start mb-2" alt="..."></img>
            
                <p className='m-0 mt-4 fs-14'><strong>O Meri Laila</strong></p>
                <small className='text-light-purple fs-12'>Song By Atif Aslam</small>
            
        </div>
        </Tilt>
    )
}
