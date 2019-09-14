import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles.css';
import logo from '../iconos/icono.png';

export default class SignupForm extends Component {
    
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            error: '',
            hidden: true
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

    signup = async (data) => {


       await fetch('/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.success) {
                    this.setState({
                        username: '',
                        password: '',
                        error: '',
                        hidden: true
                    })
                } else {
                    this.setState({
                        error: data.message
                    })
                }
            }).catch(err => console.log(err))
    }

    handleSubmit = (event) => {
        
        event.preventDefault();
        let { username, password } = this.state;

        if (username === '' || password === '') {
            this.setState({
                error: 'Todos los campos son obligatorios',
                hidden: false
            });
            return;
        }
        let regex = /[a-zA-Z0-9]/;
        let passwordRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
        if(!regex.test(username)){
            this.setState({
                error: 'El campo usuario solo debe tener alfanumericos',
                hidden: false
            });
            return;
        }
        if(!passwordRegex.test(password)) { 
            this.setState({
                error: 'La contraseña debe contener al menos una mayuscula, un número y un caracter especial ',
                hidden: false
            });
            return;
        }
        
        

        this.signup({
            username: username,
            password: password
        })
        let { error } = this.state;
        if(error !== '') { 
            return;
        }
        
        

    }

    render() {
        let {error,hidden} = this.state;
        let label;
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
                                            id="name"
                                            placeholder="usuario"
                                            value={this.state.username}
                                            onChange={this.handleChange} />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            id="pass"
                                            placeholder="contraseña"
                                            value={this.state.password}
                                            onChange={this.handleChange} />
                                    </div>
                                    <button type="submit" class="btn btn-primary mb-2">Registro</button>
                                    <label className="ml-5"><Link to="/">Ya tienes cuenta? logeate</Link></label>
                                </form>
                                <label>{error}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
