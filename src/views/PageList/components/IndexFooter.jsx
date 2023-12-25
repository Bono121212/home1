import React from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const IndexFooter = () => {
    return (
        <>{/* @@Footer */}
        <Table.Row verticalAlign='top' id='Footer'>
            <Table.Cell colSpan='5' className='table-tit'>
                <span className='text-bold'>Footer</span>
            </Table.Cell>
        </Table.Row>
        {/* @게시판 */}
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>고객센터</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/support/notice-list-new' target="_blank">
                    <span className='text-blue'>Notice  &gt; List 일반사용자</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>QA-NO-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/support/notice-list-new'>
                    /support/notice-list-new
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-10-07</Table.Cell>
            <Table.Cell>21-10-07 운영개선 배포</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/support/notice-list-new-nodata' target="_blank">
                    <span className='text-blue'>Notice  &gt; List - nodata</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>QA-NO-10-nodata</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/support/notice-list-new-nodata'>
                    /support/notice-list-new-nodata
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-10-07</Table.Cell>
            <Table.Cell>21-10-07 운영개선 배포</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/support/faq-user-list' target="_blank">
                    <span className='text-blue'>FAQ  &gt; List </span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>QA-FA-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/support/faq-user-list'>
                    /support/faq-user-list
                </Link>
            </Table.Cell>
            <Table.Cell>최은영</Table.Cell>
            <Table.Cell>21-10-07</Table.Cell>
            <Table.Cell>21-10-07 운영개선 배포</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/support/faq-user-list-nodata' target="_blank">
                    <span className='text-blue'>FAQ  &gt; List - nodata</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>QA-FA-10-nodata</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/support/faq-user-list-nodata'>
                    /support/faq-user-list-nodata
                </Link>
            </Table.Cell>
            <Table.Cell>최은영</Table.Cell>
            <Table.Cell>21-10-07</Table.Cell>
            <Table.Cell>21-10-07 운영개선 배포</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/support/user-qa-list' target="_blank">
                    <span className='text-blue'>나의 이용문의  &gt; List</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>QA-QA-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/support/user-qa-list'>
                    /support/user-qa-list
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-10-07</Table.Cell>
            <Table.Cell>21-10-07 운영개선 배포</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/support/user-qa-write' target="_blank">
                    <span className='text-blue'>나의 이용문의  &gt; WRITEFORM</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>QA-QA-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/support/user-qa-write'>
                    /support/user-qa-write
                </Link>
            </Table.Cell>
            <Table.Cell>최은영</Table.Cell>
            <Table.Cell>21-10-07</Table.Cell>
            <Table.Cell>21-10-07 운영개선 배포</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/support/user-qa-write-modal-faq' target="_blank">
                    <span className='text-blue'>나의 이용문의  &gt; WRITEFORM  &gt; 자주찾는 질문 popup</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>QA-QA-30</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/support/user-qa-write-modal-faq'>
                    /support/user-qa-write-modal-faq
                </Link>
            </Table.Cell>
            <Table.Cell>최은영</Table.Cell>
            <Table.Cell>21-10-07</Table.Cell>
            <Table.Cell>21-10-07 운영개선 배포</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/support/user-qa-write-modal-faq-nodata' target="_blank">
                    <span className='text-blue'>나의 이용문의  &gt; WRITEFORM  &gt; 자주찾는 질문 popup -nodata</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>QA-QA-30-nodata</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/support/user-qa-write-modal-faq-nodata'>
                    /support/user-qa-write-modal-faq-nodata
                </Link>
            </Table.Cell>
            <Table.Cell>최은영</Table.Cell>
            <Table.Cell>21-10-07</Table.Cell>
            <Table.Cell>21-10-07 운영개선 배포</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/support/qa-admin-answer-view-survey' target="_blank">
                    <span className='text-purple'>Q &amp; A 관리  &gt; 만족도 조사 입력 폼</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>QA-QA-40</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/support/qa-admin-answer-view-survey'>
                    /support/qa-admin-answer-view-survey
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-06-03</Table.Cell>
            <Table.Cell><p>22-06-03 만족도 조사 평점에서 thumbupdown으로 변경</p></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/support/qa-admin-answer-view-survey-done' target="_blank">
                    <span className='text-purple'>Q &amp; A 관리  &gt; 만족도 조사 입력완료</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>QA-QA-50</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/support/qa-admin-answer-view-survey-done'>
                    /support/qa-admin-answer-view-survey-done
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-06-03</Table.Cell>
            <Table.Cell><p>22-02-22 재문의하기 버튼추가</p><p>22-06-03 만족도 조사 평점에서 thumbupdown으로 변경</p></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/support/qa-admin-list' target="_blank">
                    <span className='text-blue'>Q &amp; A 관리  &gt; List</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>QA-AD-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/support/qa-admin-list'>
                    /support/qa-admin-list
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-10-07</Table.Cell>
            <Table.Cell>21-10-07 운영개선 배포</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/support/qa-admin-answer' target="_blank">
                    <span className='text-blue'>Q &amp; A 관리  &gt; 문의답변 입력 form</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>QA-AD-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/support/qa-admin-answer'>
                    /support/qa-admin-answer
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-10-07</Table.Cell>
            <Table.Cell>21-10-07 운영개선 배포</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/support/qa-admin-answer-view' target="_blank">
                    <span className='text-purple'>Q &amp; A 관리  &gt; 문의답변 view</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>QA-AD-30</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/support/qa-admin-answer-view'>
                    /support/qa-admin-answer-view
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-06-03</Table.Cell>
            <Table.Cell><p>22-06-03 만족도 조사 평점에서 thumbupdown으로 변경</p></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/support/QnA_Email_01.html' rel="noopener noreferrer" target="_blank">
                    <span className='text-blue'>문의 접수(문의확인) 이메일 폼</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>EM-00-03</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/support/QnA_Email_01.html' rel="noopener noreferrer">
                    open1223/dist/html/support/QnA_Email_01.html
                </a>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-10-07</Table.Cell>
            <Table.Cell>21-10-07 운영개선 배포</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/support/QnA_Email_02.html' rel="noopener noreferrer" target="_blank">
                    <span className='text-blue'>문의 답변 이메일 폼</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>EM-00-03</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/support/QnA_Email_02.html' rel="noopener noreferrer">
                    open1223/dist/html/support/QnA_Email_02.html
                </a>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-10-07</Table.Cell>
            <Table.Cell>21-10-07 운영개선 배포</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/support/notice-view-user' target="_blank">
                    <span className='text-blue'>Notice  &gt; view 일반 사용자</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>SU-01-03</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/support/notice-view-user'>
                    /support/notice-view-user
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>20-02-22</Table.Cell>
            <Table.Cell><p>20-02-22 comment 현행화 </p></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/support/notice-view-admin' target="_blank">
                    <span className='text-blue'>Notice  &gt; view Admin 계정</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>SU-01-04</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/support/notice-view-admin'>
                    /support/notice-view-admin
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>20-02-22</Table.Cell>
            <Table.Cell><p>20-02-22 comment 현행화 </p></Table.Cell>
        </Table.Row>
        {/* //고객센터 */}
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>써니 사용 가이드 버튼 추가건</span>
            </Table.Cell>
        </Table.Row>
        {/* <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/introduction/all-introduction'>
                    <span className='text-blue'>SUNI 소개</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>IN-01-01</span>)<br />
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/introduction/all-introduction'>
                    /introduction/all-introduction
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row> */}
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-01-01-KOR.html' rel="noopener noreferrer" target="_blank">
                    <span className='text-blue'>SUNI 소개 - 한국어</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>IN-01-01-KOR</span>)<br />
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-01-01-KOR.html' rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/introduction/IN-01-01-KOR.html
                </a>
            </Table.Cell>
            <Table.Cell>남협수</Table.Cell>
            <Table.Cell>22-10-10</Table.Cell>
            <Table.Cell>
                {/* <p>23-03-07 써니 사용 가이드 버튼 추가건</p> */}
                <p>23-10-10 텍스트 및 버튼 컬러 수정</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-01-01-CHN.html' rel="noopener noreferrer" target="_balnk">
                    <span className='text-blue'>SUNI 소개 - 중국어</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>IN-01-01-CHN</span>)<br />
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-01-01-CHN.html' rel="noopener noreferrer" target="_balnk">
                    open1223/dist/html/introduction/IN-01-01-CHN.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-01-01-ENG.html' rel="noopener noreferrer" target="_blank">
                    <span className='text-blue'>SUNI 소개 - 영어</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>IN-01-01-ENG</span>)<br />
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-01-01-ENG.html' rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/introduction/IN-01-01-ENG.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>Category 소개</span>
            </Table.Cell>
        </Table.Row>

        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/introduction/category-introduction-v2' target="_blank">
                    <span className='text-purple'>Category 커리큘럼 V2</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>IN-02-01</span>)<br />
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/introduction/category-introduction-v2'>
                    /introduction/category-introduction-v2
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>22-08-23</Table.Cell>
            <Table.Cell><p>22년 상반기 커리큘럼 업데이트</p><p>22-10-05 Badge UI 개선</p></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/introduction/category-introduction-v2-eng' target="_blank">
                    <span className='text-purple'>Category 커리큘럼 V2 영문</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>IN-02-01</span>)<br />
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/introduction/category-introduction-v2-eng'>
                    /introduction/category-introduction-v2-eng
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>22-08-23</Table.Cell>
            <Table.Cell><p>22년 상반기 커리큘럼 업데이트</p><p>22-10-05 Badge UI 개선</p></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/introduction/category-introduction-v2-chn' target="_blank">
                    <span className='text-purple'>Category 커리큘럼 V2 중문</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>IN-02-01</span>)<br />
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/introduction/category-introduction-v2-chn'>
                    /introduction/category-introduction-v2-chn
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>22-08-23</Table.Cell>
            <Table.Cell><p>22년 상반기 커리큘럼 업데이트</p><p>22-10-05 Badge UI 개선</p></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>Certification 소개</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/introduction/certification-system-introduction-ko-v2' target="_blank">
                    <span className='text-purple'>Certification 소개(국문)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/introduction/certification-system-introduction-ko-v2'>
                    /introduction/certification-system-introduction-ko-v2
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-10-04</Table.Cell>
            <Table.Cell>22-10-05 배포예정</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/introduction/certification-system-introduction-en' target="_blank">
                    <span className='text-blue'>Certification 소개(영문)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>IN-03-01</span>)<br />
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/introduction/certification-system-introduction-en'>
                    /introduction/certification-system-introduction-en
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-08-23</Table.Cell>
            <Table.Cell><p>22-10-05 Badge UI 개선</p></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/introduction/certification-system-introduction-zh' target="_blank">
                    <span className='text-blue'>Certification 소개(중문)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>IN-03-01</span>)<br />
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/introduction/certification-system-introduction-zh'>
                    /introduction/certification-system-introduction-zh
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-08-23</Table.Cell>
            <Table.Cell><p>22-10-05 Badge UI 개선</p></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-03-01-KOR.html' rel="noopener noreferrer" target="_blank">
                    <span className='text-blue'>Certification 소개 - 한국어</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>IN-03-01-KOR</span>)<br />
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-03-01-KOR.html' rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/introduction/IN-03-01-KOR.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>다국어 - html(한국어) / 운영은 html 아닌, React페이지(다국어)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-03-01-CHN.html' rel="noopener noreferrer" target="_balnk">
                    <span className='text-blue'>Certification 소개 - 중국어</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>IN-03-01-CHN</span>)<br />
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-03-01-CHN.html' rel="noopener noreferrer" target="_balnk">
                    open1223/dist/html/introduction/IN-03-01-CHN.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>다국어 - html(중국어) / 운영은 html 아닌, React페이지(다국어)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-03-01-ENG.html' rel="noopener noreferrer" target="_blank">
                    <span className='text-blue'>Certification 소개 - 영어</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>IN-01-01-ENG</span>)<br />
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-03-01-ENG.html' rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/introduction/IN-03-01-ENG.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>다국어 - html(영어) / 운영은 html 아닌, React페이지(다국어)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>홍보자료</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/introduction/certification-system-introduction' target="_blank">
                    <span className='text-blue'>홍보 자료</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>IN-04-01</span>)<br />
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/introduction/promotion-data'>
                    /introduction/promotion-data
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>홍보자료 탭 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-04-01-KOR.html' rel="noopener noreferrer" target="_blank">
                    <span className='text-blue'>홍보 자료 - 한국어</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>IN-04-01-KOR</span>)<br />
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-04-01-KOR.html' rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/introduction/IN-04-01-KOR.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>다국어 - html(한국어) / 운영은 html 아닌, React페이지(다국어)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-04-01-CHN.html' rel="noopener noreferrer" target="_balnk">
                    <span className='text-blue'>홍보 자료 - 중국어</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>IN-04-01-CHN</span>)<br />
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-04-01-CHN.html' rel="noopener noreferrer" target="_balnk">
                    open1223/dist/html/introduction/IN-04-01-CHN.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>다국어 - html(중국어) / 운영은 html 아닌, React페이지(다국어)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-04-01-ENG.html' rel="noopener noreferrer" target="_blank">
                    <span className='text-blue'>홍보 자료 - 영어</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>IN-04-01-ENG</span>)<br />
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/introduction/IN-04-01-ENG.html' rel="noopener noreferrer" target="_blank">
                    open1223/dist/html/introduction/IN-04-01-ENG.html
                </a>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>다국어 - html(영어) / 운영은 html 아닌, React페이지(다국어)</Table.Cell>
        </Table.Row>
        {/* //홍보자료 */}
        {/* @승인관리 */}
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>승인관리</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/approval/approval-required-list' target="_blank">
                    <span className='text-blue'>유료과정  &gt; 승인요청 List</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>AP-01-01-01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/approval/approval-required-list'>
                    /approval/approval-required-list
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>20-04-16</Table.Cell>
            <Table.Cell>
                <span className="text-grey">20-04-16 추가, 0429 UI추가, 신청현황 팝업</span><br />
                <span className="text-grey">20-05-14 신청현황 삭제, 목록 데이터 추가</span>
                20-07-07 승인메뉴 별도 분리
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/approval/approval-required-approve-modal' target="_blank">
                    <span className='text-blue'>유료과정  &gt; 승인요청 list  &gt; 일괄 승인 팝업</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>MY-03-01-P01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/approval/approval-required-approve-modal'>
                    /approval/approval-required-approve-modal
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>20-04-16</Table.Cell>
            <Table.Cell><span className="text-grey">20-04-16 추가</span></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/approval/approval-required-reject-modal' target="_blank">
                    <span className='text-blue'>유료과정  &gt; 승인요청 list  &gt; 일괄 반려 팝업</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>MY-03-01-P02</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/approval/approval-required-reject-modal'>
                    /approval/approval-required-reject-modal
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>20-04-16</Table.Cell>
            <Table.Cell><span className="text-grey">20-04-16 추가</span></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/approval/approval-rejected-list' target="_blank">
                    <span className='text-blue'>유료과정  &gt; 반려 list</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>AP-01-01-02</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/approval/approval-rejected-list'>
                    /approval/approval-rejected-list
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>20-04-16</Table.Cell>
            <Table.Cell><span className="text-grey">20-04-16 추가</span></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/approval/approval-completed-list' target="_blank">
                    <span className='text-blue'>유료과정  &gt; 승인완료 list</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>AP-01-01-03</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/approval/approval-completed-list'>
                    /approval/approval-completed-list
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>20-04-17</Table.Cell>
            <Table.Cell><span className="text-grey">20-04-17 추가</span></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/approval/approval-required-detail' target="_blank">
                    <span className='text-blue'>유료과정  &gt; Detail(승인대기 시)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>AP-01-02-01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/approval/approval-required-detail'>
                    /approval/approval-required-detail
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>20-04-16</Table.Cell>
            <Table.Cell><span className="text-grey">20-04-16 추가</span></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/approval/approval-rejected-detail' target="_blank">
                    <span className='text-blue'>유료과정  &gt; Detail(승인 혹은 반려 시)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>AP-01-02-01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/approval/approval-rejected-detail'>
                    /approval/approval-rejected-detail
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>20-04-16</Table.Cell>
            <Table.Cell><span className="text-grey">20-04-16 추가</span></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/approval/apl-approval-list' target="_blank">
                    <span className='text-blue'>개인학습  &gt; List, 내역없음</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>AP-02-01-01, AP-02-01-02</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/approval/apl-approval-list'>
                    /approval/apl-approval-list
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>20-06-23</Table.Cell>
            <Table.Cell>20-06-23 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/approval/apl-approval-detail' target="_blank">
                    <span className='text-blue'>개인학습  &gt; Detail, 반려사유 등록팝업</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>AP-02-02, AP-02-02-P01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/approval/apl-approval-detail'>
                    /approval/apl-approval-detail
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>20-06-23</Table.Cell>
            <Table.Cell>20-06-23 추가</Table.Cell>
        </Table.Row>
        {/* //승인관리 */}
    </>
)
};
export default IndexFooter
