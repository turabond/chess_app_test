import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Square extends Component {
    render() {
        const { x, y, canDrop, isEmpty } = this.props;
        const black = (x + y) % 2 === 1;
        const fill = black ? 'black' : 'white';
        const pointerEvents = canDrop ? 'all' : 'all';
        return (
            <div id={''+ x + y}
                 className={`sq ${fill} ${canDrop ? 'droppable': ''}`}
                 style={{
                     pointerEvents: pointerEvents,
                     backgroundColor: canDrop ? '#E1E26A' : '',
                 }}>
                {
                    !isEmpty ? this.props.children : null
                }

            </div>
        );
    }
}

Square.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    canDrop: PropTypes.bool.isRequired,
    isEmpty: PropTypes.bool.isRequired,
};
