import { useState, useEffect } from "react"
import { RESTAURANTDETAIL_URL } from "../utils/constants"

const useFetchRestaurantData = async (resId) => {
    const [resData, setResData] = useState(null)
    useEffect(() => {
        fetchResdata()

    }, [])

    const fetchResdata = async () => {
        const data = await fetch(RESTAURANTDETAIL_URL + resId);
        let restaurantData = await data.json();
        setResData(resData)
    }
    return resData
}
export default useFetchRestaurantData;