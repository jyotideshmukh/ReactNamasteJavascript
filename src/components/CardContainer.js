import Card from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router"
import useRestaurants from "../utils/useRestaurants"

const CardContainer = () => {
    const { listOfRestaurants, filteredListOfRestaurants, setFilteredListOfRestaurants, searchText, setSearchText, loading, error } = useRestaurants();


    return listOfRestaurants.length === 0 ? (<Shimmer />) : (
        <>
            <div className="searchbar flex justify-center p-5">
                <input 
                className="w-100 border-red-200 border-1 rounded-sm" 
                type="text" 
                value={searchText} 
                onChange={(e)=>{
                    setSearchText(e.target.value);
                    console.log(searchText)
                }}/>
                <button className="ml-2 p-2 bg-red-600 border-red-800 border-1 rounded-sm text-amber-50" 
                onClick={()=>{
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
                <button className="ml-2 p-2 bg-red-600 border-red-800 border-1 rounded-sm text-amber-50"
                    onClick={() => {
                        const filterRes = listOfRestaurants.filter((res) => res.info.avgRatingString >= 4.3)
                        console.log(filterRes);
                        setFilteredListOfRestaurants(filterRes);
                    }}
                >Top Rated</button>
            </div>


            <div className="grid grid-flow-col grid-rows-2 gap-4">
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





