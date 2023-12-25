import React, { Component } from "react";
import { Modal } from "semantic-ui-react";
//import AdminSearch02 from "../AdminSearch02";
//import Paging from "../Paging";
import ClosePopup from "../../../../../images/all/icon-close-player-28-px.png";
// import ImageZoomSample from "../../../../../images/all/image-zoom-sample.png";
import ImageZoomSample from "../../../../../images/all/img_banner_01.png";


class ClassSeriesDetailModal extends Component {
  state = { open: true };
  show = (size) => () => this.setState({ size, open: true });
  close = () => this.setState({ open: false });

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { open, size } = this.state;

    return (
      <Modal
        size={size}
        open={open}
        onClose={this.close}
        className="base w1000 quiz-zoom"
      >
        <Modal.Header>
          <span>스티브 잡스의 PT와 같은 핵심만 간결한 기획서</span>
          <button className="admin_popup_close" onClick={this.close}>
            <img src={ClosePopup} alt="" />
            <span>Close</span>
          </button>
        </Modal.Header>
        <Modal.Content className="admin_popup_add">
            <div style={{height:'700px', overflowY:'auto'}}>
                <img src={ImageZoomSample} alt="" />
            </div>
        </Modal.Content>
      </Modal>
    );
  }
}

export default ClassSeriesDetailModal;
