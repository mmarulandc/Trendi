import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles.css';
import logo from '../iconos/icono.png';
import AuthService from '../AuthService';

export default class LoginForm extends Component {
    
    constructor(props) {
        super();
        this.state = {
            username:'',
            password:''
        }
        this.Auth = new AuthService();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.sendName(this.state.username);
        this.Auth.login(this.state.username,this.state.password)
            .then(res =>{
               this.props.history.replace('/trendi');
            })
            .catch(err =>{
                alert(err);
            })
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
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
                                        <input  type="text" className="form-control" value={this.state.username} onChange={this.handleChange} name="username" id ="name" placeholder="usuario"/>
                                    </div>
                                    <div className="form-group">
                                        <input  type="password" className="form-control" value={this.state.password} onChange={this.handleChange} name="password" id ="pass" placeholder="contraseña"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary mb-2">Ingreso</button>
                                    <label className="ml-5"><Link to="/signup">Registrate</Link></label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
