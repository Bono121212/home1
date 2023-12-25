import React from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const IndexSearch = () => {
    return (
        <>{/* @@검색 */}
        <Table.Row verticalAlign='top' id='Search'>
            <Table.Cell colSpan='5' className='table-tit'>
                <span className='text-bold'>검색</span>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='searchTotal/search-result-new' target="_blank">
                    <span className='text-purple'>통합 검색 전체 결과 - 검색옵션 &gt; 교육일정 &gt; [달력] 선택후  </span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>SE-20-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/searchTotal/search-result-new'>
                    /searchTotal/search-result-new
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-08-23</Table.Cell>
            <Table.Cell><p>20-21-11 UI/UX 개선</p><p>22-10-05 Badge UI 개선</p></Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='searchTotal/search-result-new-suggest' target="_blank">
                    <span className='text-purple'>통합 검색 전체 결과 - (ex:오타) 제안단어로 검색</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>SE-20-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/searchTotal/search-result-new-suggest'>
                    /searchTotal/search-result-new-suggest
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>20-21-10 퍼블완료</Table.Cell>
            <Table.Cell>20-21-11 UI/UX 개선</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='searchTotal/search-result-new-re' target="_blank">
                    <span className='text-purple'>통합 검색 결과 내 재검색 </span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>SE-20-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/searchTotal/search-result-new-re'>
                    /searchTotal/search-result-new-re
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>20-21-10 퍼블완료</Table.Cell>
            <Table.Cell>20-21-11 UI/UX 개선</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='searchTotal/search-result-nodata' target="_blank">
                    <span className='text-purple'>통합 검색 결과가 없는 경우 </span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'>SE-20-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/searchTotal/search-result-nodata'>
                    /searchTotal/search-result-nodata
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>20-21-10 퍼블완료</Table.Cell>
            <Table.Cell>20-21-11 UI/UX 개선</Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='searchTotal/search-result-badge-new' target="_blank">
                    <span className='text-purple'>통합 검색 - Badge tab </span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className='text-purple'></span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='searchTotal/search-result-badge-new'>
                    searchTotal/search-result-badge-new
                </Link>
            </Table.Cell>
            <Table.Cell>장은진</Table.Cell>
            <Table.Cell>22-08-23</Table.Cell>
            <Table.Cell><p>20-21-11 UI/UX 개선</p><p>22-10-05 Badge UI 개선</p></Table.Cell>
        </Table.Row>
    </>
)
};
export default IndexSearch
