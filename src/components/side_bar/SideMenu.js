import React from 'react'


export default function SideMenu(props) {
    return (

        <div className={"row d-flex sidemenu "+props.active}>
            <a href=" " className={"nav-link "} aria-current="page">
                <i className={props.icon}></i>
                {props.text}
            </a>
        </div>

    )
}

SideMenu.defaultProps = {
    active: "text-light-purple",

  }