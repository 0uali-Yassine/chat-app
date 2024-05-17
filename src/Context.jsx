import { createContext, useContext, useState } from "react";
import { db } from "./config/config";
import { doc, getDoc } from "firebase/firestore";

const myContext = createContext();
function Context({children}) {
    const [isUserAddedShow,setIsUserAddedShow] = useState(false);
    const [user,setUser] = useState(false);
    const [loadingUserInfo,setLoadingUserInfo] = useState(false);
    const [userInfo,setUserInfo] = useState({});
    const [userUid,setUserUid] = useState({});
    const [Loading,setLoading] = useState(false);

    const fethUserInfo = async (userId)=>{
        setLoadingUserInfo(true);
        const documentRef = doc(db,'users',userId);
        try {
          const data = await getDoc(documentRef);
          setUserInfo(data.data());
          setLoadingUserInfo(false);
        } catch (error) {
          console.log(error);
        }
      }

    return (
    <myContext.Provider value={{isUserAddedShow,setIsUserAddedShow,user,setUser,/*setUserId*/
        setLoadingUserInfo,loadingUserInfo,fethUserInfo,setUserInfo,userInfo
        ,setLoading,Loading,setUserUid,userUid
    }}>
        {children}
    </myContext.Provider>
  )
}
export const useGlobalContext = () =>{
    return useContext(myContext);
}

export default Context;