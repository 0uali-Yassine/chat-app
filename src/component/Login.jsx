import { useState } from 'react';
import avatarimg from '../../src/assest/avatar.png';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth ,db} from '../config/config';
import { doc, setDoc } from 'firebase/firestore';
import uploadfile from '../config/storage';
import { useGlobalContext } from '../Context';

function Login() {
    const {fethUserInfo,setLoading} = useGlobalContext();
    const [avatar,setAvatar] = useState({
        file:null,
        url:''
    });
    const [userName,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [passwrod,setPassword] = useState('');
    const [loadingForm,setLodingForm] = useState(false);


    const handelAvatar = (e)=>{
        setAvatar({
            file:e.target.files[0],
            url:URL.createObjectURL(e.target.files[0])
        })
    }

    

    const handlRegister = async (e)=>{
        e.preventDefault();
        setLodingForm(true);
        setLoading(true);
        try {
           const response =  await createUserWithEmailAndPassword(auth,email,passwrod);
           const image = await uploadfile(avatar.file);
           await setDoc(doc(db,'users',response.user.uid),{
               userName,
               email,
               imgUrl:image,
               id:response.user.uid,
               blocked:[],
            });
            
            await setDoc(doc(db,'userChats',response.user.uid),{
                chats:[],
             });

            await fethUserInfo(response.user.uid);
            toast.success('Your Account is Created!');
            setEmail('');
            setPassword('');
            setUserName('');
            setAvatar({file:null,url:''});
        } catch (error) {
            console.error(error);
        }finally{
            setLodingForm(false);
            setLoading(false)

        }

    }

    const handlSignIn = async (e)=>{
        e.preventDefault();
        setLoading(true);
        const dataForm = new FormData(e.target);
        const {Email,Password} = Object.fromEntries(dataForm);
        try {
            await signInWithEmailAndPassword(auth,Email,Password);
            toast.success('You are Log In');
        } catch (error) {
            console.error(error);
            toast.warn(''+error.code);
            console.log('error');
        }finally{
            setLoading(false);
        }
    }
    
   
  return (
    <div className='login p-[20px] w-[100%]  flex justify-between items-center '>
        <form onSubmit={handlSignIn} className='flex-1 self-center  flex flex-col items-center  gap-[15px] '>
            <h1 className='font-bold'>Welcom back,</h1>
            <input name='Email'  type="text" placeholder='Email...' className='text-[13px] px-[10px] py-[5px] outline-none bg-[rgba(17,25,40,.5)] w-[200px]'/>
            <input  name="Password"   type="password" placeholder='Passwrod...' className='text-[13px] px-[10px] py-[5px] outline-none bg-[rgba(17,25,40,.5)] w-[200px]'/>
            <button  className='text-[14px] font-bold bg-[#5183fe] hover:bg-[#5182fec2] px-[10px] py-[5px] w-[200px]'>
            {
                loadingForm ? <div class="loader"></div> :'Sign In'
            }
            </button>
        </form>

        <span className='line border h-[100%] border-[#dddddd35]'></span>
        
        <form onSubmit={handlRegister} className='flex-1 flex flex-col  gap-[15px] items-center '>
            <h1  className='font-bold'>Create an Account</h1>
            <div className='flex items-center gap-[8px] w-[200px]'>
                <img src={avatar.url || avatarimg} alt="avatar" className='w-[40px] h-[40px] rounded-[10%] object-cover'/>
                <input onChange={handelAvatar} id='file' type="file"  className='hidden'/>
                <label htmlFor="file" className='underline'>Upload en avatar</label>
            </div>
            <input type="text" onChange={(e)=> setUserName(e.target.value)} value={userName} placeholder='UserName...' className='text-[13px] px-[10px] py-[5px] outline-none bg-[rgba(17,25,40,.5)] w-[200px]'/>
            <input type="text" onChange={(e)=> setEmail(e.target.value)}  value={email} placeholder='Email...' className='text-[13px] px-[10px] py-[5px] outline-none bg-[rgba(17,25,40,.5)] w-[200px]'/>
            <input type="password" onChange={(e)=> setPassword(e.target.value)}  value={passwrod} placeholder='Passwrod...' className='text-[13px] px-[10px] py-[5px] outline-none bg-[rgba(17,25,40,.5)] w-[200px]'/>
            <button className='text-[14px] font-bold bg-[#5183fe] hover:bg-[#5182fec2] px-[10px] py-[5px] w-[200px]' style={{cursor: loadingForm ? 'not-allowed':'pointer'}}>
                {
                    loadingForm ? <div class="loader"></div> :'Sign Up'
                }
            </button>
        </form>
    </div>
  )
}

export default Login;