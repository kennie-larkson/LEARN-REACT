import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component{
    render(){
        return(
            <h1>Hello I am a car!</h1>
        );
    }
}


ReactDOM.render(<Car/>, document.getElementById('car'));
export default Car