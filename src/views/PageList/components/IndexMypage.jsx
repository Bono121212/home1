import React from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const IndexMypage = () => {
    return (
        <>{/* @@MyPage */}
        <Table.Row verticalAlign='top' id="MyPage">
            <Table.Cell colSpan='5' className='table-tit'>
                <span className='text-bold'>My Page</span>
            </Table.Cell>
        </Table.Row>
        {/* @MyPage */}
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>MyPage &gt; 나의 학습 현황</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/mypage/my-page-lnb-dashboard' target="_blank">
                    <span className='text-purple'>나의 학습 현황</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/mypage/my-page-lnb-dashboard'>
                    /mypage/my-page-lnb-dashboard
                </Link>
            </Table.Cell>
            <Table.Cell>최은영</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/mypage/learning-time-detail-modal' target="_blank">
                    <span className='text-purple'>학습 이수 시간 상세보기 팝업</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>MY-01-01-P03, MY-01-01-P03-case2, MY-01-01-P03-case3</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/mypage/learning-time-detail-modal'>
                    /mypage/learning-time-detail-modal
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>22-01-19</Table.Cell>
            <Table.Cell><span>0630 UI 및 데이터 변경</span><br /><span>22-01-19 복습시간 추가</span></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>MyPage &gt; My Badge</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/mypage/my-page-lnb-profile-my-badge-v4' target="_blank">
                    <span className='text-purple'>MyBadge List</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>[LNB_B]_My Page_01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/mypage/my-page-lnb-profile-my-badge-v4'>
                    /mypage/my-page-lnb-profile-my-badge-v4
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>22-08-23</Table.Cell>
            <Table.Cell><p>20-21-12 수정</p><p>21-12-03 퍼블완료</p><p>22-10-05 Badge UI 개선</p></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/mypage/my-page-lnb-profile-my-badge-nodata-v3' target="_blank">
                    <span className='text-purple'>MyBadge List Nodata</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/mypage/my-page-lnb-profile-my-badge-nodata-v3' target='_blank'>
                    /mypage/my-page-lnb-profile-my-badge-nodata-v3
                </Link>
            </Table.Cell>
            <Table.Cell>최은영</Table.Cell>
            <Table.Cell>21-12-03 퍼블완료</Table.Cell>
            <Table.Cell>20-21-12 수정</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>MyPage &gt; My Stamp</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/mypage/my-page-lnb-profile-my-stamp-v3' target="_blank">
                    <span className='text-purple'>My Stamp List</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>[LNB_A]_My Page_03_Stamp</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/mypage/my-page-lnb-profile-my-stamp-v3'>
                    /mypage/my-page-lnb-profile-my-stamp-v3
                </Link>
            </Table.Cell>
            <Table.Cell>최은영</Table.Cell>
            <Table.Cell>21-12-03 퍼블완료</Table.Cell>
            <Table.Cell>20-21-12 수정</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/mypage/my-page-lnb-profile-my-stamp-nodata-v3' target="_blank">
                    <span className='text-purple'>My Stamp List Nodata</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/mypage/my-page-lnb-profile-my-stamp-nodata-v3'>
                    /mypage/my-page-lnb-profile-my-stamp-nodata-v3
                </Link>
            </Table.Cell>
            <Table.Cell>최은영</Table.Cell>
            <Table.Cell>21-12-03 퍼블완료</Table.Cell>
            <Table.Cell>20-21-12 수정</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>MyPage &gt; Note</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/mypage/my-page-lnb-note-all-v3' target="_blank">
                    <span className='text-purple'>Note 모아보기</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>[LNB_A]_My Page_04_Note</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/mypage/my-page-lnb-note-all-v3'>
                    /mypage/my-page-lnb-note-all-v3
                </Link>
            </Table.Cell>
            <Table.Cell>최은영</Table.Cell>
            <Table.Cell>21-12-03 퍼블완료</Table.Cell>
            <Table.Cell>20-21-12 수정</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/mypage/my-page-lnb-note-folder-v3' target="_blank">
                    <span className='text-purple'>Note 폴더보기</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/mypage/my-page-lnb-note-folder-v3'>
                    /mypage/my-page-lnb-note-folder-v3
                </Link>
            </Table.Cell>
            <Table.Cell>최은영</Table.Cell>
            <Table.Cell>21-12-06 퍼블완료</Table.Cell>
            <Table.Cell>20-21-12 수정</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>MyPage &gt; PlayList</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/mypage/my-page-lnb-playlist-list' target="_blank">
                    <span className='text-purple'>PlayList List</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-40</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/mypage/my-page-lnb-playlist-list'>
                    /mypage/my-page-lnb-playlist-list
                </Link>
            </Table.Cell>
            <Table.Cell>최은영</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-04-05 전체 둘러보기 - 버튼추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/mypage/my-page-lnb-playlist-list-nodata' target="_blank">
                    <span className='text-purple'>Playlist List(생성하거나 추천받은 플레이리스트가 없을 경우)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-41</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/mypage/my-page-lnb-playlist-list-nodata' >
                    /mypage/my-page-lnb-playlist-list-nodata
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-04-05 전체 둘러보기 - 버튼추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/mypage/my-page-lnb-playlist-detail-mylist' target="_blank">
                    <span className='text-purple'>Playlist &gt; Detail(내가만든 리스트)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-44</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/mypage/my-page-lnb-playlist-detail-mylist' >
                    /mypage/my-page-lnb-playlist-detail-mylist
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>
                <p>22-01-17 공유하기 버튼변경</p>
                <p>22-04-05 전체 둘러보기 - 우측상단버튼</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/mypage/my-page-lnb-playlist-detail-mylist-nodata' target="_blank">
                    <span className='text-purple'>Playlist &gt; Detail(내가만든 리스트) - 과정추가 전</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-45</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/mypage/my-page-lnb-playlist-detail-mylist-nodata' >
                    /mypage/my-page-lnb-playlist-detail-mylist-nodata
                </Link>
            </Table.Cell>
            <Table.Cell>최은영</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-04-05 전체 둘러보기 - 우측상단버튼</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/mypage/my-page-lnb-playlist-detail-modify-mylist' target="_blank">
                    <span className='text-purple'>Playlist &gt; Detail(내가만든 리스트) &gt; 편집하기</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-57</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/mypage/my-page-lnb-playlist-detail-modify-mylist' >
                    /mypage/my-page-lnb-playlist-detail-modify-mylist
                </Link>
            </Table.Cell>
            <Table.Cell>최은영</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-04-05 전체 둘러보기 - 우측상단버튼</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/mypage/my-page-lnb-playlist-comment-mylist' target="_blank">
                    <span className='text-purple'>Playlist &gt; Comment(내가만든 리스트)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-46</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/mypage/my-page-lnb-playlist-comment-mylist' >
                    /mypage/my-page-lnb-playlist-comment-mylist
                </Link>
            </Table.Cell>
            <Table.Cell>최은영</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-04-05 전체 둘러보기 - 우측상단버튼</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/mypage/my-page-lnb-playlist-comment-mylist-nodata' target="_blank">
                    <span className='text-purple'>Playlist &gt; Comment(내가만든 리스트) - 데이터 없을 때</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-47</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/mypage/my-page-lnb-playlist-comment-mylist-nodata' >
                    /mypage/my-page-lnb-playlist-comment-mylist-nodata
                </Link>
            </Table.Cell>
            <Table.Cell>최은영</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-04-05 전체 둘러보기 - 우측상단버튼</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/mypage/my-page-lnb-playlist-detail-recommended' target="_blank">
                    <span className='text-purple'>Playlist &gt; Detail (추천받은 리스트) </span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-48</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/mypage/my-page-lnb-playlist-detail-recommended' >
                    /mypage/my-page-lnb-playlist-detail-recommended
                </Link>
            </Table.Cell>
            <Table.Cell>최은영</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-04-05 전체 둘러보기 - 우측상단버튼</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/mypage/my-page-lnb-playlist-detail-like' target="_blank">
                    <span className='text-purple'>Playlist &gt; Detail(내가담은 리스트)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-49</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/mypage/my-page-lnb-playlist-detail-like' >
                    /mypage/my-page-lnb-playlist-detail-like
                </Link>
            </Table.Cell>
            <Table.Cell>최은영</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-04-05 전체 둘러보기 - 우측상단버튼</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>MyPage &gt; 프로필설정</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/mypage/my-page-lnb-profile-edit-v3' target="_blank">
                    <span className='text-purple'>프로필설정</span>
                </Link><br /><br />
                <Link to='/MyPage/MyPageLnbProfileEditV3Career' target="_blank">
                    <span className="text-purple">프로필 설정</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>[LNB_B]_My Page_02</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/mypage/my-page-lnb-profile-edit-v3'>
                    /mypage/my-page-lnb-profile-edit-v3
                </Link><br /><br />
                <Link to='/MyPage/MyPageLnbProfileEditV3Career'>
                    /MyPage/MyPageLnbProfileEditV3Career
                </Link>
            </Table.Cell>
            <Table.Cell>
                <p>최은영</p>
                <p>조찬기</p>
                <p>남협수</p>
            </Table.Cell>
            <Table.Cell>
                <p>21-12-03</p>
                <p>23-03-06</p>
                <p>23-12-17</p>
            </Table.Cell>
            <Table.Cell>
                <p>20-21-12 수정</p>
                <p>날짜미정 구성원확대 관련수정건</p>
                <p>통합ID관련 닉네임 영역 수정</p>
            </Table.Cell>
        </Table.Row>
        {/* @Playlist */}
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>PlayList</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-list-all' target="_blank">
                    <span className='text-purple'>PlayList 전체 둘러보기</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>PL-CA-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-list-all'>
                    /playlist/playlist-list-all
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-04-05 전체 둘러보기 - 신규</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-list-all-noData' target="_blank">
                    <span className='text-purple'>PlayList 전체 둘러보기(목록없음)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>PL-CA-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-list-all-noData'>
                    /playlist/playlist-list-all-noData
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-04-05 전체 둘러보기 - 신규</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-detail-otherlist' target="_blank">
                    <span className='text-purple'>PlayList 타인의 리스트</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>PL-DE-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-detail-otherlist'>
                    /playlist/playlist-detail-otherlist
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-04-05 전체 둘러보기 - 신규</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-detail-mylist' target="_blank">
                    <span className='text-purple'>PlayList 내가만든 리스트</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>PL-DE-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-detail-mylist'>
                    /playlist/playlist-detail-mylist
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-04-05 전체 둘러보기 - 신규</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-detail-savelist' target="_blank">
                    <span className='text-purple'>PlayList 내가담은 리스트</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>PL-DE-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-detail-savelist'>
                    /playlist/playlist-detail-savelist
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-04-05 전체 둘러보기 - 신규</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-detail-savelist' target="_blank">
                    <span className='text-purple'>PlayList 추천받은 리스트</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>PL-DE-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-detail-reclist'>
                    /playlist/playlist-detail-reclist
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-04-05 전체 둘러보기 - 신규</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-popup/create-playlist-popup' target="_blank">
                    <span className='text-purple'>Playlist &gt; 플레이리스트 만들기</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-42</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-popup/create-playlist-popup'>
                    /playlist/playlist-popup/create-playlist-popup
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-03-29 Playlist 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-popup/create-playlist-popup-error' target="_blank">
                    <span className='text-purple'>Playlist &gt; 플레이리스트 만들기 글자수 초과</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-popup/create-playlist-popup-error'>
                    /playlist/playlist-popup/create-playlist-popup-error
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-03-29 Playlist 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-popup/add-playlist-popup' target="_blank">
                    <span className='text-purple'>Card Overview &gt; 플레이리스트 추가</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-11</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-popup/add-playlist-popup'>
                    /playlist/playlist-popup/add-playlist-popup
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-03-29 Playlist 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-popup/add-playlist-popup-nodata' target="_blank">
                    <span className='text-purple'>Card Overview &gt; 플레이리스트 추가(생성한 플레이리스트가 없을 경우) &amp; 입력한 플레이리스트 명이 길경우</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-14</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-popup/add-playlist-popup-nodata'>
                    /playlist/playlist-popup/add-playlist-popup-nodata
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-03-29 Playlist 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-popup/modal-select-card' target="_blank">
                    <span className='text-purple'>Playlist &gt; 플레이리스트 만들기 &gt; Card 선택 </span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-43</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-popup/modal-select-card'>
                    /playlist/playlist-popup/modal-select-card
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-03-29 Playlist 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-popup/share-userlist-popup01' target="_blank">
                    <span className='text-purple'>Playlist &gt; 추천받은 구성원 popup</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-56</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-popup/share-userlist-popup01' >
                    /playlist/playlist-popup/share-userlist-popup01
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-03-29 Playlist 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-popup/share-userlist-popup02' target="_blank">
                    <span className='text-purple'>Playlist &gt; 담아간 구성원 popup</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-56</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-popup/share-userlist-popup02' >
                    /playlist/playlist-popup/share-userlist-popup02
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-03-29 Playlist 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-popup/share-playlist-popup10' target="_blank">
                    <span className='text-purple'>Playlist &gt; 추천하기</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-50</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-popup/share-playlist-popup10' >
                    /playlist/playlist-popup/share-playlist-popup10
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-03-29 Playlist 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-popup/share-playlist-popup11' target="_blank">
                    <span className='text-purple'>Playlist &gt; 추천하기 (플레이리스트 공유 대상자 Select 화면)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-51</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-popup/share-playlist-popup11' >
                    /playlist/playlist-popup/share-playlist-popup11
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-03-29 Playlist 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-popup/share-playlist-popup12' target="_blank">
                    <span className='text-purple'>Playlist &gt; 추천하기(검색 결과 없을 경우 화면)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-52</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-popup/share-playlist-popup12' >
                    /playlist/playlist-popup/share-playlist-popup12
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-03-29 Playlist 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-popup/share-playlist-popup20' target="_blank">
                    <span className='text-purple'>Playlist &gt; 추천하기(mySUNI 사용자 화면) &gt; 검색전</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-53</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-popup/share-playlist-popup20' >
                    /playlist/playlist-popup/share-playlist-popup20
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-03-29 Playlist 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-popup/share-playlist-popup21' target="_blank">
                    <span className='text-purple'>Playlist &gt; 추천하기(mySUNI 사용자 화면) &gt; 검색 후</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-popup/share-playlist-popup21' >
                    /playlist/playlist-popup/share-playlist-popup21
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-03-29 Playlist 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-popup/share-playlist-popup22' target="_blank">
                    <span className='text-purple'>Playlist &gt; 추천하기(mySUNI 사용자 화면) &gt; 검색 후 nodata</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-popup/share-playlist-popup22' >
                    /playlist/playlist-popup/share-playlist-popup22
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-03-29 Playlist 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-popup/share-playlist-popup30' target="_blank">
                    <span className='text-purple'>Playlist &gt; 추천하기(팔로워) &gt; 검색 전</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-54</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-popup/share-playlist-popup30' >
                    /playlist/playlist-popup/share-playlist-popup30
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-03-29 Playlist 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-popup/share-playlist-popup31' target="_blank">
                    <span className='text-purple'>Playlist &gt; 추천하기(팔로워) &gt; 검색결과</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-popup/share-playlist-popup31' >
                    /playlist/playlist-popup/share-playlist-popup31
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-03-29 Playlist 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-popup/share-playlist-popup32' target="_blank">
                    <span className='text-purple'>Playlist &gt; 추천하기(팔로워) &gt; 검색결과 nodata</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-popup/share-playlist-popup32' >
                    /playlist/playlist-popup/share-playlist-popup32
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-03-29 Playlist 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-popup/share-playlist-popup33' target="_blank">
                    <span className='text-purple'>Playlist &gt; 추천하기(팔로워) &gt; 팔로워없음</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-popup/share-playlist-popup33' >
                    /playlist/playlist-popup/share-playlist-popup33
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-03-29 Playlist 추가</Table.Cell>
        </Table.Row>
        {/* //Playlist */}
        {/* @Foundation Skill */}
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>Foundation Skill</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/foundationskill/foundationskill-apply' target="_blank">
                    <span className='text-purple'>Foundation Skill 신청하기</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span className='text-purple'>[LNB_B]_My Page_02</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/foundationskill/foundationskill-apply'>
                    /foundationskill/foundationskill-apply
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-08-19</Table.Cell>
            <Table.Cell>
                <p>22-09-20 Foundation Skill 베타테스터 모집</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/foundationskill/foundationskill-apply-2nd' target="_blank">
                    <span className='text-purple'>Foundation Skill 신청하기 2차</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span className='text-purple'>[LNB_B]_My Page_02</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/foundationskill/foundationskill-apply-2nd'>
                    /foundationskill/foundationskill-apply-2nd
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-08-19</Table.Cell>
            <Table.Cell>
                <p>22-09-20 Foundation Skill 베타테스터 모집</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/foundationskill/foundationskill-apply-comp' target="_blank">
                    <span className='text-purple'>Foundation Skill 신청완료</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span className='text-purple'>[LNB_B]_My Page_02</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/foundationskill/foundationskill-apply-comp'>
                    /foundationskill/foundationskill-apply-comp
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-08-19</Table.Cell>
            <Table.Cell>
                <p>22-09-20 Foundation Skill 베타테스터 모집</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/foundationskill/foundationskill-apply-page' target="_blank">
                    <span className='text-purple'>Foundation Skill 신청하기(페이지)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span className='text-purple'>[LNB_B]_My Page_02</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/foundationskill/foundationskill-apply-page'>
                    /foundationskill/foundationskill-apply-page
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-09-20</Table.Cell>
            <Table.Cell>
                <p>22-09-20 Foundation Skill 베타테스터 모집</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/foundationskill/foundationskill-apply-page-comp' target="_blank">
                    <span className='text-purple'>Foundation Skill 신청완료(페이지)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span className='text-purple'>[LNB_B]_My Page_02</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/foundationskill/foundationskill-apply-page-comp'>
                    /foundationskill/foundationskill-apply-page-comp
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-09-20</Table.Cell>
            <Table.Cell>
                <p>22-09-20 Foundation Skill 베타테스터 모집</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/foundationskill/foundationskill-list' target="_blank">
                    <span className="text-purple">Foundation Skill 목록</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span>AL-MA-10</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/foundationskill/foundationskill-list'>
                /foundationskill/foundationskill-list
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-08-23</Table.Cell>
            <Table.Cell>
                <p>22-10-05 Foundation Skill 추가</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/mypage/MyFoundationSkillV2' target="_blank">
                    <span className='text-purple'>My Foundation Skill</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span className='text-purple'>[LNB_B]_My Page_02</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/mypage/MyFoundationSkillV2'>
                    /mypage/MyFoundationSkillV2
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-04-06</Table.Cell>
            <Table.Cell>
                <p>23-04-17 My Foundation Skill 개선건</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/mypage/MyFoundationSkillV2Completed' target="_blank">
                    <span className='text-purple'>My Foundation Skill (완료)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span className='text-purple'>[LNB_B]_My Page_02</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/mypage/MyFoundationSkillV2Completed'>
                    /mypage/MyFoundationSkillV2Completed
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-04-06</Table.Cell>
            <Table.Cell>
                <p>23-04-17 My Foundation Skill 개선건</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/mypage/LearningStateModal' target="_blank">
                    <span className='text-purple'>My Foundation Skill - 학습현황 (Case1)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span className='text-purple'>[LNB_B]_My Page_02</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/mypage/LearningStateModal'>
                    /mypage/LearningStateModal
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-04-06</Table.Cell>
            <Table.Cell>
                <p>23-04-17 My Foundation Skill 개선건</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/mypage/LearningStateModal2' target="_blank">
                    <span className='text-purple'>My Foundation Skill - 학습현황 (Case2)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span className='text-purple'>[LNB_B]_My Page_02</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/mypage/LearningStateModal2'>
                    /mypage/LearningStateModal2
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-04-06</Table.Cell>
            <Table.Cell>
                <p>23-04-17 My Foundation Skill 개선건</p>
            </Table.Cell>
        </Table.Row>
    </>
)
};
export default IndexMypage
