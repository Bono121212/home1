import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Segment, Button } from "semantic-ui-react";
import LearningPlaylistType1 from '../LearningPlaylistType1';
import LearningPlaylistType1noData from '../LearningPlaylistType1noData';

class LearningPlaylistSection extends Component {

    render() {
        return (
            <>
                {/* Data 없는경우 */}
                <Segment className="full learning-section type2 pl-sec">
                    <div className="section-head">
                        <div class="sec-tit-txt">
                            지금 나만의<br/>
                            <strong>Playlist를 만들고</strong><br/>
                            <strong>구성원에게 추천</strong>해보세요.
                        </div>
                        <div class="sec-btn">
                            <Button>Playlist 만들기</Button>
                        </div>
                        <div class="sec-btn2">
                            <Link to='/playlist/playlist-list-all' className='ui button'>전체 둘러보기</Link>
                        </div>
                    </div>
                    <div className="section-body">
                        <LearningPlaylistType1noData/>
                    </div>
                </Segment>

                {/* Data 있는경우 */}
                <Segment className="full learning-section type2 pl-sec">
                    <div className="section-head">
                        <div className="sec-tit-txt">
                            <strong>김써니님</strong>의<br/><strong>Playlist</strong>
                        </div>
                        {/* <div className="sec-tit-btn">
                            <button className="btn-more">전체보기</button>
                        </div> */}
                        <div class="sec-btn">
                            <Button>나의 Playlist</Button>
                        </div>
                        <div class="sec-btn2">
                            <Link to='/playlist/playlist-list-all' className='ui button'>전체 둘러보기</Link>
                        </div>
                    </div>
                    <div className="section-body">
                        <LearningPlaylistType1 swipeName='plylistSwiperNav'/>
                    </div>
                </Segment>
            </>
        )
    }

}

export default LearningPlaylistSection