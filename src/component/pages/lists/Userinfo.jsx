import editeicon from '../../../assest/edit.png';
import moreicon from '../../../assest/more.png';
import videoicon from '../../../assest/video.png';
import avataricon from '../../../assest/avatar.png';
import { useGlobalContext } from '../../../Context';
function Userinfo() {
  const {userInfo} = useGlobalContext();
  return (
    <div className='flex justify-between items-center p-[10px]'>
        <div className="user flex items-center gap-[10px] cursor-pointer">
          <img src={userInfo?.imgUrl || avataricon}  className='w-[30px] h-[30px]  rounded-[50%] object-cover'/>
          <h1 className='font-bold'>{userInfo?.userName}</h1>
        </div>

        <div className="icon flex gap-[10px] items-center">
          <img src={moreicon} alt="icon" className='w-[20px] h-[20px] cursor-pointer object-cover'/>
          <img src={videoicon} alt="icon" className='w-[20px] h-[20px] cursor-pointer object-cover'/>
          <img src={editeicon} alt="icon" className='w-[20px] h-[20px] cursor-pointer object-cover'/>
        </div>
    </div>
  )
}

export default Userinfo;