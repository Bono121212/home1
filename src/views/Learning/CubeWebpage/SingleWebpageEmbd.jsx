import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from "semantic-ui-react";
import classNames from 'classnames';
import CubeDetailHeader from "../_Components/CubeDetailHeader";
import OverviewDescription from "../_Components/OverviewDescription";
import OverviewDownloadKeyword from "../_Components/OverviewDownloadKeyword";
import OverviewCommunity from "../_Components/OverviewCommunity";
import OverviewTeacher from "../_Components/OverviewTeacher";
import OverviewRelation from "../_Components/OverviewRelation";
// import OverviewCurriculumSingleAlways from "../_Components/OverviewCurriculumSingleAlways";
// import OverviewInquery from "../_Components/OverviewInquery";
import CubeComment from '../_Components/CubeComment';
import WebEmbedContainer from './component/WebEmbedContainer';

const SingleWebpage = () => {
	// Tabmenu
	const [selectedIdx, setSelectedIdx] = useState(1);
    const [stickyValue, setStickyValue] = useState(0);

    // Layout
	const [scrollValue, setScrollValue] = useState(0);
	// const [scrollBottomValue, setScrollBottomValue] = useState(0);

	useEffect(() => {
        const onInit = () => {
            setStickyValue(document.querySelector('.cube-detail-menu-wrap').getBoundingClientRect().top + window.pageYOffset);
        }
		const onScroll = () => {
			setScrollValue(window.scrollY);
			// setScrollBottomValue(0);
		};
		window.addEventListener('scroll', onScroll);
		window.addEventListener('resize', onScroll);
		onInit();
		onScroll();

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
		}
	}, []);

	return (
		<section className='content lms'>
			<div className="cube-info-detail type-ov type-cube">
				{/* Cube Detail Header */}
				<CubeDetailHeader
					backgroundImage="http://placeimg.com/1920/260/nature" backgroundColor="rgba(62, 176, 218, 0.9)"
                    title="[꼼꼼한 논문 읽기] Extracting Training Data (언어모델 공격 기법) (2월 20일 녹화 영상)" type="Basic" time="16h 10m" value="145명 이수" name="김써니"
                    hasBookmark="true" hasPlaylist="true" hasNote="true" hasShare="true"
                >
					<div className="header-action">
						<Button className="btn-cube-learn">학습하기</Button>
						{/* <Button className="btn-cube-learn">학습완료</Button>
						<Button className="btn-cube-learn">복습하기</Button> */}
					</div>
				</CubeDetailHeader>

				{/* Cube Detail Container */}
				<div className="cube-detail-body">
					{/* 큐브 영역 */}
					<WebEmbedContainer title/>

					{/* Cube Detail Menu */}
					<div className={classNames('cube-detail-menu-wrap', {'lms-fixed': (scrollValue > stickyValue)})}>
						<div className="cube-detail-menu">
							<div className="lms-fixed-inner">
								<Link className={selectedIdx === 1 ? "lms-act" : ""} onClick={()=>setSelectedIdx(1)}>과정소개</Link>
								<Link className={selectedIdx === 3 ? "lms-act" : ""} onClick={()=>setSelectedIdx(3)}>코멘트<em className="count">11</em></Link>
							</div>
						</div>
					</div>

					{selectedIdx === 1 &&
						<>
							{/* 큐브소개 영역 */}
							<OverviewDescription />

							{/* 참고자료/키워드 영역 */}
							<OverviewDownloadKeyword download="true" keyword="true" />

							{/* 강사 영역 */}
							<OverviewTeacher />

							{/* 커뮤니티 영역 */}
							<OverviewCommunity />

							{/* 관련 과정/배지 영역 */}
							<OverviewRelation learn="true" badge="true" />
						</>
					}
					{selectedIdx === 3 &&
						<>
							{/* 큐브 코멘트 영역 */}
							<CubeComment pin="true" />
						</>
					}
				</div>
				{/* 과정정보 학습하기 플로팅 영역 */}
				{/* <OverviewCurriculumSingleAlways scroll={scrollValue} scrollBottom={scrollBottomValue} /> */}
				{/* 문의하기 플로팅 영역 */}
				{/* <OverviewInquery scrollBottom={scrollBottomValue} /> */}
			</div>
		</section>
	)
};
export default SingleWebpage;
