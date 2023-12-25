import React from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const IndexCommon = () => {
    return (
        <>{/* @@공통 */}
        <Table.Row verticalAlign='top' id='Common'>
            <Table.Cell colSpan='5' className='table-tit'>
                <span className='text-bold'>공통</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/style' target="_blank">
                    <span className='text-blue'>Element</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center' />
            <Table.Cell className='link-address'>
                <Link to='/style'>
                    /style
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>

        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/common/editor-emoji-popup' target="_blank">
                    <span className='text-purple'>NAMO Editor Emoji</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>namo_emoji_A</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/common/editor-emoji-popup'>
                    /common/editor-emoji-popup
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell><span>emoji editor 용</span></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/common/privacy-policy-modal' target="_blank">
                    <span className='text-blue'>개인정보 처리방침</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>CO-03-02</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/common/privacy-policy-modal'>
                    /common/privacy-policy-modal
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/common/personal-info-modal' target="_blank">
                    <span className='text-purple'>외부교육 개인정보 연동팝업</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-IF-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/common/personal-info-modal'>
                    /common/personal-info-modal
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/common/personal-info-modal-no-chk' target="_blank">
                    <span className='text-purple'>외부교육 개인정보 연동팝업 - 체크 없을떄</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-IF-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/common/personal-info-modal-no-chk'>
                    /common/personal-info-modal-no-chk
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/common/site-map-modal' target="_blank">
                    <span className='text-blue'>서비스 전체보기</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CO-05-01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/common/site-map-modal'>
                    /common/site-map-modal
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-11-18</Table.Cell>
            <Table.Cell>운영(현행화수정)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>Badge Case</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/certification/AllBadgeListDetailV2' target="_blank">
                    <span className='text-blue'>Badge 상세 화면</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>badge</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/certification/AllBadgeListDetailV2'>
                    /certification/AllBadgeListDetailV2
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>22-08-23</Table.Cell>
            <Table.Cell><p>22-10-05 Badge UI 개선</p></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/certification/all-badge-list-detail-case-v2' target="_blank">
                    <span className='text-blue'>Badge 케이스마다 상세화면</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>badge</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/certification/all-badge-list-detail-case-v2'>
                    /certification/all-badge-list-detail-case-v2
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>22-08-23</Table.Cell>
            <Table.Cell><p>22-10-05 Badge UI 개선</p></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>Comment Case New</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/sample/comment-case-new' target="_blank">
                    <span className='text-purple'>Comment Case New</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/sample/comment-case-new'>
                    /sample/comment-case-new
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-08-17</Table.Cell>
            <Table.Cell>
                <p>22-08-23 댓글이미지 확대</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/sample/comment-case-new-zoom' target="_blank">
                    <span className='text-purple'>Comment Case New Zoom</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/sample/comment-case-new-zoom'>
                    /sample/comment-case-new-zoom
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-08-17</Table.Cell>
            <Table.Cell>
                <p>22-08-23 댓글이미지 확대</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-comment-new' target="_blank">
                    <span className='text-purple'>comment New 적용된 card/cube comment tab</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-comment-new'>
                    /learning/cube-comment-new
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>퍼블 완료</Table.Cell>
            <Table.Cell>운영</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/learning-discuss-comment-new' target="_blank">
                    <span className='text-purple'>comment New 적용된 talk</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/learning-discuss-comment-new'>
                    /learning/learning-discuss-comment-new
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>퍼블 완료</Table.Cell>
            <Table.Cell>운영</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/community-templete/templete-sub-detail-type-02-comment' target="_blank">
                    <span className='text-purple'>comment New, 만족도 적용된 커뮤니티(Type02)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>CM-70-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/community-templete/templete-sub-detail-type-02-comment'>
                    /community-templete/templete-sub-detail-type-02-comment
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>퍼블완료</Table.Cell>
            <Table.Cell>운영</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>기타</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/common/error404' target="_blank">
                    <span className='text-blue'>404 error</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>CO-08-01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/common/error404'>
                    /common/error404
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/common/system-error' target="_blank">
                    <span className='text-blue'>시스템 점검 안내</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>CO-08-02</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/common/system-error'>
                    /common/system-error
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/common/system-check' target="_blank">
                    <span className='text-blue'>시스템 점검 안내 팝업</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>CO-08-02</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/common/system-check'>
                    /common/system-check
                </Link>
            </Table.Cell>
            <Table.Cell>남협수</Table.Cell>
            <Table.Cell>2023-12-08</Table.Cell>
            <Table.Cell>기간 한정 사용</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/common/loading' target="_blank">
                    <span className='text-blue'>loading</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/*(<span className='text-orange'>CO-05-08-01</span>)*/}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/common/loading'>
                    /common/loading
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/common/modal-set' target="_blank">
                    <span className='text-blue'>Modal set(Alert/Confirm)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/*(<span className='text-orange'>CO-05-08-01</span>)*/}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/common/modal-set'>
                    /common/modal-set
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/common/browser-align' target="_blank">
                    <span className='text-purple'>ie Redirect</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/common/browser-align'>
                    /common/browser-align
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>21-11-11</Table.Cell>
            <Table.Cell>운영</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/print/report-eduResult.html' rel="noopener noreferrer" target="_blank">
                    <span className='text-purple'>프린트출력화면 - 교육결과 리포트</span>
                </a>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)<br />
            </Table.Cell>
            <Table.Cell className='link-address'>
                <a href='/suni-asset/public/design-pub/REACT/open1223/dist/html/print/report-eduResult.html' rel="noopener noreferrer">
                    open1223/dist/html/print/report-eduResult.html
                </a>
            </Table.Cell>
            <Table.Cell>최은영</Table.Cell>
            <Table.Cell>퍼블완료</Table.Cell>
            <Table.Cell>운영</Table.Cell>
        </Table.Row>
    </>
)
};
export default IndexCommon
