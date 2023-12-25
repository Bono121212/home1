import React, { Component } from "react";
import { Button, Modal, Checkbox } from "semantic-ui-react";
import AdminSearch02 from "../AdminSearch02";
import TableTitle from "../TableTitle";
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
          <span>그룹 멤버 추가</span>
          <button className="admin_popup_close" onClick={this.close}>
            <img src={ClosePopup} alt="" />
          </button>
        </Modal.Header>
        <Modal.Content className="admin_popup_add">
         
            {/* 검색창 - sub */}
            <AdminSearch02 />

            <TableTitle />
            <div className="scrolling-24vh">
            <table className="ui admin_table sub">
              <thead>
                <tr>
                  <th>
                    <Checkbox
                      className="base"
                      label=""
                      name="radioGroup"
                      value=""
                    />
                  </th>
                  <th>소속사</th>
                  <th>소속 조직(팀)</th>
                  <th>성명</th>
                  <th>닉네임</th>
                  <th>E-mail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Checkbox
                      className="base"
                      label=""
                      name="radioGroup"
                      value=""
                    />
                  </td>
                  <td>SK주식회사 C&#38;C</td>
                  <td>공용계정조직</td>
                  <td>김써니</td>
                  <td>nickname</td>
                  <td>test@test.com</td>
                </tr>
                <tr>
                  <td>
                    <Checkbox
                      className="base"
                      label=""
                      name="radioGroup"
                      value=""
                    />
                  </td>
                  <td>SK주식회사 C&#38;C</td>
                  <td>공용계정조직</td>
                  <td>김써니</td>
                  <td>nickname</td>
                  <td>test@test.com</td>
                </tr>
                <tr>
                  <td>
                    <Checkbox
                      className="base"
                      label=""
                      name="radioGroup"
                      value=""
                    />
                  </td>
                  <td>SK주식회사 C&#38;C</td>
                  <td>공용계정조직</td>
                  <td>김써니</td>
                  <td>nickname</td>
                  <td>test@test.com</td>
                </tr>
                <tr>
                  <td>
                    <Checkbox
                      className="base"
                      label=""
                      name="radioGroup"
                      value=""
                    />
                  </td>
                  <td>SK주식회사 C&#38;C</td>
                  <td>공용계정조직</td>
                  <td>김써니</td>
                  <td>nickname</td>
                  <td>test@test.com</td>
                </tr>
                <tr>
                  <td>
                    <Checkbox
                      className="base"
                      label=""
                      name="radioGroup"
                      value=""
                    />
                  </td>
                  <td>SK주식회사 C&#38;C</td>
                  <td>공용계정조직</td>
                  <td>김써니</td>
                  <td>nickname</td>
                  <td>test@test.com</td>
                </tr>
                <tr>
                  <td>
                    <Checkbox
                      className="base"
                      label=""
                      name="radioGroup"
                      value=""
                    />
                  </td>
                  <td>SK주식회사 C&#38;C</td>
                  <td>공용계정조직</td>
                  <td>김써니</td>
                  <td>nickname</td>
                  <td>test@test.com</td>
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
            추가
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ClassSeriesDetailModal;
