import React from "react";
class UserClass extends React.Component {
    constructer(props) {
        Super(props)

    }

    render() {
        const { name, address, location } = this.props;
        return (
            <ul className="user-class">
                <li>Name: {name}</li>
                <li>Address: {address}</li>
                <li>Location: {location}</li>
            </ul>
        )
    }
}
export default UserClass;