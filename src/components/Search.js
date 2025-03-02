import { useState } from "react";
const Search = (props) => {
    const [searchText, setSearchText] = useState("");
    const {restaurants} = props.restaurants
    const [filteredListOfRestarunt, setFilteredListOfRestarunt] = useState([]);

    return (

        <div className="searchbar">
            <input
                className="search"
                type="text"
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                    console.log(searchText)
                }}
            />
            <button onClick={() => {
                //fetchdata();  
                const filteredListOfRestarunt = restaurants.filter((res) => {
                    console.log(searchText.toLowerCase())
                    console.log(res.info.name.toLowerCase())
                    return (
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        ||
                        res.info.cuisines.join(", ").toLowerCase().includes(searchText.toLowerCase())
                    )

                })
                setFilteredListOfRestarunt(filteredListOfRestarunt)

            }}>Search</button>
        </div>

    )
}