import React from 'react';

export default class Action extends React.Component {

    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error : ""
        }
    }

    onFormSubmit(e) {
        e.preventDefault();
        const item = e.target.elements.txtItem.value.trim();
        const count = e.target.elements.countItem.value.trim();
        const error = this.props.addItem(item,count);
        this.setState({
            error
        })
        e.target.elements.txtItem.value = "";
        e.target.elements.countItem.value = "";
    }

    render() {
        return (
            <div>
                {this.state.error && <p className="text-danger">{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <div className="input-group">
                        <input className="form-control txtItem w-50" type="text" name="txtItem" placeholder='Name'/>
                        <input className="form-control countItem" type="number" min={1} name="countItem" placeholder='Pcs'/>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">Add Item</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}