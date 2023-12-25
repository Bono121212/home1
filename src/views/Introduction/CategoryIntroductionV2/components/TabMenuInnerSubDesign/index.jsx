import React from 'react';
import { Link } from 'react-router-dom';
import CourseBook from "../../../../../images/all/icon-course-book.png";
import DesignConImg01 from "../../../../../images/all/design-con-01-v-2.png";
import DesignConImg02 from "../../../../../images/all/design-con-02-v-2.png";
import DesignConImg03 from "../../../../../images/all/design-con-03-v-2.png";
import DesignConImg01Eng from "../../../../../images/all/design-con-01-eng-v-2.png";
import DesignConImg02Eng from "../../../../../images/all/design-con-02-eng-v-2.png";
import DesignConImg03Eng from "../../../../../images/all/design-con-03-eng-v-2.png";
import DesignConImg01Chn from "../../../../../images/all/design-con-01-chn-v-2.png";
import DesignConImg02Chn from "../../../../../images/all/design-con-02-chn-v-2.png";
import DesignConImg03Chn from "../../../../../images/all/design-con-03-chn-v-2.png";
import './style.css';


const TabMenuInnerSubDesign = () => {
	return (
		<>
			<div className="college-cont-map design">
				<div className="belt">
					<div className='guide-area'>
						<div className="guide-text">
							<p className="p_link">각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.</p>
						</div>
						<div className="guide-btn">
							<Link to="https://mysuni.sk.com/suni-main/lecture/category/CLG00005/channels/pages/1" className="item-button">
								<img src={CourseBook} alt="" />
								과정 바로가기
							</Link>
						</div>
					</div>
					<div className="map-area">
						<img src={DesignConImg01} useMap="#Map1" alt="커리큘럼" />
						<map name="Map1">
							<area
								shape="rect"
								coords="16,134,284,170"
								href={`https://mysuni.sk.com/suni-main/search?query=%EC%9A%94%EC%A6%98`}
								alt="Customer Life / eXperience"
							/>
							<area
								shape="rect"
								coords="16,178,284,214"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-5j8/view`}
								alt="고객 Needs Finding"
							/>
							<area
								shape="rect"
								coords="16,222,284,258"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-5js/view`}
								alt="고객 Research 방법"
							/>
							<area
								shape="rect"
								coords="346,134,615,170"
								href={`https://mysuni.sk.com/suni-main/lecture/category/CLG00005/channels/pages/1`}
								alt="Problem Solving"
							/>
							<area
								shape="rect"
								coords="346,178,615,214"
								href={`https://mysuni.sk.com/suni-main/search?query=로지컬씽킹`}
								alt="로지컬씽킹"
							/>
							<area
								shape="rect"
								coords="346,222,615,258"
								href={`https://mysuni.sk.com/suni-main/search?query=컨설턴트의 일하는 스킬 익히기`}
								alt="컨설턴트의 일하는 스킬"
							/>
							<area
								shape="rect"
								coords="676,134,945,193"
								href={`https://mysuni.sk.com/suni-main/search?query=디자인씽킹`}
								alt="디자인씽킹"
							/>
							<area
								shape="rect"
								coords="676,199,945,258"
								href={`https://mysuni.sk.com/suni-main/search?query=%EC%9B%8C%ED%82%B9%EB%B0%B1%EC%9B%8C%EB%93%9C`}
								alt="워킹백워드"
							/>
							<area
								shape="rect"
								coords="16,345,284,381"
								href={`https://mysuni.sk.com/suni-main/search?query=TIR`}
								alt="실리콘밸리 혁신 트렌드"
							/>
							<area
								shape="rect"
								coords="16,389,284,425"
								href={`https://mysuni.sk.com/suni-main/search?query=트렌드 미리보기`}
								alt="트렌드 세미나"
							/>
							<area
								shape="rect"
								coords="16,433,284,469"
								href={`https://mysuni.sk.com/suni-main/search?query=%ED%93%A8%EC%B2%98%EC%BA%90%EC%8A%A4%ED%8C%85`}
								alt="퓨처캐스팅"
							/>
							<area
								shape="rect"
								coords="346,345,615,381"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-6f3/view`}
								alt="창의적 idea 발상법"
							/>
							<area
								shape="rect"
								coords="346,389,615,425"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-1ew/view`}
								alt="Biz. Ideation"
							/>
							<area
								shape="rect"
								coords="346,434,615,470"
								href={`https://mysuni.sk.com/suni-main/lecture/category/CLG00005/channels/pages/1`}
								alt="오픈이노베이션"
							/>
							<area
								shape="rect"
								coords="676,345,945,381"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-13xj/view`}
								alt="린스타트업"
							/>
							<area
								shape="rect"
								coords="675,389,944,425"
								href={`https://mysuni.sk.com/suni-main/search?query=애자일 리더`}
								alt="애자일 리더십"
							/>
							<area
								shape="rect"
								coords="676,434,945,470"
								onClick={() => alert('준비중입니다.')}
								alt="애자일 코치 양성"
							/>
							<area
								shape="rect"
								coords="676,345,945,381"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-13xj/view`}
								alt="린스타트업"
							/>
							<area
								shape="rect"
								coords="675,389,944,425"
								href={`https://mysuni.sk.com/suni-main/search?query=애자일 리더`}
								alt="애자일 리더십"
							/>
							<area
								shape="rect"
								coords="676,434,945,470"
								onClick={() => alert('준비중입니다.')}
								alt="애자일 코치 양성"
							/>
							<area
								shape="rect"
								coords="45,530,86,566"
								href={`https://mysuni.sk.com/suni-main/search?query=혁신디자인`}
								alt="VOD"
							/>
							<area
								shape="rect"
								coords="85,530,121,566"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-13xc/view`}
								alt="게임"
							/>
							<area
								shape="rect"
								coords="120,530,160,566"
								href={`https://mysuni.sk.com/suni-main/search?query=%EC%9B%B9%EC%A7%84`}
								alt="웹진"
							/>
							<area
								shape="rect"
								coords="161,530,200,566"
								onClick={() => alert('준비중입니다.')}
								alt="웹실습"
							/>
							<area
								shape="rect"
								coords="250,530,474,566"
								href={`https://mysuni.sk.com/suni-main/search?query=%ED%98%81%EC%8B%A0%EB%94%94%EC%9E%90%EC%9D%B8%20workshop`}
								alt="On/Off Workshop"
							/>
							<area
								shape="rect"
								coords="486,530,710,566"
								href={`https://mysuni.sk.com/suni-main/search?query=%ED%98%81%EC%8B%A0%EB%94%94%EC%9E%90%EC%9D%B8%20Project`}
								alt="팀/사업 단위 Project"
							/>
							<area
								shape="rect"
								coords="721,530,944,566"
								href={`https://mysuni.sk.com/suni-main/search?query=meetup`}
								alt="전문가 Meetup (커뮤니티)"
							/>
							<area
								shape="rect"
								coords="90,89,211,127"
								href={`https://mysuni.sk.com/suni-main/lecture/category/CLG00005/channels/pages/1`}
								alt="고객과의 공감"
							/>
							<area
								shape="rect"
								coords="411,89,550,127"
								href={`https://mysuni.sk.com/suni-main/lecture/category/CLG00005/channel/CHN0007q`}
								alt="논리적 문제해결"
							/>
							<area
								shape="rect"
								coords="741,89,878,127"
								href={`https://mysuni.sk.com/suni-main/lecture/category/CLG00005/channel/CHN0000o`}
								alt="고객경험 디자인"
							/>
							<area
								shape="rect"
								coords="57,300,242,338"
								href={`https://mysuni.sk.com/suni-main/lecture/category/CLG00005/channel/CHN0000q`}
								alt="혁신 트렌드와 인사이트"
							/>
							<area
								shape="rect"
								coords="410,300,550,338"
								href={`https://mysuni.sk.com/suni-main/lecture/category/CLG00005/channels/pages/1`}
								alt="창의적 문제해결"
							/>
							<area
								shape="rect"
								coords="751,300,872,338"
								href={`https://mysuni.sk.com/suni-main/lecture/category/CLG00005/channel/CHN0000p`}
								alt="애자일 실행"
							/>
							<area
								shape="rect"
								coords="1040,0,1200,55"
								href={`https://mysuni.sk.com/suni-main/lecture/category/CLG00005/channels/pages/1`}
								alt="혁신디자인"
							/>
						</map>
					</div>
				</div>
			</div>

			<div className="college-cont-map design">
				<div className="belt">
					<div className='map-area'>
						<img src={DesignConImg02} useMap="#Map2" alt="커리큘럼" />
						<map name="Map2">
							<area
								shape="circle"
								coords="112,176,105"
								href={`https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-3a`}
								alt="디자인씽킹 Essentials"
							/>
							<area
								shape="circle"
								coords="356,176,105"
								href={`https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-6a`}
								alt="로지컬씽킹 Essentials"
							/>
							<area
								shape="circle"
								coords="600,176,105"
								href={`https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-3b`}
								alt="애자일 Essentials"
							/>
							<area
								shape="circle"
								coords="844,176,105"
								href={`https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-65`}
								alt="애자일 Practice"
							/>
							<area
								shape="circle"
								coords="1088,176,105"
								href={`https://mysuni.sk.com/suni-main/certification/badge/badge-detail/BADGE-3c`}
								alt="혁신 Biz. 발굴 initiation"
							/>
						</map>
					</div>
				</div>
			</div>

			<div className="college-cont-map">
				<div className="belt">
					<div className='map-area'>
						<img src={DesignConImg03} useMap="#Map3" alt="전체 커리큘럼 Flow" />
						<map name="Map3">
							<area
								shape="rect"
								coords="125,179,256,280"
								href="https://mysuni.sk.com/suni-community/community/COMMUNITY-4r/home"
								alt="Customer Story Meetup"
							/>
							<area
								shape="rect"
								coords="125,300,256,453"
								onClick={() => alert('준비중입니다.')}
								alt="고객가치혁신 실무자를 위한 과정"
							/>
							<area
								shape="rect"
								coords="125,458,257,507"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-8cs/view`}
								alt="Insights for Innovation - IDEO"
							/>
							<area
								shape="rect"
								coords="125,527,257,668"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-5js/view`}
								alt="고객 Research 방법"
							/>
							<area
								shape="rect"
								coords="125,673,257,773"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-5j8/view`}
								alt="고객 Needs Finding"
							/>
							<area
								shape="rect"
								coords="125,794,257,824"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-1311/view`}
								alt="공간 혁신과 그 변화"
							/>
							<area
								shape="rect"
								coords="125,829,257,859"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-1f4/view`}
								alt="고객 Needs란?"
							/>
							<area
								shape="rect"
								coords="125,864,257,894"
								href={`https://mysuni.sk.com/suni-main/search?query=%EC%8A%A4%ED%8E%99%ED%8A%B8%EB%9F%BC%20%EC%BD%98`}
								alt="스펙트럼 콘"
							/>
							<area
								shape="rect"
								coords="125,899,257,944"
								onClick={() => alert('준비중입니다.')}
								alt="Customer eXperience ‘요즘’"
							/>
							<area
								shape="rect"
								coords="126,949,257,994"
								href={`https://mysuni.sk.com/suni-main/search?query=Customer%20Life%20%EC%9A%94%EC%A6%98`}
								alt="Customer Life ‘요즘’"
							/>
							<area
								shape="rect"
								coords="287,724,419,772"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-13xj/view`}
								alt="린스타트업"
							/>
							<area
								shape="rect"
								coords="287,673,419,719"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-5mq/view`}
								alt="워킹백워드 Tools"
							/>
							<area
								shape="rect"
								coords="287,601,418,667"
								href={`https://mysuni.sk.com/suni-main/search?query=%EA%B8%B0%EC%88%A0%EC%9D%80%20%EC%9E%88%EB%8A%94%EB%8D%B0%20%EC%82%AC%EC%97%85%ED%99%94%EA%B0%80%20%EC%96%B4%EB%A0%B5%EB%8B%A4%EB%A9%B4?%20%EA%B3%A0%EA%B0%9D%EC%A4%91%EC%8B%AC%20Biz%20%EB%A7%8C%EB%93%A4%EA%B8%B0`}
								alt="고객중심 Biz 만들기! 1부 2부"
							/>
							<area
								shape="rect"
								coords="288,527,419,594"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-14q1/cube/CUBE-ji9/view/ELearning`}
								alt="Prototyping for Digital Experiences - IDEO"
							/>
							<area
								shape="rect"
								coords="287,458,419,506"
								href={`https://mysuni.sk.com/suni-main/search?query=%EC%8B%A4%EC%A0%84%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20topic`}
								alt="[실전 프로젝트] 고객중심 Biz 1-4"
							/>
							<area
								shape="rect"
								coords="287,405,419,452"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-8cr/view`}
								alt="From Ideas to Action - IDEO"
							/>
							<area
								shape="rect"
								coords="287,353,419,400"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7pa/view`}
								alt="워킹백워드 Workshop"
							/>
							<area
								shape="rect"
								coords="287,300,419,348"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7j3/cube/CUBE-a2j/view/ClassRoomLecture`}
								alt="워킹백워드 Project"
							/>
							<area
								shape="rect"
								coords="287,794,419,894"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-12yb/view`}
								alt="고객 중심 패러다임, '구독'"
							/>
							<area
								shape="rect"
								coords="287,899,419,994"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-1es/view`}
								alt="처음 만나는 워킹백워드"
							/>
							<area
								shape="rect"
								coords="429,179,561,280"
								onClick={() => alert('준비중입니다.')}
								alt="디자인씽킹 코칭 스킬"
							/>
							<area
								shape="rect"
								coords="429,300,561,330"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-2/cube/CUBE-3/view/ClassRoomLecture`}
								alt="디자인씽킹 Project"
							/>
							<area
								shape="rect"
								coords="429,335,561,365"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-6xo/view`}
								alt="디자인씽킹 팀 W/S"
							/>
							<area
								shape="rect"
								coords="429,370,561,400"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-8x7/view`}
								alt="디자인씽킹 W/S"
							/>
							<area
								shape="rect"
								coords="429,405,561,453"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-8ct/view`}
								alt="Human-Centered SVC Design-IDEO"
							/>
							<area
								shape="rect"
								coords="429,458,561,507"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7pk/view`}
								alt="디자인씽킹 Self 실습 (SV사례)"
							/>
							<area
								shape="rect"
								coords="429,600,561,667"
								onClick={() => alert('준비중입니다.')}
								alt="서비스 디자인 Intensive"
							/>
							<area
								shape="rect"
								coords="429,672,561,719"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7pb/view`}
								alt="디자인씽킹 사례 (SV)보며 익히기"
							/>
							<area
								shape="rect"
								coords="429,724,561,772"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-13c/view`}
								alt="디자인씽킹 익히기 - Linkedin"
							/>
							<area
								shape="rect"
								coords="429,794,561,894"
								onClick={() => alert('준비중입니다.')}
								alt="고객중심 문제해결 온라인 실습"
							/>
							<area
								shape="rect"
								coords="429,899,561,994"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-1f0/view`}
								alt="처음 만나는 디자인씽킹"
							/>
							<area
								shape="rect"
								coords="571,673,703,720"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-86m/view`}
								alt="디자인 사고 연습"
							/>
							<area
								shape="rect"
								coords="571,725,703,773"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-aac/view`}
								alt="Hello Design Thinking – IDEO"
							/>
							<area
								shape="rect"
								coords="571,899,703,994"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-1ew/view`}
								alt="Biz. Ideation 첫걸음"
							/>
							<area
								shape="rect"
								coords="571,794,703,894"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-6f3/view`}
								alt="창의적 IDEA 발상법"
							/>
							<area
								shape="rect"
								coords="734,300,866,401"
								onClick={() => alert('준비중입니다.')}
								alt="로지컬씽킹 Workshop"
							/>
							<area
								shape="rect"
								coords="734,406,866,507"
								onClick={() => alert('준비중입니다.')}
								alt="논리적 문제해결 온라인 실습"
							/>
							<area
								shape="rect"
								coords="734,527,866,668"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-1467/view`}
								alt="Critical Thinking - Linkedin"
							/>
							<area
								shape="rect"
								coords="734,673,866,773"
								href={`https://mysuni.sk.com/suni-main/search?query=%EC%BB%A8%EC%84%A4%ED%84%B4%ED%8A%B8%EC%9D%98%20%EC%9D%BC%ED%95%98%EB%8A%94%20%EC%8A%A4%ED%82%AC%20%EC%9D%B5%ED%9E%88%EA%B8%B0`}
								alt="컨설턴트의 일하는 스킬 익히기 1부 2부"
							/>
							<area
								shape="rect"
								coords="734,847,866,894"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-13tz/view`}
								alt="처음 만나는 로지컬씽킹"
							/>
							<area
								shape="rect"
								coords="734,794,866,841"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-13xc/view`}
								alt="Logic&amp;Play 인도로 가는 길"
							/>
							<area
								shape="rect"
								coords="734,898,866,994"
								onClick={() => alert('준비중입니다.')}
								alt="Problem Solving 101"
							/>
							<area
								shape="rect"
								coords="896,179,1028,228"
								href="https://mysuni.sk.com/suni-community/community/COMMUNITY-1n/home"
								alt="애자일 코치 Meetup"
							/>
							<area
								shape="rect"
								coords="896,232,1028,281"
								onClick={() => alert('준비중입니다.')}
								alt="애자일 코치 양성 과정"
							/>
							<area
								shape="rect"
								coords="896,300,1028,348"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-6dk/view`}
								alt="애자일 Project"
							/>
							<area
								shape="rect"
								coords="896,353,1028,401"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-8j1/view`}
								alt="애자일 리더십 Workshop"
							/>
							<area
								shape="rect"
								coords="896,407,1028,454"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7dd/view`}
								alt="애자일 Workshop"
							/>
							<area
								shape="rect"
								coords="896,459,1028,507"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-148g/view`}
								alt="애자일 Practice (Self 실습)"
							/>
							<area
								shape="rect"
								coords="896,527,1028,584"
								onClick={() => alert('준비중입니다.')}
								alt="리더를 위한 애자일 이니셔티브"
							/>
							<area
								shape="rect"
								coords="896,590,1028,622"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-145l/view`}
								alt="WoW, 애자일"
							/>
							<area
								shape="rect"
								coords="896,627,1028,658"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-140k/view`}
								alt="애자일과 스크럼"
							/>
							<area
								shape="rect"
								coords="896,665,1028,695"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-afx/view`}
								alt="퍼스널 칸반"
							/>
							<area
								shape="rect"
								coords="896,702,1028,733"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-a2p/view`}
								alt="카이젠 저니"
							/>
							<area
								shape="rect"
								coords="896,738,1028,770"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-5c4/view`}
								alt="애자일 - Linkedin"
							/>
							<area
								shape="rect"
								coords="896,794,1028,824"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7np/view`}
								alt="애자일 방법론 기초"
							/>
							<area
								shape="rect"
								coords="896,829,1028,859"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-84k/view`}
								alt="애자일 에센셜"
							/>
							<area
								shape="rect"
								coords="896,864,1028,894"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-13ul/view`}
								alt="애자일 선언문"
							/>
							<area
								shape="rect"
								coords="896,899,1028,944"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-52y/view`}
								alt="처음 만나는 애자일"
							/>
							<area
								shape="rect"
								coords="896,949,1028,993"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-1ev/view`}
								alt="Why 애자일"
							/>
							<area
								shape="rect"
								coords="1058,300,1189,347"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-13zl/cube/CUBE-hqi/view/ClassRoomLecture`}
								alt="오픈이노베이션 Project"
							/>
							<area
								shape="rect"
								coords="1058,353,1189,454"
								onClick={() => alert('준비중입니다.')}
								alt="오픈 이노베이션 Workshop"
							/>
							<area
								shape="rect"
								coords="1058,459,1189,505"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-69v/view`}
								alt="퓨처캐스팅 Workshop"
							/>
							<area
								shape="rect"
								coords="1059,716,1190,773"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-7lo/view`}
								alt="Creative Collabo Skills - Linkedin"
							/>
							<area
								shape="rect"
								coords="1059,653,1190,710"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-1ez/view`}
								alt="All about 오픈 이노베이션"
							/>
							<area
								shape="rect"
								coords="1059,590,1190,647"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-1et/view`}
								alt="Futurecasting"
							/>
							<area
								shape="rect"
								coords="1059,527,1190,584"
								onClick={() => alert('준비중입니다.')}
								alt="퍼실리테이션,집단 의사 결정 방법론"
							/>
							<area
								shape="rect"
								coords="1058,896,1189,993"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-1eu/view`}
								alt="Open Collaboration Tips"
							/>
							<area
								shape="rect"
								coords="1058,794,1189,891"
								onClick={() => alert('준비중입니다.')}
								alt="상호책임의 정직성을 액셀(ACCEL)하라"
							/>
							<area
								shape="rect"
								coords="125,1040,253,1120"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-1f3/view`}
								alt="Deep Change와 Design 이해"
							/>
							<area
								shape="rect"
								coords="259,1040,383,1120"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-1f2/view`}
								alt="고객 이해의 중요성 Remind!!"
							/>
							<area
								shape="rect"
								coords="389,1040,513,1120"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-139/view`}
								alt="YouTube 디자인 사고 이해"
							/>
							<area
								shape="rect"
								coords="519,1040,643,1120"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-6om/view`}
								alt="혁신의 비법"
							/>
							<area
								shape="rect"
								coords="648,1040,777,1120"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-1er/view`}
								alt="Leading with Innovation"
							/>
							<area
								shape="rect"
								coords="802,1040,931,1120"
								href={`https://mysuni.sk.com/suni-main/lecture/category/CLG00005/channel/CHN0000q`}
								alt="Trend &amp; Insight Report"
							/>
							<area
								shape="rect"
								coords="936,1040,1060,1120"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-5p3/view`}
								alt="도약을 위한 미래 디자인"
							/>
							<area
								shape="rect"
								coords="1064,1040,1190,1120"
								href={`https://mysuni.sk.com/suni-main/lecture/card/CARD-502/view`}
								alt=" 효율적으로 일하는 Tip"
							/>
							<area
								shape="rect"
								coords="200,59,406,113"
								href={`https://mysuni.sk.com/suni-main/lecture/category/CLG00005/channel/CHN0000o`}
								alt="고객경험 디자인"
							/>
							<area
								shape="rect"
								coords="569,59,799,114"
								onClick={() => alert('준비중입니다.')}
								alt="Problem Solving"
							/>
							<area
								shape="rect"
								coords="931,57,1151,115"
								onClick={() => alert('준비중입니다.')}
								alt="일하는 방식의 혁신"
							/>
							<area
								shape="rect"
								coords="125,124,258,170"
								href={`https://mysuni.sk.com/suni-main/lecture/category/CLG00005/channel/CHN0007r`}
								alt="고객과의 공감"
							/>
							<area
								shape="rect"
								coords="284,124,482,171"
								href={`https://mysuni.sk.com/suni-main/lecture/category/CLG00005/channel/CHN000d8`}
								alt="고객중심 Biz.의 실행"
							/>
							<area
								shape="rect"
								coords="519,123,693,172"
								onClick={() => alert('준비중입니다.')}
								alt="창의적 문제해결"
							/>
							<area
								shape="rect"
								coords="730,124,869,173"
								href={`https://mysuni.sk.com/suni-main/lecture/category/CLG00005/channel/CHN0007q`}
								alt="논리적 문제해결"
							/>
							<area
								shape="rect"
								coords="896,124,1028,173"
								href={`https://mysuni.sk.com/suni-main/lecture/category/CLG00005/channel/CHN0000p`}
								alt="애자일 실행"
							/>
							<area
								shape="rect"
								coords="1057,124,1192,173"
								href={`https://mysuni.sk.com/suni-main/lecture/category/CLG00005/channel/CHN0007t`}
								alt="오픈이노베이션"
							/>
						</map>
					</div>
				</div>
			</div>
		</>
	)
}
const TabMenuInnerSubDesignEng = () => {
	return (
		<>
			<div className="college-cont-map design">
				<div className="belt">
					<div className='guide-area' />
					<div className="map-area">
						<img src={DesignConImg01Eng} useMap='#Map1' alt="Curriculum" />
					</div>
				</div>
			</div>

			<div className="college-cont-map design">
				<div className="belt">
					<div className='map-area'>
						<img src={DesignConImg02Eng} useMap='#Map2' alt="badge" />
					</div>
				</div>
			</div>

			<div className="college-cont-map">
				<div className="belt">
					<div className='map-area'>
						<img src={DesignConImg03Eng} alt="Curriculum" />
					</div>
				</div>
			</div>
		</>
	)
}
const TabMenuInnerSubDesignChn = () => {
	return (
		<>
			<div className="college-cont-map design">
				<div className="belt">
					<div className='guide-area' />
					<div className="map-area">
						<img src={DesignConImg01Chn} alt="" />
					</div>
				</div>
			</div>

			<div className="college-cont-map design">
				<div className="belt">
					<div className='map-area'>
						<img src={DesignConImg02Chn} alt="Badge" />
					</div>
				</div>
			</div>

			<div className="college-cont-map">
				<div className="belt">
					<div className='map-area'>
						<img src={DesignConImg03Chn} alt="课程大纲" />
					</div>
				</div>
			</div>
		</>
	)
}
export { TabMenuInnerSubDesign, TabMenuInnerSubDesignEng, TabMenuInnerSubDesignChn }
