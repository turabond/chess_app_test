import React, {Component} from 'react';
import DragManager from './DragManager';
import Square from './Square';
import config from './config';
import './styles/App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: config,
            cols: [1, 2, 3, 4, 5, 6, 7, 8],
            rows: [1, 2, 3, 4, 5, 6, 7, 8],
            currentPlayer: 'white',
            currentDrag: {},
        };
        this.renderBoard = this.renderBoard.bind(this);
    };

    componentDidMount() {
        DragManager.onDragStart = (dragObject) => {
            const id = dragObject.elem.parentNode.id;
            this.setState({
                currentDrag: this.state.data[id],
            });
        };
        DragManager.onDragEnd = (dragObject, dropElem) => {
            const dropId = dropElem.id;
            const dragId = dragObject.elem.parentNode.id;

            this.setState({
                data: {
                    ...this.state.data,
                    [dropId]: {
                        ...this.state.currentDrag,
                        x: this.state.data[dropId].x,
                        y: this.state.data[dropId].y,
                    },
                    [dragId]: {
                        ...this.state.data[dragId],
                        isEmpty: true,
                        itemType: '',
                    },
                },
                currentDrag: {},
                currentPlayer: this.state.currentPlayer === 'white' ? 'black': 'white',
            });
        };
        DragManager.onDragCancel = (dragObject, dropElem) => {
            this.setState({
                currentDrag: {},
            });
        };
    };

    resetData = () => {
        this.setState({
            data: config,
            currentPlayer: 'white',
            currentDrag: {},
        })
    };

    canMoveKnight = (toX, toY) => {
        const {x, y, itemType, rulesType} = this.state.currentDrag;

        if (!x && !y) return false;

        if (rulesType === 'knight') {
            const dx = toX - x;
            const dy = toY - y;

            return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
                (Math.abs(dx) === 1 && Math.abs(dy) === 2);
        }

        if (rulesType === 'pawn') {
            if (itemType === 'black') {
                const dx = toX - x;
                const dy = toY - y;
                return (dx === 1 && Math.abs(dy) === 0);
            } else {
                const dx = toX - x;
                const dy = toY - y;
                return (dx === -1 && Math.abs(dy) === 0);
            }
        }

    };


    renderBoard = () => {
        return (
            this.state.rows.map((row, i) => {
                return (
                    <div key={i} id={row} className={'row'}>
                        {
                            this.state.cols.map((col, index) => {
                                const key = ''+ row + col;
                                const { x, y, isEmpty, itemType, figure} = this.state.data[key];
                                const canDrag = itemType === this.state.currentPlayer;
                                const canDrop = this.canMoveKnight(x, y) && (!canDrag);

                                return (
                                    <Square
                                        x={x}
                                        y={y}
                                        key={index}
                                        canDrop={canDrop}
                                        isEmpty={isEmpty}>
                                        {
                                            !isEmpty ?
                                                <img className={`figureImg ${canDrag ? 'draggable' : ''}`}
                                                     src={figure} alt={''}/>
                                                : null
                                        }
                                    </Square>
                                );
                            })
                        }
                    </div>
                );
            })
        );
    };

    render() {
        return (
            <div className="App">
                <div className="Board" onMouseMove={this.findDroppable}>
                    {this.renderBoard()}
                </div>
                <footer className="footer">
                    <h2>Current player: {this.state.currentPlayer}</h2>
                    <button className="reset" onClick={this.resetData.bind(this)}>reset</button>
                </footer>
            </div>
        );
    }
}

export default App;
