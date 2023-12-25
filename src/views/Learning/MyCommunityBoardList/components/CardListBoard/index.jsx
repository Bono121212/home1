import React, { Component } from "react";
import { Link } from "react-router-dom";
// import BadgeImportant from "../../../../../images/all/badge-important.png";
import HomeFile from "../../../../../images/all/icon-community-file-copy-2.png";
// import ListMoreView from "../../../../Support/NoticeListUser/components/ListMoreView";

class CardListBoard extends Component {
  render() {
    return (
        <div className="mycommunity-list-wrap">
          <div className="su-list notice">
            <Link className="row header">
                <span className="cell title">
                    <span className="inner">
                        <span className="ellipsis">제목</span>
                    </span>
                </span>
                <span className="cell nick">등록자</span>
                <span className="cell date">등록일</span>
                <span className="cell count">조회</span>
                <span className="cell like">좋아요</span>
            </Link>
            <a href="#none" target="_blank" className="row important new">
                <span className="cell title">
                    <span className="inner">
                        <img src={HomeFile} className="board-file" alt="" />
                        <span className="ellipsis">딥러닝 동향과 관련된 자료 모음입니다.딥러닝 동향과 관련된 자료 모음입니다.딥러닝 동향과 관련된 자료 모음입니다.딥러닝 동향과 관련된 자료 모음입니다.</span>
                        <span className="rep-num">[<strong>3</strong>]</span>
                    </span>
                </span>
                <span className="cell nick">안녕하세요안녕하세요안녕하세요안녕하세요</span>
                <span className="cell date">2020.01.05</span>
                <span className="cell count">99999</span>
                <span className="cell like">99999</span>
            </a>
            <a href="#none" target="_blank" className="row important">
                <span className="cell title">
                    <span className="inner">
                        <span className="ellipsis">[자동차 반도체, 기회와 도전] 1. 자동차 산업의 결정된 미래</span>
                        <span className="rep-num">[<strong>3</strong>]</span>
                    </span>
                </span>
                <span className="cell nick">신짜오베트남하</span>
                <span className="cell date">2020.01.05</span>
                <span className="cell count">99999</span>
                <span className="cell like">99999</span>
            </a>
            <a href="#none" target="_blank" className="row new">
                <span className="cell title">
                    <span className="inner">
                        <span className="ellipsis">딥 러닝과 머신 러닝의 차이</span>
                        <span className="rep-num">[<strong>3</strong>]</span>
                    </span>
                </span>
                <span className="cell nick">chang</span>
                <span className="cell date">2020.01.05</span>
                <span className="cell count">99999</span>
                <span className="cell like">99999</span>
            </a>
            <a href="#none" target="_blank" className="row">
                <span className="cell title">
                    <span className="inner">
                        <span className="ellipsis">deep structured learning 참고 자료, 제목이 길 경우 제목이 길 경우 말줄임 제목이 길 경우 말줄임 제목이 길 경우 말줄임</span>
                    </span>
                </span>
                <span className="cell nick">nickname</span>
                <span className="cell date">2020.01.05</span>
                <span className="cell count">99999</span>
                <span className="cell like">99999</span>
            </a>
            <a href="#none" target="_blank" className="row">
                <span className="cell title">
                    <span className="inner">
                        <img src={HomeFile} className="board-file" alt="" />
                        <span className="ellipsis">deep structured learning 참고 자료, 제목이 길 경우 제목이 길 경우 말줄임 제목이 길 경우 말줄임 제목이 길 경우 말줄임 deep structured learning 참고 자료, 제목이 길 경우 제목이 길 경우 말줄임 제목이 길 경우 말줄임 제목이 길 경우 말줄임 deep structured learning 참고 자료, 제목이 길 경우 제목이 길 경우 말줄임 제목이 길 경우 말줄임 제목이 길 경우 말줄임</span>
                        <span className="rep-num">[<strong>3</strong>]</span>
                    </span>
                </span>
                <span className="cell nick">chang</span>
                <span className="cell date">2020.01.05</span>
                <span className="cell count">99999</span>
                <span className="cell like">99999</span>
            </a>
          </div>
        </div>
    );
  }
}

export default CardListBoard;
