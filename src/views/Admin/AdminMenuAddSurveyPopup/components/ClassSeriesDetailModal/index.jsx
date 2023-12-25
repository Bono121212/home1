import React, { Component } from "react";
import { Button, Modal, Radio } from "semantic-ui-react";
import AdminSearch02 from "../AdminSearch02";
import Paging from "../Paging";
import ClosePopup from "../../../../../images/all/icon-close-player-28-px.png";

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
        className="base w1000"
      >
        <Modal.Header>
          <span>Survey 찾기</span>
          <button className="admin_popup_close" onClick={this.close}>
            <img src={ClosePopup} alt="" />
          </button>
        </Modal.Header>
        <Modal.Content className="admin_popup_add">
          <p class="menuAdd_title">Manager에서 등록한 Survey가 표시됩니다.</p>
          {/* 검색창 - sub */}
          <AdminSearch02 />

          <div class="scrolling-24vh">
          <table className="ui admin_table sub survey_popup_table">
            <thead>
              <tr>
                <th></th>
                <th>제목</th>
                <th>등록자</th>
                <th>등록일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Radio
                    className="base"
                    name="radioGroup"
                    value="value01"
                    checked={this.state.value === "value01"}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  반도체 산업의 시작과 역사에 대해 개인 의견을 남겨주세요.
                </td>
                <td>김써니</td>
                <td>2020.12.15</td>
              </tr>
              <tr>
                <td>
                  <Radio
                    className="base"
                    name="radioGroup"
                    value="value02"
                    checked={this.state.value === "value02"}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  반도체 산업의 시작과 역사에 대해 개인 의견을 남겨주세요.
                </td>
                <td>김써니</td>
                <td>2020.12.15</td>
              </tr>
              <tr>
                <td>
                  <Radio
                    className="base"
                    name="radioGroup"
                    value="value03"
                    checked={this.state.value === "value03"}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  반도체 산업의 시작과 역사에 대해 개인 의견을 남겨주세요.
                </td>
                <td>김써니</td>
                <td>2020.12.15</td>
              </tr>
              <tr>
                <td>
                  <Radio
                    className="base"
                    name="radioGroup"
                    value="value04"
                    checked={this.state.value === "value04"}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  반도체 산업의 시작과 역사에 대해 개인 의견을 남겨주세요.
                </td>
                <td>김써니</td>
                <td>2020.12.15</td>
              </tr>
              <tr>
                <td>
                  <Radio
                    className="base"
                    name="radioGroup"
                    value="value05"
                    checked={this.state.value === "value05"}
                    onChange={this.handleChange}
                  />
                </td>
                <td>
                  반도체 산업의 시작과 역사에 대해 개인 의견을 남겨주세요.
                </td>
                <td>김써니</td>
                <td>2020.12.15</td>
              </tr>
            </tbody>
          </table>
          </div>
          <Paging />
        </Modal.Content>

        <Modal.Actions className="actions">
          <Button className="w190 pop x" onClick={this.close}>
            닫기
          </Button>
          <Button className="w190 pop p" onClick={this.close}>
            선택
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ClassSeriesDetailModal;
