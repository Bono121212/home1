import React from 'react'
import { Sticky, Menu, Image} from 'semantic-ui-react'
import {Link, NavLink} from 'react-router-dom';
import image1 from "../../../../../images/all/introduce_certifi_image_1.png";
import imageko2 from "../../../../../images/all/introduce_certifi_image_ko_2.png"; //badge ui변경으로 이미지만 교체
import imagezh2 from "../../../../../images/all/introduce_certifi_image_zh_2.png"; //badge ui변경으로 이미지만 교체
import imageen2 from "../../../../../images/all/introduce_certifi_image_en_2.png"; //badge ui변경으로 이미지만 교체

//https://image.mysuni.sk.com/suni-asset/public/images/all/introduce_certifi_image_1.png
//https://image.mysuni.sk.com/suni-asset/public/images/all/introduce_certifi_image_ko_2.png
//https://image.mysuni.sk.com/suni-asset/public/images/all/introduce_certifi_image_zh_2.png
//https://image.mysuni.sk.com/suni-asset/public/images/all/introduce_certifi_image_en_2.png

function ContentsAreaKo () {
    const handleItemClick = (e, {name}) => this.setState({activeItem: name})
    const activeItem = 'certificationIntroduction';

    return (
        <div>
            <Sticky className='tab-menu2 offset0'>
                <div className="cont-inner">
                    <Menu className='sku2'>
                        <Menu.Item
                            name='suniIntroduction'
                            active={activeItem === 'suniIntroduction'}
                            onClick={handleItemClick}
                            as={Link} to="/introduction/all-introduction"
                        >
                            mySUNI 소개
                        </Menu.Item>
                        <Menu.Item
                            name='collegeIntroduction'
                            active={activeItem === 'collegeIntroduction'}
                            onClick={handleItemClick}
                            as={Link} to="/introduction/college-introduction"
                        >
                            Category 소개
                        </Menu.Item>
                        <Menu.Item
                            name='certificationIntroduction'
                            active={activeItem === 'certificationIntroduction'}
                            onClick={handleItemClick}
                            as={Link} to="/introduction/certification-system-introduction"
                        >
                            인증제도 소개
                        </Menu.Item>
                        <Menu.Item
                            name='promotion-data'
                            active={activeItem === 'promotion-data'}
                            onClick={handleItemClick}
                            as={Link} to="/introduction/promotion-data"
                        >
                            홍보자료
                        </Menu.Item>
                        <NavLink
                            as={Link} to='/'
                        >
                            <div className='item-button'>Certification 바로가기</div>
                        </NavLink>
                    </Menu>
                </div>
            </Sticky>

            <div className="ui attached active" data-tab="third">
                <div className="common-intro case3">
                    <div className='inner'>
                        <div className='strong'>
                            mySUNI에서는 구성원의 자발적 학습과 Career 개발을 위해<br/>인증제도를 운영하고 있습니다.
                        </div>
                        <iframe
                            title="인증안내 영상"
                            className="inner-video"
                            src="https://sku.ap.panopto.com/Panopto/Pages/Embed.aspx?id=2c3a5cdd-5683-48a5-86b3-ac4d0086b990&amp;offerviewer=false&amp;showtitle=false&amp;interactivity=none&amp;showbrand=false"
                        />
                        <Image src={image1} alt="" className="lms-marginTop-30" />
                    </div>
                </div>
                <div className="ui full segment">
                    <div className="certification">
                        <div className="img-wrap">
                            <Image src={imageko2} className='certiTopImg2' alt="" />
                        </div>
                        <div className="table-wrap">
                            <div className="title">
                                <div className="left">Badge 체계</div>
                                <div className="right">
                                    <span className="orange">*</span>
                                    8월 중 Open 가능 Badge -&gt; 현재 운영 중인 Badge
                                    <span className="gray">(나머지 회색 음영은 추후 오픈 예정)</span>
                                </div>
                            </div>
                            <div className="table">
                                <table>
                                    <tbody>
                                        <tr className="level">
                                            <th>유형</th>
                                            <td>
                                                <span />
                                                Badge (Lv.1)
                                            </td>
                                            <td>
                                                <span />
                                                Badge (Lv.2)
                                            </td>
                                            <td>
                                                <span />
                                                Badge (Lv.3)
                                            </td>
                                        </tr>
                                        <tr>
                                        <th>AI/DT</th>
                                            <td>
                                                <ul>
                                                <li>
                                                    <span className="open">AI/DT Literacy</span>
                                                </li>
                                                <li>
                                                    <span className="open">
                                                    (MS) Azure Fundamentals
                                                    </span>
                                                </li>
                                                </ul>
                                            </td>
                                            <td>
                                                <ul>
                                                <li>
                                                    <span className="open">
                                                    Citizen Data Scientist(Python/R)
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="open">
                                                    Machine Learning Engineer
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="open">
                                                    Cloud Engineer Associate
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="open">
                                                    (MS) Azure Developer Associate
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="open">
                                                    (MS) Azure Data Engineer Associate
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="open">
                                                    (MS) Azure Data Scientist Associate
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="open">
                                                    (MS) Azure AI Engineer Associate
                                                    </span>
                                                </li>
                                                </ul>
                                            </td>
                                            <td>
                                                <ul>
                                                <li>
                                                    <span className="open">
                                                    (MS) Azure Solutions Architect Expert
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>Data Engineer Professional</span>
                                                </li>
                                                <li>
                                                    <span>Cloud Engineer Professional</span>
                                                </li>
                                                <li>
                                                    <span>AI Engineer Professional</span>
                                                </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>공통직무</th>
                                            <td>
                                                <ul>
                                                <li>
                                                    <span className="open">Financial Story</span>
                                                </li>
                                                </ul>
                                            </td>
                                            <td>
                                                <ul>
                                                <li>
                                                    <span className="open">Scenario Planning</span>
                                                </li>
                                                <li>
                                                    <span className="open">조직 Self-Design</span>
                                                </li>
                                                <li>
                                                    <span className="open">
                                                    Digital HR Transformation
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="open">Investment Financing</span>
                                                </li>
                                                <li>
                                                    <span>Data Driven Marketing</span>
                                                </li>
                                                </ul>
                                            </td>
                                            <td />
                                        </tr>
                                        <tr>
                                            <th>미래 Biz.</th>
                                            <td>
                                                <ul>
                                                <li>
                                                    <span>반도체 Biz Essentials</span>
                                                </li>
                                                <li>
                                                    <span>반도체 Tech Essentials</span>
                                                </li>
                                                </ul>
                                            </td>
                                        <td className="exp" />
                                        <td />
                                        </tr>
                                        <tr>
                                            <th>행복 경영</th>
                                            <td>
                                                <ul>
                                                <li>
                                                    <span className="open">Leadership Essentials</span>
                                                </li>
                                                <li>
                                                    <span className="open">마음 관리</span>
                                                </li>
                                                <li>
                                                    <span>행복 Fundamentals</span>
                                                </li>
                                                <li>
                                                    <span>행복추구실천(행실러)</span>
                                                </li>
                                                <li>
                                                    <span className="open">SV Fundamentals</span>
                                                </li>
                                                </ul>
                                            </td>
                                            <td>
                                                <ul>
                                                <li>
                                                    <span className="open">Coaching Leadership</span>
                                                </li>
                                                </ul>
                                            </td>
                                            <td>
                                                <ul>
                                                <li>
                                                    <span className="open">Coaching Expert</span>
                                                </li>
                                                <li>
                                                    <span>행복지도 Expert</span>
                                                </li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>BM Design</th>
                                            <td>
                                                <ul>
                                                <li>
                                                    <span className="open">디자인씽킹 Essentials</span>
                                                </li>
                                                <li>
                                                    <span className="open">애자일 Essentials</span>
                                                </li>
                                                <br />
                                                <li>
                                                    <span className="open">BM Design Essentials</span>
                                                </li>
                                                <li>
                                                    <span className="open">
                                                    5개 지역 Local Mgmt.(주재원후보군)
                                                    </span>
                                                </li>
                                                </ul>
                                            </td>
                                            <td>
                                                <ul>
                                                <li>
                                                    <span className="open">
                                                    혁신 Biz 발굴 Initiator
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>애자일 리더</span>
                                                </li>
                                                <br />
                                                <li>
                                                    <span className="open">BM Design Advanced</span>
                                                </li>
                                                </ul>
                                            </td>
                                            <td>
                                                <ul>
                                                <li>
                                                    <span>애자일 코치</span>
                                                </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ContentsAreaEn () {
    const handleItemClick = (e, {name}) => this.setState({activeItem: name})
    const activeItem = 'certificationIntroduction';
    return (
        <div>
            <Sticky className='tab-menu2 offset0'>
                <div className="cont-inner">
                    <Menu className='sku2'>
                        <Menu.Item
                            name='suniIntroduction'
                            active={activeItem === 'suniIntroduction'}
                            onClick={handleItemClick}
                            as={Link} to="/introduction/all-introduction"
                        >
                            mySUNI Introduction
                        </Menu.Item>
                        <Menu.Item
                            name='collegeIntroduction'
                            active={activeItem === 'collegeIntroduction'}
                            onClick={handleItemClick}
                            as={Link} to="/introduction/college-introduction"
                        >
                            Category Introduction
                        </Menu.Item>
                        <Menu.Item
                            name='certificationIntroduction'
                            active={activeItem === 'certificationIntroduction'}
                            onClick={handleItemClick}
                            as={Link} to="/introduction/certification-system-introduction"
                        >
                            Certification System Introduction
                        </Menu.Item>
                        <Menu.Item
                            name='promotion-data'
                            active={activeItem === 'promotion-data'}
                            onClick={handleItemClick}
                            as={Link} to="/introduction/promotion-data"
                        >
                            Promotional Materials
                        </Menu.Item>
                        <NavLink
                            as={Link} to='/'
                        >
                            <div className='item-button'>Go to Certification</div>
                        </NavLink>
                    </Menu>
                </div>
            </Sticky>

            <div className="ui attached active" data-tab="third">
                <div className="common-intro case3">
                    <div className='inner'>
                        <div className="strong">
                            mySUNI operates a certification system for members&apos;
                            <br />
                            voluntary learning and career development.
                        </div>
                        <iframe
                            title="인증안내 영상"
                            className="inner-video"
                            src="https://sku.ap.panopto.com/Panopto/Pages/Embed.aspx?id=2c3a5cdd-5683-48a5-86b3-ac4d0086b990&amp;offerviewer=false&amp;showtitle=false&amp;interactivity=none&amp;showbrand=false"
                        />
                        <Image src={image1} alt="" className="lms-marginTop-30" />
                    </div>
                </div>
                <div className="ui full segment">
                    <div className="certification">
                        <div className="img-wrap">
                            <Image src={imageen2} alt=""/>
                            <div className="table-wrap">
                            <div className="title">
                                <div className="left">Badge System</div>
                                <div className="right">
                                <span className="orange">*</span>Badges available for opening
                                in August -&gt; Badges currently in operation
                                <span className="gray">
                                    (Remaining badges with a shade of gray are scheduled to be
                                    opened later)
                                </span>
                                </div>
                            </div>
                            <div className="table">
                                <table>
                                <tbody>
                                    <tr className="level">
                                    <th>Types</th>
                                    <td>
                                        <span />
                                        Badge (Lv.1)
                                    </td>
                                    <td>
                                        <span />
                                        Badge (Lv.2)
                                    </td>
                                    <td>
                                        <span />
                                        Badge (Lv.3)
                                    </td>
                                    </tr>
                                    <tr>
                                    <th>AI/DT</th>
                                    <td>
                                        <ul>
                                        <li>
                                            <span className="open">AI/DT Literacy</span>
                                        </li>
                                        <li>
                                            <span className="open">
                                            (MS) Azure Fundamentals
                                            </span>
                                        </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                        <li>
                                            <span className="open">
                                            Citizen Data Scientist(Python/R)
                                            </span>
                                        </li>
                                        <li>
                                            <span className="open">
                                            Machine Learning Engineer
                                            </span>
                                        </li>
                                        <li>
                                            <span className="open">
                                            Cloud Engineer Associate
                                            </span>
                                        </li>
                                        <li>
                                            <span className="open">
                                            (MS) Azure Developer Associate
                                            </span>
                                        </li>
                                        <li>
                                            <span className="open">
                                            (MS) Azure Data Engineer Associate
                                            </span>
                                        </li>
                                        <li>
                                            <span className="open">
                                            (MS) Azure Data Scientist Associate
                                            </span>
                                        </li>
                                        <li>
                                            <span className="open">
                                            (MS) Azure AI Engineer Associate
                                            </span>
                                        </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                        <li>
                                            <span className="open">
                                            (MS) Azure Solutions Architect Expert
                                            </span>
                                        </li>
                                        <li>
                                            <span>Data Engineer Professional</span>
                                        </li>
                                        <li>
                                            <span>Cloud Engineer Professional</span>
                                        </li>
                                        <li>
                                            <span>AI Engineer Professional</span>
                                        </li>
                                        </ul>
                                    </td>
                                    </tr>
                                    <tr>
                                    <th>Common Duties</th>
                                    <td>
                                        <ul>
                                        <li>
                                            <span className="open">Financial Story</span>
                                        </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                        <li>
                                            <span className="open">Scenario Planning</span>
                                        </li>
                                        <li>
                                            <span className="open">
                                            Organizational Self-design
                                            </span>
                                        </li>
                                        <li>
                                            <span className="open">
                                            Digital HR Transformation
                                            </span>
                                        </li>
                                        <li>
                                            <span className="open">Investment Financing</span>
                                        </li>
                                        <li>
                                            <span>Data Driven Marketing</span>
                                        </li>
                                        </ul>
                                    </td>
                                    <td />
                                    </tr>
                                    <tr>
                                    <th>Future Biz.</th>
                                    <td>
                                        <ul>
                                        <li>
                                            <span>Semiconductor Business Essentials</span>
                                        </li>
                                        <li>
                                            <span>Semiconductor Tech Essentials</span>
                                        </li>
                                        </ul>
                                    </td>
                                    <td className="exp" />
                                    <td />
                                    </tr>
                                    <tr>
                                    <th>
                                        Happiness
                                        <br />
                                        Management
                                    </th>
                                    <td>
                                        <ul>
                                        <li>
                                            <span className="open">Leadership Essentials</span>
                                        </li>
                                        <li>
                                            <span className="open">Mind Management</span>
                                        </li>
                                        <li>
                                            <span>Happiness Fundamentals</span>
                                        </li>
                                        <li>
                                            <span> Happiness Pursuit Practice (HPPer)</span>
                                        </li>
                                        <li>
                                            <span className="open">SV Fundamentals</span>
                                        </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                        <li>
                                            <span className="open">Coaching Leadership</span>
                                        </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                        <li>
                                            <span className="open">Coaching Expert</span>
                                        </li>
                                        <li>
                                            <span>Happiness Guidance Expert</span>
                                        </li>
                                        </ul>
                                    </td>
                                    </tr>
                                    <tr>
                                    <th>BM Design</th>
                                    <td>
                                        <ul>
                                        <li>
                                            <span className="open">
                                            Design Thinking Essentials
                                            </span>
                                        </li>
                                        <li>
                                            <span className="open">Agile Essentials</span>
                                        </li>
                                        <br />
                                        <li>
                                            <span className="open">BM Design Essentials</span>
                                        </li>
                                        <li>
                                            <span className="open">
                                            5 Areas Local Management
                                            <br />
                                            (Group of expatriates)
                                            </span>
                                        </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                        <li>
                                            <span className="open">
                                            Innovative Business Discovery Initiator
                                            </span>
                                        </li>
                                        <li>
                                            <span>Agile Leaders</span>
                                        </li>
                                        <br />
                                        <li>
                                            <span className="open">BM Design Advanced</span>
                                        </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                        <li>
                                            <span>Agile Coaches</span>
                                        </li>
                                        </ul>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ContentsAreaZh () {
    const handleItemClick = (e, {name}) => this.setState({activeItem: name})
    const activeItem = 'certificationIntroduction';
    return (
        <div>
            <Sticky className='tab-menu2 offset0'>
                <div className="cont-inner">
                    <Menu className='sku2'>
                        <Menu.Item
                            name='suniIntroduction'
                            active={activeItem === 'suniIntroduction'}
                            onClick={handleItemClick}
                            as={Link} to="/introduction/all-introduction"
                        >
                            mySUNI介绍
                        </Menu.Item>
                        <Menu.Item
                            name='collegeIntroduction'
                            active={activeItem === 'collegeIntroduction'}
                            onClick={handleItemClick}
                            as={Link} to="/introduction/college-introduction"
                        >
                            Category介绍
                        </Menu.Item>
                        <Menu.Item
                            name='certificationIntroduction'
                            active={activeItem === 'certificationIntroduction'}
                            onClick={handleItemClick}
                            as={Link} to="/introduction/certification-system-introduction"
                        >
                            认证制度介绍
                        </Menu.Item>
                        <Menu.Item
                            name='promotion-data'
                            active={activeItem === 'promotion-data'}
                            onClick={handleItemClick}
                            as={Link} to="/introduction/promotion-data"
                        >
                            宣传资料
                        </Menu.Item>
                        <NavLink
                            as={Link} to='/'
                        >
                            <div className='item-button'>进入Certification</div>
                        </NavLink>
                    </Menu>
                </div>
            </Sticky>

            <div className="ui attached active" data-tab="third">
                <div className="common-intro case3">
                    <div className='inner'>
                        <div className="strong">
                            mySUNI为了成员的自主学习和Career开发,
                            <br />
                            正在运营相应的认证制度。
                        </div>
                        <iframe
                            title="인증안내 영상"
                            className="inner-video"
                            src="https://sku.ap.panopto.com/Panopto/Pages/Embed.aspx?id=2c3a5cdd-5683-48a5-86b3-ac4d0086b990&amp;offerviewer=false&amp;showtitle=false&amp;interactivity=none&amp;showbrand=false"
                        />
                        <Image src={image1} alt="" className="lms-marginTop-30" />
                    </div>
                </div>
                <div className="ui full segment">
                    <div className="certification">
                        <div className="img-wrap">
                            <Image src={imagezh2} className='certiTopImg2' alt="" />
                        </div>
                        <div className="table-wrap">
                            <div className="title">
                                <div className="left">Badge体系</div>
                                <div className="right">
                                    <span className="orange">*</span>月中旬可开放的Badge -&gt;现在运营中的Badge
                                    <span className="gray">(剩余灰色部分为预计后期开放)</span>
                                </div>
                            </div>
                        <div className="table">
                            <table>
                                <tbody>
                                    <tr className="level">
                                    <th>类型</th>
                                    <td>
                                        <span />
                                        Badge (Lv.1)
                                    </td>
                                    <td>
                                        <span />
                                        Badge (Lv.2)
                                    </td>
                                    <td>
                                        <span />
                                        Badge (Lv.3)
                                    </td>
                                    </tr>
                                    <tr>
                                    <th>AI/DT</th>
                                    <td>
                                        <ul>
                                        <li>
                                            <span className="open">AI/DT Literacy</span>
                                        </li>
                                        <li>
                                            <span className="open">
                                            (MS) Azure Fundamentals
                                            </span>
                                        </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                        <li>
                                            <span className="open">
                                            Citizen Data Scientist(Python/R)
                                            </span>
                                        </li>
                                        <li>
                                            <span className="open">
                                            Machine Learning Engineer
                                            </span>
                                        </li>
                                        <li>
                                            <span className="open">
                                            Cloud Engineer Associate
                                            </span>
                                        </li>
                                        <li>
                                            <span className="open">
                                            (MS) Azure Developer Associate
                                            </span>
                                        </li>
                                        <li>
                                            <span className="open">
                                            (MS) Azure Data Engineer Associate
                                            </span>
                                        </li>
                                        <li>
                                            <span className="open">
                                            (MS) Azure Data Scientist Associate
                                            </span>
                                        </li>
                                        <li>
                                            <span className="open">
                                            (MS) Azure AI Engineer Associate
                                            </span>
                                        </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                        <li>
                                            <span className="open">
                                            (MS) Azure Solutions Architect Expert
                                            </span>
                                        </li>
                                        <li>
                                            <span>Data Engineer Professional</span>
                                        </li>
                                        <li>
                                            <span>Cloud Engineer Professional</span>
                                        </li>
                                        <li>
                                            <span>AI Engineer Professional</span>
                                        </li>
                                        </ul>
                                    </td>
                                    </tr>
                                    <tr>
                                    <th>通用职务</th>
                                    <td>
                                        <ul>
                                        <li>
                                            <span className="open">Financial Story</span>
                                        </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                        <li>
                                            <span className="open">Scenario Planning</span>
                                        </li>
                                        <li>
                                            <span className="open">组织 Self-Design</span>
                                        </li>
                                        <li>
                                            <span className="open">
                                            Digital HR Transformation
                                            </span>
                                        </li>
                                        <li>
                                            <span className="open">Investment Financing</span>
                                        </li>
                                        <li>
                                            <span>Data Driven Marketing</span>
                                        </li>
                                        </ul>
                                    </td>
                                    <td />
                                    </tr>
                                    <tr>
                                    <th>未来 Biz.</th>
                                    <td>
                                        <ul>
                                        <li>
                                            <span>半导体Biz Essentials</span>
                                        </li>
                                        <li>
                                            <span>半导体 Tech Essentials</span>
                                        </li>
                                        </ul>
                                    </td>
                                    <td className="exp" />
                                    <td />
                                    </tr>
                                    <tr>
                                    <th>幸福经营</th>
                                    <td>
                                        <ul>
                                        <li>
                                            <span className="open">Leadership Essentials</span>
                                        </li>
                                        <li>
                                            <span className="open">内心管理</span>
                                        </li>
                                        <li>
                                            <span>幸福 Fundamentals</span>
                                        </li>
                                        <li>
                                            <span>幸福追求实践 (幸实人)</span>
                                        </li>
                                        <li>
                                            <span className="open">SV Fundamentals</span>
                                        </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                        <li>
                                            <span className="open">Coaching Leadership</span>
                                        </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                        <li>
                                            <span className="open">Coaching Expert</span>
                                        </li>
                                        <li>
                                            <span>幸福指导 Expert</span>
                                        </li>
                                        </ul>
                                    </td>
                                    </tr>
                                    <tr>
                                    <th>BM Design</th>
                                    <td>
                                        <ul>
                                        <li>
                                            <span className="open">
                                            Design Thinking Essentials
                                            </span>
                                        </li>
                                        <li>
                                            <span className="open">Agile Essentials</span>
                                        </li>
                                        <br />
                                        <li>
                                            <span className="open">BM Design Essentials</span>
                                        </li>
                                        <li>
                                            <span className="open">
                                            5个地区 Local Mgmt. (驻在员候选群）
                                            </span>
                                        </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                        <li>
                                            <span className="open">
                                            创新 Biz 发掘 Initiator
                                            </span>
                                        </li>
                                        <li>
                                            <span>Agile Leaders</span>
                                        </li>
                                        <br />
                                        <li>
                                            <span className="open">BM Design Advanced</span>
                                        </li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                        <li>
                                            <span>Agile Coaches</span>
                                        </li>
                                        </ul>
                                    </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export {ContentsAreaKo, ContentsAreaEn, ContentsAreaZh}
