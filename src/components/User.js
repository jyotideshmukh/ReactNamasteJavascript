import { useState } from "react";

const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(1);
    const { name, address, location } = props;
    return (
        <ul>
            <li>Count: {count}</li>
            <li>Count2: {count2}</li>
            <li>Name: {name}</li>
            <li>Address: {address}</li>
            <li>Location: {location}</li>
        </ul>
    )
}
export default User;