import React, { Component } from 'react';
import TodoTemplate from '../todoTemplate';
import TodoInput from '../TodoInput';

class container extends Component {

    state = {
        input: '',
        todos: [
            { id: 0, text: 'Study React', done: true },
            { id: 1, text: 'Apply Style-component', done: false }
        ]
    }

    id = 1
    
    getId = () => {
        return ++this.id;
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            input: value
        });
    }

    handleInsert = () => {
    }

    render() {
        const {
            input
        } = this.state;
        const {
            handleChange,
            handleInsert
        } = this;
        return (
            <TodoTemplate>
                <TodoInput onChange={handleChange} onInsert={handleInsert} value={input} />
            </TodoTemplate>
        );
    }
}

export default container;