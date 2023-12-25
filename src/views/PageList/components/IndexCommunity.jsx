import React from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const IndexCommunity = () => {
    return (
        <>{/* @@커뮤니티 */}
        <Table.Row verticalAlign='top' id='Community'>
            <Table.Cell colSpan='5' className='table-tit'>
                <span className='text-bold'>커뮤니티</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>GNB &gt; Community Main</span>
            </Table.Cell>
        </Table.Row>
        {/* 2020-10-19 CO-MA-20 추가*/}
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community/MycommunityMain' target="_blank">
                    <span className='text-purple'>마이 커뮤니티 (Tab)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CO-MA-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community/MycommunityMain'>
                    /community/MycommunityMain
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-05-16</Table.Cell>
            <Table.Cell>23-05-16 커뮤니티 현행화</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community/MycommunityMainFavoritesNodata' target="_blank">
                    <span className='text-purple'>마이 커뮤니티 (Tab) - 즐겨찾기 (Nodata)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CO-MA-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community/MycommunityMainFavoritesNodata'>
                    /community/MycommunityMainFavoritesNodata
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-05-16</Table.Cell>
            <Table.Cell>23-05-16 커뮤니티 현행화</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community/MycommunityMainIngNodata' target="_blank">
                    <span className='text-purple'>마이 커뮤니티 (Tab) - 운영중 (Nodata)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CO-MA-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community/MycommunityMainIngNodata'>
                    /community/MycommunityMainIngNodata
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-05-16</Table.Cell>
            <Table.Cell>23-05-16 커뮤니티 현행화</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community/MycommunityOpen' target="_blank">
                    <span className='text-purple'>오픈 커뮤니티 (Tab) - 즐겨찾기(별)추가</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CO-MA-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community/MycommunityOpen'>
                    /community/MycommunityOpen
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>20-10-20</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community/MycommunityOpenNodata' target="_blank">
                    <span className='text-purple'>오픈 커뮤니티 (Tab) - 즐겨찾기(별)추가 (Nodata)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CO-MA-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community/MycommunityOpenNodata'>
                    /community/MycommunityOpenNodata
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>20-10-20</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        {/* 2021-02-19 CO-MA-10 팝업 추가*/}
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community/MycommunityOpenPopup' target="_blank">
                    <span className='text-purple'>오픈 커뮤니티 (Tab)  &gt; 비밀번호 팝업</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CO-MA-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community/MycommunityOpenPopup'>
                    /community/MycommunityOpenPopup
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>21-02-19</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        {/* 2020-10-19 LM-MA-30 추가*/}
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community/MycommunityMainFollow' target="_blank">
                    <span className='text-purple'>Follwing Feed (Tab)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CO-MA-30</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community/MycommunityMainFollow'>
                    /community/MycommunityMainFollow
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-06-03</Table.Cell>
            <Table.Cell><p>22-06-07 Following Feed로 변경</p></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community/MycommunityMainFollowNodata' target="_blank">
                    <span className='text-purple'>Follwing Feed (Tab) - nodata</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CO-MA-30</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community/MycommunityMainFollowNodata'>
                    /community/mycommunity-follow-nodata
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-06-03</Table.Cell>
            <Table.Cell><p>22-06-07 Following Feed로 변경 및 Nodata화면 추가</p></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community/my-profile/modal-follower' target="_blank">
                    <span className='text-purple'>커뮤니티 프로파일  &gt; Modal Follower </span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CO-PR-12</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community/my-profile/modal-follower'>
                    /community/my-profile/modal-follower
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>20-10-20</Table.Cell>
            <Table.Cell>2차 고도화 (유컴패니온) &gt; 운영</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>Community ProfileCard Modal</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-popup/profilecard-playlist' target="_blank">
                    <span className='text-purple'>Playlist(tab)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-30</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-popup/profilecard-playlist'>
                    /playlist/playlist-popup/profilecard-playlist
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell><span>22-03-29 Playlist 추가</span><br /><span>22-01-17 ui변경</span></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-popup/profilecard-playlist-global' target="_blank">
                    <span className='text-purple'>Playlist(tab) - (외국인 계정)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-30</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-popup/profilecard-playlist-global'>
                    /playlist/playlist-popup/profilecard-playlist-global
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell><span>22-03-29 Playlist 추가</span><br /><span>22-02-17 ui변경</span></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-popup/profilecard-playlist-nodata' target="_blank">
                    <span className='text-purple'>Playlist(tab) - (생성하거나 추천받은 플레이리스트가 없을 경우)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-31</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-popup/profilecard-playlist-nodata'>
                    /playlist/playlist-popup/profilecard-playlist-nodata
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-03-29 Playlist 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/playlist/playlist-popup/profilecard-playlist-nocard' target="_blank">
                    <span className='text-purple'>Playlist(tab) - (생성하거나 추천받은 플레이리스트가 없을 경우)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PL-32</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/playlist/playlist-popup/profilecard-playlist-nocard'>
                    /playlist/playlist-popup/profilecard-playlist-nocard
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-03-07</Table.Cell>
            <Table.Cell>22-03-29 Playlist 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community/profile/modal-popup-com' target="_blank">
                    <span className='text-purple'>커뮤니티(tab) </span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CO-PR-22</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community/profile/modal-popup-com'>
                    /community/profile/modal-popup-com
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community/profile/modal-popup-com-nodata' target="_blank">
                    <span className='text-purple'>커뮤니티(tab) Nodata</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CO-PR-22</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community/profile/modal-popup-com-nodata'>
                    /community/profile/modal-popup-com-nodata
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community/profile/modal-popup-feed' target="_blank">
                    <span className='text-purple'>Feed(tab) </span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CO-PR-23</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community/profile/modal-popup-feed'>
                    /community/profile/modal-popup-feed
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community/profile/modal-popup-feed-nodata' target="_blank">
                    <span className='text-purple'>Feed(tab) Nodata</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CO-PR-23</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community/profile/modal-popup-feed-nodata'>
                    /community/profile/modal-popup-feed-nodata
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community/profile/modal-popup-feed-external' target="_blank">
                    <span className='text-purple'>Feed(tab) 외부강사용</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CO-PR-23</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community/profile/modal-popup-feed-external'>
                    /community/profile/modal-popup-feed-external
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>커뮤니티, 피드만 제공</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community/profile/modal-popup-global' target="_blank">
                    <span className='text-purple'>ProfileCard(다국어 적용) </span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CO-PR-21</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community/profile/modal-popup-global'>
                    /community/profile/modal-popup-global
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell>운영(다국어)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>CommunityTemplete Main/Intro</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/main-header' target="_blank">
                    <span className='text-purple'>CommunityTemplete Header</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-10-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/main-header'>
                    /community-templete/main-header
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/main-search' target="_blank">
                    <span className='text-purple'>CommunityTemplete Main Search</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-10-30</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/main-search'>
                    /community-templete/main-search
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/main-search-nodata' target="_blank">
                    <span className='text-purple'>Main Search Nodata</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-10-30</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/main-search-nodata'>
                    /community-templete/main-search-nodata
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/intro100' target="_blank">
                    <span className='text-purple'>Intro 100%</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>-</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/intro100'>
                    /community-templete/intro100
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/intro1200' target="_blank">
                    <span className='text-purple'>Intro 1200px</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>-</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/intro1200'>
                    /community-templete/intro1200
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-a' target="_blank">
                    <span className='text-purple'>Templete Main - 기본</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>-</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-a'>
                    /community-templete/templete-a
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-b' target="_blank">
                    <span className='text-purple'>Templete Main - 뉴스/매거진</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>-</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-b'>
                    /community-templete/templete-b
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-c' target="_blank">
                    <span className='text-purple'>Templete Main - 멀티미디어</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>-</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-c'>
                    /community-templete/templete-c
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>CommunityTemplete - list/detail</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-sub-list-type-01' target="_blank">
                    <span className='text-purple'>템플릿 - 리스트형 - 890</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-60-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-sub-list-type-01'>
                    /community-templete/templete-sub-list-type-01
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜/장은진</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell><span></span></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-sub-list-type-02' target="_blank">
                    <span className='text-purple'>템플릿 - 리스트형 - 1200</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-60-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-sub-list-type-02'>
                    /community-templete/templete-sub-list-type-02
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜/장은진</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-sub-search-list-type-01' target="_blank">
                    <span className='text-purple'>템플릿 - 리스트형 검색결과 - 890</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-60-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-sub-search-list-type-01'>
                    /community-templete/templete-sub-search-list-type-01
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜/장은진</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-sub-search-list-type-02' target="_blank">
                    <span className='text-purple'>템플릿 - 리스트형 검색결과 - 1200</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-60-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-sub-search-list-type-02'>
                    /community-templete/templete-sub-search-list-type-02
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜/장은진</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-sub-image-type-01' target="_blank">
                    <span className='text-purple'>템플릿 - 카드형 - 890</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-60-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-sub-image-type-01'>
                    /community-templete/templete-sub-image-type-01
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜/장은진</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-sub-image-type-02' target="_blank">
                    <span className='text-purple'>템플릿 - 카드형 - 1200</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-60-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-sub-image-type-02'>
                    /community-templete/templete-sub-image-type-02
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜/장은진</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-sub-search-image-type-01' target="_blank">
                    <span className='text-purple'>템플릿 - 카드형 검색결과 - 890</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-60-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-sub-search-image-type-01'>
                    /community-templete/templete-sub-search-image-type-01
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜/장은진</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-sub-search-image-type-02' target="_blank">
                    <span className='text-purple'>템플릿 - 카드형 검색결과 - 1200</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-60-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-sub-search-image-type-02'>
                    /community-templete/templete-sub-search-image-type-02
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜/장은진</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-sub-detail-type-01' target="_blank">
                    <span className='text-purple'>템플릿 - 상세보기 890</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-70-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-sub-detail-type-01'>
                    /community-templete/templete-sub-detail-type-01
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell>
                <p>22-04-05 중요 등록 기능 추가</p>
                <p>22-07-06 이전/다음글 비공개 아이콘추가</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-sub-detail-type-02' target="_blank">
                    <span className='text-purple'>템플릿 - 상세보기 1200</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-70-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-sub-detail-type-02'>
                    /community-templete/templete-sub-detail-type-02
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell>
                <p>22-04-05 중요 등록 기능 추가</p>
                <p>22-07-06 이전/다음글 비공개 아이콘추가</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-sub-edit-type-01' target="_blank">
                    <span className='text-purple'>템플릿 - 글쓰기 기본 890</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-60-30</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-sub-edit-type-01'>
                    /community-templete/templete-sub-edit-type-01
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-sub-edit-type-02' target="_blank">
                    <span className='text-purple'>템플릿 - 글쓰기 기본 1200</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-60-30</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-sub-edit-type-02'>
                    /community-templete/templete-sub-edit-type-02
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-sub-edit-type-01b' target="_blank">
                    <span className='text-purple'>템플릿 - 글쓰기 : 말풍선/업로드중  890</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-60-30</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-sub-edit-type-01b'>
                    /community-templete/templete-sub-edit-type-01b
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-sub-edit-type-02b' target="_blank">
                    <span className='text-purple'>템플릿 - 글쓰기 : 말풍선/업로드중  1200</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-sub-edit-type-02b'>
                    /community-templete/templete-sub-edit-type-02b
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-sub-rcm-list-type-01' target="_blank">
                    <span className='text-purple'>템플릿 - 학습카드 리스트 890</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-60-40</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-sub-rcm-list-type-01'>
                    /community-templete/templete-sub-rcm-list-type-01
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-sub-rcm-list-type-02' target="_blank">
                    <span className='text-purple'>템플릿 - 학습카드 리스트 1200</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-60-40</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-sub-rcm-list-type-02'>
                    /community-templete/templete-sub-rcm-list-type-02
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>CommunityTemplete - 커뮤니티 정보 popup &gt; 멤버</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-member-list890-tab1' target="_blank">
                    <span className='text-purple'>멤버관리 890 - 탭:전체관리</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-70-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-member-list890-tab1'>
                    /community-templete/templete-member-list890-tab1
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-member-list1200-tab1' target="_blank">
                    <span className='text-purple'>멤버관리 1200 - 탭:전체관리</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-70-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-member-list1200-tab1'>
                    /community-templete/templete-member-list1200-tab1
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-member-list890-tab2' target="_blank">
                    <span className='text-purple'>멤버관리 890 - 탭:관리자</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-70-21</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-member-list890-tab2'>
                    /community-templete/templete-member-list890-tab2
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-member-list1200-tab2' target="_blank">
                    <span className='text-purple'>멤버관리 1200 - 탭:관리자</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-70-21</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-member-list1200-tab2'>
                    /community-templete/templete-member-list1200-tab2
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-member-list890-tab3' target="_blank">
                    <span className='text-purple'>멤버관리 890 - 탭:그룹</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-70-22</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-member-list890-tab3'>
                    /community-templete/templete-member-list890-tab3
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-member-list1200-tab3' target="_blank">
                    <span className='text-purple'>멤버관리 1200 - 탭:그룹</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-70-22</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-member-list1200-tab3'>
                    /community-templete/templete-member-list1200-tab3
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-member-list890-tab3-nodata' target="_blank">
                    <span className='text-purple'>멤버관리 890 - 탭:그룹 없을때</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-70-23</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-member-list890-tab3-nodata'>
                    /community-templete/templete-member-list890-tab3-nodata
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-member-list1200-tab3-nodata' target="_blank">
                    <span className='text-purple'>멤버관리 1200 - 탭:그룹 없을때</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-70-23</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-member-list1200-tab3-nodata'>
                    /community-templete/templete-member-list1200-tab3-nodata
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-member-list890-tab4' target="_blank">
                    <span className='text-purple'>멤버관리 890 - 탭:가입대기</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-70-24</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-member-list890-tab4'>
                    community-templete/templete-member-list890-tab4
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-member-list1200-tab4' target="_blank">
                    <span className='text-purple'>멤버관리 1200 - 탭:가입대기</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-70-24</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-member-list1200-tab4'>
                    /community-templete/templete-member-list1200-tab4
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-member-list890-tab4-nodata' target="_blank">
                    <span className='text-purple'>멤버관리 890 - 탭:가입대기 - 없을때</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-70-25</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-member-list890-tab4-nodata'>
                    /community-templete/templete-member-list890-tab4-nodata
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-member-list1200-tab4-nodata' target="_blank">
                    <span className='text-purple'>멤버관리 1200 - 탭:가입대기 - 없을때</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-70-25</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-member-list1200-tab4-nodata'>
                    /community-templete/templete-member-list1200-tab4-nodata
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>CommunityTemplete Admin- 템플릿 관리(tab)</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-list' target="_blank">
                    <span className='text-purple'>템플릿 관리 &gt; 디자인 보관함</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-30-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-list'>
                    /admin/admin-templete-list
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-list-popup' target="_blank">
                    <span className='text-purple'>템플릿 관리 &gt; 디자인 보관함 - 디자인명 수정 - 팝업</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-30-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-list-popup'>
                    /admin/admin-templete-list-popup
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-add-a' target="_blank">
                    <span className='text-purple'>템플릿 관리 &gt; 디자인 보관함 &gt; 템플릿 추가 - 기본선택시</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-30-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-add-a'>
                    /admin/admin-templete-add-a
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-add-b' target="_blank">
                    <span className='text-purple'>템플릿 관리 &gt; 디자인 보관함 &gt; 템플릿 추가 - 뉴스/매거진선택시</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-30-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-add-b'>
                    /admin/admin-templete-add-b
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-add-c' target="_blank">
                    <span className='text-purple'>템플릿 관리 &gt; 디자인 보관함 &gt; 템플릿 추가 - 멀티미디어선택시</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-30-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-add-c'>
                    /admin/admin-templete-add-c
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit' target="_blank">
                    <span className='text-purple'>템플릿관리 - 디자인 수정 - 기본</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-40-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit'>
                    /admin/admin-templete-edit
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-preview' target="_blank">
                    <span className='text-purple'>템플릿관리 - 디자인 수정 - 기본 미리보기</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-40-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-preview'>
                    /admin/admin-templete-edit-preview
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-b' target="_blank">
                    <span className='text-purple'>템플릿관리 - 디자인 수정 - 뉴스/매거진</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-40-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-b'>
                    /admin/admin-templete-edit-b
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-preview-b' target="_blank">
                    <span className='text-purple'>템플릿관리 - 디자인 수정 - 뉴스/매거진 미리보기</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-40-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-preview-b'>
                    /admin/admin-templete-edit-preview-b
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-c' target="_blank">
                    <span className='text-purple'>템플릿관리 - 디자인 수정 - 멀티미디어</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-40-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-c'>
                    /admin/admin-templete-edit-c
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-preview-c' target="_blank">
                    <span className='text-purple'>템플릿관리 - 디자인 수정 - 멀티미디어 미리보기</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-40-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-preview-c'>
                    /admin/admin-templete-edit-preview-c
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>CommunityTemplete Admin - 템플릿 관리(tab) &gt; 디자인 추가/수정 &gt; 편집팝업</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-pop-cp1010' target="_blank">
                    <span className='text-purple'>*공통* 컴포넌트(컴) 선택</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CP-10-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-pop-cp1010'>
                    /admin/admin-templete-edit-pop-cp1010
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-pop-cp2010-img-slide' target="_blank">
                    <span className='text-purple'>(컴)이미지 - (스)슬라이드 </span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CP-40-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-pop-cp2010-img-slide'>
                    /admin/admin-templete-edit-pop-cp2010-img-slide
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-pop-cp2010-img-grid' target="_blank">
                    <span className='text-purple'>(컴)이미지 - (스)그리드 </span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CP-40-11</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-pop-cp2010-img-grid'>
                    /admin/admin-templete-edit-pop-cp2010-img-grid
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-pop-cp3010-img-slide' target="_blank">
                    <span className='text-purple'>(컴)이미지 - (스)슬라이드 - (컨) </span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CP-40-12</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-pop-cp3010-img-slide'>
                    /admin/admin-templete-edit-pop-cp3010-img-slide
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-pop-cp3010-img-grid' target="_blank">
                    <span className='text-purple'>(컴)이미지 - (스)그리드 - (컨) </span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CP-40-13</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-pop-cp3010-img-grid'>
                    /admin/admin-templete-edit-pop-cp3010-img-grid
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-pop-cp2010-board' target="_blank">
                    <span className='text-purple'>(컴)게시판 - (스)텍스트</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CP-50-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-pop-cp2010-board'>
                    /admin/admin-templete-edit-pop-cp2010-board
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-pop-cp2010-board-img-txt' target="_blank">
                    <span className='text-purple'>(컴)게시판 - (스)이미지텍스트</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CP-60-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-pop-cp2010-board-img-txt'>
                    /admin/admin-templete-edit-pop-cp2010-board-img-txt
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-pop-cp3010-board' target="_blank">
                    <span className='text-purple'>(컴)게시판 - (스) - (컨)게시판</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CP-60-13</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-pop-cp3010-board'>
                    /admin/admin-templete-edit-pop-cp3010-board
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-pop-cp3010-board-post' target="_blank">
                    <span className='text-purple'>(컴)게시판 - (스) - (컨)게시글</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CP-60-14</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-pop-cp3010-board-post'>
                    /admin/admin-templete-edit-pop-cp3010-board-post
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-pop-cp3010-board-post2' target="_blank">
                    <span className='text-purple'>(컴)게시판 - (스) - (컨)게시글</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CP-60-15</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-pop-cp3010-board-post2'>
                    /admin/admin-templete-edit-pop-cp3010-board-post2
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-pop-cp3010-board-post-search' target="_blank">
                    <span className='text-purple'>(컴)게시판 - (스) - (컨)게시글 : 검색</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CP-30-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-pop-cp3010-board-post-search'>
                    /admin/admin-templete-edit-pop-cp3010-board-post-search
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-pop-cp3010-board-post-search-result' target="_blank">
                    <span className='text-purple'>(컴)게시판 - (스) - (컨)게시글 : 검색결과</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CP-30-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-pop-cp3010-board-post-search-result'>
                    /admin/admin-templete-edit-pop-cp3010-board-post-search-result
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-pop-cp3010-html' target="_blank">
                    <span className='text-purple'>(컴)HTML - (컨)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CP-70-11</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-pop-cp3010-html'>
                    /admin/admin-templete-edit-pop-cp3010-html
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-pop-cp2010-video' target="_blank">
                    <span className='text-purple'>(컴)동영상 - (스)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CP-80-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-pop-cp2010-video'>
                    /admin/admin-templete-edit-pop-cp2010-video
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-pop-cp3010-video-post' target="_blank">
                    <span className='text-purple'>(컴)동영상 - (스) - (컨)게시글</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CP-80-11</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-pop-cp3010-video-post'>
                    /admin/admin-templete-edit-pop-cp3010-video-post
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/' target="_blank">
                    <span className='text-purple'>(컴)동영상 - (스) - (컨)유튜브</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CP-80-12</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/'>
                    /admin/admin-templete-edit-pop-cp3010-video-youtube
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-pop-cp2010-tab' target="_blank">
                    <span className='text-purple'>(컴)주제분류탭 - (스)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CP-90-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-pop-cp2010-tab'>
                    /admin/admin-templete-edit-pop-cp2010-tab
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-pop-cp3010-tab' target="_blank">
                    <span className='text-purple'>(컴)주제분류탭 - (스) - (컨)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CP-90-11</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-pop-cp3010-tab'>
                    /admin/admin-templete-edit-pop-cp3010-tab
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-pop-cp3010-lcard1' target="_blank">
                    <span className='text-purple'>(컴)학습카드 - (컨)  1</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>SD-10-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-pop-cp3010-lcard1'>
                    /admin/admin-templete-edit-pop-cp2010-lcard1
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-pop-cp3010-lcard2' target="_blank">
                    <span className='text-purple'>(컴)학습카드 - (컨) 2</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>SD-10-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-pop-cp3010-lcard2'>
                    /admin/admin-templete-edit-pop-cp3010-lcard2
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-pop-cp3010-lcard-post-search' target="_blank">
                    <span className='text-purple'>(컴)학습카드 - (컨)  게시글: 검색</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>SD-10-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-pop-cp3010-lcard-post-search'>
                    /admin/admin-templete-edit-pop-cp3010-lcard-post-search
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-templete-edit-pop-cp3010-lcard-post-search-result' target="_blank">
                    <span className='text-purple'>(컴)학습카드 - (컨)  게시글: 검색결과</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>SD-10-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-templete-edit-pop-cp3010-lcard-post-search-result'>
                    /admin/admin-templete-edit-pop-cp3010-lcard-post-search-result
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>CommunityTemplete Admin- 인트로관리(tab)</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-intro-list' target="_blank">
                    <span className='text-purple'>인트로관리(tab)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>ID-10-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-intro-list'>
                    /admin/admin-intro-list
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-01-21</Table.Cell>
            <Table.Cell>23-01-21 운영 현행화</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-intro-list-popup' target="_blank">
                    <span className='text-purple'>인트로관리(tab) - 팝업(인트로명변경)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>ID-10-11</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-intro-list-popup'>
                    /admin/admin-intro-list-popup
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-01-21</Table.Cell>
            <Table.Cell>23-01-21 운영 현행화</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-intro-list-nodata' target="_blank">
                    <span className='text-purple'>인트로관리(tab) - 관리디자인없을떄</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>ID-10-12</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-intro-list-nodata'>
                    /admin/admin-intro-list-nodata
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-01-21</Table.Cell>
            <Table.Cell>23-01-21 운영 현행화</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-intro-add-popup' target="_blank">
                    <span className='text-purple'>인트로관리(tab) - 인트로추가 popup</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>ID-20-11</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-intro-add-popup'>
                    /admin/admin-intro-add-popup
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-01-21</Table.Cell>
            <Table.Cell>23-01-21 운영 현행화</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-intro-design1200' target="_blank">
                    <span className='text-purple'>인트로관리(tab) -컴포넌트 선택 - 1200px사용</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>ID-30-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-intro-design1200'>
                    /admin/admin-intro-design1200
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-intro-design1200-sample' target="_blank">
                    <span className='text-purple'>인트로관리(tab) -컴포넌트 선택 - 1200px사용 Sample</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>ID-30-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-intro-design1200-sample'>
                    /admin/admin-intro-design1200-sample
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-intro-design100' target="_blank">
                    <span className='text-purple'>인트로관리(tab) - 컴포넌트 선택 - 100%사용</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>ID-30-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-intro-design100'>
                    /admin/admin-intro-design100
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-intro-design100-sample' target="_blank">
                    <span className='text-purple'>인트로관리(tab) -컴포넌트 선택 - 100%사용 Sample</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>ID-30-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-intro-design100-sample'>
                    /admin/admin-intro-design100-sample
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-intro-design-html' target="_blank">
                    <span className='text-purple'>인트로관리(tab) -컴포넌트 선택 - 글쓰기 HTML</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>ID-40-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-intro-design-html'>
                    /admin/admin-intro-design-html
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>Community Admin - 멤버관리(tab)</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-member-list' target="_blank">
                    <span className='text-purple'>멤버관리(tab)  &gt; 멤버(tab) </span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CO-MA-ME-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-member-list'>
                    /admin/admin-member-list
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-member-alert-popup' target="_blank">
                    <span className='text-green'>멤버 관리(tab)  &gt; 멤버 (팝업)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>CO-MA-ME-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-member-alert-popup'>
                    /admin/admin-member-alert-popup
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-member-alert-popup-reject' target="_blank">
                    <span className='text-purple'>멤버관리(tab)  &gt; 멤버 (팝업)  &gt; 반려 </span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CO-MA-ME-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-member-alert-popup-reject'>
                    /admin/admin-member-alert-popup-reject
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-member-list-nodata' target="_blank">
                    <span className='text-green'>멤버관리(tab) &gt; 멤버 (커뮤니티에 멤버가 없을 경우)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>CO-MA-ME-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-member-list-nodata'>
                    /admin/admin-member-list-nodata
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-member-holding-list' target="_blank">
                    <span className='text-purple'>멤버관리(tab)  &gt; 가입 대기(tab)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CO-MA-AP-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-member-holding-list'>
                    /admin/admin-member-holding-list
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-member-holding-list-nodata' target="_blank">
                    <span className='text-green'>멤버관리(tab)  &gt; 가입 대기 (가입 대기가 없을 경우)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>CO-MA-AP-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-member-holding-list-nodata'>
                    /admin/admin-member-holding-list-nodata
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-member-registration' target="_blank">
                    <span className='text-green'>멤버관리(tab) &gt; 멤버 일괄 등록(tab)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>CO-MA-AP-30</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-member-registration'>
                    /admin/admin-member-registration
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-group-list' target="_blank">
                    <span className='text-green'>멤버관리(tab) &gt; 그룹(tab)  &gt; list</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>CO-MA-GR-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-group-list'>
                    /admin/admin-group-list
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-group-list-nodata' target="_blank">
                    <span className='text-green'>멤버관리(tab) &gt; 그룹(tab) &gt; list (그룹이 없을 경우)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>CO-MA-GR-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-group-list-nodata'>
                    /admin/admin-group-list-nodata
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-group-create' target="_blank">
                    <span className='text-green'>멤버관리(tab) &gt; 그룹(tab)  &gt; Create</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>CO-MA-GR-30</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-group-create'>
                    /admin/admin-group-create
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-group-alert-popup' target="_blank">
                    <span className='text-green'>멤버관리(tab) &gt; 그룹(tab) &gt; Create (팝업)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>CO-MA-GR-30</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-group-alert-popup'>
                    /admin/admin-group-alert-popup
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-group-detail-list' target="_blank">
                    <span className='text-green'>멤버관리(tab) &gt; 그룹(tab) &gt; Detail</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>CO-MA-GR-40</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-group-detail-list'>
                    /admin/admin-group-detail-list
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-group-detail-list-nodata' target="_blank">
                    <span className='text-green'>멤버관리(tab) &gt; 그룹(tab) &gt; Detail  &gt; 그룹 멤버가 없을 경우</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>CO-MA-GR-60</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-group-detail-list-nodata'>
                    /admin/admin-group-detail-list-nodata
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-member-group-add' target="_blank">
                    <span className='text-green'>멤버관리(tab) &gt; 그룹(tab) &gt; Detail  &gt; [그룹 멤버 추가] 버튼 선택 시</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>CO-MA-GR-50</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-member-group-add'>
                    /admin/admin-member-group-add
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>Community Admin - 메뉴관리(tab)</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/menu-default-add-list' target="_blank">
                    <span className='text-purple'>메뉴관리 &gt; 목록 타입 선택 개발</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-50-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/menu-default-add-list'>
                    /admin/menu-default-add-list
                </Link>
            </Table.Cell>
            <Table.Cell>김영혜</Table.Cell>
            <Table.Cell>완료</Table.Cell>
            <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/menu-default' target="_blank">
                    <span className='text-green'>메뉴 관리(tab) &gt; 메뉴 추가</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>CO-MA-ME-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/menu-default'>
                    /admin/menu-default
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/menu-default-add' target="_blank">
                    <span className='text-green'>메뉴 관리(tab) &gt; 메뉴 유형</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>CO-MA-ME-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/menu-default-add'>
                    /admin/menu-default-add
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/menu-default-add-category' target="_blank">
                    <span className='text-green'>메뉴 관리(tab) &gt; 메뉴 유형 - 카테고리</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>CO-MA-ME-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/menu-default-add-category'>
                    /admin/menu-default-add-category
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/menu-default-add-discussion' target="_blank">
                    <span className='text-purple'>메뉴 관리(tab) &gt; 메뉴 유형 - 토론게시판</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CO-MA-ME-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/menu-default-add-discussion'>
                    /admin/menu-default-add-discussion
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/menu-default-add-survey' target="_blank">
                    <span className='text-green'>메뉴 관리(tab) &gt; 메뉴 유형 - survey</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>CO-MA-ME-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/menu-default-add-survey'>
                    /admin/menu-default-add-survey
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/menu-default-add-survey-popup' target="_blank">
                    <span className='text-green'>메뉴 관리(tab) &gt; 메뉴 유형 - survey popup</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>CO-MA-ME-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/menu-default-add-surveypopup'>
                    /admin/menu-default-add-surveypopup
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/menu-default-add-link' target="_blank">
                    <span className='text-green'>메뉴 관리(tab) &gt; 메뉴 유형 - link</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>CO-MA-ME-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/menu-default-add-link'>
                    /admin/menu-default-add-link
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/menu-default-add-html' target="_blank">
                    <span className='text-green'>메뉴 관리(tab) &gt; 메뉴 유형 - html</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>CO-MA-ME-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/menu-default-add-html'>
                    /admin/menu-default-add-html
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>커뮤니티관리자 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>Community Admin - 통계(tab)</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-community-chart-visit-default' target="_blank">
                    <span className='text-purple'>통계(tab) &gt; 방문수(tab) 검색전 (NEW)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CO-MA-ST-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-community-chart-visit-default'>
                    /admin/admin-community-chart-visit-default
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-07-15 완료</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-community-chart-visit' target="_blank">
                    <span className='text-purple'>통계(tab) &gt; 방문수(tab) &gt; 통계 방문수 (NEW)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CO-MA-ST-11</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-community-chart-visit'>
                    /admin/admin-community-chart-visit
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-07-15 완료</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-community-chart-visit-3m' target="_blank">
                    <span className='text-purple'>통계(tab) &gt; 방문수(tab) - 3개월 선택시(NEW)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CO-MA-ST-12</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-community-chart-visit-3m'>
                    /admin/admin-community-chart-visit-3m
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-07-15 완료</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-community-chart-member-default' target="_blank">
                    <span className='text-purple'>통계(tab) &gt; 멤버(tab) - 검색전(NEW)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CO-MA-ST-40</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-community-chart-member-default'>
                    /admin/admin-community-chart-member-default
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-07-15 완료</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/admin/admin-community-chart-member' target="_blank">
                    <span className='text-purple'>커뮤니티 관리  &gt; 홈 관리  &gt; 통계 멤버 (NEW)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CO-MA-ST-41</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/admin/admin-community-chart-member'>
                    /admin/admin-community-chart-member
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-07-15 완료</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
    </>
)
};
export default IndexCommunity
