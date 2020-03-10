import React from 'react';
import ReactDOM from 'react-dom';



class Car extends React.Component{
    render(){
    return <h2>I am a {this.props.color} car!</h2>
    }
}

ReactDOM.render(<Car color='blue' />, document.getElementById('car'));

export default Car