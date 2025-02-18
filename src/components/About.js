import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
    return (
        <>
        <div className="app-container">
        <h1>About us</h1>
        <div> <User name={"Jyoti Deshmukh"} address={"Pune"} location={"Baner"}/></div>
        <div> <UserClass name={"Jyoti Deshmukh"} address={"Pune"} location={"Baner"}/></div>
        </div>
            </>
    )
}
export default About;