import React from "react";
import { useState } from "react";
import { Icon, Button, Rating } from "semantic-ui-react";
import AddPlayListPopup from '../../../PlayListPopup/AddPlayListPopup';

const ContentsArea = () => {

  const [popup, setPopup] = useState();
  const Open = () =>{setPopup(true);}

  return (
    <div className="contents-header-side">
      <div className="title-area">
        <div className="header-deatil">
          <div className="item">
            {/* 2021-12 별점 원복 */}
            <div className="header-rating"> <Rating defaultRating={4} maxRating={5} disabled className="fixed-rating"/> <span>4.0</span><Button className="re-feedback"><Icon className="edit16"/>평가하기</Button></div>
          </div>
        </div>
      </div>
      <div className="right-area">
        <div className="header-right-link">
          <a href={()=>false}>
            <span className="communityText">
            <Icon className="communityLink" />
              커뮤니티로 이동
            </span>
          </a>

          <a href={()=>false}>
            <span>
            <Icon className="listAdd" />
              찜한 과정
            </span>
          </a>

          {/* 2021-12 playlist추가 버튼*/}
          <a onClick={Open} href={()=>false}>
            <span><Icon className='plAdd'/>Playlist 추가</span>
          </a>
          {popup && <AddPlayListPopup/>}
          {/* 2021-12 playlist추가 버튼*/}

          <a href={()=>false}>
            <span>
            <Icon className="linkCopy" />
              공유하기
            </span>
          </a>
        </div>
      </div>
    </div>

  );
};

export default ContentsArea;
