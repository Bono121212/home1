import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky, Menu,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import ContentsMoreView from '../ContentsMoreView';
import TopGuideTitle from '../TopGuideTitle';
import CardListBoard from '../CardListBoard';
import {Filter} from '../../../../../components';



class ContentsArea extends Component {
    contextRef = createRef()
    state = {
        activeItem: 'InProgress',
        isOnFilter: false,
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    onClickFilter = () => this.setState((prevState) => ({isOnFilter: !prevState.isOnFilter}));

    render() {
        const {activeItem} = this.state
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner">
                        <Menu className='sku'>
                            <Menu.Item
                                name='InProgress'
                                active={activeItem === 'InProgress'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                학습중<span className="count">+20</span>
                            </Menu.Item>
                            <Menu.Item
                                name='InMyList'
                                active={activeItem === 'InMyList'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                                className='division'
                            >
                                찜한 과정<span className="count">+24</span>
                            </Menu.Item>
                            <Menu.Item
                                name='Required'
                                active={activeItem === 'Required'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                핵인싸 과정<span className="count">+120</span>
                            </Menu.Item>
                            <Menu.Item
                                name='Enrolled'
                                active={activeItem === 'Enrolled'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                학습예정<span className="count">+12</span>
                            </Menu.Item>
                            <Menu.Item
                                name='Completed'
                                active={activeItem === 'Completed'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                mySUNI 학습완료 <span className="count">+2</span>
                            </Menu.Item>
                            <Menu.Item
                                name='APLCompleted'
                                active={activeItem === 'APLCompleted'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                개인학습 완료 <span className="count">+20</span>
                            </Menu.Item>
                            <Menu.Item
                                name='Retry'
                                active={activeItem === 'Retry'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                취소/미이수 <span className="count">+20</span>
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>
                <Segment className='full'>

                    <TopGuideTitle isOnFilter={this.state.isOnFilter} onClickFilter={this.onClickFilter}/>
                    {/*Filter*/}
                    <Filter isOnFilter={this.state.isOnFilter}/>


                    {/* card list - 기존 카드형태의 학습 리스트 */}
                    {/*<CardListGroup/>*/}

                    {/*0623 변경 - 보드형태의 리스트*/}
                    <CardListBoard/>

                    {/* more-comments */}
                    <ContentsMoreView/>
                </Segment>
            </div>
        )
    }
}


export default ContentsArea
