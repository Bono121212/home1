import React from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const IndexEtc = () => {
    return (
        <>{/* @@기타 */}
        <Table.Row verticalAlign='top' id='ETC'>
            <Table.Cell colSpan='5' className='table-tit'>
                <span className='text-bold'>기타</span>
            </Table.Cell>
        </Table.Row>
        {/* 프로모션 대시보드[S] */}
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>프로모션 대시보드</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/main/MainIndexNew' target="_blank">
                    <span className="text-purple">프로모션 대시보드: 메인 배너</span>
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
            <Table.Cell>남협수</Table.Cell>
            <Table.Cell>
                <p>2023-10-24</p>
            </Table.Cell>
            <Table.Cell>
                <p>메인화면 대시보드 이동 버튼</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/etc/promotion-dashboard' target="_blank">
                    <span className="text-purple">프로모션 대시보드</span>
            </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className="text-purple">AL-MA-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/etc/promotion-dashboard'>
                    /etc/promotion-dashboard
                </Link>
            </Table.Cell>
            <Table.Cell>남협수</Table.Cell>
            <Table.Cell>
                <p>2023-10-13</p>
            </Table.Cell>
            <Table.Cell>
                <p></p>
            </Table.Cell>
        </Table.Row>
        {/* 프로모션 대시보드[E] */}
        {/* @@안전보건교육 */}
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>안전보건교육</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/etc/SafetyEducation' target="_blank">
                    <span className='text-purple'>안전보건교육</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>	ET-01-P01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/etc/SafetyEducation'>
                    /learning/SafetyEducation
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-04-06</Table.Cell>
            <Table.Cell>23-04-25 안전보건교육 추가건</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/etc/SafetyEducationCert' target="_blank">
                    <span className='text-purple'>안전보건교육 (인증)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>	ET-01-P01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/etc/SafetyEducationCert'>
                    /learning/SafetyEducationCert
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-04-06</Table.Cell>
            <Table.Cell>23-04-25 안전보건교육 추가건</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/etc/SafetyEducationError' target="_blank">
                    <span className='text-purple'>안전보건교육 (Error)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>	ET-01-P01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/etc/SafetyEducationError'>
                    /learning/SafetyEducationError
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-04-06</Table.Cell>
            <Table.Cell>23-04-25 안전보건교육 추가건</Table.Cell>
        </Table.Row>
        {/* //안전보건교육 */}
        {/* @시스템 팝업 */}
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>시스템 팝업</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/etc/common-info-modal' target="_blank">
                    <span className='text-blue'>핵인사팝업</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>	ET-01-P01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/etc/common-info-modal'>
                    /etc/common-info-modal
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/etc/welcome-message-modal' target="_blank">
                    <span className='text-blue'>웰컴팝업</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>	ET-02-P01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/etc/welcome-message-modal'>
                    /etc/welcome-message-modal
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/etc/system-info-modal' target="_blank">
                    <span className='text-blue'>시스템 안내 팝업</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>	ET-02-P02</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/etc/system-info-modal'>
                    /etc/system-info-modal
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        {/* //시스템 팝업 */}
        {/* @관리자권한신청페이지 */}
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>관리자권한신청페이지</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/Authority/AdminAuthorityForm' target="_blank">
                    <span className='text-purple'>관리자권한신청 등록</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>	ET-01-P01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/Authority/AdminAuthorityForm'>
                    /Authority/AdminAuthorityForm
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-06-12</Table.Cell>
            <Table.Cell>23-06-27 관리자권한신청화면 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/Authority/AdminAuthorityList' target="_blank">
                    <span className='text-purple'>관리자권한신청 목록</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>	ET-01-P01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/Authority/AdminAuthorityList'>
                    /Authority/AdminAuthorityList
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-06-12</Table.Cell>
            <Table.Cell>23-06-27 관리자권한신청화면 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/Authority/AdminAuthorityListEmpty' target="_blank">
                    <span className='text-purple'>관리자권한신청 목록(Empty)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>	ET-01-P01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/Authority/AdminAuthorityListEmpty'>
                    /Authority/AdminAuthorityListEmpty
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-06-12</Table.Cell>
            <Table.Cell>23-06-27 관리자권한신청화면 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/Authority/AdminAuthorityView' target="_blank">
                    <span className='text-purple'>관리자권한신청 상세(신청)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>	ET-01-P01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/Authority/AdminAuthorityView'>
                    /Authority/AdminAuthorityView
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-06-12</Table.Cell>
            <Table.Cell>23-06-27 관리자권한신청화면 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/Authority/AdminAuthorityViewExpand' target="_blank">
                    <span className='text-purple'>관리자권한신청 상세(승인완료, 전체보기)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>	ET-01-P01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/Authority/AdminAuthorityViewExpand'>
                    /Authority/AdminAuthorityViewExpand
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-06-12</Table.Cell>
            <Table.Cell>23-06-27 관리자권한신청화면 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/Authority/AdminAuthorityModify' target="_blank">
                    <span className='text-purple'>관리자권한신청 수정</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>	ET-01-P01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/Authority/AdminAuthorityModify'>
                    /Authority/AdminAuthorityModify
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-06-12</Table.Cell>
            <Table.Cell>23-06-27 관리자권한신청화면 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/support/Authority_Email_01.html' rel="noopener noreferrer" target="_blank">
                    <span className='text-blue'>관리자 권한 신청 안내 이메일 폼</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>EM-00-03</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/support/Authority_Email_01.html' rel="noopener noreferrer">
                    open1223/dist/html/support/Authority_Email_01.html
                </a>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-06-12</Table.Cell>
            <Table.Cell>23-06-27 관리자권한신청화면 추가</Table.Cell>
        </Table.Row>
        {/* //관리자권한신청페이지 */}
        {/* @신임임원 */}
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>신임임원</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-red'>HTML 신임임원 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>99_HTML_신임임원_01_사전학습</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_detail.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>2차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_1day.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-red'>HTML 신임임원 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>99_HTML_신임임원_02_1일차</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_1day.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_detail_1day.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>2차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_2day.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-red'>HTML 신임임원 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>99_HTML_신임임원_02_2일차</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_2day.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_detail_2day.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>2차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_3day.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-red'>HTML 신임임원 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>99_HTML_신임임원_02_3일차</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_3day.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_detail_3day.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>2차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>

        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_4day.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-red'>HTML 신임임원 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>99_HTML_신임임원_02_4일차</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_4day.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_detail_4day.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>2차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_home.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-red'>HTML 신임임원 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>99_HTML_신임임원_02_3일차</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_home.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_home.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>2차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>

        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_1day_new.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>HTML 신임리더 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>99_HTML_신임리더_02_1일차_new</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_1day_new.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_detail_1day_new.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>

        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_2day_new.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>HTML 신임리더 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>99_HTML_신임리더_02_2일차_new</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_2day_new.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_detail_2day_new.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>

        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_3day_new.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>HTML 신임리더 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>99_HTML_신임리더_02_3일차_new</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_3day_new.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_detail_3day_new.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>

        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_4day_new.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>HTML 신임리더 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>99_HTML_신임리더_02_4일차_new</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_4day_new.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_detail_4day_new.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>


        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_5day_new.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>HTML 신임리더 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>99_HTML_신임리더_02_5일차_new</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_5day_new.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_detail_5day_new.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>


        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/leader_detail_home_img.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>HTML 신임리더 상세 (이미지대체) </span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>HTML_신임리더_HOME</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/leader_detail_home_img.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/leader_detail_home_img.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>


        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/leader_detail_home.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>HTML 신임리더 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>HTML_신임리더_HOME</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/leader_detail_home.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/leader_detail_home.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>

        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_1day_03.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>HTML 신임리더 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>99_HTML_신임리더_03_1일차</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_1day_03.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_detail_1day_03.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>

        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_2day_03.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>HTML 신임리더 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>99_HTML_신임리더_03_2일차</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_2day_03.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_detail_2day_03.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>

        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_3day_03.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>HTML 신임리더 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>99_HTML_신임리더_03_3일차</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_3day_03.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_detail_3day_03.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>

        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_4day_03.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>HTML 신임리더 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>99_HTML_신임리더_03_4일차</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_4day_03.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_detail_4day_03.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>

        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_5day_03.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>HTML 신임리더 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>99_HTML_신임리더_03_5일차</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_5day_03.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_detail_5day_03.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>

        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/leader_detail_home_03.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>HTML 신임리더 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>HTML_신임리더_HOME_03</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/leader_detail_home_03.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/leader_detail_home_03.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>

        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/leader_detail_home_04.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>HTML 신임리더 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>HTML_신임리더_HOME_04</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/leader_detail_home_04.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/leader_detail_home_04.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>

        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_1day_04.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>HTML 신임리더 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>99_HTML_신임리더_04_1일차</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_1day_04.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_detail_1day_04.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>

        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_2day_04.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>HTML 신임리더 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>99_HTML_신임리더_04_2일차</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_2day_04.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_detail_2day_04.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>

        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_3day_04.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>HTML 신임리더 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>99_HTML_신임리더_04_3일차</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_3day_04.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_detail_3day_04.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>

        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_4day_04.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>HTML 신임리더 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>99_HTML_신임리더_04_4일차</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_4day_04.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_detail_4day_04.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>

        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_5day_04.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>HTML 신임리더 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>99_HTML_신임리더_04_5일차</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_5day_04.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_detail_5day_04.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>

        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/leader_detail_home_05.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>HTML 신임리더 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>HTML_신임리더_HOME_05</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/leader_detail_home_05.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/leader_detail_home_05.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>

        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_1day_05.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>HTML 신임리더 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>99_HTML_신임리더_05_1일차</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_1day_05.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_detail_1day_05.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>

        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_2day_05.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>HTML 신임리더 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>99_HTML_신임리더_05_2일차</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_2day_05.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_detail_2day_05.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>

        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_3day_05.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>HTML 신임리더 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>99_HTML_신임리더_05_3일차</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_3day_05.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_detail_3day_05.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>

        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_4day_05.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>HTML 신임리더 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>99_HTML_신임리더_05_4일차</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_4day_05.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_detail_4day_05.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>

        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_5day_05.html" rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>HTML 신임리더 상세</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>99_HTML_신임리더_05_5일차</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href="/suni-asset/public/design-pub/REACT/open1223/dist/html/community/executives_detail_5day_05.html" rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/community/executives_detail_5day_05.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        {/* //신임임원 */}
    </>
)
};
export default IndexEtc
