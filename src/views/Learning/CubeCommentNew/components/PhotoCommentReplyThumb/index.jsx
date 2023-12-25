import React, { Component } from "react";
import { Form, Button, Image, Icon } from "semantic-ui-react";
import EmojiPopup from "../EmojiPopup";
import classNames from "classnames";
import SampleThumbImg from "../../../../../images/all/bg_img1.png";

/* 2021-12 댓글 ver */

class PhotoCommentReplyNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      value: '',
      rows: 1,
      minRows: 1,
      isUpload : true,
      isActive : false,
      isMargin : false,
    };
  }

  handleChange = (e)=>{
      const textLineHeight = 20;//1 row : scrollHeight 20px
      const {minRows} = this.state;
      const prevRows = e.target.rows;
      e.target.rows = minRows;
      const currRows = ~~(e.target.scrollHeight / textLineHeight);

      if(currRows > minRows) this.setState({isMargin : true})
      if(currRows === prevRows) e.target.rows = currRows;
      this.setState({isActive:true,value: e.target.value, rows : currRows });

      if(e.target.value.length < 1) {this.setState({isActive : false, isMargin : false, rows : minRows})};
  }

  render() {
    const {isUpload, isActive,isMargin} = this.state;
    return (
        <Form className="comment-form reply">
            <div className="outline flex">
                <div className={classNames("field", {"active" : isMargin})}>
                    <div className="inner">
                        <textarea className="commt-field" rows={this.state.rows} onChange={this.handleChange} placeholder="내용을 입력해주세요."/>
                        <div className={classNames("thumb-img-box", {'on' : isUpload})}>
                            <span className="thumb-img-wrap"><Image src={SampleThumbImg} className="thumb-img"/></span>
                            <Button className="clear-bttn"><Icon className="clear-icon"/></Button>
                        </div>
                    </div>
                </div>

                <div className="right-bttns">
                    <EmojiPopup /> {/* 클릭하는 버튼 외 기존과 동일 */}
                    <div icon className={classNames("ui button img-up-btn", {"active" : isUpload})}>
                        <div className="ui file task-down">
                            <label for="hidden-new-file">
                                <Icon className="img-up"/>
                            </label>
                            <input type="file" id="hidden-new-file" />
                            <input type="text" readOnly hidden/>
                        </div>
                    </div>
                    <Button icon className={classNames("submit-btn", {"active" : isActive || isUpload})}>
                        <Icon className="icon-submit"/>
                        <span className="blind">승인버튼</span>
                    </Button>
                </div>
            </div>
        </Form>
        );
    }
}

export default PhotoCommentReplyNew;
