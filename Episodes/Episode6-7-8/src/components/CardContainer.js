import { API_URL } from "../utils/constants";
import Card from "./Card";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router"

const CardContainer = () => {
    const [listOfRestarunt, setListOfRestarunt] = useState([]);
    const [filteredListOfRestarunt, setFilteredListOfRestarunt] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetchdata()

    }, [])
    async function fetchdata() {

        try {
            const data = await fetch(API_URL)

            let list = await data.json();
            const restaurantList = list?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setListOfRestarunt(restaurantList); // Store original list
            setFilteredListOfRestarunt(restaurantList);
        } catch (
        error) {
            console.error(error)
        }
        //console.log("Let see when it prints")

    }

    return listOfRestarunt.length === 0 ? (<Shimmer />) : (
        <>
            <div className="card-container">
                <div className="searchbar">
                    <input
                        className="search"
                        type="text"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                            console.log(searchText)
                        }} />
                    <button className="bg-blue-600" onClick={() => {
                        //fetchdata();  
                        const filteredListOfRestarunt = listOfRestarunt.filter((res) => {
                            console.log(searchText.toLowerCase())
                            console.log(res.info.name.toLowerCase())
                            return (
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                ||
                                res.info.cuisines.join(", ").toLowerCase().includes(searchText.toLowerCase())
                            )

                        })
                        setFilteredListOfRestarunt(filteredListOfRestarunt)

                    }}>Search</button>
                    <button className="bg-blue-600"
                        onClick={() => {
                            const filterRes = listOfRestarunt.filter((res) => res.info.avgRatingString > 4.5)
                            setFilteredListOfRestarunt(filterRes);
                        }}
                    >Top Rated</button>
                </div>
            </div>


            <div className=" flex justify-center">
                {
                    filteredListOfRestarunt.map((restorantData) =>
                    (
                        <Card key={restorantData.info.id} restoData={restorantData.info} />

                    ))
                }
            </div>
        </>
    )
}
export default CardContainer;