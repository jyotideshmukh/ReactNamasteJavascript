import { RESTAURANT_URL }  from "../utils/constants";
import { Link } from "react-router";

const Card = (props) => {
    console.log(props);
    const { id, name, cuisines, costForTwo, cloudinaryImageId , avgRatingString} = props?.restoData;
    return (
        <div className="w-4 justify-items-normal">
            <Link className="card-link" to={"/reastaurant/"+id}>
            <div className="card-img-container w-3.5">
                <img className="logo-img" src={ RESTAURANT_URL + cloudinaryImageId} />
            </div>
            <h3 className="">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{costForTwo}</h5>
            <h5>{avgRatingString}</h5>
            </Link>
        </div>
    )
}

export default Card;