import { RESTAURANT_URL }  from "../utils/constants";
import { Link } from "react-router";

const Card = (props) => {
    console.log(props);
    const { id, name, cuisines, costForTwo, cloudinaryImageId , avgRatingString} = props?.restoData;
    return (
        <div className="bg-amber-50">
            <Link className="card-link" to={"/reastaurant/"+id}>
            <div className="p-5">
                <img className="logo-img" src={ RESTAURANT_URL + cloudinaryImageId} />
            </div>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{costForTwo}</h5>
            <h5>{avgRatingString}</h5>
            </Link>
        </div>
    )
}

export default Card;