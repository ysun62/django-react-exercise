import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    updateTitle = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                    type="text"
                    name="title"
                    placeholder="Add Todo..."
                    style={{ flex: '2', padding: '3px'}}
                    value={this.state.title}
                    onChange={this.updateTitle}
                />
                <input 
                    type="submit"
                    style={{ 
                        cursor: 'pointer', 
                        border: 'none', 
                        padding: '3px 8px',
                        backgroundColor: 'blue',
                        color: 'white'
                    }}
                />
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
