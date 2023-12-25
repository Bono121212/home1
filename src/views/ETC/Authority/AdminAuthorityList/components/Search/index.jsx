import React, { Component } from "react";
import { Select } from "semantic-ui-react";
import Calendar from "../Calendar";

const selectOptions01 = [
    { key: "all", value: "all", text: "전체" },
    { key: "val1", value: "val1", text: "Super Manager" },
    { key: "val2", value: "val2", text: "College Manager" },
    { key: "val3", value: "val3", text: "College Contents Manager" },
    { key: "val4", value: "val4", text: "Company Manager" },
    { key: "val5", value: "val5", text: "Company Contents Manager" },
];
const selectOptions02 = [
    { key: "all", value: "all", text: "전체" },
];

class Search extends Component {

    state = { value: "value02" };
    handleChange = (e, { value }) => this.setState({ value });

    render() {
        return (
            <div className="ui admin_table_top searcha">
                <table>
                    <colgroup>
                        <col width="130px" />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>신청 일자</th>
                            <td>
                                <div className="preview">
                                    <Calendar />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>권한</th>
                            <td>
                                <Select
                                    placeholder="전체"
                                    className="ui small-border admin_tab_select"
                                    defaultValue={selectOptions01[0].value}
                                    options={selectOptions01}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>상태</th>
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
                            <td colSpan={2} style={{textAlign:"center"}}>
                                <button class="ui button admin_text_button searcha" disabled="" tabindex="-1">검색</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Search;
