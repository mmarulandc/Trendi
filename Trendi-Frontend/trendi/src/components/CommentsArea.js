import React, { Component } from 'react'

export default class CommentsArea extends Component {
    render() {
        return (
            <div>
                <div className="container mt-2">
                    <div className="row">
                        <div className="col-3  ">
                            <form action="">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="form-group">
                                            <textarea  className="form-control" name="commentary" id="commentary" cols="30" rows="10"></textarea>
                                        </div>
                                    </div>

                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
