import React from 'react';
import { Button } from "semantic-ui-react";
import CubeDetailHeader from "../_Components/CubeDetailHeader";
import CubeDetailSec from '../_Components/CubeDetailSec';
// import OverviewCurriculumSingleAlways from "../_Components/OverviewCurriculumSingleAlways";
// import OverviewInquery from "../_Components/OverviewInquery";
import ConditionsDetailPost from './components/ConditionsDetailPost';
import PostListWrap from './components/PostListWrap';

const SingleAssignment = () => {
    // Layout
	// const [scrollBottomValue, setScrollBottomValue] = useState(0);

	// useEffect(() => {
	// 	const onScroll = () => {
	// 		setScrollBottomValue(document.documentElement.clientHeight - document.querySelector('.footer').getBoundingClientRect().top);
	// 	};
	// 	window.addEventListener('scroll', onScroll);
	// 	window.addEventListener('resize', onScroll);
	// 	onScroll();

	// 	return () => {
	// 		window.removeEventListener('scroll', onScroll);
	// 		window.removeEventListener('resize', onScroll);
	// 	}
	// }, []);

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
						<Button className="btn-cube-learn">게시글 작성하기</Button>
					</div>
				</CubeDetailHeader>

				{/* Cube Detail Container */}
				<div className="cube-detail-body">
					{/* 큐브 영역 */}
					<CubeDetailSec className="cube-sec cube-assignment-sec">
						<ConditionsDetailPost single />
						<PostListWrap data />
					</CubeDetailSec>
				</div>
				{/* 과정정보 학습하기 플로팅 영역 */}
				{/* <OverviewCurriculumSingleAlways scroll={scrollValue} scrollBottom={scrollBottomValue} /> */}

				{/* 문의하기 플로팅 영역 */}
				{/* <OverviewInquery scrollBottom={scrollBottomValue} /> */}
			</div>
		</section>
	)
};
export default SingleAssignment;
