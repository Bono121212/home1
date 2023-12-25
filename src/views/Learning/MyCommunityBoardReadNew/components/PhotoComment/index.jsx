import React, { Component } from "react";
import { Icon, Button, Image, Form } from "semantic-ui-react";
import "react-quill/dist/quill.snow.css";

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
            <textarea placeholder="의견을 작성하려면 해당 커뮤니티에 가입해주세요." />
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
            <div className="count">
              <span className="now">0</span>/<span className="max">1000</span>
            </div>

            <Button submit>Submit</Button>
          </div>
        </div>
      </Form>
    );
  }
}

export default PhotoComment;
