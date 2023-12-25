import React from "react";
import { Link } from "react-router-dom";
import BlendedHeader from "../../../CubeBlendedChapter/components/BlendedHeader";
import BlendedSectionPlayer from "../BlendedSectionPlayer";
import BlendedSectionData from "../../../CubeBlendedChapter/components/BlendedSectionData";
import BlendedSectionDocument from "../../../CubeBlendedChapter/components/BlendedSectionDocument";
import BlendedSectionWebpage from "../BlendedSectionWebpage";
import BlendedSectionDiscussion from "../BlendedSectionDiscussion";

const CubeInfoDetail = () => {
	return (
		<div className="course-info-detail responsive-course">
			<div className="course-detail-center">
				<Link className="btn-wide"><span>펼치기</span></Link>

				{/* Collection Wrap */}
				<div className="main-wrap blended-wrap">
					<div className="scrolling-area area2 ">
						{/* Collection Segment */}
						<div className="ui segment full">
							<div className="blended-heder">
								{/* Header */}
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
						{/* // Collection Body */}
					</div>
				</div>
				{/* // Collection Wrap */}
			</div>
		</div>
	);
};

export default CubeInfoDetail;
