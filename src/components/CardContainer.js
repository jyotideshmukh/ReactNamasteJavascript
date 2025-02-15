
import resData from "../utils/mockData";
import { API_URL } from "../utils/constants";
import Card from "./Card";
import { useState } from "react";
import { useEffect } from "react";


const CardContainer = () => {
    const [listOfRestarunt, setListOfRestarunt] = useState([]);

    useEffect(() => {

           
        fetchdata()

    })
    async function fetchdata() {
        //console.log("After render");
        try {
            const data = await fetch(API_URL)
            //console.log(data.json());
             let list = await data.json();
             console.log(list.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
            setListOfRestarunt(list.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
            console.log("test")
        } catch (
        error) {
            console.error(error)
        }
        console.log("Let see when it prints")
        
    }

    return (
        <>
            <div className="card-container">
                <button
                    onClick={() => {
                        const filterRes = listOfRestarunt.filter((res) => res.info.avgRatingString > 4.5)
                        setListOfRestarunt(filterRes);
                    }}
                >Top Rated</button>
            </div>
            <div className="card-container">
                {
                    listOfRestarunt.map((restorantData) => <Card key={restorantData.info.id} restoData={restorantData.info} />)
                }
            </div>
        </>
    )
}
export default CardContainer;