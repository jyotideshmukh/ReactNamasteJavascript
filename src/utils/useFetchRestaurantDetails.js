import { useState, useEffect } from "react"
import { RESTAURANTDETAIL_URL } from "../utils/constants"

const useFetchRestaurantDetails = async (resId) => {
    const [resDetailData, setResDetailData] = useState(null)
    useEffect(() => {
        fetchResdata()

    }, [])

    const fetchResdata = async () => {
        const data = await fetch(RESTAURANTDETAIL_URL + resId);
        let restaurantData = await data.json();
        setResDetailData(resData)
    }
    return resData
}
export default useFetchRestaurantDetails;