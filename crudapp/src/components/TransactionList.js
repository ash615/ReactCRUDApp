import React, { Component } from 'react';
import TransactionForm from './TransactionForm'

class TransactionList extends Component{
    
    //Updating the data at local Storage


    // Editing the data is more typical than Adding 
    // and Deleting the Data.

    state = {
        currentIndex: -1,
        list: this.returnList()
    }

    returnList(){
        if(localStorage.getItem('transactions') == null)
                localStorage.setItem('transactions', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('transactions'))
    }

    onAddOrEdit = (data) => {
        var list = this.returnList()
        if(this.state.currentIndex == -1)
            list.push(data)
        else
            list[this.state.currentIndex] = data
        localStorage.setItem('transactions',JSON.stringify(list))
        this.setState({list, currentIndex: -1})
    }


    
    handleEdit = (index) => {
        this.setState({
            currentIndex: index
        })    
    }

    handleDelete = (index) => {
        var list = this.returnList()
        list.splice(index, 1)
        localStorage.setItem('transactions',JSON.stringify(list))
        this.setState({list, currentIndex: -1})
    }



    render(){
        return(
            <div>
                <TransactionForm onAddOrEdit={this.onAddOrEdit}
                currentIndex={this.state.currentIndex} 
                list={this.state.list}/>
                <h1>List of All Transactions</h1>

                <hr/>
                
                <table className="t">
                    <tr><th>AcNo</th>
                        <th>IFSC Code</th>
                        <th>Bal. Amt.</th></tr>
                    <tbody>
                        {
                            this.state.list.map((item,index)=>{
                                return<tr key ={index}>
                                    <td>{item.bAccountNo}</td>
                                    <td>{item.iFSC}</td>
                                    <td>{item.amount}</td>
                                    <td><button onClick ={() => this.handleEdit(index)}>Edit</button></td>
                                    <td><button onClick ={() => this.handleDelete(index)}>Delete</button></td>
                                    </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TransactionList;
