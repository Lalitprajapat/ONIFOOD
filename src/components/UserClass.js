import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cnt: 0, 
            cnt2: 1,       
        }
    }
    componentDidMount(){
        console.log("Component get commited");
        
    }
    render(){
        return (
            <div className="user-card">
                <h2>Name: Santa</h2>
                <h3></h3>
                <h3>Location: Cart</h3>
                <h4>Contact: Unknown</h4>
            </div>
        );
    }
}
export default UserClass;