import React from "react";
import { Link } from "react-router-dom";
import {
  Icon,
} from "semantic-ui-react";
const ContentsArea = () => {
  return (
    <div className="contents-header-side">
      <div className="title-area">
        <div className="header-deatil">
          <div className="item">
            {/* 2021-12 별점 삭제 cube overview에서는 만족도 안나옴 */}
            {/* <div className="header-rating"> <Rating defaultRating={4} maxRating={5} disabled className="fixed-rating"/> <span>4.0</span></div> */}

          </div>
        </div>
      </div>
      <div className="right-area">
        <div className="header-right-link">
        <Link to="">
            <span className="communityText">
            <Icon className="communityLink" />
              커뮤니티로 이동
            </span>
          </Link>
          <Link to="">
            <span>
            <Icon className="listAdd" />
              관심목록 추가
            </span>
          </Link>
          <Link to="">
            <span>
            <Icon className="linkCopy" />
              공유하기
            </span>
          </Link>
        </div>
      </div>
    </div>

  );
};

export default ContentsArea;
