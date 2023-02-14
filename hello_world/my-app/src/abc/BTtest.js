import React, { Component } from 'react'

export default class bootstraptest extends Component {
    render() {
        return (
            <div>
                <br />checkbox
                <div className="btn-group" data-toggle="buttons">
                    <label className="btn btn-primary active">
                        <input type="checkbox" name id defaultChecked autoComplete="off" />
                    </label>
                    <label className="btn btn-primary">
                        <input type="checkbox" name id autoComplete="off" />
                    </label>
                    <label className="btn btn-primary">
                        <input type="checkbox" name id autoComplete="off" />
                    </label>
                </div>

                <br /> Button mặc định
                <button type="button" class="btn btn-primary">This is a button</button>

                <br /> Button Ratio
                <div className="btn-group" data-toggle="buttons">
                    <label className="btn btn-primary active">
                        <input type="radio" name id autoComplete="off" defaultChecked />
                    </label>
                    <label className="btn btn-primary">
                        <input type="radio" name id autoComplete="off" />
                    </label>
                    <label className="btn btn-primary">
                        <input type=" radio" name id=" " autoComplete="off " />
                    </label>
                </div>

                



            </div >
        )
    }
}
