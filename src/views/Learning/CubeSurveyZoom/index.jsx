import React from 'react';
import { Dimmer } from 'semantic-ui-react';
import CubeSurveyGroup from '../CubeSurveyGroup';

const CubeSurveyZoom = () => {
	return (
		<>
			<CubeSurveyGroup />

			{/* 이미지 크게보기 (코멘트 돋보기와 동일) */}
			<div className="photo_viewer is-visible">
				<button type="button" className="btn ico close"><span className="blind">닫기</span></button>
				<img src="http://placeimg.com/1500/600/nature" alt="" className="img" />
			</div>
			<Dimmer page active className="dimmer-zoom"></Dimmer>
			{/* //이미지 크게보기 */}
		</>
	)
};
export default CubeSurveyZoom;