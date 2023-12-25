import React, { Component } from "react";
//import classNames from "classnames";
import { Button, Input } from "semantic-ui-react";

class ClearInputBoxSearch extends Component {
  state = { focus: false, write: "" };

  render() {
    return (
      <>
        <Input 
          type="text"
          className="admin_text_input"
          placeholder="검색어를 입력해주세요."
          value={this.state.wirte}
          onClick={()=> this.setState({focus : true})}
          onBlur={()=> this.setState({focus : false})}
          onChange={(e)=> this.setState({write : e.target.value})}
        />
        <Button className="admin_text_button">검색</Button>
      </>
    );
  }
}

export default ClearInputBoxSearch;
