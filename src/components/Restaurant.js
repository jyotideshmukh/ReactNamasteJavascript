import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Restaurant = () =>{
    const [restarunt, setRestarunt] = useState([])
    const [menuItems, setMenuItems] = useState([]);
    
    useEffect(() => {
        fetchResdata()

    }, [])
    const fetchResdata = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5642452&lng=73.7768511&restaurantId=73434&catalog_qa=undefined&submitAction=ENTER");
        let restaurantData = await data.json();
        const restaurantItem = restaurantData?.data?.cards[2]?.card?.card?.info;
        const resMenuItems = restaurantData?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
        setRestarunt(restaurantItem)
        setMenuItems(resMenuItems)
        console.log(menuItems)
    };
    
   if(restarunt=== null){
    return <Shimmer />
   }
   console.log(restarunt)
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