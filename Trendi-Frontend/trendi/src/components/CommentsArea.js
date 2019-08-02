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
    
    updateCommentary =  (commentary) => {
        console.log(commentary)
        this.setState({
            editData: {
                id:commentary._id,
                trend:commentary.trend,
                commentary:commentary.commentary
            }
        })

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

    search = (trend) => { 
        console.log(trend);
        fetch(`http://localhost:3000/api/post/${trend}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                commentaries:data.reverse()
            })
        })
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
                    search = {this.search}
                />
               
                <TextBoxForm
                    username = {this.state.username}
                    getCommentaries = {this.getCommentaries}
                    commentaryToUpdate = {this.state.editData}
                    commentaries = {this.state.commentaries}
                    deleteComentary = {this.deleteComentary}
                />
                            
                        

          
        </div>
        )
    }
}
export default WithAuth(CommentsArea);
