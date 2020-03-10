import React from 'react';
import ReactDOM from 'react-dom';

class House extends React.Component{
    render(){
    return <p>I am a {this.props.building.rooms} rooms apartment! </p>
    }
}

class Garage extends React.Component{
    render(){
        const houseInfo = { color : "Brown", build : "House", rooms : 5} ;
        return(
            <span>
            <p>I live in a house. It is {houseInfo.color} in color</p>
            <House building = {houseInfo} />
            </span>
        );
    }
}



export default Garage;