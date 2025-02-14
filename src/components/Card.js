import { RESTAURANT_URL }  from "../utils/constants";

const Card = (props) => {
    //console.log(props);
    const { name, cuisines, costForTwo, cloudinaryImageId } = props?.restoData;
    return (
        <div className="card">
            <div className="card-img-container">
                <img className="logo-img" src={ RESTAURANT_URL + cloudinaryImageId} />
            </div>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{costForTwo}</h5>
        </div>
    )
}

export default Card;