import React from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const IndexMain = () => {
    return (
        <>{/* @@Main */}
        <Table.Row verticalAlign='top' id="Main">
            <Table.Cell colSpan='5' className='table-tit'>
                <span className='text-bold'>Main</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/main/MainIndexNew' target="_blank">
                    <span className="text-purple">Main</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className="text-purple">AL-MA-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/main/MainIndexNew'>
                    /main/MainIndexNew
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>
                <p>22-08-19</p>
                <p>22-10-05</p>
                <p>23-05-15</p>
                <p>23-08-21</p>
            </Table.Cell>
            <Table.Cell>
                <p>22-01-25 22-03-29 Playlist 추가</p>
                <p>22-10-05 Foundation Skill 추가</p>
                <p>23-05-15 퍼블리싱 현행화</p>
                <p>배포일미정 학습중인과정 추가</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/main/MainIndexNewNoBadge' target="_blank">
                    <span className="text-purple">Main (진행중인 뱃지 없음)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className="text-purple">New_Main_02</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/main/MainIndexNewNoBadge'>
                    /main/MainIndexNewNoBadge
                </Link>
            </Table.Cell>
            <Table.Cell>
                <p>장은진</p>
            </Table.Cell>
            <Table.Cell>
                <p>21-11-03</p>
            </Table.Cell>
            <Table.Cell>
                <p>20-21-11 UI/UX 개선</p>
            </Table.Cell>
        </Table.Row>
        {/* 2021-02-23 LM-PB-11 팝업 추가*/}
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/main/MainPersonalBoardSetting' target="_blank">
                    <span className='text-purple'>Main &gt; 목표설정 Modal</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PB-11</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/main/MainPersonalBoardSetting'>
                    /main/MainPersonalBoardSetting
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-02-23</Table.Cell>
            <Table.Cell><span>3차 고도화 (유컴패니온)</span></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/AddPersonalLearningFormNew' target="_blank">
                    <span className='text-blue'>Main &gt; 개인학습 입력화면</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>ML-03-01 ML-03-01-2</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/AddPersonalLearningFormNew'>
                    /learning/AddPersonalLearningFormNew
                </Link>
            </Table.Cell>
            <Table.Cell>최은영</Table.Cell>
            <Table.Cell>21-11-03</Table.Cell>
            <Table.Cell><span>21-11-03 현행화</span></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/sample/MainTopBanner' target="_blank">
                    <span className='text-purple'>header &gt; 상단 탑배너 영역잡기</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/sample/MainTopBanner'>
                    /sample/MainTopBanner
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-02-23</Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/main/MainPersonalBoardProfileNew' target="_blank">
                    <span className="text-purple">header &gt; 프로필 카드 NEW</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className="text-purple">New_Main_01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/main/MainPersonalBoardProfileNew'>
                    /main/MainPersonalBoardProfileNew
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>
                <p>21-11-03</p>
                <p>22-05-24</p>
            </Table.Cell>
            <Table.Cell>
                <p>21-11-03 UI/UX 개선</p>
                <p>22-05-24 외부강사용 추가</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/main/MainLearningViewAll' target="_blank">
                    <span className='text-purple'>수강신청과정 모아보기</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>Footer_A(open)</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/main/MainLearningViewAll'>
                    /main/MainLearningViewAll
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-05-15</Table.Cell>
            <Table.Cell>
                <p>23-05-15 퍼블리싱 현행화</p>
            </Table.Cell>
        </Table.Row>
        {/* @추천 */}
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>추천</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/recommend/RecommendDetailChannelOpen' target="_blank">
                    <span className='text-purple'>추천상세 목록  &gt; 관심채널 보기 영역 확장 (3차고도화)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-PB-21</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/recommend/RecommendDetailChannelOpen'>
                    /recommend/RecommendDetailChannelOpen
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-05-15</Table.Cell>
            <Table.Cell><span>23-05-15 퍼블리싱 현행화</span></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/recommend/RecommendDetailNoData' target="_blank">
                    <span className='text-purple'>추천상세 목록 (No Data)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>RC-01-02</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/recommend/RecommendDetailNoData'>
                    /recommend/RecommendDetailNoData
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-05-15</Table.Cell>
            <Table.Cell><span>23-05-15 퍼블리싱 현행화</span></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/recommend/RecommendViewallChannelChange' target="_blank">
                    <span className='text-purple'>추천상세 목록  &gt; 전체보기 목록</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>RC-01-02</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/recommend/RecommendViewallChannelChange'>
                    /recommend/RecommendViewallChannelChange
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-05-15</Table.Cell>
            <Table.Cell><span>23-05-15 퍼블리싱 현행화</span></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/recommend/RecommendViewNoData' target="_blank">
                    <span className='text-purple'>추천상세 목록  &gt; 전체보기 목록(No Data)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>RC-01-02</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/recommend/RecommendViewNoData'>
                    /recommend/RecommendViewNoData
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-05-15</Table.Cell>
            <Table.Cell><span>23-05-15 퍼블리싱 현행화</span></Table.Cell>
        </Table.Row>
        {/* //추천 */}
        {/* @관심채널 */}
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>관심채널</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/mypage/channel-change-modal' target="_blank">
                    <span className='text-purple'>관심 채널 변경 팝업  &gt; 선택 값 없음, 선택 후</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>MY-01-01-P02, MY-01-01-P02-2</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/mypage/channel-change-modal'>
                    /mypage/channel-change-modal
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-02-18</Table.Cell>
            <Table.Cell>22-04-05 채널 2Depth 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/mypage/channel-change-search-modal' target="_blank">
                    <span className='text-purple'>관심 채널 변경 팝업  &gt; 검색 후</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>/MY-01-01-P02-3</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/mypage/channel-change-search-modal'>
                    /mypage/channel-change-search-modal
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-02-18</Table.Cell>
            <Table.Cell>22-04-05 채널 2Depth 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/mypage/channel-change-search-nodata-modal' target="_blank">
                    <span className='text-purple'>관심 채널 변경 팝업  &gt; 검색 결과 값 없음</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>MY-01-01-P02-4</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/mypage/channel-change-search-nodata-modal'>
                    /mypage/channel-change-search-nodata-modal
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-02-18</Table.Cell>
            <Table.Cell>22-04-05 채널 2Depth 추가</Table.Cell>
        </Table.Row>
        {/* //관심채널 */}
        {/* @Hot Topic */}
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>Hot Topic</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/hot-topic/HotTopicList' target="_blank">
                    <span className="text-purple">Hot Topic 리스트</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className="text-purple"></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/hot-topic/HotTopicList'>
                    /hot-topic/HotTopicList
                </Link>
            </Table.Cell>
            <Table.Cell>최은영/장은진</Table.Cell>
            <Table.Cell>
                <p>20-10-26</p>
                <p>21-12-12</p>
                <p>22-03-18</p>
            </Table.Cell>
            <Table.Cell>
                <p>20-12-11 UI/UX 개선</p>
                <p>20-12-12 핫토픽 별점삭제 후 만족도 추가</p>
                <p>22-03-18 new label추가</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/hot-topic/HotTopicPage' target="_blank">
                    <span className="text-purple">Hot Topic 전체보기</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className="text-purple">Hot_Topic_00</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/hot-topic/HotTopicPage'>
                    /hot-topic/HotTopicPage
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell><p>22-03-18</p></Table.Cell>
            <Table.Cell><p>22-04-05 전체 둘러보기 - 신규, 기존 hottopic카드 icon교체, new label추가</p></Table.Cell>
        </Table.Row>
        {/* // Hot Topic */}
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>설정변경</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/main/MainSettingKo' target="_blank">
                    <span className="text-purple">설정변경안내</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span>AL-MA-10</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/main/MainSettingKo'>
                    /main/MainSettingKo
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-10-18</Table.Cell>
            <Table.Cell><p>22-10-18 설정변경 안내</p></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>Tutorial</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/main/MainTutorialV5Ko' target="_blank">
                    <span className="text-purple">Mobile Tutorial ko</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span>AL-MA-10</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/main/MainTutorialV5Ko'>
                    /main/MainTutorialV5Ko
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-07-27</Table.Cell>
            <Table.Cell><p>22-08-28 배포 모바일 어플 open 튜토리얼</p></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/main/MainTutorialV5Zh' target="_blank">
                    <span className="text-purple">Mobile Tutorial zh</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span>AL-MA-10</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/main/MainTutorialV5Zh'>
                    /main/MainTutorialV5Zh
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-07-27</Table.Cell>
            <Table.Cell><p>22-08-28 배포 모바일 어플 open 튜토리얼</p></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/main/MainTutorialV5En' target="_blank">
                    <span className="text-purple">Mobile Tutorial en</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span>AL-MA-10</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/main/MainTutorialV5En'>
                    /main/MainTutorialV5En
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-07-27</Table.Cell>
            <Table.Cell><p>22-08-28 배포 모바일 어플 open 튜토리얼</p></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/main/MainTutorialPlaylistKo' target="_blank">
                    <span className="text-purple">Playlist Tutorial kor</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span>AL-MA-10</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/main/MainTutorialPlaylistKo'>
                    /main/MainTutorialPlaylistKo
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-03-29</Table.Cell>
            <Table.Cell>22-03-29 Playlist 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/main/MainTutorialPlaylistZh' target="_blank">
                    <span className="text-purple">Playlist Tutorial chn</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span>AL-MA-10</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/main/MainTutorialPlaylistZh'>
                    /main/MainTutorialPlaylistZh
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-03-29</Table.Cell>
            <Table.Cell>22-03-29 Playlist 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/main/MainTutorialPlaylistEn' target="_blank">
                    <span className="text-purple">Playlist Tutorial eng</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span>AL-MA-10</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/main/MainTutorialPlaylistEn'>
                    /main/MainTutorialPlaylistEn
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-03-29</Table.Cell>
            <Table.Cell>22-03-29 Playlist 추가</Table.Cell>
        </Table.Row>
    </>
)
};
export default IndexMain
