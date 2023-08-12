import React from 'react'

export default function SongRow(props) {
    return (
        <div className='row pt-4 pb-4'>

            <div className="col-3 d-flex justify-content-between align-items-center">
                <div><p>{props.id}</p></div>
                <div className='songCard' data-tilt>
                    <img src="https://i.scdn.co/image/ab67616d0000b27346b7f1923c811c76086e9577" width="50" height="50" className="rounded float-start mb-2" alt="..."></img>
                </div>
                <div>
                    <p className='m-0 fs-14'><strong>Chandra</strong></p>
                    <small className='text-light-purple fs-12'>Shreya Goshal</small>
                </div>

            </div>
            <div className="col-2"></div>

            <div className="col-2 d-flex justify-content-between align-items-center">
                <small className='text-light-purple fs-12 text-center'>Song By Atif Aslam</small>
            </div>
            <div className="col-1"></div>
            <div className="col-4 d-flex justify-content-between align-items-center">
                <div>
                    <i className="bi bi-music-note-beamed p-2"></i>
                    <small className='text-light-purple fs-12 text-center'> 56,89,200 </small>
                </div>
                <div>
                    <i className="bi bi-clock p-2"></i>
                    <small className='text-light-purple fs-12 text-center'> 3:20 </small>
                </div>

                <div>
                    <i className="bi bi-heart"></i>
                </div>

                <div>
                    <i className="bi bi-three-dots"></i>
                </div>

            </div>


        </div>
    )
}
