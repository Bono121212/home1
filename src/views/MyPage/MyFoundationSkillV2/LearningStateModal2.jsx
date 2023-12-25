import React, {Component} from 'react'
import { Button, Modal } from 'semantic-ui-react'
import MyFSCard from './components/MyFSCard/index';
import MyFSCube from './components/MyFSCube';

class LearningStateModal2 extends Component {
    state = {open: true};
    show = size => () => this.setState({size, open: true});
    close = () => this.setState({open: false, isOpen : false});

    handleChange = (e, {value}) => this.setState({value});

    render() {
        const {open, size} = this.state;

        return (
            <Modal size={size} open={open} onClose={this.close} className='base learning_state_popup'>
                <Modal.Header>
                    학습현황
                </Modal.Header>
                <Modal.Content className="learning_state_content">
                    <div className="learning_state_head">
                        <div className="my_fs_blue">
                            <MyFSCard
                                typeClass="type_1"
                                src="https://image.mysuni.sk.com/suni-asset/public/images/all/skill-v2/thumb_fs_sample02.png"
                                title="Business Capability"
                                subject="미래 경영환경을 ‘나의 업무'에 반영하기"
                                // ribon="필요역량"
                                // time="2h 30m"
                                badgeClass="orange"
                                badgeName="Future Biz. Perspective"
                                badgeCount={0}
                                percent={100}
                            />
                        </div>
                    </div>
                    <div className="learning_state_body">
                        <div className="my_fs_cube_list">
                            {/* 22-09-29 수정 문구변경 */}
                            <MyFSCube
                                stateClass="learn"
                                stateText="cube 학습전"
                                title="미래 경영환경을 '나의 업무'에 반영하기"
                                countTotal="25"
                                countNow="24"
                            />
                            <MyFSCube
                                stateClass="learning"
                                stateText="cube 학습중"
                                title="Biz 가치를 창출하는 고객경험디자인 Skill Biz 가치를 창출하는 고객경험디자인 Skill"
                                countTotal="30"
                                countNow="24"
                            />
                            <MyFSCube
                                stateClass="learned"
                                stateText="cube 학습완료"
                                title="도전! 가치창출을 위한 새로운 비즈니스 모델 만들기"
                                countTotal="24"
                                countNow="24"
                            />
                            <MyFSCube
                                stateClass="learn"
                                stateText="cube 학습전"
                                title="미래 경영환경을 '나의 업무'에 반영하기"
                                countTotal="25"
                                countNow="24"
                            />
                            <MyFSCube
                                stateClass="learning"
                                stateText="cube 학습중"
                                title="Biz 가치를 창출하는 고객경험디자인 Skill"
                                countTotal="30"
                                countNow="24"
                            />
                            <MyFSCube
                                stateClass="learned"
                                stateText="cube 학습완료"
                                title="도전! 가치창출을 위한 새로운 비즈니스 모델 만들기"
                                countTotal="24"
                                countNow="24"
                            />
                            <MyFSCube
                                stateClass="learn"
                                stateText="cube 학습전"
                                title="미래 경영환경을 '나의 업무'에 반영하기"
                                countTotal="25"
                                countNow="24"
                            />
                            <MyFSCube
                                stateClass="learning"
                                stateText="cube 학습중"
                                title="Biz 가치를 창출하는 고객경험디자인 Skill"
                                countTotal="30"
                                countNow="24"
                            />
                            <MyFSCube
                                stateClass="learned"
                                stateText="cube 학습완료"
                                title="도전! 가치창출을 위한 새로운 비즈니스 모델 만들기"
                                countTotal="24"
                                countNow="24"
                            />
                            <MyFSCube
                                stateClass="learn"
                                stateText="cube 학습전"
                                title="미래 경영환경을 '나의 업무'에 반영하기"
                                countTotal="25"
                                countNow="24"
                            />
                            <MyFSCube
                                stateClass="learning"
                                stateText="cube 학습중"
                                title="Biz 가치를 창출하는 고객경험디자인 Skill"
                                countTotal="30"
                                countNow="24"
                            />
                            <MyFSCube
                                stateClass="learned"
                                stateText="cube 학습완료"
                                title="도전! 가치창출을 위한 새로운 비즈니스 모델 만들기"
                                countTotal="24"
                                countNow="24"
                            />
                            <MyFSCube
                                stateClass="learn"
                                stateText="cube 학습전"
                                title="미래 경영환경을 '나의 업무'에 반영하기"
                                countTotal="25"
                                countNow="24"
                            />
                            <MyFSCube
                                stateClass="learning"
                                stateText="cube 학습중"
                                title="Biz 가치를 창출하는 고객경험디자인 Skill"
                                countTotal="30"
                                countNow="24"
                            />
                            <MyFSCube
                                stateClass="learned"
                                stateText="cube 학습완료"
                                title="도전! 가치창출을 위한 새로운 비즈니스 모델 만들기"
                                countTotal="24"
                                countNow="24"
                            />
                            <MyFSCube
                                stateClass="learn"
                                stateText="cube 학습전"
                                title="미래 경영환경을 '나의 업무'에 반영하기"
                                countTotal="25"
                                countNow="24"
                            />
                            <MyFSCube
                                stateClass="learning"
                                stateText="cube 학습중"
                                title="Biz 가치를 창출하는 고객경험디자인 Skill"
                                countTotal="30"
                                countNow="24"
                            />
                            <MyFSCube
                                stateClass="learned"
                                stateText="cube 학습완료"
                                title="도전! 가치창출을 위한 새로운 비즈니스 모델 만들기"
                                countTotal="24"
                                countNow="24"
                            />
                            <MyFSCube
                                stateClass="learn"
                                stateText="cube 학습전"
                                title="미래 경영환경을 '나의 업무'에 반영하기"
                                countTotal="25"
                                countNow="24"
                            />
                            <MyFSCube
                                stateClass="learning"
                                stateText="cube 학습중"
                                title="Biz 가치를 창출하는 고객경험디자인 Skill"
                                countTotal="30"
                                countNow="24"
                            />
                            <MyFSCube
                                stateClass="learned"
                                stateText="cube 학습완료"
                                title="도전! 가치창출을 위한 새로운 비즈니스 모델 만들기"
                                countTotal="24"
                                countNow="24"
                            />
                            <MyFSCube
                                stateClass="learn"
                                stateText="cube 학습전"
                                title="미래 경영환경을 '나의 업무'에 반영하기"
                                countTotal="25"
                                countNow="24"
                            />
                            <MyFSCube
                                stateClass="learning"
                                stateText="cube 학습중"
                                title="Biz 가치를 창출하는 고객경험디자인 Skill"
                                countTotal="30"
                                countNow="24"
                            />
                            <MyFSCube
                                stateClass="learned"
                                stateText="cube 학습완료"
                                title="도전! 가치창출을 위한 새로운 비즈니스 모델 만들기"
                                countTotal="24"
                                countNow="24"
                            />
                        </div>
                    </div>
                </Modal.Content>
                <Modal.Actions className="actions2">
                    <Button className='pop2 d' onClick={this.close}>닫기</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default LearningStateModal2;
