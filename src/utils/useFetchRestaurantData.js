import { useState, useEffect } from "react"
import { API_URL } from "../utils/constants"

const useFetchRestaurantData = async () => {
    const [resData, setResData] = useState(null)
    useEffect(() => {
        fetchResdata()

    }, [])

    const fetchResdata = async () => {
        const data = await fetch(API_URL)

        let list = await data.json();
        const restaurantList = list?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResData(resData)
    }
    return resData
}
export default useFetchRestaurantData;