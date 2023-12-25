import React from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const IndexTeacher = () => {
    return (
        <>{/* @@강사서비스 */}
        <Table.Row verticalAlign='top' id='Expert'>
            <Table.Cell colSpan='5' className='table-tit'>
                <span className='text-bold'>강사서비스</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/expert/all-lecturer-common' target="_blank">
                    <span className='text-blue'>사내 / 외부강사 공통</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>EX-01-01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/expert/all-lecturer-common'>
                    /expert/all-lecturer-common
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell><span>20-22-02 현행화</span></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/expert/teacher-lecture' target="_blank">
                    <span className='text-blue'>Teacher`s Lecture</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>EX-02-01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/expert/teacher-lecture'>
                    /expert/teacher-lecture
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell><span>20-22-02 현행화</span></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/expert/teacher-lecture-nodata' target="_blank">
                    <span className='text-blue'>Teacher`s Lecture_없는경우</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>EX-02-02</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/expert/teacher-lecture-nodata'>
                    /expert/teacher-lecture-nodata
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell><span>20-22-02 현행화</span></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/expert/external-teacher-main-card-v2' target="_blank">
                    <span className='text-purple'>강사전용학습관리시스템  &gt; 메인 &gt; CardTab</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>PMS-10-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/expert/external-teacher-main-card-v2'>
                    /expert/external-teacher-main-card-v2
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-05-11</Table.Cell>
            <Table.Cell>23-05-23 강사서비스 메인 개선</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/expert/external-teacher-main-cube-v2' target="_blank">
                    <span className='text-purple'>강사전용학습관리시스템  &gt; 메인  &gt; CubeTab</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>PMS-10-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/expert/external-teacher-main-cube-v2'>
                    /expert/external-teacher-main-cube-v2
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-05-11</Table.Cell>
            <Table.Cell>23-05-23 강사서비스 메인 개선</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/expert/external-teacher-main-community-v2' target="_blank">
                    <span className='text-purple'>강사전용학습관리시스템  &gt; 메인  &gt; CommunityTab</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>PMS-10-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/expert/external-teacher-main-community-v2'>
                    /expert/external-teacher-main-community-v2
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-05-11</Table.Cell>
            <Table.Cell>23-05-23 강사서비스 메인 개선</Table.Cell>
        </Table.Row>
        {/* <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/expert/external-teacher-main-profile' target="_blank">
                    <span className='text-purple'>강사전용학습관리시스템  &gt; 메인 &gt; 프로필 설정</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>PMS-10-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/expert/external-teacher-main-profile'>
                    /expert/external-teacher-main-profile
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-05-24</Table.Cell>
            <Table.Cell><span>프로필 edit modal 추가</span></Table.Cell>
        </Table.Row> */}
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/expert/external-teacher-intro-card-v2' target="_blank">
                    <span className='text-purple'>강사전용학습관리시스템  &gt; 소개 &gt; Card</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>PMS-20-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/expert/external-teacher-intro-card-v2'>
                    /expert/external-teacher-intro-card-v2
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-05-11</Table.Cell>
            <Table.Cell>23-05-23 강사서비스 메인 개선</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/expert/external-teacher-intro-cube-v2' target="_blank">
                    <span className='text-purple'>강사전용학습관리시스템  &gt; 소개 &gt; Cube</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>PMS-20-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/expert/external-teacher-intro-cube-v2'>
                    /expert/external-teacher-intro-cube-v2
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-05-11</Table.Cell>
            <Table.Cell>23-05-23 강사서비스 메인 개선</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/expert/external-teacher-overview' target="_blank">
                    <span className='text-purple'> · tab1 강의정보 (상세)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>PMS-20-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/expert/external-teacher-overview'>
                    /expert/external-teacher-overview
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/expert/external-teacher-comment' target="_blank">
                    <span className='text-purple'> · tab1 강의정보 (댓글)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>PMS-20-22</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/expert/external-teacher-comment'>
                    /expert/external-teacher-comment
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        {/* <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/expert/external-teacher-task' target="_blank">
                    <span className='text-purple'> · tab2 과제관리 (목록)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>PMS-20-30</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/expert/external-teacher-task'>
                    /expert/external-teacher-task
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/expert/external-teacher-modal-score' target="_blank">
                    <span className='text-purple'> · tab2 과제관리 - 팝업(과제채점)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>PMS-20-31</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/expert/external-teacher-modal-score'>
                    /expert/external-teacher-modal-score
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/expert/external-teacher-modal-view2-task' target="_blank">
                    <span className='text-purple'> · tab2 과제관리 - 팝업(문제보기2)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>PMS-20-41</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/expert/external-teacher-modal-view2-task'>
                    /expert/external-teacher-modal-view2-task
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/expert/external-teacher-modal-task-all' target="_blank">
                    <span className='text-purple'> · tab2 과제관리 - 팝업(결과보기)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>PMS-20-42</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/expert/external-teacher-modal-task-all'>
                    /expert/external-teacher-modal-task-all
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/expert/external-teacher-test' target="_blank">
                    <span className='text-purple'> · tab3 테스트관리 (목록)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>PMS-20-40</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/expert/external-teacher-test'>
                    /expert/external-teacher-test
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/expert/external-teacher-modal-view' target="_blank">
                    <span className='text-purple'> · tab3 테스트관리 - 팝업(문제보기)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>PMS-20-41</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/expert/external-teacher-modal-view'>
                    /expert/external-teacher-modal-view
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/expert/external-teacher-modal-view2' target="_blank">
                    <span className='text-purple'> · tab3 테스트관리 - 팝업(문제보기2)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>PMS-20-41</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/expert/external-teacher-modal-view2'>
                    /expert/external-teacher-modal-view2
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/expert/external-teacher-modal-test-all' target="_blank">
                    <span className='text-purple'> · tab3 테스트관리 - 팝업(결과보기)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>PMS-20-42</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/expert/external-teacher-modal-test-all'>
                    /expert/external-teacher-modal-test-all
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
        </Table.Row> */}
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/expert/external-teacher-search-a' target="_blank">
                    <span className='text-purple'> · tab2 학습자관리 (카드검색)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>PMS-20-52</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/expert/external-teacher-search-a'>
                    /expert/external-teacher-search-a
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/expert/external-teacher-search-b' target="_blank">
                    <span className='text-purple'> · tab2 학습자관리 (큐브검색)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>PMS-20-50</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/expert/external-teacher-search-b'>
                    /expert/external-teacher-search-b
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
    </>
)
};
export default IndexTeacher
