import React,{useState, useEffect} from 'react';
import CubeInfoList from "../_Components/CubeInfoList";
import CubeDetailHeader02 from '../_Components/CubeDetailHeader02';
// import OverviewInquery from '../_Components/OverviewInquery';
import CubeDetailSec from '../_Components/CubeDetailSec';
import ConditionsDetailReport from './components/ConditionsDetailReport';
import ReportDetailWrap from './components/ReportDetailWrap';

const CubeAssignmentReportGrading = () => {
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
					title="현재 수행 또는 계획 중인 업무를 린보드 5개 항목에 맞춰 가설을 정리하여 작성해 보세요." cube="Assignment" time="16h 10m" state="학습중"
					hasBookmark="false" hasPlaylist="false" hasNote="true" hasShare="true"
				/>

				{/* Cube Detail Container */}
				<div className="cube-detail-body">
					{/* 큐브 영역 */}
					<CubeDetailSec className="cube-sec cube-assignment-sec">
						<ConditionsDetailReport state="grading" />
						<ReportDetailWrap />
					</CubeDetailSec>
				</div>
				{/* 문의하기 플로팅 영역 */}
				{/* <OverviewInquery scrollBottom={scrollBottomValue} /> */}
			</div>
		</section>
	)
};
export default CubeAssignmentReportGrading
