import React, { Component } from "react";
import {Select, Icon} from "semantic-ui-react";
import {Link} from 'react-router-dom';

const selectOptions02 = [
    {key: 'val01', value: 'val01', text: '최신순'},
    {key: 'val02', value: 'val02', text: '좋아요순'},
    {key: 'val02', value: 'val02', text: '댓글순'}
];

class TopGuideTitle extends Component {
  render() {
    return (
      <div className="table-board-title">
        <div className="list-number">
          총 <strong>59</strong>개의 리스트가 있습니다.
        </div>
        <div className="right-wrap board-down-title-right">
            <Link to="/" className="go_all"><Icon /> 추천 과정 모아보기</Link>
            <Select placeholder='분류를 선택해주세요' className='ui small-border dropdown m0'
                defaultValue={selectOptions02[0].value}
                options={selectOptions02}/>
          {/* <button class="ui icon button post">
            <i aria-hidden="true" class="icon post"></i>Post
          </button> */}
          <Link to="/" class="ui icon button post">
            <i aria-hidden="true" class="icon post"></i>Post
          </Link>
        </div>
      </div>
    );
  }
}

export default TopGuideTitle;
