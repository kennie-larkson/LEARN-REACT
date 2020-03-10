import React from 'react'
import ReactDOM from  'react-dom'

class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = { username : ''}
    }
    myEventHandler=(ev)=>{
        this.setState({username : ev.target.value})
    }
    render(){
        return(
            <div>
                <form>
                <h1>Hello {this.state.username}</h1>
                <p>Enter your name:</p>
                <input type='text' onChange = {this.myEventHandler} />
                </form>
            </div>
        )
    }
}

ReactDOM.render(<MyForm />,document.getElementById('form'));

export default MyForm