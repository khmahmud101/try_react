import React, { Component } from 'react';

class anotherform extends Component {
    state = {
        title: '',
        body: '',
        userId: '112'
    }

    changeHandler = () => {

    }

    submitHandler = () =>{
        
    }
    render() {
        return (
            <div>
                <form onSubmit={ this.submitHandler }>
                    <input 
                     type="text" className="form-control"
                     name="title"
                     value={ this.state.title }
                     placeholder="Enter your Title"
                     onChange={this.changeHandler }
                    />

                    <textarea className="form-control" name="body" placeholder="Enter your Text" value={this.state.body }>

                    </textarea>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default anotherform;