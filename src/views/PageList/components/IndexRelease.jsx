import React from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const IndexRelease = () => {
    return (
        <>{/* @@배포예정 */}
        <Table.Row verticalAlign='top' id="Release">
            <Table.Cell colSpan='5' className='table-tit'>
                <span className='text-bold'>배포예정</span>
            </Table.Cell>
        </Table.Row>
        {/* 배포 예정 작업 */}
        {/* @배포건 */}
        <Table.Row verticalAlign='top'>
            <Table.Cell colSpan='5' className='table-sub-tit'>
                <span className='text-bold'>메인 페르소나</span>
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
                <p>배포일미정 페르소나 개선건</p>
            </Table.Cell>
        </Table.Row>
        {/* //배포건 */}
    </>
    )
};
export default IndexRelease
