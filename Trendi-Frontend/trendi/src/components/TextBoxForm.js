import React, { Component } from 'react'
import Commentary from './Commentary';
export default class TextBoxForm extends Component {
    
    state = {
        username: '',
        trend: '',
        commentary: '',
        id: ''
    }

    getCommentaries = () =>{
        fetch('/api/post/')
        .then(res => res.json())
        .then(data => {
            this.setState({
                commentaries:data
            })
        })
   }

   updateCommentary = (commentary) => {
    this.setState({
        trend:commentary.trend,
        commentary:commentary.commentary,
        id:commentary._id,
    })
   }

    onSubmit = (event) => {
        event.preventDefault();
        
        if(this.state.id) {
            console.log("hay id")
            fetch(`/api/post/${this.state.id}`, {
                method: 'PUT',
                body: JSON.stringify({
                  trend: this.state.trend,
                  commentary: this.state.commentary,
                  id:this.state.id
                }),
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }
              })
                .then(res => res.json())
                .then(data => {
                    alert( 'Comment Updated');
                    this.setState({id: '', trend: '', commentary: ''});
                    this.props.getCommentaries();
                });
        } else {
            console.log("no hay nada")
            fetch('/api/post/',{
                method:'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
              }
            }).then(res => res.json()).then(data => {
                this.setState({
                    username:localStorage.getItem('username'),
                    trend:'',
                    commentary:''
                })
                this.props.getCommentaries();
            }).catch(err => console.log(err))
        }
        
    }
    componentWillReceiveProps(){
        this.setState({
            username:this.props.username
        })
        console.log(this.state)
    }

    onChange= (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
    }
    render() { 
        return(
            <div className="container mt-2">
                    <div className="row">
                        <div className="col-md-3  ">
                            <form onSubmit={this.onSubmit}>
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">{"@"+this.props.username}</h3>
                                        <div className="form-group">
                                            <input className="form-control mb-2" value={this.state.trend} name="trend" id="trend" placeholder="Trend" onChange={this.onChange}/>
                                            <textarea  className="form-control" value={this.state.commentary} name="commentary" id="commentary" cols="30" rows="5" onChange={this.onChange}></textarea>
                                            <button className="btn btn-primary mt-2" type="submit" >Postear</button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </form>
                    </div>
                    <div className="col-xl-6 bg-secondary ">
                            {   
                                this.props.commentaries.map(commentary =>{
                                    return(
                                        <div 
                                        key = {commentary._id}
                                        className="row mt-1 mb-1">

                                        <div className="col-md-12 "
                                            >
                                            <Commentary
                                                commentary = {commentary}
                                                deleteCommentary = {this.props.deleteComentary}
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
        )
    }

}
