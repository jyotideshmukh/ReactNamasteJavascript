
import resData from "../utils/mockData";
import Card from "./Card";
import { useState } from "react";


const CardContainer = () => {
    const [listOfRestarunt, setListOfRestarunt] = useState(resData);
    console.log(listOfRestarunt);
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