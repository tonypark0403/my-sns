import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './presenter';

class Container extends Component {
    static propTypes = {
        children: PropTypes.string.isRequired
    };

    render() {
        const {children, big, ...rest} = this.props;
        return (
            <Button fontSize="1.25rem" {...rest} big={big}>
                {children}
            </Button>
        );
    }
}

export default Container;