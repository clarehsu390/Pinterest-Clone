import React from 'react';
import { Route } from 'react-router-dom';
import PinDetail from './pin_detail';
import Modal from 'react-modal';
import CreatePinningContainer from '../pinnings/create_pinnings_container';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class PinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render(){
    return (
    <div>

     <li className="pin-attr">
      <div className="pin-holder">
        <div className="overlay">
          <div className="dropdown">
          <button className="save-pin-button">
            Save Pin
          </button>

          <CreatePinningContainer pin={this.props.pin} />
          </div>
        </div>
        <span onClick={this.openModal}><img src={this.props.pin.image_url} className="pin"></img></span>
      </div>




    </li>
    <div className="pin-detail-modal">
    <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="pin-detail"
        >
        <PinDetail pin={this.props.pin} currentUser={this.props.currentUser} />
      </Modal>
      </div>
    </div>

  );
  }
}

export default PinIndexItem;
