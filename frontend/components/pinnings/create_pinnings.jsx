import React from 'react';
import ReactDOM from 'react-dom';


class CreatePinning extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pin_id: null,
      board_id: null,
      waiting: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.requestBoards(this.props.currentUser.id, this.setState({
      waiting: false}));

  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      pin_id: this.props.pin.id,
      board_id: e.currentTarget.value
    });
  }

  componentDidUpdate() {
    this.props.createPinning(this.state);
  }

  render() {
    if (this.state.waiting) {
      return (
        <div></div>
      );
    } else {

      const className = this.state.clicked ? 'click-state' : 'base-state';
      return (
        <div className="board-menu">
          <ul className="dropdown-content">
            <li><a href="#">Select a Board</a></li>
            {this.props.boards.map((board, i) => {
              return <li className={className} onClick={this.handleClick}
                key={board.id} value={board.id}>{board.title}</li>;
            })}
          </ul>
        </div>
      );
    }
  }
}

export default CreatePinning;
