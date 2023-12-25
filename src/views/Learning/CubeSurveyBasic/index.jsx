import React, { useState, useEffect } from 'react';
import CubeInfoList from "../_Components/CubeInfoList";
import CubeInfoDetail from "./components/CubeInfoDetail";

const CubeSurveyBasic = () => {
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
		<section className={scrollValue > 113 ? 'content lms none-footer lms-lnb-fixed ' + (isFold ? 'v-wide' : '') : 'content lms none-footer lms-lnb-static ' + (isFold ? 'v-wide' : '')}>
			<CubeInfoList scrollBottom={scrollBottomValue} propFunction={FoldToggle} />

			<div className="cube-info-detail">
				{/* Cube Detail Container */}
				<div className="cube-detail-body">
					<CubeInfoDetail />
				</div>
			</div>
		</section>
	)
};
export default CubeSurveyBasic;