import React, { Component } from "react";
import { Form, Icon, Button, Image, Checkbox } from "semantic-ui-react";
import "react-quill/dist/quill.snow.css";
import BubblePopup from '../BubblePopup'

class PhotoComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  modules = {
    toolbar: [["image"]],
  };

  formats = ["image"];

  render() {
    return (
      <Form reply className="base">
        <div className="outline">
          <div className="field h173">
            <textarea placeholder="자유롭게 의견을 적어주세요." />
            <div className="add-pic">
              <Image
                src="https://i.ytimg.com/vi/QPDI36BL_2Q/maxresdefault.jpg"
                alt="첨부된 이미지 임시이미지"
              />
              <Button icon className="img-icon del-pic">
                <Icon className="close32" />
                <span className="blind">닫기</span>
              </Button>
            </div>
          </div>

          <div className="more">
            <div className="count sty2">
                  <div className="count-box-belt">
                      <Checkbox
                      className=""
                      name="radioGroup"
                      value=""
                      id="check-opinion"
                      defaultChecked
                      />
                      <label for="check-opinion" className="check_opinion">의견 비공개</label>
                      <BubblePopup />
                  </div>
                  <div className="count-box-belt2">
                      <span className="now">0</span>
                      /
                      <span className="max">500</span>
                  </div> 
              </div>
            <Button submit>Submit</Button>
          </div>
        </div>
      </Form>
    );
  }
}

export default PhotoComment;
