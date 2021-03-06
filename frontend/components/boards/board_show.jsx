import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class BoardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pin_id: null,
      board_id: null,
      waiting: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete= this.handleDelete.bind(this);
    this.backToProfile = this.backToProfile.bind(this);
  }

  componentDidMount() {
    this.props.requestSingleBoard(this.props.match.params.userId, this.props.match.params.boardId).then(
      () => this.setState({waiting: false})
    );

  }

  handleClick(e) {

      e.preventDefault();
      this.setState({
        pin_id: e.currentTarget.value,
        board_id: this.props.match.params.boardId
      });
      this.props.deletePinning(this.state);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.removeBoard(this.props.match.params.boardId);
  }

  backToProfile(e) {
    e.preventDefault();
    this.props.history.push(`/${this.props.match.params.userId}`);
  }

  render() {
    if (this.state.waiting) {
      return <div></div>;
    }
    return (
      <div className="boards-pins">
      <button onClick={this.backToProfile}>Back to Profile</button>
        <div className="board-name">
          <h2>{this.props.boards.title}</h2>
          <span><i onClick={this.handleDelete} className="fa fa-trash-o" aria-hidden="true"></i></span>
          <h4>{this.props.boards.pins.length}Pins</h4>
        <div className="just-pins">
      {this.props.boards.pins.map((pin,i) => {
        return (<li key={i} className="board-pin">
          <img src={pin.image_url}></img>
          <span>{pin.name}</span>
          <button value={pin.id} onClick={this.handleClick}>Delete</button>
        </li>);})
      }
    </div>
  </div>
</div>
    );
  }
}




export default withRouter(BoardShow);
