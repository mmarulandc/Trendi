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
        const {username,password} = event.target.value;
        console.log(username)
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    signup = (data) => {

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
                                        <input  type="text" className="form-control"  name="username" id ="name" placeholder="usuario" onChange={this.handleChange}/>
                                    </div>
                                    <div className="form-group">
                                        <input  type="password" className="form-control"  name="password" id ="pass" placeholder="contraseña" onChange={this.handleChange}/>
                                    </div>
                                    <button type="submit" class="btn btn-primary mb-2">Registro</button>
                                    <label className="ml-5"><Link to="/login">Ya tienes cuenta? logeate</Link></label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
