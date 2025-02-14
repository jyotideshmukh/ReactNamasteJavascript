import resData from "../utils/mockData";
import Card from "./Card";

const CardContainer = () => {
    return (
        <div className="card-container">
            {
                resData.map((restorantData) => <Card key={restorantData.info.id} restoData={restorantData.info} />)
            }
        </div>
    )
}
export default CardContainer;