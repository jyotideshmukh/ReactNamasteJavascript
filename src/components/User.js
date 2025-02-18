const User = (props)=>{
    const {name, address, location} = props;
    return (
        <ul>
        <li>Name: {name}</li>
        <li>Address: {address}</li>
        <li>Location: {location}</li>
        </ul>
    )
}
export default User;