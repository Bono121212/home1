import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import CubeInfoList from "../_Components/CubeInfoList";
import CubeDetailHeader02 from '../_Components/CubeDetailHeader02';
import OverviewDescription from "../_Components/OverviewDescription";
import OverviewDownloadKeyword from '../_Components/OverviewDownloadKeyword';
import OverviewTeacher from '../_Components/OverviewTeacher';
import PlayerContainer from "./components/PlayerContainer";
import CubeComment from '../_Components/CubeComment';
import CubeDetailMenu from '../_Components/CubeDetailMenu';
// import OverviewInquery from '../_Components/OverviewInquery';

const CubeAudio = () => {
	// Tabmenu
	const [selectedIdx, setSelectedIdx] = useState(1);

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

			<div className="cube-info-detail has-lnb">
				{/* Cube Detail Header */}
				<CubeDetailHeader02
					title="[꼼꼼한 논문 읽기] Extracting Training Data (언어모델 공격 기법)" cube="Audio" time="16h 10m" state=""
					hasBookmark="false" hasPlaylist="false" hasNote="true" hasShare="true"
				/>

				{/* Cube Detail Container */}
				<div className="cube-detail-body">
					{/* 큐브 영역 */}
					<PlayerContainer />

					{/* Cube Detail Menu */}
					<CubeDetailMenu>
						<Link className={selectedIdx === 1 ? "lms-act" : ""} onClick={()=>setSelectedIdx(1)}>강의소개</Link>
						<Link className={selectedIdx === 2 ? "lms-act" : ""} onClick={()=>setSelectedIdx(2)}>코멘트<em className='count'>20</em></Link>
					</CubeDetailMenu>

					{selectedIdx === 1 &&
						<>
							{/* 큐브소개 영역 */}
							<OverviewDescription />

							{/* 참고자료/키워드 영역 */}
							<OverviewDownloadKeyword download="true" keyword="false" />

							{/* 강사정보 영역 */}
							<OverviewTeacher />
						</>
					}
					{selectedIdx === 2 &&
						<>
							{/* 큐브 코멘트 영역 */}
							<CubeComment pin="true" />
						</>
					}
				</div>
				{/* 문의하기 플로팅 영역 */}
				{/* <OverviewInquery scrollBottom={scrollBottomValue} /> */}
			</div>
		</section>
	)
};
export default CubeAudio
