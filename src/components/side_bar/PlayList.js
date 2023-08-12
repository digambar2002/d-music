import React from 'react'

export default function PlayList(props) {
    return (
        <div>
            <div className="row d-flex playList">
                <a href=" " className={"nav-link " + props.active}>
                    <i className={"bi m-3 " + props.icon}></i>
                    {props.playListName}
                </a>

            </div>
        </div>
    )
}

PlayList.defaultProps = {
    active: "text-light-purple",
    icon: "bi-collection-play-fill",
}