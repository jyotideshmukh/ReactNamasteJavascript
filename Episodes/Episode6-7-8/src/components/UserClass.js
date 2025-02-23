import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props); // Fixed typo here
    
        /*this.state = {
            count: 0,
            count2: 1
        };
        console.log("child constuctor called")*/
        this.state ={
            userInfo:{
                name:"User's name",
                location: "User Location",
                
            }
        }
    }
    async componentDidMount(){
        //console.log("Child componentDidMount called ")
        //console.log( "componentDidMount mainly used for API calling")
        const data = await fetch("https://api.github.com/users/jyotideshmukh")
        const json = await data.json();
        this.setState({
            userInfo: {
                name: json.name,
                location: json.location,
                avatar_url: json.avatar_url,
            }
        })
        console.log(this.state.userInfo)
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        console.log("child render called");
        return (
            
          
                <div className="user-class">
               <img src={avatar_url}/>
                <h3>Name: {name}</h3>
                <h3>Location: {location}</h3>
        
                </div>
            
            
        );
    }
}

export default UserClass;
