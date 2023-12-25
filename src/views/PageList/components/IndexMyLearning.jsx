import React from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const IndexMyLearning = () => {
    return (
        <>{/* @@My Learning */}
        <Table.Row verticalAlign='top' id="MyLearning">
                <Table.Cell colSpan='5' className='table-tit'>
                    <span className='text-bold'>My Learning</span>
                </Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign='top'>
                <Table.Cell>
                    <Link to='/learning/my-learning-detail-inprogress-note' target="_blank">
                        <span className='text-purple'>학습중 List(In progress)</span>
                    </Link>
                </Table.Cell>
                <Table.Cell textAlign='center'>
                    (<span className='text-purple'> ML-02-02</span>)
                </Table.Cell>
                <Table.Cell className='link-address'>
                    <Link to='/learning/my-learning-detail-inprogress-note'>
                        /learning/my-learning-detail-inprogress-note
                    </Link>
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell><span>21-11-01 현행화</span></Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign='top'>
                <Table.Cell>
                    <Link to='/playlist/in-mylist-playlist' target="_blank">
                        <span className='text-purple'>찜한 과정 List(InMyList)</span>
                    </Link>
                </Table.Cell>
                <Table.Cell textAlign='center'>
                    (<span className='text-purple'>LM-PL-20</span>)
                </Table.Cell>
                <Table.Cell className='link-address'>
                    <Link to='/playlist/in-mylist-playlist'>
                        /playlist/in-mylist-playlist
                    </Link>
                </Table.Cell>
                <Table.Cell>장은진</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell><span>20-22-01 22-03-29 Playlist 추가버튼 추가</span></Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign='top'>
                <Table.Cell>
                    <Link to='/learning/my-learning-detail-required' target="_blank">
                        <span className='text-blue'>핵인싸 과정 List(Required)</span>
                    </Link>
                </Table.Cell>
                <Table.Cell textAlign='center'>
                    (<span className='text-orange'>ML-02-05</span>)
                </Table.Cell>
                <Table.Cell className='link-address'>
                    <Link to='/learning/my-learning-detail-required'>
                        /learning/my-learning-detail-required
                    </Link>
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell><span>20-22-02 현행화</span></Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign='top'>
                <Table.Cell>
                    <Link to='/learning/my-learning-detail-enrolled' target="_blank">
                        <span className='text-blue'>학습예정 List(Enrolled)</span>
                    </Link>
                </Table.Cell>
                <Table.Cell textAlign='center'>
                    (<span className='text-orange'>ML-02-04</span>)
                </Table.Cell>
                <Table.Cell className='link-address'>
                    <Link to='/learning/my-learning-detail-enrolled'>
                        /learning/my-learning-detail-enrolled
                    </Link>
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell><span>20-22-02 현행화</span></Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign='top'>
                <Table.Cell>
                    <Link to='/learning/my-learning-detail-completed' target="_blank">
                        <span className='text-blue'>mySUNI 학습완료 List(Completed)</span>
                    </Link>
                </Table.Cell>
                <Table.Cell textAlign='center'>
                    (<span className='text-orange'> ML-02-06</span>)
                </Table.Cell>
                <Table.Cell className='link-address'>
                    <Link to='/learning/my-learning-detail-completed'>
                        /learning/my-learning-detail-completed
                    </Link>
                </Table.Cell>
                <Table.Cell>장은진</Table.Cell>
                <Table.Cell>22-08-10</Table.Cell>
                <Table.Cell>
                    <p>20-22-02 현행화</p>
                    <p>22-08-16 수료증 추가</p>
                </Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign='top'>
                <Table.Cell>
                    <Link to='/learning/my-learning-detail-aplcompleted' target="_blank">
                        <span className='text-blue'>개인학습 완료 List(APLCompleted)</span>
                    </Link>
                </Table.Cell>
                <Table.Cell textAlign='center'>
                    (<span className='text-orange'>ML-02-09</span>)
                </Table.Cell>
                <Table.Cell className='link-address'>
                    <Link to='/learning/my-learning-detail-aplcompleted'>
                        /learning/my-learning-detail-aplcompleted
                    </Link>
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>20-06-23</Table.Cell>
                <Table.Cell><span>20-06-23 추가</span><br /><span>20-22-02현행화</span></Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign='top'>
                <Table.Cell>
                    <Link to='/learning/my-learning-detail-apldetail' target="_blank">
                        <span className='text-blue'>개인학습 완료 List(APLCompleted)  &gt; detail</span>
                    </Link>
                </Table.Cell>
                <Table.Cell textAlign='center'>
                    (<span className='text-orange'>ML-02-09-03</span>)
                </Table.Cell>
                <Table.Cell className='link-address'>
                    <Link to='/learning/my-learning-detail-apldetail'>
                        /learning/my-learning-detail-apldetail
                    </Link>
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>20-06-23</Table.Cell>
                <Table.Cell><span>20-06-23 추가</span><br /><span>20-22-02현행화</span></Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign='top'>
                <Table.Cell>
                    <Link to='/learning/my-learning-detail-retry' target="_blank">
                        <span className='text-blue'>취소/미이수(Retry)</span>
                    </Link>
                </Table.Cell>
                <Table.Cell textAlign='center'>
                    (<span className='text-orange'>ML-02-08</span>)
                </Table.Cell>
                <Table.Cell className='link-address'>
                    <Link to='/learning/my-learning-detail-retry'>
                        /learning/my-learning-detail-retry
                    </Link>
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell><span>20-22-02 현행화</span></Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign='top'>
                <Table.Cell>
                    <Link to='/learning/my-learning-detail-common-new' target="_blank">
                        <span className='text-purple'>List Nodata 공통</span>
                    </Link>
                </Table.Cell>
                <Table.Cell textAlign='center'>
                    (<span className='text-purple'>LM-PB-20</span>)
                </Table.Cell>
                <Table.Cell className='link-address'>
                    <Link to='/learning/my-learning-detail-common-new'>
                        /learning/my-learning-detail-common-new
                    </Link>
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell><span>3차 고도화 (유컴패니온)</span><span>2022 현행화</span></Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign='top'>
                <Table.Cell>
                    <Link to='/learning/learning-approver-appointment-modal' target="_blank">
                        <span className='text-blue'>Home  &gt; Learnig Detail  &gt; 승인자 설정 Popup</span>
                    </Link>
                </Table.Cell>
                <Table.Cell textAlign='center'>
                    (<span className='text-orange'>ML-05-P08</span>)
                </Table.Cell>
                <Table.Cell className='link-address'>
                    <Link to='/learning/learning-approver-appointment-modal'>
                        /learning/learning-approver-appointment-modal
                    </Link>
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell>20-05-07</Table.Cell>
                <Table.Cell><span className="text-grey">20-05-07 추가</span></Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign='top'>
                <Table.Cell>
                    <Link to='/learning/learning-detail-linkedin-modal' target="_blank">
                        <span
                            className='text-red'>Home  &gt; Learning Card  &gt; Detail (LinkedIn 안내)</span>
                    </Link>
                </Table.Cell>
                <Table.Cell textAlign='center'>
                    (<span className='text-orange'>ML-05-P05</span>)
                </Table.Cell>
                <Table.Cell className='link-address'>
                    <Link to='/learning/learning-detail-linkedin-modal'>
                        /learning/learning-detail-linkedin-modal
                    </Link>
                </Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell><span>2차 고도화 (유컴패니온)</span><br /><span>20-22-02현행화</span></Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign='top'>
                <Table.Cell>
                    <Link to='/learning/learning-detail-coursera-modal' target="_blank">
                        <span
                            className='text-red'>Home  &gt; Learning Card  &gt; Detail (coursera 안내)</span>
                    </Link>
                </Table.Cell>
                <Table.Cell textAlign='center'>
                    (<span className='text-orange'>ML-05-P05_Coursera</span>)
                </Table.Cell>
                <Table.Cell className='link-address'>
                    <Link to='/learning/learning-detail-coursera-modal'>
                        /learning/learning-detail-coursera-modal
                    </Link>
                </Table.Cell>
                <Table.Cell>장은진</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell><span>22-05-12</span></Table.Cell>
            </Table.Row>
        </>
)
};
export default IndexMyLearning
