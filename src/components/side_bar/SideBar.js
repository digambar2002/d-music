import React from 'react'
import '../../css/sidebar.css'
import SideMenu from './SideMenu'
import BookMarks from './BookMarks'
import PlayList from './PlayList'

export default function SideBar() {
    return (
        <div className='col-2 sidebar bg-color'>

            <div className="d-flex flex-column flex-shrink-0 p-3  ">
                
                <div className="d-flex align-items-center justify-content-between mb-4">

                    <div className="fs-4 brandName text-light">D Music</div>
                    <div><i className="bi bi-list fs-4 text-light"></i></div>
                </div>

                <p className='mt-4 text-light-purple fs-12'>MENU</p>
                <SideMenu text='Discover' icon='bi bi-house-door-fill m-3' active='text-white right-border'></SideMenu>
                <SideMenu text='Trending' icon='bi bi-headphones m-3'></SideMenu>
                <SideMenu text='Streaming' icon='bi bi-broadcast m-3'></SideMenu>
        

            
                <p className='mt-4 text-light-purple fs-12'>PLAYLIST</p>
              
               <PlayList playListName ='Top Marathi Hits'></PlayList>
               <PlayList playListName ='New Hindi Songs'></PlayList>
               <PlayList playListName ='Alan Walker'></PlayList>

                <button type="button" className="btn btn-md d-btn mb-4 mt-4">ADD PLAYLIST</button>


                <p className='mt-4 text-light-purple fs-12'>BOOKMARKS</p>
                <BookMarks songName='On My Way' artistName='Alan Walker' profileImage='https://github.com/mdo.png'></BookMarks>
                <BookMarks songName='On My Way' artistName='Alan Walker' profileImage='https://github.com/mdo.png'></BookMarks>
                <BookMarks songName='Email Kal Internet var kela' artistName='Ajay Atul' profileImage='https://github.com/mdo.png'></BookMarks>
            
           
            </div>

        </div>
    )
}
