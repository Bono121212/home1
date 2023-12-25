import React, { Component } from 'react'
import { Image, Grid } from 'semantic-ui-react'

import playListNodataImg1 from '../../../../../images/all/icon-character-01-v2.png'
import playListNodataImg2 from '../../../../../images/all/icon-character-02-v2.png'
import playListNodataImg3 from '../../../../../images/all/icon-character-03-v2.png'

class LearningPlaylistType1noData extends Component {
    render() {
        return (
            <Grid className='pl-nodata-items'>
            <Grid.Row columns={3}>
                <Grid.Column>
                    <div className='item'>
                        <div className="item-inner">
                            <div className='item-tip'>
                                <em className='tip'>이 과정 좋은데?</em>
                            </div>
                            <div className='item-img'>
                                <Image src={playListNodataImg1} alt="내가만든 캐릭터" className="ui image" />
                            </div>
                            <div className='item-tit'>
                                <p className='tit'><strong>내가 만든</strong> Playlist</p>
                            </div>
                        </div>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div className='item'>
                        <div className='item-inner'>
                            <div className='item-tip'>
                                <em className='tip right'>I want to recommend this to my team!</em>
                                {/* <em className='tip right'>우리팀에게 추천할래!</em> */}
                            </div>
                            <div className='item-img'>
                                <Image src={playListNodataImg2} alt="추천받은 캐릭터" className="ui image" />
                            </div>
                            <div className='item-tit'>
                                <p className='tit'><strong>Recommended</strong><br/>Playlist</p>
                                {/* <p className='tit'><strong>추천 받은</strong> Playlist</p> */}
                            </div>
                        </div>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div className='item'>
                        <div className='item-inner'>
                            <div className='item-tip'>
                                <em className='tip'>나도 들어봐야지~</em>
                            </div>
                            <div className='item-img'>
                                <Image src={playListNodataImg3} alt="내가 담은 캐릭터" className="ui image" />
                            </div>
                            <div className='item-tit'>
                                <p className='tit'><strong>내가 담은</strong> Playlist</p>
                            </div>
                        </div>
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        )
    }
}

export default LearningPlaylistType1noData