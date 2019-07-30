import React, { Component } from 'react'
import Header from './Header';
import AuthService from '../AuthService';
import WithAuth from '../WithAuth';
import TextBoxForm from './TextBoxForm';
import Commentary from './Commentary';
const Auth = new AuthService();

class CommentsArea extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            commentaries:[],
            editData:{
                id:'',
                trend:'',
                commentary:''
            
            }
        }
    }
    
    updateCommentary =  (id) => {
        

    }

    deleteComentary = async (id) => {
        console.log(id);
        if(window.confirm('Are you sure you want to delete it?')) {
            fetch(`http://localhost:3000/api/post/${id}`, {
              method: 'DELETE',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                this.getCommentaries();
              });
          }
    }

    getCommentaries = () =>{
         fetch('http://localhost:3000/api/post/')
         .then(res => res.json())
         .then(data => {
             console.log(data)
             this.setState({
                 commentaries:data.reverse()
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
                                getCommentaries = {this.getCommentaries}
                            />
                            
                        </div>
                        <div className="col-xl-9 bg-secondary ">

                                {   
                                    this.state.commentaries.map(commentary =>{
                                        return(
                                            <div 
                                            key = {commentary._id}
                                            className="row mt-1 mb-1">

                                            <div className="col-md-8 "
                                                >
                                                <Commentary
                                                    commentary = {commentary}
                                                    deleteCommentary = {this.deleteComentary}
                                                    updateCommentary = {this.updateCommentary}
                                                />
                                            </div>
                                        </div>
                                        )
                                    }
                                    )
                                }
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default WithAuth(CommentsArea);
