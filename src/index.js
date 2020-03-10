import React from 'react';
import ReactDOM from 'react-dom';
import name from './name'
import myFruits from './fruits';
import Car from './car';
import Garage from './doublecomponents';
import Vehicle from './reactstate'
import NewVehicle from './changestate'
// import Garage from './doublecomponents'

// const myFirstElement = (<h1>Hello React!</h1> );

const myElement = (
    <table className="eleclass">
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <td>Lawal</td>
        </tr>
        <tr>
            <td>Abdulrafiu</td>
        </tr>
    </table>
);

const inputEle = <div>Enter Value<input type="text" /></div>



ReactDOM.render(<p>My name is : {name}</p>, document.getElementById('root4'));

ReactDOM.render(inputEle, document.getElementById('root'));
ReactDOM.render(<p>Hello</p>, document.getElementById('root2'));
ReactDOM.render(myElement, document.getElementById('root3'));
ReactDOM.render(myFruits, document.getElementById('fruits'));
ReactDOM.render(<p>This is another car instance<Car/></p>, document.getElementById('car2'));
ReactDOM.render(<Garage />, document.getElementById('garage'));
ReactDOM.render(<Vehicle />, document.getElementById('container'));
ReactDOM.render(<NewVehicle />, document.getElementById('container2'));



