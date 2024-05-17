import plusicon from '../../../assest/plus.png';
import minusicon from '../../../assest//minus.png';
import searchicon from '../../../assest/search.png';
import avataricon from '../../../assest/avatar.png';
import { useEffect, useState } from 'react';
import { useGlobalContext } from '../../../Context';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../config/config';


function Chatlist() {
  const [isPlus,setIsPlus]= useState(true);
  const [chats,setChats] = useState([]);
  const {setIsUserAddedShow,userUid} = useGlobalContext();
  

  useEffect(()=>{
      const unSub = onSnapshot(doc(db, "userChats",userUid), async (res) => {
        const items = res.data().chats;

        const promises = items.map(async itm =>{
          const userRef = doc(db, "users", itm.reciveId);
          const userSnap = await getDoc(userRef);
          const user = userSnap.data();
          return {...itm,user};
       })

       const chatData = await Promise.all(promises);
       setChats(chatData.sort((a,b)=> b.updatedAt - a.updatedAt));
      });
      return ()=> unSub();

  },[userUid])

  return (
    <div className='overflow-auto'>
      <div className="search flex justify-between items-center p-[10px]">
        <div className="searchBar flex items-center bg-[rgba(17,25,40,.5)] rounded-md">
          <img src={searchicon} className='w-[30px] h-[30px]  mr-[5px] p-[5px]' alt="icon" />
          <input type="text" className='bg-transparent text-[14px] outline-none'  placeholder='Search..'/>
        </div>
        <div onClick={()=> {setIsPlus(prev => !prev);
          setIsUserAddedShow(prev => !prev)
        }} className="add bg-[rgba(17,25,40,.5)] rounded-md p-[5px] cursor-pointer">
          <img src={isPlus ? plusicon : minusicon} className='w-[15px] h-[15px]' alt="icon" />
        </div>
      </div>
      {
        chats.map(chat =>{
          return (
            <div key={chat.chatId} className="item flex items-center cursor-pointer border-b-[1px] border-[#dddddd35] gap-[5px] p-[10px]">
              <img src={avataricon} alt="avatar"  className='w-[30px] h-[30px] rounded-[50%]'/>
              <div className='flex flex-col'>
                <span className='text-[13px]'>YASISNE ZEROUALI</span>
                <p className='text-[10px]'>{chat.lastMessage}</p>
              </div>
            </div>  
          )
        })
      }
       <div  className="item flex items-center cursor-pointer border-b-[1px] border-[#dddddd35] gap-[5px] p-[10px]">
              <img src={avataricon} alt="avatar"  className='w-[30px] h-[30px] rounded-[50%]'/>
              <div className='flex flex-col'>
                <span className='text-[13px]'>YASISNE ZEROUALI</span>
                <p className='text-[10px]'>last message</p>
              </div>
        </div> 
        <div  className="item flex items-center cursor-pointer border-b-[1px] border-[#dddddd35] gap-[5px] p-[10px]">
              <img src={avataricon} alt="avatar"  className='w-[30px] h-[30px] rounded-[50%]'/>
              <div className='flex flex-col'>
                <span className='text-[13px]'>YASISNE ZEROUALI</span>
                <p className='text-[10px]'>last message</p>
              </div>
        </div> 
        <div  className="item flex items-center cursor-pointer border-b-[1px] border-[#dddddd35] gap-[5px] p-[10px]">
              <img src={avataricon} alt="avatar"  className='w-[30px] h-[30px] rounded-[50%]'/>
              <div className='flex flex-col'>
                <span className='text-[13px]'>YASISNE ZEROUALI</span>
                <p className='text-[10px]'>last message</p>
              </div>
        </div> 
        <div  className="item flex items-center cursor-pointer border-b-[1px] border-[#dddddd35] gap-[5px] p-[10px]">
              <img src={avataricon} alt="avatar"  className='w-[30px] h-[30px] rounded-[50%]'/>
              <div className='flex flex-col'>
                <span className='text-[13px]'>YASISNE ZEROUALI</span>
                <p className='text-[10px]'>last message</p>
              </div>
        </div> 
        <div  className="item flex items-center cursor-pointer border-b-[1px] border-[#dddddd35] gap-[5px] p-[10px]">
              <img src={avataricon} alt="avatar"  className='w-[30px] h-[30px] rounded-[50%]'/>
              <div className='flex flex-col'>
                <span className='text-[13px]'>YASISNE ZEROUALI</span>
                <p className='text-[10px]'>last message</p>
              </div>
        </div>  
      
      
    </div>
  )
}

export default Chatlist;