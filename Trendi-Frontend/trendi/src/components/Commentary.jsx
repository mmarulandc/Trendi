import React from 'react'
import '../styles.css';


const Commentary = ({commentary,deleteCommentary,updateCommentary}) => {
    const post = commentary.username === localStorage.getItem("username") ? 
    <div>
    <div className="card">
        <div className="card-body">
            <button className=" btn btn-outline-light my-2 my-sm-0 bg-primary to-der" onClick={() => updateCommentary(commentary)}><i class="fas fa-edit"></i></button>
            <button className=" btn btn-outline-light my-2 my-sm-0 bg-danger to-der" onClick={() => deleteCommentary(commentary._id)} ><i class="fas fa-trash-alt"></i></button>
            <h3 className="card-title ">{"@"+commentary.username}</h3>
            <h4 className="card-subtitle mb-2 text-muted">{"#"+commentary.trend}</h4>
            <p className="card-text">{commentary.commentary}</p>
        </div>
    </div>
    </div> : 
        <div>
        <div className="card">
            <div className="card-body">
                <h3 className="card-title ">{"@"+commentary.username}</h3>
                <h4 className="card-subtitle mb-2 text-muted">{"#"+commentary.trend}</h4>
                <p className="card-text">{commentary.commentary}</p>
            </div>
        </div>
        </div>

    return(
        <div>
            {post}
        </div>
    )
}

export default Commentary;