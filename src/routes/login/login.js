import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/button/Button'
import { FormInput } from '../components/input/FormInput'
import './style.scss'
import axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:''
        }
    }
    

    handleChange = (event) => {
        const { value, name } = event.target
        this.setState({ [name]: value }, ()=>console.log(this.state))
        ;
    }

    handleSubmit = (event) => {
        const { email, password} = this.state
        event.preventDefault()
        if (email || password !== '') {
            axios.post('http://localhost:8000/login', {
                email,
                password
            })
            .then( (response) => {
                this.props.history.push('/')
            })
            .catch((error) => {
                console.log(error);
            });
            
        } else {
            alert('Field all empty fields')
            
        }
        this.setState({ password:'', email:'' })
    }

    render() {
        const { email, password } = this.state
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span className='sub-title'>Sign in with your email and password</span>
                <FormInput 
                    type='email' 
                    name='email' 
                    value={email} 
                    onChange={this.handleChange}
                    label='Email'
                    required
                />

                <FormInput 
                    type='password' 
                    name='password' 
                    value={password} 
                    handleChange={this.handleChange}
                    label='Password'
                    required
                />
                <Button onClick={this.handleSubmit}>Sign in</Button>
                <span className='sub-title'>Don't have an account yet? <Link className='option' to='/register'>Sign up</Link></span>
            </div>
        )
    }
}
export default Login