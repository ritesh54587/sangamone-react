import React from 'react';

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Ritesh Kumar',
            email: 'riteshkr123@gmail.com'

        }
    }

    updateState(){
        this.setState({
            name: 'Rakesh Kumar Das'
        })
    }
    render() {

        return (
            <div>
                <h1>Hello {this.state.name}</h1>
                <h2>Email: {this.state.email}</h2>
                <button onClick={()=>{this.updateState()}}>Update Name</button>
            </div>

        )
    }
}

export default Profile;