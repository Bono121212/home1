import React, { Component } from 'react';
import { Form, Icon, Modal, ModalActions, Button, Checkbox } from 'semantic-ui-react';
import '../style.css';


class CreatePlayListPopup extends Component {
    state = {isOpen :true,focus: false, write : '2nd Tuesday 애자일 Meetup_내외부 사례는'} 
    close = () =>{this.setState({isOpen : false})}

    render(){
        const {isOpen} = this.state;
        

        return(
            <Modal
                open={isOpen}
                close={this.close}
                className='base w600 pl-create'
                >
                    <Modal.Header className="res xfl">
                        Playlist 만들기
                        <Button className='close24' onClick={this.close} ><Icon className='close24'/></Button>
                    </Modal.Header>
                    <Modal.Content>
                        <div className='inner'>
                            <Form className='create-form'>
                                <div className='form-tit'>Playlist 명<Icon className='essential'/></div>
                                <div className='ui right-top-count input error'>
                                    <span className="count"><span className="now">30</span>/<span className="max">30</span></span>
                                    <input 
                                        placeholder='Playlist 명을 입력해 주세요. ' 
                                        type='text'
                                        value={this.state.write}
                                        onClick={() => this.setState({ focus: true })} onBlur={() => this.setState({ focus: false})}/>
                                    <span className='validation'>최대 30자까지 입력 가능합니다.</span>
                                </div>
                            </Form>
                            <Form className='create-form'>
                                <div className='form-tit'>Playlist 소개 글</div>
                                <div className="ui right-top-count input error">
                                    <span className="count"><span className="now">200</span>/<span
                                        className="max">200</span></span>
                                    <textarea placeholder="소개 글을 입력해 주세요." value={`2021년 2nd Tuesday Meetup에서,
삼성SDS 신황규 코치, 카카오 이호정 코치, LINE 김유진 코치, 컨그루언트애자일 조승빈 코치, 워커힐 이수정 PM, SKC&C 이재훈 코치, SK네트웍스 구매팀 조연호 매니저와 함께 한 것이 맞다라고 생각하는데 일이삼사오륙칠팔구십일이삼사오륙칠팔구십 일이삼사오륙칠팔구십 일이삼사오륙칠팔구십일이삼사오륙칠팔구`}/>
                                    <span className='validation'>최대 200자까지 입력 가능합니다.</span>
                                </div>
                            </Form>
                            <div className="cr-check">
                                <Checkbox label="Playlist를 프로필카드에 노출합니다." className='base'/>
                            </div>
                        </div>
                    </Modal.Content>
                    <ModalActions>                        
                        <Button className='w190 pop p'>저장</Button>
                        {/* 기존 playlist수정하는 경우 */}
                        {/* <Button className='w190 pop p'>수정</Button> */}
                    </ModalActions>
            </Modal>
        )
    }
}

export default CreatePlayListPopup