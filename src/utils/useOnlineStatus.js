import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    const [ onlineStatus, setOnlineStatus ] = useState(true)
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false)

        });
        window.addEventListener("online", () => {
            setOnlineStatus(true)

        })


    }, [])
    console.log("onlineStatus" + onlineStatus)
    return onlineStatus;
}

export default useOnlineStatus;