import React, {Component} from 'react'
import { Button, Modal, Icon, Radio, Select} from 'semantic-ui-react'

const LearningTimeTypeName = {
    mySUNI: 'Category 별 학습 시간',
    myCompany: 'My Company 학습 시간',
    lectureTime: 'Category 별 학습 시간',
    reLectureTime : 'Category 별 복습 시간'//2022-01 복습시간 추가
}

const selectOptions02 = [ //2022-01 복습시간 추가
    {id : 0, value : 'All',  text: '전체'},
    {id : 1, value : '2022', text: '2022'},
    {id : 2, value : '2021', text: '2021'},
    {id : 3, value : '2020', text: '2020'},
    {id : 4, value : '2019', text: '2019'},
]



class ClassSeriesDetailModal extends Component {
    state = {
        open: true,
        typeChecked: 'mySUNI'
    };
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false});

    handleChange = (e, {value}) => this.setState({ typeChecked: value });

    render() {
        const {open, size, typeChecked} = this.state;

        return (
            <>
                {/* 2022-01 복습시간 추가 class cpl-modal추가*/}
                <Modal size={size} open={open} onClose={this.close} className='base w700 cpl-modal'>

                    <Modal.Header className='res'>
                        학습 이수 시간
                        <span className="sub f12">mySUNI에서 이수한 학습 시간과 자사에서 인정 받은 학습 시간을 구분하여 확인하실 수 있습니다.</span>


                        {/* 2022-01 복습시간 추가 */}
                        <Select
                            placeholder='분류를 선택해주세요' className='small-border sl-year'
                            defaultValue={selectOptions02[1].value}
                            options={selectOptions02}
                        />

                    </Modal.Header>
                    <Modal.Content>
                        <div className="scrolling-80vh">
                            <div className="completion-time">
                                <div className="table-css">
                                    <div className="row head">
                                        <div className="cell v-middle">
                                            <Icon className='total-time16'/><span className="blind">total time</span>
                                            <span className="text01">2022.01.01 ~ 2022.01.31</span>
                                            {/* <span className="text02">총 학습 시간</span> */}
                                        </div>
                                        <div className="cell v-middle">
                                            <span className="text01">{ LearningTimeTypeName[typeChecked]}</span>
                                            {/* 2021-01 모든탭에서 나오지않는 걸로 삭제 */}
                                            {/* <span className="text02">(단위 : 시간)</span> */}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="cell vtop">
                                            {/*
                                            <div className="legend">(단위 : 시간)</div>
                                            <div className="total">
                                                <span>120</span><span className="u">h</span><span>00</span><span className="u">m</span>
                                            </div>
                                            <div className="chart">
                                                <div className="ui pie w200" data-value="30">
                                                    <span className="left"/>
                                                    <span className="right"/>
                                                </div>
                                            </div>
                                            <ul className="bullet-list1">
                                                <li><span className="name b1">mySUNI</span><span className="time">14h 50m</span></li>
                                                <li><span className="name b2">My company</span><span className="time">35h 30m</span></li>
                                            </ul>
                                            */}

                                            {/*0630 UI 변경*/}
                                            <div className="radio-wrap">
                                                <ul>
                                                    <li>
                                                        <Radio
                                                            label={
                                                                <>
                                                                    <label>
                                                                        <strong>mySUNI(120h 50m)</strong>
                                                                        <span>mySUNI에서 학습한 시간</span>
                                                                    </label>
                                                                    <span className="buri"></span>
                                                                </>
                                                            }
                                                            className="rect-icon"
                                                            name="rect"
                                                            value="mySUNI"
                                                            checked={typeChecked === 'mySUNI'}
                                                            onChange={this.handleChange}
                                                        />
                                                    </li>
                                                    <li>
                                                        <Radio
                                                            label={
                                                                <>
                                                                    <label>
                                                                        <strong>My Company(16h 00m)</strong>
                                                                        <span>사내과정 및 개인학습 등록으로 인정받은 시간</span>
                                                                    </label>
                                                                    <span className="buri"></span>
                                                                </>
                                                            }
                                                            className="rect-icon"
                                                            name="rect"
                                                            value="myCompany"
                                                            checked={typeChecked === 'myCompany'}
                                                            onChange={this.handleChange}
                                                        />

                                                    </li>
                                                    <li>
                                                        <Radio
                                                            label={
                                                                <>
                                                                    <label>
                                                                        <strong>강의 시간(20h 40m)</strong>
                                                                        <span>강사로 활동하여 인정받은 시간</span>
                                                                    </label>
                                                                    <span className="buri"></span>
                                                                </>
                                                            }
                                                            className="rect-icon"
                                                            name="rect"
                                                            value="lectureTime"
                                                            checked={typeChecked === 'lectureTime'}
                                                            onChange={this.handleChange}
                                                        />
                                                    </li>


                                                    {/* 2022-01 복습시간 추가 */}
                                                    <li>
                                                        <Radio
                                                            label={
                                                                <>
                                                                    <label>
                                                                        <strong>복습 시간(0h 0m)</strong>
                                                                        <span>이전에 학습한 과정을 다시 공부한 시간</span>
                                                                    </label>
                                                                    <span className="buri"></span>
                                                                </>
                                                            }
                                                            className="rect-icon"
                                                            name="rect"
                                                            value="reLectureTime"
                                                            checked={typeChecked === 'reLectureTime'}
                                                            onChange={this.handleChange}
                                                        />
                                                    </li>


                                                </ul>
                                            </div>


                                        </div>
                                        <div className="cell vtop">
                                            <ul className="bullet-list2">
                                                { typeChecked === 'mySUNI' && (
                                                    <>
                                                        <li>
                                                            <span className="name ai">AI</span>
                                                            <span className="time">00h 00m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name dt">DT</span>
                                                            <span className="time">03h 35m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name happy">행복</span>
                                                            <span className="time">00h 10m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name sv">SV·ESG</span>
                                                            <span className="time">01h 28m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name inno">혁신디자인</span>
                                                            <span className="time">08h 45m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name global">Global</span>
                                                            <span className="time">00h 00m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name leader">Leadership</span>
                                                            <span className="time">00h 00m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name manage">Management</span>
                                                            <span className="time">00h 00m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name semi">미래반도체</span>
                                                            <span className="time">00h 00m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name green">Green</span>
                                                            <span className="time">00h 00m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name bm">BM Design &amp; Storytelling</span>
                                                            <span className="time">00h 00m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name academy">SK아카데미</span>
                                                            <span className="time">00h 00m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name skmanage">SK경영</span>
                                                            <span className="time">00h 00m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name life">Life Style</span>
                                                            <span className="time">00h 00m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name skinno">이노베이션계열 공통</span>
                                                            <span className="time">00h 00m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name skcom">SK어스온</span>
                                                            <span className="time">00h 00m</span>
                                                        </li>
                                                    </>
                                                )}

                                                { typeChecked === 'myCompany' && (
                                                    <>
                                                        <li>
                                                            <span className="name">관계사 학습 시간</span>
                                                            <span className="time">14h 50m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name">개인 학습 시간</span>
                                                            <span className="time">35h 30m</span>
                                                        </li>
                                                    </>
                                                )}

                                                { typeChecked === 'lectureTime' && (
                                                    <>
                                                        <li>
                                                            <span className="name ai">AI</span>
                                                            <span className="time">00h 00m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name dt">DT</span>
                                                            <span className="time">03h 35m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name happy">행복</span>
                                                            <span className="time">00h 10m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name sv">SV·ESG</span>
                                                            <span className="time">01h 28m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name inno">혁신디자인</span>
                                                            <span className="time">08h 45m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name global">Global</span>
                                                            <span className="time">00h 00m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name leader">Leadership</span>
                                                            <span className="time">00h 00m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name manage">Management</span>
                                                            <span className="time">00h 00m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name semi">미래반도체</span>
                                                            <span className="time">00h 00m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name green">Green</span>
                                                            <span className="time">00h 00m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name bm">BM Design &amp; Storytelling</span>
                                                            <span className="time">00h 00m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name academy">SK아카데미</span>
                                                            <span className="time">00h 00m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name skmanage">SK경영</span>
                                                            <span className="time">00h 00m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name life">Life Style</span>
                                                            <span className="time">00h 00m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name skinno">이노베이션계열 공통</span>
                                                            <span className="time">00h 00m</span>
                                                        </li>
                                                        <li>
                                                            <span className="name skcom">SK어스온</span>
                                                            <span className="time">00h 00m</span>
                                                        </li>
                                                    </>
                                                )}


                                                {/* 2022-01 복습시간 추가 */}
                                                {
                                                    typeChecked === 'reLectureTime' &&(
                                                        <>
                                                            <li>
                                                                <span className="name ai">AI</span>
                                                                <span className="time">00h 00m</span>
                                                            </li>
                                                            <li>
                                                                <span className="name dt">DT</span>
                                                                <span className="time">03h 35m</span>
                                                            </li>
                                                            <li>
                                                                <span className="name happy">행복</span>
                                                                <span className="time">00h 10m</span>
                                                            </li>
                                                            <li>
                                                                <span className="name sv">SV·ESG</span>
                                                                <span className="time">01h 28m</span>
                                                            </li>
                                                            <li>
                                                                <span className="name inno">혁신디자인</span>
                                                                <span className="time">08h 45m</span>
                                                            </li>
                                                            <li>
                                                                <span className="name global">Global</span>
                                                                <span className="time">00h 00m</span>
                                                            </li>
                                                            <li>
                                                                <span className="name leader">Leadership</span>
                                                                <span className="time">00h 00m</span>
                                                            </li>
                                                            <li>
                                                                <span className="name manage">Management</span>
                                                                <span className="time">00h 00m</span>
                                                            </li>
                                                            <li>
                                                                <span className="name semi">미래반도체</span>
                                                                <span className="time">00h 00m</span>
                                                            </li>
                                                            <li>
                                                                <span className="name green">Green</span>
                                                                <span className="time">00h 00m</span>
                                                            </li>
                                                            <li>
                                                                <span className="name bm">BM Design &amp; Storytelling</span>
                                                                <span className="time">00h 00m</span>
                                                            </li>
                                                            <li>
                                                                <span className="name academy">SK아카데미</span>
                                                                <span className="time">00h 00m</span>
                                                            </li>
                                                            <li>
                                                                <span className="name skmanage">SK경영</span>
                                                                <span className="time">00h 00m</span>
                                                            </li>
                                                            <li>
                                                                <span className="name life">Life Style</span>
                                                                <span className="time">00h 00m</span>
                                                            </li>
                                                            <li>
                                                                <span className="name skinno">이노베이션계열 공통</span>
                                                                <span className="time">00h 00m</span>
                                                            </li>
                                                            <li>
                                                                <span className="name skcom">SK어스온</span>
                                                                <span className="time">00h 00m</span>
                                                            </li>
                                                        </>
                                                    )
                                                }


                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Content>
                    <Modal.Actions className="actions2">
                        <Button className='pop2 d' onClick={this.close}>Close</Button>
                    </Modal.Actions>
                </Modal>
            </>
        )
    }
}

export default ClassSeriesDetailModal;
