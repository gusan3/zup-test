import React from 'react'
import {Link, Redirect} from 'react-router-dom'


class Login extends React.Component{

    constructor(props){
        super(props)

        this.state ={
            redirect: false
        }

    }
    
    componentDidMount(){
    }

    render(){
        if (this.state.redirect) {
            return <Redirect push to="/home/" />
          }
        return(
            <div className='loginBackground'>
               <div className='container login'>
                    <div className='loginHeader'>
                        <div style={{padding: 10, backgroundColor: 'rgb(125, 29, 170)'}}>
                            <p style={{color: 'white'}}>Login Form</p>
                        </div>
                    </div>
                    <div className='loginBody'>
                        <div>
                            <input className='loginInput' type='text' placeholder='User Name' />
                        </div>
                        <div>
                            <input className='loginInput' type='password' placeholder='Password' />
                        </div>
                        <div>
                            <div className='loginButton'> 
                            <div onClick={()=>{this.setState({redirect: true})}} style={{margin: 'auto', color:'white', textAlign: 'center'}}>
                               Login
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }}

export default Login