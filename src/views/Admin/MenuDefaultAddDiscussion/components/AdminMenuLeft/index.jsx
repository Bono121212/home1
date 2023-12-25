import React, { Component } from "react";
import home from "../../../../../images/all/icon-communtiy-menu-home-off.png";
import leftBoard01 from "../../../../../images/all/icon-communtiy-menu-board.png";
import up from "../../../../../images/all/icon-arrow-up-20-px.png";
import down from "../../../../../images/all/icon-arrow-down-20-px.png";
import clear from "../../../../../images/all/btn-clear-nomal.png";
import required from "../../../../../images/all/icon-required.png";
import reply from "../../../../../images/all/icon-reply-16-px.png";

class AdminMenuLeft extends Component {
  render() {
    return (
      <div className="admin_menu_left">
        <div className="menu_left_contents">
          <div className="menu_left_btn">
            <button>
              <img src={up} alt="" />
            </button>
            <button>
              <img src={down} alt="" />
            </button>
            <button>메뉴 추가</button>
            <button>하위 메뉴</button>
          </div>
          <ul>
            <li>
              <a href={()=>false}>
                <img src={home} alt="" />
                Home
                <span>
                  <img src={required} alt="" />
                </span>
              </a>
            </li>
            <li>
              <a href={()=>false}>
                <img src={leftBoard01} alt="" />
                전체글
                <span>
                  <img src={required} alt="" />
                </span>
              </a>
            </li>
            <li>
              <a href={()=>false}>
                <img src={leftBoard01} alt="" />
                공지사항
                <span>
                  <img src={required} alt="" />
                </span>
              </a>
            </li>
             {/* active 추가 시 굵기 */}
             <li class="active">
              <a href={()=>false}>
                ㆍ 딥 러닝의 역사
                <span>
                  <img src={clear} alt="" />
                </span>
              </a>
            </li>
            <ul>
              <li>
                <a href={()=>false}>
                  <img src={reply} alt="" />
                  알고리즘
                  <span>
                    <img src={clear} alt="" />
                  </span>
                </a>
              </li>
              <li>
                <a href={()=>false}>
                  <img src={reply} alt="" />
                  심층 신경망
                  <span>
                    <img src={clear} alt="" />
                  </span>
                </a>
              </li>
            </ul>
            <li>
              <input type="text" placeholder="메뉴명을 입력하세요" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AdminMenuLeft;
