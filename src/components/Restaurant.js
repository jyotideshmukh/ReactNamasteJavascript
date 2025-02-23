
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useFetchRestaurantDetails from "../utils/useFetchRestaurantData";

const Restaurant = () =>{
    const [restarunt, setRestarunt] = useState([])
    const [menuItems, setMenuItems] = useState([]);
    const {resId} = useParams()
    //console.log(resId)

    const restaurantData = useFetchRestaurantDetails(resId)
        const restaurantItem = restaurantData?.data?.cards[2]?.card?.card?.info;
        const resMenuItems = restaurantData?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
        //console.log(restaurantItem);
        setRestarunt(restaurantItem)
        setMenuItems(resMenuItems)
        //console.log(menuItems)
    
    
   if(restarunt=== null){
    return <Shimmer />
   }
   //console.log(restarunt)
    const { id, name, cuisines, costForTwoMessage, cloudinaryImageId , avgRatingString,totalRatingsString} = restarunt;
   
    return (
        
        <>
        <h1>{name}</h1>
        <h2>{cuisines?.join(", ")}</h2>
        <h3>{totalRatingsString}</h3>
        <h3>{costForTwoMessage}</h3>
        <h3>Menu Items</h3>
        <ul>
            {
                menuItems.map((menu)=>{
                    return (
                        <li key={menu?.card?.info?.id}>{ menu?.card?.info?.name}</li>

                    )
                })
            }           
        </ul>
        </>
    )
}

export default Restaurant;