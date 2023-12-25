import React from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const IndexCertification = () => {
    return (
        <>{/* @@Certification */}
        <Table.Row verticalAlign='top' id='Certification'>
            <Table.Cell colSpan='5' className='table-tit'>
                <span className='text-bold'>Certification</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/certification/BadgeSample' target="_blank">
                    <span className='text-purple'>Badge UI</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>[Type A] Badge_UI</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/certification/BadgeSample'>
                    /certification/BadgeSample
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>
                <p>20-21-12</p>
                <p>21-12-03</p>
                <p>22-08-19</p>
            </Table.Cell>
            <Table.Cell>
                <p>20-21-12 수정</p>
                <p>21-12-03</p>
                <p>22-08-19 Badge UI 개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/certification/AllBadgeListSlideV2' target="_blank">
                    <span className='text-purple'>Badge List(tab)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>-</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/certification/AllBadgeListSlideV2'>
                    /certification/AllBadgeListSlideV2
                </Link>
            </Table.Cell>
            <Table.Cell>
                <p>장은진</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>조찬기</p>
            </Table.Cell>
            <Table.Cell>
                <p>22-04-05</p>
                <p>22-08-23</p>
                <p>22-10-05</p>
                <p>23-01-19</p>
            </Table.Cell>
            <Table.Cell>
                <p>22-04-05 Badge UI 개선</p>
                <p>22-08-23 Badge UI 개선</p>
                <p>22-10-05 Foundation Skill 추가</p>
                <p>23-02-04 Card/Cube 구조개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/certification/ChallengingBadgeListV2' target="_blank">
                    <span className='text-purple'>도전중 Badge(tab)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>-</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/certification/ChallengingBadgeListV2'>
                    /certification/ChallengingBadgeListV2
                </Link>
            </Table.Cell>
            <Table.Cell>조찬기</Table.Cell>
            <Table.Cell>
                <p>22-04-05</p>
                <p>22-08-23</p>
            </Table.Cell>
            <Table.Cell>
                <p>22-04-05 Badge UI 개선</p>
                <p>22-08-23 Badge UI 개선</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/certification/EarnedBadgeListV2' target="_blank">
                    <span className='text-purple'>MyBadge(tab)</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>-</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/certification/EarnedBadgeListV2'>
                    /certification/EarnedBadgeListV2
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-08-23</Table.Cell>
            <Table.Cell><p>22-10-05 Badge UI 개선</p></Table.Cell>
        </Table.Row>
    </>
)
};
export default IndexCertification
