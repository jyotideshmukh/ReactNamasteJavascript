import { useState, useEffect } from "react";
import {API_URL} from "./constants"

const useRestaurants = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            setLoading(true);
            const response = await fetch(API_URL);
            const data = await response.json();
            const restaurantList = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

            setListOfRestaurants(restaurantList);
            setFilteredListOfRestaurants(restaurantList);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    return {
        listOfRestaurants,
        filteredListOfRestaurants,
        setFilteredListOfRestaurants,
        searchText,
        setSearchText,
        loading,
        error,
    };
};

export default useRestaurants;
