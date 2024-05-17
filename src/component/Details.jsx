import avataricon from '../../src/assest/avatar.png';
import arrowdownicon from '../../src/assest/arrowDown.png';
import arrowupicon from '../../src/assest/arrowUp.png';
import bgimg from '../../src/assest/pexels-ben-cheung-140183-715134.jpg';
import downloadicon from '../../src/assest/download.png';
import { toast } from 'react-toastify';
import { auth } from '../config/config';
import { signOut } from 'firebase/auth';

function Details() {

  const LogOut = async ()=>{
    try {
      await signOut(auth);
      
    } catch (error) {
      console.log(error);
      toast.warn('You Log Out');
    }
  }
  return (
    <div className='grow-[1] flex flex-col '>
      <div className="user flex flex-col p-[10px] gap-[5px] border-b-[#dddddd35] border-b-[1px] items-center text-center">
        <img src={avataricon} alt="avatar" className='w-[50px] h-[50px] rounded-[50%]' />
        <p className='text-[14px] font-bold'>YASSINE ZEROUALI</p>
        <span className='text-[13px]'>gefe efueuf efef efhefgvbfezfe efe</span>
      </div>

      <div className="info overflow-auto flex-1 flex flex-col gap-[10px] p-[10px]">
        <div className="option flex justify-between items-center">
          <p className='text-[14px] font-bold'>Chat setting</p>
          <div className='bg-[rgba(17,25,40,.5)] p-[5px] rounded-[50%]'>
            <img src={arrowdownicon} alt="icon" className='w-[10px] h-[10px]' />
          </div>
        </div>
        
        <div className="option flex justify-between items-center">
          <p className='text-[14px] font-bold'>Privacy & help</p>
          <div className='bg-[rgba(17,25,40,.5)] p-[5px] rounded-[50%]'>
            <img src={arrowdownicon} alt="icon" className='w-[10px] h-[10px]' />
          </div>
        </div>

        <div className="option flex gap-[5px] flex-col">
          <div className='flex justify-between items-center'>
            <p className='text-[14px] font-bold'>Sharead photos</p>
            <div className='bg-[rgba(17,25,40,.5)] p-[5px] rounded-[50%]'>
              <img src={arrowupicon} alt="icon" className='w-[10px] h-[10px]' />
            </div>
          </div>

          <div className="photos mb-[5px] flex justify-between items-center">
            <div className='flex gap-[5px] '>
              <img src={bgimg} alt="image" className='w-[30px] h-[30px] object-cover rounded-sm ' />
              <span className='text-[13px] self-end'>photo_2024_2.png</span>
            </div>
            <div className='bg-[rgba(17,25,40,.5)] p-[5px] rounded-[50%] cursor-pointer'>
              <img src={downloadicon} alt="icon" className='w-[10px] h-[10px]' />
            </div>
          </div>
          <div className="photos mb-[5px] flex justify-between items-center">
            <div className='flex gap-[5px] '>
              <img src={bgimg} alt="image" className='w-[30px] h-[30px] object-cover rounded-sm ' />
              <span className='text-[13px] self-end'>photo_2024_2.png</span>
            </div>
            <div className='bg-[rgba(17,25,40,.5)] p-[5px] rounded-[50%] cursor-pointer'>
              <img src={downloadicon} alt="icon" className='w-[10px] h-[10px]' />
            </div>
          </div>
          <div className="photos mb-[5px] flex justify-between items-center">
            <div className='flex gap-[5px] '>
              <img src={bgimg} alt="image" className='w-[30px] h-[30px] object-cover rounded-sm ' />
              <span className='text-[13px] self-end'>photo_2024_2.png</span>
            </div>
            <div className='bg-[rgba(17,25,40,.5)] p-[5px] rounded-[50%] cursor-pointer'>
              <img src={downloadicon} alt="icon" className='w-[10px] h-[10px]' />
            </div>
          </div>
          <div className="photos mb-[5px] flex justify-between items-center">
            <div className='flex gap-[5px] '>
              <img src={bgimg} alt="image" className='w-[30px] h-[30px] object-cover rounded-sm ' />
              <span className='text-[13px] self-end'>photo_2024_2.png</span>
            </div>
            <div className='bg-[rgba(17,25,40,.5)] p-[5px] rounded-[50%] cursor-pointer'>
              <img src={downloadicon} alt="icon" className='w-[10px] h-[10px]' />
            </div>
          </div>
          <div className="photos mb-[5px] flex justify-between items-center">
            <div className='flex gap-[5px] '>
              <img src={bgimg} alt="bg_img" className='w-[30px] h-[30px] object-cover rounded-sm ' />
              <span className='text-[13px] self-end'>photo_2024_2.png</span>
            </div>
            <div className='bg-[rgba(17,25,40,.5)] p-[5px] rounded-[50%] cursor-pointer'>
              <img src={downloadicon} alt="icon" className='w-[10px] h-[10px]' />
            </div>
          </div>
          <div className="photos mb-[5px] flex justify-between items-center">
            <div className='flex gap-[5px] '>
              <img src={bgimg} alt="bg_img" className='w-[30px] h-[30px] object-cover rounded-sm ' />
              <span className='text-[13px] self-end'>photo_2024_2.png</span>
            </div>
            <div className='bg-[rgba(17,25,40,.5)] p-[5px] rounded-[50%] cursor-pointer'>
              <img src={downloadicon} alt="icon" className='w-[10px] h-[10px]' />
            </div>
          </div>
          <div className="photos mb-[5px] flex justify-between items-center">
            <div className='flex gap-[5px] '>
              <img src={bgimg} alt="bg_img" className='w-[30px] h-[30px] object-cover rounded-sm ' />
              <span className='text-[13px] self-end'>photo_2024_2.png</span>
            </div>
            <div className='bg-[rgba(17,25,40,.5)] p-[5px] rounded-[50%] cursor-pointer'>
              <img src={downloadicon} alt="icon" className='w-[10px] h-[10px]' />
            </div>
          </div>
        </div>
        <div className="option flex justify-between items-center">
          <p className='text-[14px] font-bold'>Shared files</p>
          <div className='bg-[rgba(17,25,40,.5)] p-[5px] rounded-[50%]'>
            <img src={arrowdownicon} alt="icon" className='w-[10px] h-[10px]' />
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-[5px] p-[10px]'>
        <button className='px-[10px] py-[4px]  bg-[rgba(230,74,50,.553)] hover:bg-[rgba(220,20,60,.796)] text-[14px] font-medium'>Block user</button>
        <button onClick={LogOut} className='px-[10px] py-[4px]  bg-blue-500 text-[14px] font-medium'>Log out</button>
      </div>
    </div>
  )
}

export default Details;