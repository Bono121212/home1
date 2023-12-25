import React,{useState, useEffect} from 'react';
import CubeInfoList from "../_Components/CubeInfoList";
import CubeDetailHeader02 from '../_Components/CubeDetailHeader02';
import CubeComment from '../_Components/CubeComment';
// import OverviewInquery from '../_Components/OverviewInquery';

import TalkOverview from "./components/TalkOverview"

const CubeTalk = () => {

	// Layout
	const [scrollValue, setScrollValue] = useState(0);
	const [scrollBottomValue, setScrollBottomValue] = useState(0);
	const [isFold, setIsFold] = useState(true);

	const FoldToggle = (state) => {
		setIsFold(state);
	}
	useEffect(() => {
		const onScroll = () => {
			setScrollValue(window.scrollY);
			setScrollBottomValue(0);
		};
		window.addEventListener('scroll', onScroll);
		window.addEventListener('resize', onScroll);
		onScroll();

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
		}
	}, []);
	return (
		<section className={scrollValue > 113 ? 'content lms lms-lnb-fixed ' + (isFold ? 'v-wide' : '') : 'content lms lms-lnb-static ' + (isFold ? 'v-wide' : '')}>
			<CubeInfoList scrollBottom={scrollBottomValue} propFunction={FoldToggle} />

			<div className="cube-info-detail">
				{/* Cube Detail Header */}
				<CubeDetailHeader02
					title="과정에서 학습한 내용 중 실천해보고 싶은 것 하나를 선정하여 게시판에 공유해 주세요." cube="Talk" //time="" state=""
					hasBookmark="false" hasPlaylist="false" hasNote="false" hasShare="true"
				/>

				{/* Cube Detail Container */}
				<div className="cube-detail-body">
					{/* 큐브 영역 */}
					<TalkOverview />

					{/* 큐브 코멘트 영역 */}
					<CubeComment pin="false" secret="true" />
				</div>
				{/* 문의하기 플로팅 영역 */}
				{/* <OverviewInquery scrollBottom={scrollBottomValue} /> */}
			</div>
		</section>
	)
};
export default CubeTalk
