import React, {Component} from 'react';
import TransactionList from './TransactionList'
class TransactionForm extends Component{
    

    state={
        ...this.returnStateObject()
    }

    returnStateObject(){
        
        if(this.props.currentIndex==-1)
        {
            return{
                bAccountNo: '',
                iFSC: '',
                bName: '',
                amount: ''
            }
        }
        else
        return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps){
        if(prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length )
        this.setState({...this.returnStateObject()})
    }

    handleInputChange = (e) => {
       this.setState({
           [e.target.name]: e.target.value
       })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAddOrEdit(this.state)
    }

    render(){
        return(
            <form autoComplete = "off" onSubmit={this.handleSubmit} className="f">
                <input type = "text" name ="bAccountNo" value={this.state.bAccountNo} 
                placeholder = "Enter A/C No:" onChange={this.handleInputChange}/>
                <br/>
                <input type = "text" name ="iFSC" value={this.state.iFSC} 
                placeholder = "Enter  IFSC Code:" onChange={this.handleInputChange}/>
                <br/>
                <input type = "text" name ="bName" value={this.state.bName} 
                placeholder = "Enter Bank Name:" onChange={this.handleInputChange}/>
                <br/>
                <input type = "text" name ="amount" value={this.state.amount} 
                placeholder = "Enter Amount:" onChange={this.handleInputChange}/>
                <br/>
                <button type = "submit">SUBMIT</button>
            </form>
        );
    }
};

export default TransactionForm;
