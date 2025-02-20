import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props); // Fixed typo here
    
        this.state = {
            count: 0,
            count2: 1
        };
    }

    render() {
        const { name, address, location } = this.props;
        const { count, count2 } = this.state;
        return (
            <ul className="user-class">
                <li>Count: {count}</li>
                <li>Count2: {count2}</li>
                <li>Name: {name}</li>
                <li>Address: {address}</li>
                <li>Location: {location}</li>
            </ul>
        );
    }
}

export default UserClass;
