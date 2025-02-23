import Card from "./Card";
import { useState } from "react";
import useFetchRestaurantData from "../utils/useFetchRestaurantData"
import Shimmer from "./Shimmer";
import { Link } from "react-router"

const CardContainer = () => {
    const [listOfRestarunt, setListOfRestarunt] = useState([]);
    const [filteredListOfRestarunt, setFilteredListOfRestarunt] = useState([])
    const [searchText, setSearchText] = useState("");
    const list = useFetchRestaurantData()
    const restaurantList = list?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestarunt(restaurantList); // Store original list
    setFilteredListOfRestarunt(restaurantList);

    return listOfRestarunt.length === 0 ? (<Shimmer />) : (
        <>
            <Search restaurants={listOfRestarunt}/>
            <div className="card-container">
                <div>
                    <button className="top-rated-button"
                        onClick={() => {
                            const filterRes = listOfRestarunt.filter((res) => res.info.avgRatingString > 4.5)
                            setFilteredListOfRestarunt(filterRes);
                        }}
                    >Top Rated</button>
                </div>
            </div>


            <div className="card-container">
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