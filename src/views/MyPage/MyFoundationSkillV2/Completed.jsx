import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import CubeDetailHeader02 from '../../Learning/_Components/CubeDetailHeader02';
import CubeInfoList from '../../Learning/_Components/CubeInfoList';
import ContentsArea2 from './components/ContentsArea/Completed';
import OverviewDescription from '../../Learning/_Components/OverviewDescription/index';
import CubeComment from '../../Learning/_Components/CubeComment/index';
import CubeDetailMenu from '../../Learning/_Components/CubeDetailMenu/index';

const MyFoundationSkillV2 = () => {
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
			// setScrollBottomValue(document.documentElement.clientHeight - document.querySelector('.footer').getBoundingClientRect().top);
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
				{/* Cube Detail Header */}
				<CubeDetailHeader02
					title="My Foundation Skill" cube="Webpage" time="16h 10m"
					hasBookmark="false" hasPlaylist="false" hasNote="true" hasShare="true"
				>
                    <Button className="btn-cube-learn">학습하기</Button>
                </CubeDetailHeader02>
				{/* Cube Detail Container */}
				<div className="cube-detail-body">
                    <ContentsArea2 />

					{/* Cube Detail Menu */}
					<CubeDetailMenu>
						<Link className={selectedIdx === 1 ? "lms-act" : ""} onClick={()=>setSelectedIdx(1)}>강의소개</Link>
						<Link className={selectedIdx === 2 ? "lms-act" : ""} onClick={()=>setSelectedIdx(2)}>코멘트<em className='count'>20</em></Link>
					</CubeDetailMenu>

					{selectedIdx === 1 &&
						<>
							{/* 큐브소개 영역 */}
							<OverviewDescription />
						</>
					}
					{selectedIdx === 2 &&
						<>
							{/* 큐브 코멘트 영역 */}
							<CubeComment pin="true" />
						</>
					}

				</div>
			</div>
		</section>
	)
};
export default MyFoundationSkillV2
