import React from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const IndexCareerPlatform = () => {
    return (
        <>{/* @@배포예정 */}
        <Table.Row verticalAlign='top' id="CareerPlatform">
            <Table.Cell colSpan='5' className='table-tit'>
                <span className='text-bold'>커리어 플랫폼 Skill 정보 반영</span>
            </Table.Cell>
        </Table.Row>
        {/* 배포 예정 작업 */}
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <ul>
                    <li>
                        <Link to='/main/MainIndexNew' target="_blank">
                            <span className="text-purple">GNB</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/main/MainIndexNewCareer' target="_blank">
                            <span className="text-purple">[서비스대상] Skill 정보 반영: GNB</span>
                        </Link>
                    </li>
                </ul>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className="text-purple">AL-MA-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <ul>
                    <li>
                        <Link to='/main/MainIndexNew'>
                            main/MainIndexNew
                        </Link>
                    </li>
                    <li>
                        <Link to='/main/MainIndexNewCareer'>
                            main/MainIndexNewCareer
                        </Link>
                    </li>
                </ul>
            </Table.Cell>
            <Table.Cell>남협수</Table.Cell>
            <Table.Cell>
                23-11-21
            </Table.Cell>
            <Table.Cell>
                <p>전체대상, 커리어 서비스 대상 헤더 분리</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <ul>
                    <li>
                        <Link to='/learning/single-overview-temp' target="_blank">
                            <span className="text-purple">[전체대상] Skill 정보 반영: 단독 큐브</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/learning/single-overview-temp-career' target="_blank">
                            <span className="text-purple">[서비스대상] Skill 정보 반영: 단독 큐브</span>
                        </Link>
                    </li>
                </ul>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className="text-purple">AL-MA-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <ul>
                    <li>
                        <Link to='/learning/single-overview-temp'>
                            learning/single-overview-temp
                        </Link>
                    </li>
                    <li>
                        <Link to='/learning/single-overview-temp-career'>
                            learning/single-overview-temp-career
                        </Link>
                    </li>
                </ul>
            </Table.Cell>
            <Table.Cell>남협수</Table.Cell>
            <Table.Cell>
                23-11-21
            </Table.Cell>
            <Table.Cell>
                <p>전체대상, 커리어 서비스 대상 헤더 분리</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <ul>
                    <li>
                        <Link to='/certification/AllBadgeListDetailV2' target="_blank">
                            <span className="text-purple">[전체대상] Skill 정보 반영: 배지 상세</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/certification/AllBadgeListDetailV2Career' target="_blank">
                            <span className="text-purple">[서비스대상] Skill 정보 반영: 배지 상세</span>
                        </Link>
                    </li>
                </ul>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className="text-purple">AL-MA-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <ul>
                    <li>
                        <Link to='/certification/AllBadgeListDetailV2'>
                            certification/AllBadgeListDetailV2
                        </Link>
                    </li>
                    <li>
                        <Link to='/certification/AllBadgeListDetailV2Career'>
                            certification/AllBadgeListDetailV2Career
                        </Link>
                    </li>
                </ul>
            </Table.Cell>
            <Table.Cell>남협수</Table.Cell>
            <Table.Cell>
                23-11-21
            </Table.Cell>
            <Table.Cell>
                <p>전체대상, 커리어 서비스 대상 헤더 분리</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <ul>
                    <li>
                        <Link to='/searchTotal/search-result-new' target="_blank">
                            <span className="text-purple">[전체대상] Skill 정보 반영: 검색결과</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/searchTotal/search-result-new-career' target="_blank">
                            <span className="text-purple">[서비스대상] Skill 정보 반영: 검색결과</span>
                        </Link>
                    </li>
                </ul>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className="text-purple">AL-MA-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <ul>
                    <li>
                        <Link to='/searchTotal/search-result-new'>
                            searchTotal/search-result-new
                        </Link>
                    </li>
                    <li>
                        <Link to='/searchTotal/search-result-new-career'>
                            searchTotal/search-result-new-career
                        </Link>
                    </li>
                </ul>
            </Table.Cell>
            <Table.Cell>남협수</Table.Cell>
            <Table.Cell>
                23-11-21
            </Table.Cell>
            <Table.Cell>
                <p>전체대상, 커리어 서비스 대상 헤더 분리</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <ul>
                    <li>
                        <Link to='/common/site-map-modal' target="_blank">
                            <span className="text-purple">서비스 전체보기</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/common/SiteMapModalCareer' target="_blank">
                            <span className="text-purple">[서비스대상] Skill 정보 반영: 서비스 전체보기</span>
                        </Link>
                    </li>
                </ul>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className="text-purple">AL-MA-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <ul>
                    <li>
                        <Link to='/common/site-map-modal'>
                            common/site-map-modal
                        </Link>
                    </li>
                    <li>
                        <Link to='/common/SiteMapModalCareer'>
                            common/SiteMapModalCareer
                        </Link>
                    </li>
                </ul>
            </Table.Cell>
            <Table.Cell>남협수</Table.Cell>
            <Table.Cell>
                23-11-21
            </Table.Cell>
            <Table.Cell>
                <p>전체대상, 커리어 서비스 대상 헤더 분리</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/main/MainIndexNewCareer' target="_blank">
                    <span className="text-purple">[서비스대상] Skill 정보 반영: Skill 섹션작업</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className="text-purple">AL-MA-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/main/MainIndexNewCareer'>
                    main/MainIndexNewCareer
                </Link>
            </Table.Cell>
            <Table.Cell>남협수</Table.Cell>
            <Table.Cell>
                23-11-21
            </Table.Cell>
            <Table.Cell>
                <p>커리어 서비스 대상 섹션 샘플</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/MyCareer/CareerPlatform' target="_blank">
                    <span className="text-purple">[서비스대상] Skill 정보 반영: Skill 섹션 상세페이지</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className="text-purple">AL-MA-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/MyCareer/CareerPlatform'>
                    MyCareer/CareerPlatform
                </Link>
            </Table.Cell>
            <Table.Cell>남협수</Table.Cell>
            <Table.Cell>
                23-11-21
            </Table.Cell>
            <Table.Cell>
                <p>커리어 서비스 대상 상세페이지</p>
            </Table.Cell>
        </Table.Row>
        <Table.Row verticalAlign='top'>
            <Table.Cell>
                <Link to='/MyCareer/CareerPlatformModal' target="_blank">
                    <span className="text-purple">[서비스대상] Skill 정보 반영: Skill Modal</span>
                </Link>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                (<span className="text-purple">AL-MA-10</span>)
            </Table.Cell>
            <Table.Cell className='link-address'>
                <Link to='/MyCareer/CareerPlatformModal'>
                    MyCareer/CareerPlatformModal
                </Link>
            </Table.Cell>
            <Table.Cell>남협수</Table.Cell>
            <Table.Cell>
                23-11-21
            </Table.Cell>
            <Table.Cell>
                <p>커리어 서비스 오픈 안내 팝업</p>
            </Table.Cell>
        </Table.Row>
    </>
    )
};
export default IndexCareerPlatform
