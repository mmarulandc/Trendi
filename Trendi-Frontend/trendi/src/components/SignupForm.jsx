import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles.css';
import logo from '../iconos/icono.png';

export default class SignupForm extends Component {
    constructor() {
        super();
        this.state = {
            username:'',
            password:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        })        
    }

    signup = (data) => {
        fetch('/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
        }}).then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    username:'',
                    password:''
                })
            }).catch(err => console.log(err))
    }

    handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.username);
        event.preventDefault();
        this.signup(this.state)
      
    }


    render() {
        return (
            <div>
                <div className="container mt-3 " >
                    <div className="row">
                        <div className="card col-6 center" >
                            <div className="card-body">
                                <img src={logo} alt="logo " className="logo-center"></img>
                                <form onSubmit={this.handleSubmit} className="mt-3">
                                    <div className="form-group">
                                        <input  
                                        type="text" 
                                        className="form-control"  
                                        name="username" 
                                        id ="name" 
                                        placeholder="usuario"
                                        value = {this.state.username}
                                        onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <input  
                                        type="password" 
                                        className="form-control"  
                                        name="password" 
                                        id ="pass" 
                                        placeholder="contraseña" 
                                        value = {this.state.password}
                                        onChange={this.handleChange}/>
                                    </div>
                                    <button type="submit" class="btn btn-primary mb-2">Registro</button>
                                    <label className="ml-5"><Link to="/">Ya tienes cuenta? logeate</Link></label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
