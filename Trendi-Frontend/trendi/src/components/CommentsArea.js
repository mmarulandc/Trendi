import React, { Component } from 'react'
import Header from './Header';
import AuthService from '../AuthService';
import WithAuth from '../WithAuth';
import TextBoxForm from './TextBoxForm';
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
            fetch(`/api/post/${id}`, {
              method: 'DELETE',
              headers: {
                'Authorization':localStorage.getItem('id_token'),
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
        fetch(`api/post/${trend}`,{
            method:'GET',
            headers: {
                'Authorization':localStorage.getItem('id_token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                commentaries:data.reverse()
            })
        })
    }

    getCommentaries = () =>{
         fetch('/api/post/',{
            method:'GET',
            headers: {
                'Authorization':localStorage.getItem('id_token'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
          }
         })
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
        this.props.history.replace('/');
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
