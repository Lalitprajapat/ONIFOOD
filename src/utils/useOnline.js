import { useEffect, useState } from "react";

const useOnline = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(()=>{
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });

        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        });
        return () => {
            window.removeEventListener("online", ()=>{
                setOnlineStatus(true);
            });
            window.removeEventListener("offline", () => {
                setOnlineStatus(false);
            });
          };

    },[]);
    
    return onlineStatus;
};
export default useOnline;