import { arrayUnion, collection, doc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';
import avatarimg from '../../../assest/avatar.png';
import { db } from '../../../config/config';
import { useState } from 'react';
import { useGlobalContext } from '../../../Context';
function Adduser() {
    const [user,setUser] = useState(null);
    const {userUid} = useGlobalContext();

    const handlUser = async e =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get('username');

        try {
            const userColletion = collection(db,'users');
            const q = query(userColletion,where('userName','==',username));
            const querySnapShot = await getDocs(q);
             
            if(querySnapShot){
                setUser(querySnapShot.docs[0].data());
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handlAdd  = async ()=>{
        const chatRef = collection(db,'chats');
        const userChatsRef = collection(db,'userChats');

        try {
            const newChatRef = doc(chatRef);
            await setDoc(newChatRef,{
                createsAt:serverTimestamp(),
                messages:[],
            })

            await updateDoc(doc(userChatsRef,user.id),{
                chats:arrayUnion({
                    chatId:newChatRef.id,
                    lastMessage:'',
                    reciveId:userUid,
                    updatedAt:Date.now()
                })
            })
            console.log(newChatRef.id);
            
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div className='border p-[20px] absolute flex flex-col gap-[10px] top-[30%] left-[30%] bg-[rgba(17,25,40,.5)] w-[250px]'>
        <form onSubmit={handlUser}>
            <h1 className='font-bold'>Add new user</h1>
            <div className='flex gap-[10px]'>
                <input type="text" name='username' placeholder='Username...' className='w-[150px] outline-none  text-black rounded-sm text-[14px] px-[10px] py-[5px]' />
                <button className='text-[14px]  hover:bg-[#5182fea4] bg-[#5183fe] px-[10px] py-[5px] rounded-sm'>Search</button>
            </div>
        </form>
        {
            user && <div className='flex justify-between items-center'>
                        <div className='flex gap-[5px] items-center'>
                            <img src={user.imgUrl || avatarimg} alt="avatar" className='w-[30px] h-[30px] rounded-[50%]'/>
                            <span className='text-[13px] font-medium'>{user.userName}</span>
                        </div>
                        <button onClick={handlAdd} className='bg-[#5183fe] hover:bg-[#5182fea4] text-[14px] mr-[-14px] px-[10px] py-[5px] rounded-sm'>Add User</button>
                     </div>
        }
    </div>
  )
}

export default Adduser;