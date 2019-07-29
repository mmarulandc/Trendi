import React, { Component } from 'react'
import Header from './Header';
import AuthService from '../AuthService';
import WithAuth from '../WithAuth';
import TextBoxForm from './TextBoxForm';
import Commentary from './Commentary';
const Auth = new AuthService();

class CommentsArea extends Component {

    state = {
        username: '',
        commentaries:[]
        
    }
    
    getCommentaries = () =>{
         fetch('http://localhost:3000/api/post/')
         .then(res => res.json())
         .then(data => {
             this.setState({
                 commentaries:data
             })
         })
    }

    componentDidMount(){
        localStorage.setItem('username', this.props.user.username)
        this.setState({
            username:this.props.user.username
        })
        this.getCommentaries()
        alert("Bienvenido @"+localStorage.getItem('username'))
    }

    componentDidUpdate() {

    }

    handleLogout = () => {
        Auth.logout();
        this.props.history.replace('/login');
    }


    
    render() {
        return (
            <div>
                <Header
                    header = {"TRENDI"}
                    handleLogout = {this.handleLogout}
                />
                <div className="container mt-2">
                    <div className="row">
                        <div className="col-md-3  ">
                            <TextBoxForm
                                username = {this.state.username}
                            />
                            
                        </div>
                        <div className="col-xl-9">
                            <div className="row">
                                {
                                    this.state.commentaries.map(commentary =>{
                                        return(

                                            <div className="col-sm-2">
                                                <Commentary/>
                                            </div>
                                        )
                                    }

                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default WithAuth(CommentsArea);
