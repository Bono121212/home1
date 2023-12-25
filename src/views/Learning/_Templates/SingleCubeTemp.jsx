import React from 'react';
import CubeDetailHeader02 from '../_Components/CubeDetailHeader02';
import CubeSample from './components/CubeSample';

const SingleCubeTemp = () => {
	return (
		<section className='content lms'>
			<div className="cube-info-detail">
				{/* Cube Detail Header */}
				<CubeDetailHeader02
					title="[꼼꼼한 논문 읽기] Extracting Training Data (언어모델 공격 기법)" cube="Video" time="16h 10m" state="학습중"
					hasBookmark="false" hasPlaylist="false" hasNote="true" hasShare="true"
				/>

				{/* Cube Detail Container */}
				<div className="cube-detail-body">
					{/* 큐브 영역 */}
					<CubeSample />
				</div>
			</div>
		</section>
	)
};
export default SingleCubeTemp;
