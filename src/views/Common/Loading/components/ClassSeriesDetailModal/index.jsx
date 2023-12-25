import React, {Component} from 'react'
import {
    Button,
    Modal,
    Icon,
    Table, Popup
} from 'semantic-ui-react'

class ClassSeriesDetailModal extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});

    handleChange = (e, {value}) => this.setState({value});

    render() {
        const {open, size} = this.state;

        return (
            <>
                {/*<Button onClick={this.show('fullscreen')} basic>보기</Button>*/}

                <Modal size={size} open={open} onClose={this.close} className='base w1000'>

                    <Modal.Header>
                        mySUNI 서비스 전체보기
                        <div className="right-btn">
                            <Button icon className="btn-blue2"><Icon className='homelink'/>Home</Button>
                        </div>
                    </Modal.Header>
                    <Modal.Content>
                    <div className="site-map-v2">
                            <ul>
                                <li>
                                    <span>Category</span>
                                    <ul>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">AI</span>
                                                <span className="count">(<em>206</em>)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">DT</span>
                                                <span className="count">(<em>139</em>)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">행복</span>
                                                <span className="count">(<em>57</em>)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">SV</span>
                                                <span className="count">(<em>65</em>)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">혁신디자인</span>
                                                <span className="count">(<em>172</em>)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">Global</span>
                                                <span className="count">(<em>189</em>)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">Leadership</span>
                                                <span className="count">(<em>76</em>)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">Management</span>
                                                <span className="count">(<em>192</em>)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">미래반도체</span>
                                                <span className="count">(<em>86</em>)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">Green</span>
                                                <span className="count">(<em>68</em>)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">BM Design &amp; Storytelling</span>
                                                <span className="count">(<em>40</em>)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">SK아카데미</span>
                                                <span className="count">(<em>26</em>)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">SK경영</span>
                                                <span className="count">(<em>104</em>)</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">Life Style</span>
                                                <span className="count">(<em>92</em>)</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span>My Learning</span>
                                    <ul>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">학습중</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">관심목록</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">학습예정</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">권장과정</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">학습완료</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">취소/미이수</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Recommend</span>
                                    <ul>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">Recommend</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Community</span>
                                    <ul>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">My Community</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">Community List</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">Follower Feed</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span>mySUNI</span>
                                    <ul>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">mySUNI 소개</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">Category 소개</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">인증제도 소개</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">홍보자료</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Certification</span>
                                    <ul>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">Badge List</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">도전중 Badge</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">My Badge</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>승인관리</span>
                                    <ul>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">유료과정</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">개인학습</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span>My Page</span>
                                    <ul>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">My Profile</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">My Badge</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">My Stamp</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">Note</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span>고객센터</span>
                                    <ul>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">Notice</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">FAQ</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={()=>false}>
                                                <span className="underline">1:1 문의</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </Modal.Content>
                    <Modal.Actions className="actions">
                        <Button className='w190 pop d' onClick={this.close}>Close</Button>
                    </Modal.Actions>
                </Modal>
            </>
    )
    }
    }

    export default ClassSeriesDetailModal;
