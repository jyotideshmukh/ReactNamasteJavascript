import Card from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router"
import useRestaurants from "../utils/useRestaurants"

const CardContainer = () => {
    const { listOfRestaurants, filteredListOfRestaurants, setFilteredListOfRestaurants, searchText, setSearchText, loading, error } = useRestaurants();


    return listOfRestaurants.length === 0 ? (<Shimmer />) : (
        <>
            <div className="searchbar">
                <input 
                className="search" 
                type="text" 
                value={searchText} 
                onChange={(e)=>{
                    setSearchText(e.target.value);
                    console.log(searchText)
                }}/>
                <button onClick={()=>{
                  //fetchdata();  
                  const filteredListOfRestarunt = listOfRestaurants.filter((res) => {
                    console.log(searchText.toLowerCase())
                    console.log(res.info.name.toLowerCase() )
                    return (
                        res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
                        ||
                        res.info.cuisines.join(", ").toLowerCase().includes(searchText.toLowerCase())
                    )
                    
                })
                setFilteredListOfRestaurants(filteredListOfRestarunt)
                  
                }}>Search</button>
                <button className="top-rated-button"
                    onClick={() => {
                        const filterRes = listOfRestaurants.filter((res) => res.info.avgRatingString >= 4.3)
                        console.log(filterRes);
                        setFilteredListOfRestaurants(filterRes);
                    }}
                >Top Rated</button>
            </div>


            <div className="card-container">
                {
                    filteredListOfRestaurants.map((restorantData) =>
                    (
                        <Card key={restorantData.info.id} restoData={restorantData.info} />

                    ))
                }
            </div>
        </>
    )
}
export default CardContainer;





