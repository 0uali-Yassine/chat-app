import avataricon from '../../src/assest/avatar.png';
import infoicon from '../../src/assest/info.png';
import videoicon from '../../src/assest/video.png'
import phoneicon from '../../src/assest/phone.png';
import imgicon from '../../src/assest/img.png';
import emojiicon from '../../src/assest/emoji.png';
import camericon from '../../src/assest/camera.png';
import micicon from '../../src/assest/mic.png';
import bgimg from '../../src/assest/pexels-ben-cheung-140183-715134.jpg';

import EmojiPicker from 'emoji-picker-react';
import { useEffect, useRef, useState } from 'react';
import Adduser from './pages/lists/Adduser';
import { useGlobalContext } from '../Context';
function Chat() {
  const [isEmojiVisible,setIsEmojiVisible] = useState(false);
  const [messageText,setMessageText] = useState('');
  const {isUserAddedShow} = useGlobalContext();
  

  const end_msgRef = useRef(null);
  // for scrolling to the last messages
  useEffect(()=>{
    end_msgRef.current?.scrollIntoView({behavior:"smooth"});
  },[])


  const pickEmoji = e => {
    setMessageText(prev => prev + e.emoji);
    setIsEmojiVisible(false);
  }  
  return (
    <div className='grow-[2] relative flex flex-col  max-w-[700px] border-x-[1px] border-[#dddddd35]'>
      <div className="top flex justify-between p-[10px] border-[#dddddd35] border-b-[1px]">
        <div className="user flex items-center gap-[5px]">
          <img src={avataricon} alt="avatar" className='w-[35px] h-[35px] rounded-[50%]' />
          <div className='flex flex-col'>
            <span className='text-[13px] font-bold'>Yassine zerouali</span>
            <p className='text-[11px] text-[#a5a5a5]'>Ydffhef efhef efhefbef efeufg </p>
          </div>
        </div>
        <div className="icon flex gap-[10px] items-center">
          <img src={phoneicon} alt="icons" className='w-[15px] h-[15px] cursor-pointer'/>
          <img src={videoicon} alt="icons" className='w-[17px] h-[17px] cursor-pointer'/>
          <img src={infoicon} alt="icons" className='w-[17px] h-[17px] cursor-pointer'/>
        </div>
      </div>

      <div className="center  overflow-auto flex-1 flex flex-col gap-[10px] p-[10px]">
        <div className="msg max-w-[70%]  flex gap-[5px] items-start">
          <img src={avataricon} alt="avatart" className='w-[30px] h-[30px] rounded-[50%]' />
          <div className="text flex flex-col gap-[5px]">
            <p className='bg-[rgba(17,25,40,.5)] text-[13px] px-[7px] py-[10px] rounded-md'>yassine fidhfd gzehfgzegf zefgehgf egf </p>
            <span className='text-[10px]'>13 minutes ago</span>
          </div>
        </div>
        <div className="msg self-end flex gap-[5px] items-start">
          <div className="text flex flex-col gap-[5px]">
            <p className='bg-[#5183fe] text-[13px] px-[7px] py-[10px] rounded-md'>yassine fidhfd gzehfgzegf zefgehgf egf </p>
            <span className='text-[10px]'>13 minutes ago</span>
          </div>
        </div>
        <div className="msg  flex gap-[5px] items-start">
          <img src={avataricon} alt="avatart" className='w-[30px] h-[30px] rounded-[50%]' />
          <div className="text flex flex-col gap-[5px]">
            <p className='bg-[rgba(17,25,40,.5)] text-[13px] px-[7px] py-[10px] rounded-md'>yassine fidhfd gzehfgzegf zefgehgf egf </p>
            <span className='text-[10px]'>13 minutes ago</span>
          </div>
        </div>
        <div className="msg self-end flex gap-[5px] items-start">
          <div className="text flex flex-col gap-[5px]">
            <p className='bg-[#5183fe] text-[13px] px-[7px] py-[10px] rounded-md'>yassine fidhfd gzehfgzegf zefgehgf egf </p>
            <span className='text-[10px]'>13 minutes ago</span>
          </div>
        </div>
        <div className="msg  flex gap-[5px] items-start">
          <img src={avataricon} alt="avatart" className='w-[30px] h-[30px] rounded-[50%]' />
          <div className="text flex flex-col gap-[5px]">
            <p className='bg-[rgba(17,25,40,.5)] text-[13px] px-[7px] py-[10px] rounded-md'>yassine fidhfd gzehfgzegf zefgehgf egf </p>
            <span className='text-[10px]'>13 minutes ago</span>
          </div>
        </div>
        <div className="msg  flex gap-[5px] items-start">
          <img src={avataricon} alt="avatart" className='w-[30px] h-[30px] rounded-[50%]' />
          <div className="text flex flex-col gap-[5px]">
            <p className='bg-[rgba(17,25,40,.5)] text-[13px] px-[7px] py-[10px] rounded-md'>yassine fidhfd gzehfgzegf zefgehgf egf </p>
            <span className='text-[10px]'>13 minutes ago</span>
          </div>
        </div>
        <div className="msg self-end  flex flex-col gap-[5px] items-start">
          <img src={bgimg} alt="image" className='w-[100%] h-[300px] object-cover' />
          <div className="text  flex flex-col gap-[5px]">
            <p className='bg-[#5183fe] text-[13px] px-[7px] py-[10px] rounded-md'>yassine fidhfd gzehfgzegf zefgehgf egf yassine fidhfd gzehfgzegf zefgehgf egf  </p>
            <span className='text-[10px]'>13 minutes ago</span>
          </div>
        </div>
        
        <div ref={end_msgRef}></div>
      </div>




      <div className="bottom  p-[10px] relative flex justify-evenly items-center gap-[5px] border-t-[#dddddd35] border-t-[1px]">
        <div className="icons flex items-center gap-[15px]">
          <img src={imgicon} alt="icon" className='w-[17px] h-[17px] cursor-pointer'/>
          <img src={camericon} alt="icon" className='w-[17px] h-[17px] cursor-pointer'/>
          <img src={micicon} alt="icon" className='w-[17px] h-[17px] cursor-pointer'/>
        </div>
        <input type="text" onChange={(e)=> setMessageText(e.target.value)} value={messageText} placeholder='Type a message...' className='bg-[rgba(17,25,40,.5)] flex-1 outline-none text-[12px] py-[5px] px-[10px] rounded-sm' />
        <img onClick={()=> setIsEmojiVisible(prev =>!prev)} src={emojiicon} alt="icon" className='w-[17px] h-[17px] cursor-pointer'/>
        <div className="picker  absolute right-[-250px] bottom-[50px]">
          {
            isEmojiVisible && <EmojiPicker  onEmojiClick={pickEmoji}/>
          }
        </div>
        <button className=' text-[11px] px-[7px] py-[2px] rounded-sm bg-[#5183fe] hover:bg-[#5182fea1]'>Send</button>
      </div>
      {
        isUserAddedShow && <Adduser/>
      }

    </div>
  )
}

export default Chat;