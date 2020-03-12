import React from  'react'
import ReactDOM from 'react-dom'

class FormHandler extends React.Component{
    constructor(props){
        super(props);
        this.state = { username : ''}
    }

    mySubmitHandler =(ev)=>{
        ev.preventDefault();
        
        alert('You\'re submitting '+ this.state.username);
        
    }

    myChangeHandler =(event)=>{
        this.setState({username : event.target.value})
    }

    render(){
        return(
            <form onSubmit={this.mySubmitHandler} >
                <h1>Hello {this.state.username}</h1>
                <p>Enter your name and submit:</p>
                <input type='text' onChange={this.myChangeHandler} />                 
                <input type='submit'/>
            </form>
        );
    }
}

ReactDOM.render(<FormHandler/>,document.getElementById('form2'));

export default FormHandler

