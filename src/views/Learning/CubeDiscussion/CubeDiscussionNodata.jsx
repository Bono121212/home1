import React,{useState, useEffect} from 'react';
import CubeInfoList from "../_Components/CubeInfoList";
import CubeDetailHeader02 from '../_Components/CubeDetailHeader02';
import OverviewDownloadKeyword from '../_Components/OverviewDownloadKeyword';
// import OverviewInquery from '../_Components/OverviewInquery';
import CourseConditionsContainer from './components/CourseConditionsContainer';
import CubeCommentNodata from '../_Components/CubeCommentNodata';


const CubeDiscussionNodata = () => {
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
					title="[토론] 기업가치 반영 보상, 공감한다! vs. 공감하지 않는다!" cube="Discussion" time="16h 10m" state=""
					hasBookmark="false" hasPlaylist="false" hasNote="true" hasShare="true"
				/>

				{/* Cube Detail Container */}
				<div className="cube-detail-body">
					{/* 큐브 영역 */}
					<CourseConditionsContainer />

					{/* 참고자료/키워드 영역 */}
					<OverviewDownloadKeyword download="true" keyword="false" />

					{/* 코멘트영역 */}
					<CubeCommentNodata />
				</div>
				{/* 문의하기 플로팅 영역 */}
				{/* <OverviewInquery scrollBottom={scrollBottomValue} /> */}
			</div>
		</section>
	)
};
export default CubeDiscussionNodata
