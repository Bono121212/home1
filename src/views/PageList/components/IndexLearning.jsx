import React from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const IndexLearning = () => {
    return (
        <>{/* @@학습과정 */}
        <Table.Row verticalAlign='top' id='Learning'>
            <Table.Cell colSpan='5' className='table-tit'>
                <span className='text-bold'>학습과정</span>
            </Table.Cell>
        </Table.Row>
        {/* @@학습과정 */}
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>학습과정 샘플/템플릿</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/sample/note-sample' target="_blank">
                    <span className='text-purple'>Note Sample </span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/sample/note-sample'>
                    /sample/note-sample
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-11-18</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/sample/card-sample' target="_blank">
                    <span className='text-purple'>Card Sample</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>REQ-004</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/sample/card-sample'>
                    /sample/card-sample
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-11-04</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/card-overview-temp' target="_blank">
                    <span className='text-purple'>카드 Overview Template</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span className='text-purple'>REQ-004</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/card-overview-temp'>
                    /learning/card-overview-temp
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-04</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/single-overview-temp' target="_blank">
                    <span className='text-purple'>단독 큐브 Overview Template</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span className='text-purple'>REQ-004</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/single-overview-temp'>
                    /learning/single-overview-temp
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-04</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-overview-temp' target="_blank">
                    <span className='text-purple'>유형별 큐브 Overview Template</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span className='text-purple'>REQ-004</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-overview-temp'>
                    /learning/cube-overview-temp
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-04</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/single-cube-temp' target="_blank">
                    <span className='text-purple'>유형별 단독 큐브 Template</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span className='text-purple'>REQ-004</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/single-cube-temp'>
                    /learning/single-cube-temp
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-02-02</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>학습과정 Overview</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/card-overview-always' target="_blank">
                    <span className='text-purple'>Card Overview 상시형</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>REQ-005</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/card-overview-always'>
                    /learning/card-overview-always
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-04</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Cube/Card구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/card-overview-always-fail' target="_blank">
                    <span className='text-purple'>Card Overview 상시형 (미이수)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>REQ-005</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/card-overview-always-fail'>
                    /learning/card-overview-always-fail
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-04</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Cube/Card구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/card-overview-preiod' target="_blank">
                    <span className='text-purple'>Card Overview 기간형</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>REQ-006</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/card-overview-preiod'>
                    /learning/card-overview-preiod
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-09</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Cube/Card구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/card-overview-preiod-02' target="_blank">
                    <span className='text-purple'>Card Overview 기간형 (과정 포함)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>REQ-006</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/card-overview-preiod-02'>
                    /learning/card-overview-preiod-02
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-09</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Cube/Card구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/card-overview-preiod-03' target="_blank">
                    <span className='text-purple'>Card Overview 기간형 (수강신청전)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>REQ-006</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/card-overview-preiod-03'>
                    /learning/card-overview-preiod-03
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-02-21</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Cube/Card구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/card-overview-live' target="_blank">
                    <span className='text-purple'>Card Overview 라이브형</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>REQ-007</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/card-overview-live'>
                    /learning/card-overview-live
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-10</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Cube/Card구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/card-overview-inquery-modal' target="_blank">
                    <span className='text-purple'>Card Overview 문의하기 팝업</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>REQ-007</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/card-overview-inquery-modal'>
                    /learning/card-overview-inquery-modal
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-10</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Cube/Card구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/card-overview-inquery-modal-error' target="_blank">
                    <span className='text-purple'>Card Overview 문의하기 팝업(필수입력)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>REQ-007</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/card-overview-inquery-modal-error'>
                    /learning/card-overview-inquery-modal-error
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-10</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Cube/Card구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>학습과정 교육유형 : Video</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-video' target="_blank">
                    <span className='text-purple'>Video</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>REQ-009</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-video'>
                    /learning/cube-video
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-04</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/single-video' target="_blank">
                    <span className='text-purple'>Video (단일큐브)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span className='text-purple'>REQ-009</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/single-video'>
                    /learning/single-video
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-04</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>교육유형 : Video &gt; 퀴즈</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-video-quiz' target="_blank">
                    <span className='text-purple'>Video &gt; Quiz popup</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>C1-12-61</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-video-quiz'>
                    /learning/cube-video-quiz
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-video-quiz-defaut' target="_blank">
                    <span className='text-purple'>Video &gt; Quiz(default)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>C1-12-62</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-video-quiz-defaut'>
                    /learning/cube-video-quiz-defaut
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-video-quiz-01-single' target="_blank">
                    <span className='text-purple'>Video &gt; Quiz 01(Single)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>C1-12-61</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-video-quiz-01-single'>
                    /learning/cube-video-quiz-01-single
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-video-quiz-image-zoom' target="_blank">
                    <span className='text-purple'>Video &gt; Quiz 02(ImageZoom)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>C1-12-62</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-video-quiz-image-zoom'>
                    /learning/cube-video-quiz-image-zoom
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-video-quiz-03-short' target="_blank">
                    <span className='text-purple'>Video &gt; Quiz 03(Short)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>C1-12-63</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-video-quiz-03-short'>
                    /learning/cube-video-quiz-03-short
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-video-quiz-04-descriptive' target="_blank">
                    <span className='text-purple'>Video &gt; Quiz 04(Descriptive)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>C1-12-64</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-video-quiz-04-descriptive'>
                    /learning/cube-video-quiz-04-descriptive
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-video-quiz-05-result-survey' target="_blank">
                    <span className='text-purple'>Video &gt; Quiz 05(Result Survey)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>C1-12-73</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-video-quiz-05-result-survey'>
                    /learning/cube-video-quiz-05-result-survey
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-video-quiz-wrong' target="_blank">
                    <span className='text-purple'>Video &gt; Quiz(오답의 경우)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>C1-12-72</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-video-quiz-wrong'>
                    /learning/cube-video-quizWrong
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-video-quiz-answer-ok' target="_blank">
                    <span className='text-purple'>Video &gt; Quiz(답안 제출 완료)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>C1-12-74</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-video-quiz-answer-ok'>
                    /learning/cube-video-quizAnswerOk
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-video-quiz-finish' target="_blank">
                    <span className='text-purple'>Video &gt; Quiz(참여 완료)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>C1-12-76</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-video-quiz-finish'>
                    /learning/cube-video-quizFinish
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-video-quiz-sample' target="_blank">
                    <span className='text-purple'>Video &gt; Quiz(다음 영상 안내)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>C1-12-76</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-video-quiz-sample'>
                    /learning/cube-video-quizSample
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-video-quiz-description' target="_blank">
                    <span className='text-purple'>Video &gt; Quiz(다른 사람 의견 보기)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>C1-12-75</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-video-quiz-description'>
                    /learning/cube-video-quizDescription
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-video-quiz-alert-close' target="_blank">
                    <span className='text-purple'>Video &gt; Quiz(퀴즈풀고 이어보기 화면)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>C1-12-71</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-video-quiz-alert-close'>
                    /learning/cube-video-quiz-alert-close
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>3차 고도화 (유컴패니온)</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>학습과정 교육유형 : Audio</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-audio' target="_blank">
                    <span className='text-purple'>Audio</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span className='text-orange'>REQ-010</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-audio'>
                    /learning/cube-audio
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-11</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/single-audio' target="_blank">
                    <span className='text-purple'>Audio (단일큐브)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span className='text-orange'>REQ-010</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/single-audio'>
                    /learning/single-audio
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-11</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>학습과정 교육유형 : Document</span>
            </Table.Cell>
        </Table.Row>
        {/* 2020-10-15 LM-DO-10 추가*/}
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-document' target="_blank">
                    <span className='text-purple'>Document</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span className='text-orange'>LM-DO-10</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-document'>
                    /learning/cube-document
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-11-11</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/single-document' target="_blank">
                    <span className='text-purple'>Document (단일큐브)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span className='text-orange'>LM-DO-10</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/single-document'>
                    /learning/single-document
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>학습과정 교육유형 : Assignment</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-assignment' target="_blank">
                    <span className='text-purple'>Assignment Post 목록 (자동이수)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>LM-RE-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-assignment'>
                    /learning/cube-assignment
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-14</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-assignment' target="_blank">
                    <span className='text-purple'>Assignment Post 목록 (자동이수)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>LM-RE-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-assignment'>
                    /learning/cube-assignment
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>
                <p>22-11-14</p>
                <p>23-04-18</p>
            </Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
                <p>23-04-25 Assignment 개선건</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-assignment-cond-static' target="_blank">
                    <span className='text-purple'>Assignment Post 목록 (수동이수)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>LM-RE-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-assignment-cond-static'>
                    /learning/cube-assignment-cond-static
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>
                <p>22-11-14</p>
                <p>23-04-18</p>
            </Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
                <p>23-04-25 Assignment 개선건</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-assignment-post-nodata' target="_blank">
                    <span className='text-purple'>Assignment Post 목록 (데이터 없을시)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>LM-RE-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-assignment-post-nodata'>
                    /learning/cube-assignment-post-nodata
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-14</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-assignment-post-empty' target="_blank">
                    <span className='text-purple'>Assignment Post 목록 (검색결과 없을시)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>LM-RE-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-assignment-post-empty'>
                    /learning/cube-assignment-post-empty
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-14</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-assignment-post-write' target="_blank">
                    <span className='text-purple'>Assignment Post 등록 </span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>LM-RE-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-assignment-post-write'>
                    /learning/cube-assignment-post-write
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-14</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-assignment-post-detail' target="_blank">
                    <span className='text-purple'>Assignment Post 상세 </span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>LM-RE-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-assignment-post-detail'>
                    /learning/cube-assignment-post-detail
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-14</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-assignment-report-write' target="_blank">
                    <span className='text-purple'>Assignment Report (작성전)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>LM-RE-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-assignment-report-write'>
                    /learning/cube-assignment-report-write
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-14</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-assignment-report-grading' target="_blank">
                    <span className='text-purple'>Assignment Report (채점중)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>LM-RE-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-assignment-report-grading'>
                    /learning/cube-assignment-report-grading
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-14</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-assignment-report-fail' target="_blank">
                    <span className='text-purple'>Assignment Report (불합격)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>LM-RE-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-assignment-report-fail'>
                    /learning/cube-assignment-report-fail
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-14</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-assignment-report-pass' target="_blank">
                    <span className='text-purple'>Assignment Report (합격)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>LM-RE-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-assignment-report-pass'>
                    /learning/cube-assignment-report-pass
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-14</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/single-assignment' target="_blank">
                    <span className='text-purple'>Assignment (단일큐브)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-RE-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/single-assignment'>
                    /learning/single-assignment
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-14</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>학습과정 교육유형 : Discussion</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-discussion' target="_blank">
                    <span className='text-purple'>Discussion</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-DI-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-discussion'>
                    /learning/cube-discussion
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-11</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-discussion-nodata' target="_blank">
                    <span className='text-purple'>Discussion (Nodata)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-DI-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-discussion-nodata'>
                    /learning/cube-discussion-nodata
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-11</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/single-discussion' target="_blank">
                    <span className='text-purple'>Discussion (단일큐브)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-DI-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/single-discussion'>
                    /learning/single-discussion
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-11</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>학습과정 교육유형 : Webpage</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-webpage' target="_blank">
                    <span className='text-purple'>Webpage</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>LM-RE-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-webpage'>
                    /learning/cube-webpage
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-11-11</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/single-webpage' target="_blank">
                    <span className='text-purple'>Webpage (단일큐브)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/single-webpage'>
                    /learning/single-webpage
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-11-11</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-webpage-embed' target="_blank">
                    <span className='text-purple'>Webpage (embedded)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-webpage-embed'>
                    /learning/cube-webpage-embed
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-11-11</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/single-webpage-embed' target="_blank">
                    <span className='text-purple'>Webpage (embedded)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/single-webpage-embed'>
                    /learning/single-webpage-embed
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-11-11</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-webpage-coursera' target="_blank">
                    <span className='text-purple'>Webpage (외부교육)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-webpage-coursera'>
                    /learning/cube-webpage-coursera
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-11-11</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>학습과정 교육유형 : Class</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-class' target="_blank">
                    <span className='text-purple'>Class 학습중</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-EC-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-class'>
                    /learning/cube-class
                </Link>
            </Table.Cell>
            <Table.Cell>
                <p>장은진</p>
                <p>조찬기</p>
            </Table.Cell>
            <Table.Cell>
                <p>22-11-08</p>
                <p>23-05-23</p>
            </Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
                <p>23-05-30 기간형카드 신청상태 컬러변경</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-class-absence' target="_blank">
                    <span className='text-purple'>Class 불참</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-EC-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-class-absence'>
                    /learning/cube-class-absence
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-11-08</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/single-class' target="_blank">
                    <span className='text-purple'>Class (단일큐브)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-EC-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/single-class'>
                    /learning/single-class
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-11-08</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-class-absence' target="_blank">
                    <span className='text-purple'>Class - 불참/미이수</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-class-absence'>
                    /learning/cube-class-absence
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-11-22</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/single-class-enrolment-modal' target="_blank">
                    <span className='text-purple'>Class (단일큐브) - 수강신청</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span className='text-purple'>IN-02-01</span>)<br/> */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/single-class-enrolment-modal'>
                    /learning/single-class-enrolment-modal
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-11-08</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>학습과정 교육유형 : Live</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-live' target="_blank">
                    <span className='text-purple'>Live</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>LM-RE-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-live'>
                    /learning/cube-live
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-11</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-live-popup' target="_blank">
                    <span className='text-purple'>Live 알림팝업 신청하기</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>LM-RE-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-live-popup'>
                    /learning/cube-live-popup
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-11</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-live-popup02' target="_blank">
                    <span className='text-purple'>Live 알림팝업 신청취소</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>LM-RE-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-live-popup02'>
                    /learning/cube-live-popup02
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-11</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/single-live' target="_blank">
                    <span className='text-purple'>Live (단일큐브)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>LM-RE-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/single-live'>
                    /learning/single-live
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-11</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>학습과정 교육유형 : TEST</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-test' target="_blank">
                    <span className='text-purple'>TEST 응시하기</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-TE-05</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-test'>
                    /learning/cube-test
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-18</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-test-02' target="_blank">
                    <span className='text-purple'>TEST 응시하기 (응시 제한없음)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-TE-05</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-test-02'>
                    /learning/cube-test-02
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-18</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-test-text' target="_blank">
                    <span className='text-purple'>TEST 응시중 </span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-TE-05</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-test-text'>
                    /learning/cube-test-text
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-18</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-test-complete' target="_blank">
                    <span className='text-purple'>TEST 채점결과 팝업</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-TE-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-test-complete'>
                    /learning/cube-test-complete
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-18</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-test-pass' target="_blank">
                    <span className='text-purple'>TEST 응시완료 (이수)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-TE-05</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-test-pass'>
                    /learning/cube-test-pass
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-18</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-test-fail' target="_blank">
                    <span className='text-purple'>TEST 응시완료 (미이수)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-TE-05</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-test-fail'>
                    /learning/cube-test-fail
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-18</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-test-confirm' target="_blank">
                    <span className='text-purple'>TEST 응시완료 (채점중)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-TE-05</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-test-confirm'>
                    /learning/cube-test-confirm
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-18</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/single-test' target="_blank">
                    <span className='text-purple'>TEST (단일큐브) </span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-TE-05</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/single-test'>
                    /learning/single-test
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-18</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>학습과정 교육유형 : Talk</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-talk' target="_blank">
                    <span className='text-purple'>Talk</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>LM-RE-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-talk'>
                    /learning/cube-talk
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-11-18</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>학습과정 교육유형 : Survey</span>
            </Table.Cell>
        </Table.Row>
        {/* 2020-10-15 LM-SU-10 추가*/}
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-survey' target="_blank">
                    <span className='text-purple'>Survey</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-SU-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-survey'>
                    /learning/cube-survey
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-18</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-survey-basic' target="_blank">
                    <span className='text-purple'>Survey 진행 (일반) </span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-SU-05</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-survey-basic'>
                    /learning/cube-survey-basic
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>
                <p>22-11-18</p>
                <p>23-02-15</p>
            </Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
                <p>23-02-21 Cube Survey 개선건</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-survey-group' target="_blank">
                    <span className='text-purple'>Survey 진행 (그룹) </span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-SU-05</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-survey-group'>
                    /learning/cube-survey-group
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-02-15</Table.Cell>
            <Table.Cell>
                <p>23-02-21 Cube Survey 개선건</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-survey-zoom' target="_blank">
                    <span className='text-purple'>Survey 이미지 돋보기</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-SU-05</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-survey-zoom'>
                    /learning/cube-survey-zoom
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-02-15</Table.Cell>
            <Table.Cell>
                <p>23-02-21 Cube Survey 개선건</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-survey-core' target="_blank">
                    <span className='text-purple'>Survey 과정평가 (필수만족도) </span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-SU-05</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-survey-core'>
                    /learning/cube-survey-core
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-18</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-survey-chart-core' target="_blank">
                    <span className='text-purple'>Survey 과정평가 결과 팝업</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span className='text-purple'></span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-survey-chart-core'>
                    /learning/cube-survey-chart-core
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-18</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-survey-chart-basic' target="_blank">
                    <span className='text-purple'>Survey 일반설문 결과 팝업</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span className='text-purple'></span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-survey-chart-basic'>
                    /learning/cube-survey-chart-basic
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>23-02-17</Table.Cell>
            <Table.Cell>
                <p>23-02-21 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-survey-complete' target="_blank">
                    <span className='text-purple'>Survey 응시 참여완료</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {/* (<span className='text-purple'>LM-SU-15</span>) */}
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-survey-complete'>
                    /learning/cube-survey-complete
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-18</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-survey-done' target="_blank">
                    <span className='text-purple'>Survey 재진입 응답완료</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-SU-20</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-survey-done'>
                    /learning/cube-survey-done
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-18</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/single-survey' target="_blank">
                    <span className='text-purple'>Survey (단일큐브)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LM-SU-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/single-survey'>
                    /learning/single-survey
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-11-18</Table.Cell>
            <Table.Cell>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>학습과정 교육유형 - Blended Chapter</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-blendedchapter' target="_blank">
                    <span className='text-purple'>Blended Chapter</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-blendedchapter'>
                    /learning/cube-blendedchapter
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-08-10</Table.Cell>
            <Table.Cell>22-09-20 Blended 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-blendedchapter-case2' target="_blank">
                    <span className='text-purple'>Blended Chapter Case2</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-blendedchapter-case2'>
                    /learning/cube-blendedchapter-case2
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-08-16</Table.Cell>
            <Table.Cell>22-09-20 Blended 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-blendedchapter-case3' target="_blank">
                    <span className='text-purple'>Blended Chapter Case3</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-blendedchapter-case3'>
                    /learning/cube-blendedchapter-case3
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-10-13</Table.Cell>
            <Table.Cell>22-09-20 Blended 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/learning/cube-blendedchapter-quiz' target="_blank">
                    <span className='text-purple'>Blended Chapter Video quiz</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/learning/cube-blendedchapter-quiz'>
                    /learning/cube-blendedchapter-quiz
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-08-16</Table.Cell>
            <Table.Cell>22-09-20 Blended 추가</Table.Cell>
        </Table.Row>
        {/* @@학습과정 */}
    </>
)
};
export default IndexLearning
