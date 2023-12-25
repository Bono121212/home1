import React from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const IndexCategory = () => {
    return (
        <>{/* @@Category */}
        <Table.Row verticalAlign='top' id="Category">
            <Table.Cell colSpan='5' className='table-tit'>
                <span className='text-bold'>Category</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/common/categoryDetail' target="_blank">
                    <span className='text-purple'>헤더 Category 팝업</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>공통</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/common/categoryDetail'>
                    /common/categoryDetail
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-02-18</Table.Cell>
            <Table.Cell>
                <p>22-04-05 채널 2Depth 추가</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/common/CollegeAllNew' target="_blank">
                    <span className='text-purple'>Category 전체보기 - 3Depth 전체선택</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>NEW_CO-05-01-01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/common/CollegeAllNew'>
                    /common/CollegeAllNew
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-02-18</Table.Cell>
            <Table.Cell>22-04-05 채널 2Depth 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/common/CollegeAllNewSelected' target="_blank">
                    <span className='text-purple'>Category 전체보기 - 3Depth 메뉴선택</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>NEW_CO-05-01-01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/common/CollegeAllNewSelected'>
                    /common/CollegeAllNewSelected
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>22-02-18</Table.Cell>
            <Table.Cell>22-04-05 채널 2Depth 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/common/CollegeAllNewNoDepth' target="_blank">
                    <span className='text-purple'>Category 전체보기 - 전체선택 - 3Depth 없음</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>NEW_CO-05-01-01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/common/CollegeAllNewNoDepth'>
                    /common/CollegeAllNewNoDepth
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-02-18</Table.Cell>
            <Table.Cell>22-04-05 채널 2Depth 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/common/CollegeAllNewNoDepthSelected' target="_blank">
                    <span className='text-purple'>Category 전체보기 - 메뉴선택 - 3Depth 없음</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>NEW_CO-05-01-01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/common/CollegeAllNewNoDepthSelected'>
                    /common/CollegeAllNewNoDepthSelected
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-02-18</Table.Cell>
            <Table.Cell>22-04-05 채널 2Depth 추가</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/common/CollegeAllNewSelectedAll' target="_blank">
                    <span className='text-purple'>Category 전체보기 - 특정 채널 전체보기</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>NEW_CO-05-01-01</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/common/CollegeAllNewSelectedAll'>
                    /common/CollegeAllNewSelectedAll
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-02-18</Table.Cell>
            <Table.Cell>22-04-05 채널 2Depth 추가</Table.Cell>
        </Table.Row>
    </>
)
};
export default IndexCategory
