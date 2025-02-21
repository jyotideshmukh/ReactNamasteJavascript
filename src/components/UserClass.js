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
            
          
                <div className="user-class">
                <button onClick={()=>{
                    //how to modify the state variables
                    this.setState({
                        count:this.state.count+1
                })
                    console.log(count);
                }}>Increase Count</button>
                <ul>
                <li>Count: {count}</li>
                <li>Name: {name}</li>
                <li>Address: {address}</li>
                <li>Location: {location}</li>
                </ul>
                </div>
            
            
        );
    }
}

export default UserClass;
