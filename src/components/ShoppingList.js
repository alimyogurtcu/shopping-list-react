import React from 'react';
import ShoppingItem from './ShoppingItem';

export default class ShoppingLıst extends React.Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.props.items.map((item,index) => 
                            <ShoppingItem addOne={this.props.addOne} minusOne={this.props.minusOne} finished={this.props.finished} checkItem={this.props.checkItem} deleteItem={this.props.deleteItem} counts={this.props.counts[index]} key={index} item={item}/>
                        )
                    }
                </ul>
                {
                    this.props.items.length > 0
                    ?
                    <p>
                        <button className="btn btn-danger mt-3 btn-sm float-end" onClick={this.props.clearItems}>Clear List</button>
                    </p>
                    :
                    <p className="alert alert-warning mt-3">Please add item</p>
                }
            </div>
        );
    }
}
