import React from 'react';


class Header extends React.Component {
    constructor(props) {
        super()
        this.state = {
            trend:''
        }
    }

    handleChange = (event) => {
        this.setState({trend:event.target.value})
    } 

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.search(this.state.trend);
    }
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/trendi">{this.props.header}</a>
                <form className="form-inline" onSubmit={this.handleSubmit}>
                       <input class="form-control mr-sm-2" type="search"  onChange={this.handleChange} placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Buscar</button>
                </form>
        
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
            </div>

            </div>
            <button className="btn btn-outline-light my-2 my-sm-0" onClick={this.props.handleLogout}>Log Out</button>

            </nav>
        );
    }
}

export default Header;