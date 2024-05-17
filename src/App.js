import Chat from "./component/Chat";
import List from "./component/List";
import Details from "./component/Details";
import Login from "./component/Login";
import Notification from "./component/Notification";
import 'react-toastify/dist/ReactToastify.css';
import { useGlobalContext } from "./Context";
import { useEffect } from "react";
import { auth, } from "./config/config";
function App() {
const {user,setUser,fethUserInfo,Loading,setUserUid} = useGlobalContext();



  useEffect(()=>{
    const unScribe = auth.onAuthStateChanged((user)=>{
      if(!user){
        setUser(false);

      }else{
        fethUserInfo(user.uid);
        setUserUid(user.uid);
        setUser(true);
        
      }
    }) 

    return ()=> unScribe();

  },[])


  


 
  return (
    <div className="App bg-[url('./assest/pexels-ben-cheung-140183-715134.jpg')] text-white h-[100vh] w-[100vw]  bg-cover flex items-center justify-center">
      <main className="main flex  w-[80vw] h-[90vh] border border-[rgba(255,255,255,.125)] bg-[rgba(17,25,40,.75)] backdrop-blur-[19px] backdrop-saturate-[180%] rounded-[12px]">
         {
          user ? (
          <>
            {
              Loading ? <>
                <div className="loaderUser"></div>
                <p className="absolute top-[56%] left-[43%] text-black font-bold">Upload Data...</p>
              </> : (
                <>
                  <List/>
                  <Chat/>
                  <Details/>
                </>
              )
            }
          </>
        ):(<Login/>)
        }
      </main>
        <Notification/>
    </div>
  );
}

export default App;
