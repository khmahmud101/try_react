import React, { Component } from 'react';

class Book extends Component {
    state={
        isEditable: false
    }
    render() {
        let output = this.state.isEditable ? 
                     <input type='text' placeholder='Enter Name' value={this.book.props.name}/>
                     : <p>{this.props.book.name}</p>
        return (
            <div>
                <li className="list-group-item d-flex">
                    { output }
                    <span className="ml-auto">${this.props.book.price}</span>
                    <div>
                        <span style={{ cursor:'pointer' }} onClick={ () => this.setState({
                            isEditable:true
                        }) }>
                        <i className="fas fa-eye-slash"></i>
                        </span>
                         <span style={{ cursor:'pointer' }} onClick={ () => this.props.deleteHandler(this.props.book.id) }>
                        <i className="fas fa-trash"></i>
                        </span>
                    </div>
                </li>
            </div>
        );
    }
}

export default Book;