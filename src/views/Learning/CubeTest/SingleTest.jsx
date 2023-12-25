import React from 'react';
import CubeDetailHeader from '../_Components/CubeDetailHeader';
import TestGuideWrap from './components/TestGuideWrap';

const SingleTest = () => {
	return (
		<section className='content lms'>
			<div className="cube-info-detail type-ov type-cube cube-test-detail">
				{/* Cube Detail Header */}
				<CubeDetailHeader
					backgroundImage="http://placeimg.com/1920/260/nature" backgroundColor="rgba(62, 176, 218, 0.9)"
                    title="[이천포럼 2022] Mining Our Happiness - '나(SK)'의 행복 일지" type="Basic" time="16h 10m" value="145명 이수" name="김써니"
                    hasBookmark="true" hasPlaylist="true" hasNote="false" hasShare="true"
                >
				</CubeDetailHeader>
				{/* Cube Detail Container */}
				<div className="cube-detail-body">
					<TestGuideWrap case="all" />
				</div>
			</div>
		</section>
	)
};
export default SingleTest;
