import React, { Component } from 'react';
import axios from 'axios'
const base_url = 'https://jsonplaceholder.typicode.com/'

class PostForma extends Component {
    state = {
        title: '',
        body: '',
        userId: '112',
        isSubmitted:false,
        error: false
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) =>{
        e.preventDefault() 
        axios.post(base_url + 'posts',{ 
            title: this.state.title,
            userId: this.state.userId,
            body: this.state.body,
        })
 
        .then(res =>{
         this.setState({
             isSubmitted: true,
             error: false
         })
 
         console.log(res)
         
 
        })
        .catch(error =>{
            this.setState({
                error:true,
                isSubmitted: false
            })
        } )
     }
  
    render() {
        return (
            <div>
                <form onSubmit={ this.submitHandler }>
                <div className='form-group'>
                     <label>Enter your Full Name</label>
                     <input  className="form-control" type="text" placeholder='Enter your name' name='title' value={this.state.title}
                     
                     onChange = { this.changeHandler }
                     />
                     </div>

                     <div className='form-group'>
                    <textarea className="form-control" name="body" placeholder="Enter your Text" value={this.state.body }
                    onChange={this.changeHandler}
                    />
                    </div>
                    

                    <button type="submit" className="btn btn-primary">Submit</button>
                    { this.state.isSubmitted && <p className=""> Form Submitted</p>}
                    { this.state.error && <p> Something error </p>}
                </form>
            </div>
        );
    }
}

export default PostForma;