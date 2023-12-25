import React, { useState, useEffect } from 'react';
import CubeInfoList from "../_Components/CubeInfoList";
import BlendedHeader from "../CubeBlendedChapter/components/BlendedHeader";
import BlendedSectionData from "../CubeBlendedChapter/components/BlendedSectionData";
import BlendedSectionDocument from "../CubeBlendedChapter/components/BlendedSectionDocument";
import BlendedSectionPlayer from "./components/BlendedSectionPlayer";
import BlendedSectionWebpage from "../CubeBlendedChapter/components/BlendedSectionWebpage";
import BlendedSectionDiscussion from "../CubeBlendedChapter/components/BlendedSectionDiscussion";

const CubeBlendedChapterQuiz = () => {
	// Layout
	const [scrollValue, setScrollValue] = useState(0);
	const [scrollBottomValue, setScrollBottomValue] = useState(0);
	const [isFold, setIsFold] = useState(true);

	const FoldToggle = (state) => {
		setIsFold(state);
	}
	useEffect(() => {
		// 스크롤링 이벤트
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
				{/* Blended Wrap */}
				<div className="detail-sec cube-sec">
					<div className="detail-sec-inner">
						<div className="blended-heder">
							<BlendedHeader />
						</div>
						<div className="blended-body">
							{/* Video */}
							<BlendedSectionPlayer />

							{/* Data */}
							<BlendedSectionData />

							{/* Discussion */}
							<BlendedSectionDiscussion />

							{/* Webpage */}
							<BlendedSectionWebpage />

							{/* Document */}
							<BlendedSectionDocument />
						</div>
					</div>
				</div>
			</div>
			{/* // Blended Wrap */}
		</section>
	)
};

export default CubeBlendedChapterQuiz