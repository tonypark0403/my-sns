import React from 'react';
import styles from './todoTemplate.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const todoTemplate = ({children}) => {
    return (
        <div className={cn('todo-template')}>
            <h1>Todo List</h1>
            <div className={cn('content')}>
                {children}
            </div>
        </div>
    )
}

export default todoTemplate;