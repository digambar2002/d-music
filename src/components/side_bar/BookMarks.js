import React from 'react'

export default function BookMarks(props) {
    return (

        <div className="row mt-2 mb-2">
            <div className="col-sm-3">
            <img src={props.profileImage} alt="" width="44" height="44" className="rounded-circle me-2" />
            </div>
            <div className="col-sm-9">
                <a href=' ' className='nav-link text-light'><strong>{props.songName}
                    </strong></a>
                <div>
                <a className='nav-link fs-12 text-light-purple' href=' '>{props.artistName}</a>
                </div>
            </div>
        </div>

    )
}
