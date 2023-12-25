import React, {Component, createRef} from 'react'
import {
    Segment,
    Sticky,
    Menu, Radio, Icon
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Paging from '../Paging'
import AccordionFaq from '../AccordionFaq'

class ContentsArea extends Component {
    contextRef = createRef()
    state = {activeItem: 'faq', value: 'radio01'}

    handleChange = (e, { value }) => this.setState({ value });
    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <div ref={this.contextRef}>
                <Sticky context={this.contextRef} className='tab-menu offset0'>
                    <div className="cont-inner">
                        <Menu className='sku'>
                            <Menu.Item
                                name='notice'
                                active={activeItem === 'notice'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                Notice
                            </Menu.Item>
                            <Menu.Item
                                name='faq'
                                active={activeItem === 'faq'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                FAQ
                            </Menu.Item>
                            <Menu.Item
                                name='qa'
                                active={activeItem === 'qa'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                                1:1 문의
                            </Menu.Item>
                            <Menu.Item
                                name='qaAdmin'
                                active={activeItem === 'qaAdmin'}
                                onClick={this.handleItemClick}
                                as={Link} to=""
                            >
                               문의 관리
                            </Menu.Item>
                        </Menu>
                    </div>
                </Sticky>
                <Segment className='full'>
                    {/* support-list-wrap 공통, faq class 추가 */}
                    <div className="support-list-wrap faq">
                        <div className="cate-wrap">
                            <div className="radio-wrap">
                                <Radio
                                    className='base'
                                    label='전체'
                                    name='radioGroup'
                                    value='radio01'
                                    checked={this.state.value === 'radio01'}
                                    onChange={this.handleChange}
                                />
                                <Radio
                                    className='base'
                                    label='학습 Rule'
                                    name='radioGroup'
                                    value='radio02'
                                    checked={this.state.value === 'radio02'}
                                    onChange={this.handleChange}
                                />
                                <Radio
                                    className='base'
                                    label='Contents'
                                    name='radioGroup'
                                    value='radio03'
                                    checked={this.state.value === 'radio03'}
                                    onChange={this.handleChange}
                                />
                                <Radio
                                    className='base'
                                    label='System'
                                    name='radioGroup'
                                    value='radio04'
                                    checked={this.state.value === 'radio04'}
                                    onChange={this.handleChange}
                                />
                                <Radio
                                    className='base'
                                    label='College'
                                    name='radioGroup'
                                    value='radio05'
                                    checked={this.state.value === 'radio05'}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="list-top">
                            <div className="list-top-left">
                                총 <strong>20개</strong>의 리스트가 있습니다.
                            </div>
                            <div className="list-top-right">
                                <div className="ui input s-search h38">
                                    <input type="text" placeholder="검색어를 입력하세요."/>
                                    <Icon className="search-32"/>
                                </div>
                            </div>
                        </div>

                        <div className="faq-list-wrap">
                            <AccordionFaq/>
                        </div>

                        <Paging/>
                    </div>
                </Segment>
            </div>
        )
    }
}

export default ContentsArea
