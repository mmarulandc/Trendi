import React, { Component } from 'react'
import logo from '../iconos/icono.png';
import '../styles.css';
export default class LoginForm extends Component {


    handleSubmit = (e) => {
        e.preventDeafault();
    }

    render() {
        return (
            <div>
                <div className="container mt-3 " >
                    <div className="row">
                        <div className="card col-6 center" >
                            <div className="card-body">
                                <img src={logo} alt="logo " className="logo-center"></img>
                                <form action={this.handleSubmit} className="mt-3">
                                    <div className="form-group">
                                        <input  type="text" className="form-control" name="name" id ="name" placeholder="usuario" hand/>
                                    </div>
                                    <div className="form-group">
                                        <input  type="password" className="form-control" name="pass" id ="pass" placeholder="contraseña"/>
                                    </div>
                                    <button type="submit" class="btn btn-primary mb-2">Ingreso</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
