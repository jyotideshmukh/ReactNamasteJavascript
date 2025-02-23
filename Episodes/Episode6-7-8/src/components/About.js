import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component
{
    constructor(props){
        super(props)
        console.log("Parent constructor called")
    }
    componentDidMount(){
        console.log("Parent componentDidMount called ")
       
    }
    render(){
        console.log("Parent render called")
    return (
       
        <>
        <div className="app-container">
        <h1>About us</h1>
        <div> <UserClass name={"Jyoti Deshmukh"} address={"Pune"} location={"Baner"}/></div>
        </div>
            </>
    )
}
}
export default About;