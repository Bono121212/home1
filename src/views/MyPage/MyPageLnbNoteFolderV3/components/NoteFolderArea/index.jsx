import React, {Component} from 'react';
import { Button, Icon} from 'semantic-ui-react';

class NoteFolderArea extends Component {
    
    render() {
        return (
            <div>
                {/* 생성된 폴더가 하나도 없을때 */}
                <div className="folder_area">
                    <div className="folder_inner">
                        <div className="folder_new"><Button>+ 새폴더</Button></div>
                        <div className="folder_box">
                            <p>폴더를 생성하여 등록된 노트를 관리할 수 있습니다.</p>
                        </div>
                    </div>
                    <Button className="toggle_f"><Icon /></Button>
                </div>
                <p className="txt1"><Icon />학습 내용이나 목표에 따라 나의 노트를 정리해 보세요.</p>



                {/* 폴더 접었을때 */}
                <div className="folder_area">
                    <div className="folder_inner">
                        <div className="folder_new"><Button>+ 새폴더</Button></div>
                        <div className="folder_box">
                            <ul>
                                {/* li에 moveActive 클래스가 추가되면 폴더이동 활성화 됨 */}
                                <li>
                                    <Button className="folder">2021 노하우 아카이빙</Button>
                                    <Button className="setting"><Icon /></Button>
                                    <Button className="left"><Icon /></Button>
                                    <Button className="right"><Icon /></Button>  
                                </li>
                                <li>
                                    <Button className="folder">시험대비 벼락치기 폴더</Button>
                                    <Button className="setting"><Icon /></Button>
                                    <Button className="left"><Icon /></Button>
                                    <Button className="right"><Icon /></Button>   
                                </li>
                                <li>
                                    <Button className="folder">공부왕 김천재</Button>
                                    <Button className="setting"><Icon /></Button>
                                    <Button className="left"><Icon /></Button>
                                    <Button className="right"><Icon /></Button>  
                                </li>
                                <li><Button className="folder">직박구리</Button></li>
                                <li><Button className="folder">신입일때 힘들게 기록한 소중한 공부자료</Button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="folder_btn">
                        <Button className="cancel">취소</Button>
                        <Button className="save">저장</Button>
                    </div>
                    <Button className="toggle_f"><Icon /></Button>
                </div>
                <p className="txt1"><Icon />학습 내용이나 목표에 따라 나의 노트를 정리해 보세요.</p>



                {/* 폴더 펼쳤을때 folder_area 에 open 클래스 추가 */}
                {/* 폴더 설정 누르기 전 */}
                <div className="folder_area open">
                    <div className="folder_inner">
                        <div className="folder_new"><Button>+ 새폴더</Button></div>
                        <div className="folder_box">
                            <ul>
                                {/* li에 moveActive 클래스가 추가되면 폴더이동 활성화 됨 */}
                                <li>
                                    <Button className="folder">2021 노하우 아카이빙</Button>
                                    <Button className="setting"><Icon /></Button>
                                    <Button className="left"><Icon /></Button>
                                    <Button className="right"><Icon /></Button>  
                                </li>
                                <li className="setActive">
                                    <Button className="folder">시험대비 벼락치기 폴더</Button>
                                    <Button className="setting"><Icon /></Button>
                                    <Button className="left"><Icon /></Button>
                                    <Button className="right"><Icon /></Button>  
                                </li>
                                <li>
                                    <Button className="folder">공부왕 김천재</Button>
                                    <Button className="setting"><Icon /></Button>
                                    <Button className="left"><Icon /></Button>
                                    <Button className="right"><Icon /></Button>  
                                </li>
                                <li><Button className="folder">직박구리</Button></li>
                                <li><Button className="folder">신입일때 힘들게 기록한 소중한 공부자료</Button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="folder_btn">
                        <Button className="cancel">취소</Button>
                        <Button className="save">저장</Button>
                    </div>
                    <Button className="toggle_f open"><Icon /></Button>
                </div>
                <p className="txt1"><Icon />학습 내용이나 목표에 따라 나의 노트를 정리해 보세요.</p>



                {/* 폴더 펼쳤을때 folder_area 에 open 클래스 추가 */}
                {/* 폴더 설정 누른 후  : 순서 이동 할때 */}
                <div className="folder_area open">
                    {/* folder_inner 에 moveOn 클래스 유무에 따라 [+새폴더] 및 [그외폴더] 의 색상이 변경됨 */}
                    <div className="folder_inner moveOn">
                        <div className="folder_new"><Button>+ 새폴더</Button></div>
                        <div className="folder_box">
                            <ul>
                                {/* li에 moveActive 클래스가 추가되면 폴더이동 활성화 됨 */}
                                <li>
                                    <Button className="folder">2021 노하우 아카이빙</Button>
                                    <Button className="setting"><Icon /></Button>
                                    <Button className="left"><Icon /></Button>
                                    <Button className="right"><Icon /></Button>   
                                </li>
                                <li className="moveActive">
                                    <Button className="folder">시험대비 벼락치기 폴더</Button>
                                    <Button className="setting"><Icon /></Button>
                                    <Button className="left"><Icon /></Button>
                                    <Button className="right"><Icon /></Button>   
                                </li>
                                <li>
                                    <Button className="folder">공부왕 김천재</Button>
                                    <Button className="setting"><Icon /></Button>
                                    <Button className="left"><Icon /></Button>
                                    <Button className="right"><Icon /></Button>   
                                </li>
                                <li><Button className="folder">직박구리</Button></li>
                                <li><Button className="folder">신입일때 힘들게 기록한 소중한 공부자료</Button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="folder_btn">
                        <Button className="cancel">취소</Button>
                        <Button className="save">저장</Button>
                    </div>
                    <Button className="toggle_f open"><Icon /></Button>
                </div>
                <p className="txt1"><Icon />학습 내용이나 목표에 따라 나의 노트를 정리해 보세요.</p>
                
            </div>
        )
    }
}


export default NoteFolderArea
