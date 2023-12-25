import React,{useState, useEffect} from 'react';
import { Button, Icon } from 'semantic-ui-react';
import CubeInfoList from "../_Components/CubeInfoList";
// import OverviewInquery from '../_Components/OverviewInquery';
import CubeDetailSec from '../_Components/CubeDetailSec';
import PostDetailWrap from './components/PostDetailWrap';
import PhotoCommentNew from '../../Sample/CommentCaseNew/components/PhotoCommentReplyNew';
import CommentContents from '../../Sample/CommentCaseNew/components/CommentContents';
import TestRadio01 from '../../Sample/CommentCaseNew/components/TestRadio01';

const CubeAssignmentPostDetail = () => {
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
				{/* Cube Detail Container */}
				<div className="cube-detail-body">
					{/* 큐브 영역 */}
					<CubeDetailSec className="cube-sec cube-assignment-sec">
						<PostDetailWrap myPost="true" secret="true" pin="true" file="true" />

                        {/* Comment */}
                        <PhotoCommentNew />
                        <TestRadio01 />
                        <CommentContents pin="true" secret="false" />
                        <div className="more-comments">
                            <Button icon className='left moreview'>
                                <Icon className='moreview' /> more comments
                            </Button>
                        </div>
                        {/* Comment */}
					</CubeDetailSec>
				</div>
				{/* 문의하기 플로팅 영역 */}
				{/* <OverviewInquery scrollBottom={scrollBottomValue} /> */}
			</div>
		</section>
	)
};
export default CubeAssignmentPostDetail
