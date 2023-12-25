import React ,{Component} from 'react';
import {PlaylistDetailCardList, PlayListDetailHeader} from '../PlayListDetailCommon';
import { Menu, Label, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.css';
import Comments from '../../Sample/Comments';

class PlaylistDetailMyList extends Component {
    state = {activeItem : 'overview', type : 'My'};
    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    /* type 
        byOthers 타인 리스트
        My 내가 만든
        Save 내가 담음
        Recommended 추천받은
    */

    render(){
        const {activeItem, type} = this.state;
        return(
            <section className='content playlistDetail'> {/***** playlistDetail *****/}
                <div className='playlist-list detail-list-wrapper'>
                    <div className='playlist-detail-infobox'>
                        {/* 기존과 다름 */}
                        <PlayListDetailHeader type={type}/>
                    </div>
                    {/* 기존과 동일 */}
                    <div className='playlist-detail-content'>
                        <Menu className='playlist-view-tab'>
                            <Menu.Item
                                name='overview'
                                as={Link}
                                onClick={this.handleItemClick}
                                to='#none'
                                active={activeItem === 'overview'}
                            >
                                View All
                            </Menu.Item>
                            <Menu.Item
                                name='comment'
                                as={Link}
                                onClick={this.handleItemClick}
                                to='#none'
                                active={activeItem==='comment'}
                            >
                                Comments
                            </Menu.Item>
                            { 
                                type === 'My' &&
                                    <div className="playlist-view-right">
                                        <Label as="button" className='onlytext'>
                                            <Icon className='list-recommended'/>
                                            <span>추천받은 구성원 <strong>8명</strong></span>
                                        </Label>
                                        <Label as="button" className='onlytext'>
                                            <Icon className='list-recommended'/>
                                            <span>담아간 구성원 <strong>8명</strong></span>
                                        </Label>
                                    </div>
                            }
                        </Menu>
                        {/* 기존과 동일 */
                            activeItem === 'overview' && <PlaylistDetailCardList type={type}/>
                        }
                        {/* 기존과 동일 */
                            activeItem === 'comment' && <Comments/>
                        }
                        
                    </div>
                </div>
            </section>
        )
    }
}

export default PlaylistDetailMyList;