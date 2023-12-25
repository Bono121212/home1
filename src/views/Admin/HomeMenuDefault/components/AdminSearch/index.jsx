import React, { Component } from "react";
import { Select } from "semantic-ui-react";
import ClearInputBox from "../ClearInputBox";
const selectOptions02 = [{ key: "normal", value: "normal", text: "기본" }];

class AdminSearch extends Component {
  render() {
    return (
      <table className="ui admin_table_top none">
        <colgroup>
          <col width="200px" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>
              유형<span>*</span>
            </th>
            <td>
              <Select
                placeholder="전체"
                className="ui small-border admin_tab_select"
                defaultValue={selectOptions02[0].value}
                options={selectOptions02}
              />
            </td>
          </tr>
          <tr>
            <th>
              대표 이미지<span>*</span>
            </th>
            <td class="admin_img">

              <div className="preview admin">
                <div className="ui input file2">
                  <label htmlFor="hidden-new-file2" className="ui button admin_text_button">
                  이미지 첨부
                  </label>
                  <input type="file" id="hidden-new-file2" />
                </div>
              </div>
              <span class="regi_span">
                ※ 이미지 최적 사이즈는 가로 850px 입니다. (jpg, jpeg, png, gif
                확장자만 첨부 가능)
              </span>
            </td>
          </tr>
          <tr>
            <th>
              환영 메세지<span>*</span>
            </th>
            <td>
              <ClearInputBox />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default AdminSearch;
