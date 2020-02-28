import React from 'react';
import ReactDOM from 'react-dom';
import name from './name'
import myFruits from './fruits';
import Car from './car';

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


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
