import React from 'react';
import CubeDetailSec from '../../../_Components/CubeDetailSec';
import CourseConditions from '../CourseConditions';

const CourseConditionsContainer = (props) => {
    return (
        <CubeDetailSec className="cube-sec cube-discusstion-sec">
			{/* Case 단독큐브 제목 있음 */}
			{ props.title &&
				<>
					<div className="detail-sec-head type-cube-info">
						<h2 className="detail-sec-title">과정에서 학습한 내용 중 실천해 보고 싶은 것 하나를 선정하여 공유해 주세요.</h2>
						<div className="detail-sec-info">
							<span className="ui label text">Discussion</span>
							<span className="ui label text">40m</span>
						</div>
					</div>
					<div className="detail-sec-body">
                        <CourseConditions />
					</div>
				</>
			}
			{/* Case 유형큐브 제목 없음 */}
			{ !props.title &&
				<CourseConditions />
			}
        </CubeDetailSec>
    )
}
export default CourseConditionsContainer;
