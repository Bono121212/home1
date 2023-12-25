import React from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const IndexOnboard = () => {
    return (
        <>{/* @@온보딩 */}
        {/* @온보딩 */}
        <Table.Row verticalAlign='top' id="Onboard">
            <Table.Cell colSpan='5' className='table-tit'>
                <span className='text-bold'>온보딩</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/login/privacy-agree' target="_blank">
                    <span className='text-purple'>개인정보 제공동의</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LO-06-01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/login/privacy-agree'>
                    /login/privacy-agree
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-12-02</Table.Cell>
            <Table.Cell>22-12-02 운영 현행화</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/login/interest-settings-job-plan' target="_blank">
                    <span className='text-purple'>관심사 설정  &gt; 현재직무 선택</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LO-07-02</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/login/interest-settings-job-plan'>
                    /login/interest-settings-job-plan
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-12-02</Table.Cell>
            <Table.Cell>22-12-02 운영 현행화</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/login/interest-settings-job-plan-case01' target="_blank">
                    <span className='text-purple'>관심사 설정  &gt; 관심직무 선택</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LO-07-02-case1</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/login/interest-settings-job-plan-case01'>
                    /login/interest-settings-job-plan-case01
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-12-02</Table.Cell>
            <Table.Cell>22-12-02 운영 현행화</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/login/interest-settings-part' target="_blank">
                    <span className='text-purple'>관심사 설정  &gt; 관심분야 선택</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LO-07-01, LO-07-01-case1</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/login/interest-settings-part'>
                    /login/interest-settings-part
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-12-02</Table.Cell>
            <Table.Cell>22-12-02 운영 현행화</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/login/interest-settings-learning-type' target="_blank">
                    <span className='text-purple'>관심사 설정  &gt; 학습목표 선택</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LO-07-03, LO-07-03-case1</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/login/interest-settings-learning-type'>
                    /login/interest-settings-learning-type
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-12-02</Table.Cell>
            <Table.Cell>22-12-02 운영 현행화</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/login/interest-settings-complete' target="_blank">
                    <span className='text-purple'>관심사 설정  &gt; 맞춤형 학습 추천 로딩(GIf ani 별도)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>LO-07-04</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/login/interest-settings-complete'>
                    /login/interest-settings-complete
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-12-02</Table.Cell>
            <Table.Cell>22-12-02 운영 현행화</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/login/interest-settings-suni-intro' target="_blank">
                    <span className='text-blue'>관심사 설정  &gt; SUNI 소개</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>LO-07-05</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/login/interest-settings-suni-intro'>
                    /login/interest-settings-suni-intro
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/login/interest-settings-start' target="_blank">
                    <span className='text-blue'>관심사 설정시작화면</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>LO-07-06</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/login/interest-settings-start'>
                    /login/interest-settings-start
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell><span>22-04-06 상단 구성 변경 및 이미지 교체</span></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/login/new-privacy-agree' target="_blank">
                    <span className='text-blue'>개인정보 동의 재시행 안내, 개인정보 동의, 현 직무 선택, 관심 직무 선택, 관심분야, 학습방식</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-orange'>LO-08-01, LO-08-02, LO-08-03, LO-08-04, LO-08-05, LO-08-06</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/login/new-privacy-agree'>
                    /login/new-privacy-agree
                </Link>
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>20-08-14</Table.Cell>
            <Table.Cell>20-08-14 추가</Table.Cell>
        </Table.Row>
        {/* //온보딩 */}
    </>
)
};
export default IndexOnboard
