import React from 'react';
import Header from './Header';
import Action from './Action';
import ShoppingList from './ShoppingList';

export default class ShoppingApp extends React.Component {

    constructor(props) {
        super(props);
        this.clearItems = this.clearItems.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.checkItem = this.checkItem.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.addOne = this.addOne.bind(this);
        this.state = {
            items: [],
            counts: [],
            finished: []
        }
    }

    componentDidMount() {
        const json = localStorage.getItem('items');
        const items = JSON.parse(json);

        const jsonCounts = localStorage.getItem('counts');
        const counts = JSON.parse(jsonCounts);

        const jsonFinish = localStorage.getItem('finished');
        const finished = JSON.parse(jsonFinish);

        if(items) {
            this.setState({
                items
            })
        }
        if(finished) {
            this.setState({
                finished
            })
        }
        if(counts) {
            this.setState({
                counts
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.items.length !== this.state.items.length) {
            const jsonItems = JSON.stringify(this.state.items);
            const jsonCounts = JSON.stringify(this.state.counts);
            localStorage.setItem('counts', jsonCounts)
            localStorage.setItem('items', jsonItems)
        }
        if(prevState.finished.length !== this.state.finished.length) {
            const json = JSON.stringify(this.state.finished);
            localStorage.setItem('finished', json)
        }
        if(prevState.counts === this.state.counts) {
            const json = JSON.stringify(this.state.counts);
            localStorage.setItem('counts', json)
        }
    }

    clearItems() {
        this.setState({
            items : [],
            counts: [],
            finished : []
        })
    }

    addItem(item,count) {
        if(!item) {
            return "Please add item!"
        } else if (this.state.items.indexOf(item) > -1) {
            return "This item already added!"
        } else {
            this.setState((prevState) => {
                return {
                    items : prevState.items.concat(item),
                    counts : prevState.counts.concat(count)
                }
            })
        }
    }

    deleteItem(item) {
        const index = this.state.items.indexOf(item);
        this.setState((prevState) => {
            const arr = prevState.items.filter((i) => {
                return item != i
            })
            const arrFinished = prevState.finished.filter((i) => {
                return item != i
            })
            const arrCounts = prevState.counts;
            arrCounts.splice(index,1)
            return {
                items : arr,
                counts : arrCounts,
                finished : arrFinished
            }
        })
    }

    checkItem(item,bool) {
        const index = this.state.items.indexOf(item);
            if(this.state.counts[index] > 0)
                this.state.counts[index] = 0;
            else this.state.counts[index] = 1;
        if (!(this.state.finished.indexOf(item) > -1)) {
            this.setState((prevState) => {
                return {finished : prevState.finished.concat(item)}
            })
        } else {
            this.setState((prevState) => {
                const arr = prevState.finished.filter((i) => {
                    return item != i
                })
                return {
                    finished : arr
                }
            })
        }
    }

    addOne(item,num) {
        const index = this.state.items.indexOf(item);

        this.setState((prevState) => {
            const arrCounts = prevState.counts;
            const newCount = parseInt(this.state.counts[index]) + num;
            arrCounts.splice(index,1,newCount)
            return {
                counts : arrCounts
            }
        })
    }
    minusOne(item,num) {
        const index = this.state.items.indexOf(item);
        this.setState((prevState) => {
            const arrCounts = prevState.counts;
            const newCount = parseInt(this.state.counts[index]) + num;
            if(newCount == 0) this.checkItem(item)
            if(newCount != -1)
            arrCounts.splice(index,1,newCount)
            return {
                counts : arrCounts
            }
        })
    }

    render() {
        const app = {
            title: "Shopping List"
        }
            return (
                <div className='container my-5'>
                    <div className="card shadow-lg p-3 mb-5 rounded">
                        <div className="card-header text-center">
                            <Header title={app.title}/>
                        </div>
                        <div className="card-body">
                            <ShoppingList addOne={this.addOne} minusOne={this.minusOne} items={this.state.items} finished={this.state.finished} counts={this.state.counts} checkItem={this.checkItem} deleteItem={this.deleteItem} clearItems={this.clearItems}/>
                        </div>
                        <div className="card-footer">
                            <Action addItem={this.addItem}/>
                        </div>
                    </div>
                </div>
            );
    }
}