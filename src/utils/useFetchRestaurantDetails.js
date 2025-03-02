import { useState, useEffect } from "react"
import { RESTAURANTDETAIL_URL } from "../utils/constants"

const useFetchRestaurantDetails = async (resId) => {
    const [resDetailData, setResDetailData] = useState(null)
    useEffect(() => {
        fetchResdata()

    }, [])

    const fetchResdata = async () => {
        const data = await fetch(RESTAURANTDETAIL_URL+resId);
        console.log(RESTAURANTDETAIL_URL+resId)
        const resData = await data.json();
        console.log("RESDATA"+resData)
        setResDetailData(resData)
        return resDetailData
    }
    
}
export default useFetchRestaurantDetails;