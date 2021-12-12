import React from 'react';

export default class ShoppingItem extends React.Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
        this.checkItem = this.checkItem.bind(this);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.state = {
            bool: false,
        };
    }

    deleteItem() {
        this.props.deleteItem(this.props.item)
    }

    checkItem() {
        const currentState = this.state.bool;
        this.props.checkItem(this.props.item, this.state.bool)
        this.setState({ bool: !currentState });
    }

    minusOne() {
        this.props.minusOne(this.props.item,-1)
    }

    addOne() {
        this.props.addOne(this.props.item,1)
    }

    render () {
        const check = (this.props.finished.indexOf(this.props.item) > -1)
        const checkCount = (this.props.counts == 0)
        return (
            <li className="list-group-item">
                {
                check 
                ? 
                <p className="shoppingItem">{checkCount ? <button className='btn btn-sm mx-1' onClick={this.addOne} disabled><i className="fas fa-plus" data-num='1'></i></button> 
                : 
                <button className='btn btn-sm mx-1' onClick={this.addOne}><i className="fas fa-plus" data-num='1'></i></button>}{this.props.counts}
                { 
                checkCount 
                ? 
                <button className='btn btn-sm mx-1' onClick={this.minusOne} disabled><i className="fas fa-minus" data-num='-1'></i></button> 
                : 
                <button className='btn btn-sm mx-1' onClick={this.minusOne}><i className="fas fa-minus" data-num='-1'></i></button>}<del>{this.props.item}</del></p> 
                : 
                <p className="shoppingItem">
                    {
                    checkCount 
                    ? 
                    <button className='btn btn-sm mx-1' onClick={this.addOne} disabled><i className="fas fa-plus" data-num='1'></i></button> 
                    : 
                    <button className='btn btn-sm mx-1' onClick={this.addOne}><i className="fas fa-plus" data-num='1'></i></button>}{this.props.counts}
                    { 
                    checkCount 
                    ? 
                    <button className='btn btn-sm mx-1' onClick={this.minusOne} disabled><i className="fas fa-minus" data-num='-1'></i></button> 
                    : 
                    <button className='btn btn-sm mx-1' onClick={this.minusOne}><i className="fas fa-minus" data-num='-1'></i></button>}{this.props.item}</p>}
                <button className="btn btn-outline-danger btn-sm block float-end" onClick={this.deleteItem}><i className="fas fa-times"></i></button>
                <button className=
                {
                    check 
                    ? 
                    'btn btn-success btn-sm block float-start mx-2'
                    : 
                    'btn btn-outline-success block btn-sm float-start mx-2'}  onClick={this.checkItem}><i className="fas fa-check"></i></button>
            </li>
        );
    }
}