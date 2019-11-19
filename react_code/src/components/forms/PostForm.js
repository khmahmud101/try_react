 import React, { Component } from 'react';
 
 const initialState = {
    
        name: '',
        email:'',
        password: '',
        bio: '',
        country: '',
        gender: '',
        skills: [],
    
 }
 class PostForm extends Component {
     constructor(){
         super()

         this.myform = React.createRef()
     }
   state = initialState;
   changeHandler =(event) =>{
      if (event.target.type ==='checkbox'){
           if(event.target.checked) {
               this.setState({
                   ...this.state,
                   skills: this.state.skills.concat(event.target.value)
               })
           }
           else{
               this.setState({
                   ...this.state,
                   skills:this.state.skills.filter(skill=> skill !== event.target.value)
               })
           }
      }
      else{
          this.setState({
              [event.target.name]: event.target.value
          })
      }
   }

   submitHandler =(event) =>{
        event.preventDefault()
        console.log(this.state)
        this.myform.current.reset()
        this.setState({
            ...initialState
        })
}
     render() {
         return (
            <div>
                 <form ref={this.myform } onSubmit={this.submitHandler }>
                     <div className='form-group'>
                     <label htmlFor="name">Enter your Full Name</label>
                     <input  className="form-control" type="text" placeholder='Enter your name' name='name' id='name' value={this.state.name}
                     
                     onChange = { this.changeHandler }
                     />
                     </div>

                     <div className='form-group'>
                     <label htmlFor="email">Enter your email</label>
                     <input className="form-control" type="email" placeholder='Enter your email' name='email' id='email' value={this.state.email}
                     
                     onChange = { this.changeHandler }
                     />
                     </div>

                     <div className='form-group'>
                     <label htmlFor="password">Enter your password</label>
                     <input className="form-control" type="password" placeholder='Enter your password' name='password' id='password' value={this.state.password}
                     
                     onChange = { this.changeHandler }
                     />
                     </div>

                     
                     <div className='form-group'>
                     <label htmlFor="bio">Enter your Bio</label>
                     <textarea className="form-control" type="text" placeholder='Enter your Bio' name='bio' id='bio' value={this.state.bio}
                     
                     onChange = { this.changeHandler }
                     />
                     </div>

                     <div className="form-group">
                         <label htmlFor="country">Choose tour country</label>
                         <select className="form-control" onChange={this.changeHandler } name="country" id="country">
                            <option value="Bangladesh"> Bangladesh</option>
                            <option value="Australia"> Australia</option>
                            <option value="Germany"> Germany</option>
                            <option value="India"> India </option>

                         </select>
                     </div>

                     <div className="form-group">
                        <div className="form-check">

                            <input onChange={this.changeHandler} type="radio" name="gender" id="gender1" value="male"/>
                            <label htmlFor="gender1">Male</label>
                        </div>

                        <div className="form-check">

                            <input onChange={this.changeHandler} type="radio" name="gender" id="gender2" value="female"/>
                            <label htmlFor="gender2">Female</label>
                        </div>

                        <div className="form-check">

                            <input onChange={this.changeHandler}  type="radio" name="gender" id="gender3" value="other"/>
                            <label htmlFor="gender3">other</label>
                        </div>
                     </div>

                     <div className="form-group">
                        <div className='form-check'>
                            <input name = "skills" onChange={this.changeHandler} id= "js" className="form-check-input" type="checkbox" value="Javascript"/>
                            <label htmlFor="js"> Javascript </label>
                        </div>

                        <div className='form-check'>
                            <input name = "skills" onChange={this.changeHandler} id= "react" className="form-check-input" type="checkbox" value="reactjs"/>
                            <label htmlFor="react"> ReactJS </label>
                        </div>

                        <div className='form-check'>
                            <input name = "skills" onChange={this.changeHandler} id= "angular" className="form-check-input" type="checkbox" value="angularjs"/>
                            <label htmlFor="angular"> Angular </label>
                        </div>
                     </div>

                     <button type="submit" className="btn btn-primary">Submit</button>
                 </form>
             </div>
         );
     }
 }
 
 export default PostForm;