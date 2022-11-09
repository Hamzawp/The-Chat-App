import React from 'react'

function Search() {
  return (
    <div className="search">
        <div className="searchForm">
            <input type="text" placeholder='find a user'/>
        </div>
        <div className="userChat">
            <img src='https://images.pexels.com/photos/14013604/pexels-photo-14013604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img>
            <div className="userChatInfo">
                <span>Jane</span>
                <p>Hello</p>
            </div>
        </div>
    </div>
  )
}

export default Search
