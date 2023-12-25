import React, { Component } from "react";
import { Select } from "semantic-ui-react";
import ClearInputBoxSearch from "../ClearInputBoxSearch";

const selectOptions02 = [
    { key: "all", value: "all", text: "전체" },
    { key: "subject", value: "subject", text: "제목" },
    { key: "contents", value: "contents", text: "내용" },
    { key: "writer", value: "writer", text: "작성자" },
];

class PagingSearch extends Component {
  render() {
    return (
      <div className="paging-search">
        <Select
          placeholder="전체"
          className="ui small-border dropdown m0"
          defaultValue={selectOptions02[0].value}
          options={selectOptions02}
        />
        <ClearInputBoxSearch />
      </div>
    );
  }
}

export default PagingSearch;
