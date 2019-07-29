import React, { Component } from 'react'

 export default class TextBoxForm extends Component {
    
    state = {
        username: localStorage.getItem('username'),
        trend: '',
        commentary: ''
    }

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        fetch('http://localhost:3000/api/post/',{
            method:'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
          }
        }).then(res => res.json()).then(data => {
            console.log(data)
            this.setState({
                username:localStorage.getItem('username'),
                trend:'',
                commentary:''
            })
        }).catch(err => console.log(err))
        
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
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">{"@"+this.props.username}</h3>
                            <div className="form-group">
                                <input className="form-control mb-2" value={this.state.trend} name="trend" id="trend" placeholder="Trend" onChange={this.onChange}/>
                                <textarea  className="form-control" value={this.state.commentary} name="commentary" id="commentary" cols="30" rows="5" onChange={this.onChange}></textarea>
                                <button class="btn btn-primary mt-2" type="submit" >Postear</button>
                            </div>
                        </div>
                        
                    </div>
                </form>
            </div>
        )
    }

}
