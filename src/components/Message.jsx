import React from 'react'

const Message = () => {
  return (
    <div className="message owner">
        <div className="messageInfo">
            <img src="https://images.pexels.com/photos/919453/pexels-photo-919453.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <span>just now</span>
        </div>
        <div className="messageContent">
            <p>Hello</p>
        <img src="https://images.pexels.com/photos/14013604/pexels-photo-14013604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </div>
  )
}

export default Message
