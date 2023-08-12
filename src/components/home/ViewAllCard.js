import React from 'react'
import Tilt from 'react-parallax-tilt';
export default function ViewAllCard() {
    return (
        

        <Tilt scale={1.1} className='mt-4'>


            <div className='glassCard'>
                <img src={process.env.PUBLIC_URL + '/assets/img/song_folder.png'} width="80" height="80" className="rounded float-start mb-2" alt="..."></img>
            </div>
            <div className='d-flex justify-content-between p-0 m-0'>
                <div className="col-10">
                <p className='m-0 mt-2 fs-14'><strong>View all</strong></p>
                <small className='text-light-purple fs-12'>43 music tracks</small>
                </div>
                <div className="col-2">

                <i className="bi bi-arrow-right-short fs-3"></i>
                </div>
            </div>
        </Tilt>

    )
}
