import React from 'react'
import Userinfo from './pages/lists/Userinfo';
import Chatlist from './pages/lists/Chatlist';

function List() {
  return (
    <div className='grow-[1] max-w-[300px] flex flex-col'>
        <Userinfo/>
        <Chatlist/>
    </div>
  )
}

export default List;