import React, { useState } from "react";
import { Button, Icon } from "semantic-ui-react";

const Note = (props) => {
    const {type} = props;
    const [Mode, setMode] = useState('');

    return(
        <div className="note_popup_v2">
            <div className="note_popup_head">
                <div className="note_popup_count">
                    <strong>작성한 노트</strong>
                    <strong className="count">3개</strong>
                </div>
                <div className="note_popup_cube_info">
                    <div className="note_cube_title">
                        <strong>CUBE명 [Why Green] 환경을 읽음 미래는 맑음 EP 01</strong>
                    </div>
                    <div className="note_cube_type">
                        {type === "Video" ? <span>Video</span> : <span>Webpage</span>}
                        <span>40m</span>
                    </div>
                </div>
                <div className="note_btn">
                {
                    Mode !== "edit" && 
                    <Button 
                        onClick={()=> setMode('edit')}
                        className="full btn_note_edit">
                        Note를 작성해 보세요.
                    </Button>
                }
                </div>
            </div>
            <div className="note_popup_body">
                <div className="note_list">
                    {/* 입력form */}
                    {
                        Mode === "edit" &&
                        <div className="note_form">
                            <div className="note_info">
                                {
                                    type === "video" ?
                                        <>
                                            <strong className="icon time">00:00:00</strong>
                                            {/* <Icon className="note_refresh"><span className="blind">Refresh</span></Icon> */}
                                            <Icon className="note_jump"><span className="blind">Jump</span></Icon>
                                        </>
                                    :   <strong className="icon note_pad">Note</strong>
                                }
                                <div className="edit_date">
                                    <span>2022년 11월 15일 작성</span>
                                    {/* <span>2022. 11.14 편집</span> */}
                                </div>
                            </div>
                            <div className="note_edit">
                                <textarea placeholder="Note 내용을 입력해주세요." />
                                <div className="form_count">
                                    {Mode === "modify" && <Icon className="note_trash"><span className="blind">Delete</span></Icon>}
                                    <strong>23</strong>
                                    <span>/100</span>
                                </div>
                            </div>
                            <div className="note_action">
                                <Button className="cancle" onClick={()=>setMode('')}>취소</Button>
                                <Button className="save">저장</Button>
                            </div>
                        </div>
                    }
                    {/* 입력form */}
                    {/* list item - time*/}
                    {
                        Mode === "modify" ?
                            <div className="note_form">
                                <div className="note_info">
                                    {
                                        type === "Video" ?
                                            <>
                                                <strong className="icon time">00:00:00</strong>
                                                {/* <Icon className="note_refresh"><span className="blind">Refresh</span></Icon> */}
                                                <Icon className="note_jump"><span className="blind">Jump</span></Icon>
                                            </>
                                        :   <strong className="icon note_pad">Note</strong>
                                    }
                                    <div className="edit_date">
                                        {/* <span>2022년 11월 15일 작성</span> */}
                                        <span>2022. 11.14 편집</span>
                                    </div>
                                </div>
                                <div className="note_edit">
                                    <textarea 
                                        placeholder="Note 내용을 입력해주세요." 
                                        value={`작성된 노트입니다. ~~~~~~~~  \n작성했습니다.`}
                                        />
                                    <div className="form_count">
                                        {Mode === "modify" && <Icon className="note_trash"><span className="blind">Delete</span></Icon>}
                                        <strong>23</strong>
                                        <span>/100</span>
                                    </div>
                                </div>
                                <div className="note_action">
                                    <Button className="cancle" onClick={()=>setMode('')}>취소</Button>
                                    <Button className="save">저장</Button>
                                </div>
                            </div>
                        :
                            <div 
                                onClick={()=>setMode('modify')}
                                className="note_list_item"
                            >
                                <div className="note_item_head">
                                    <strong className="label note_time">00:06:13</strong>
                                    <Icon className="note_jump"><span className="blind">Jump</span></Icon>
                                    {/* <Icon className="note_refresh"><span className="blind">Refresh</span></Icon> */}
                                    <span className="edit_date">2022.11.17 편집</span>
                                </div>
                                <div className="note_desc">
                                    <p>작성된 노트입니다. ~~~~~~~~  </p>
                                    <p>작성했습니다.</p>
                                </div>
                            </div>
                    }
                    <div className="note_list_item">
                        <div className="note_item_head">
                            <strong className="label note_time">00:03:09</strong>
                            <Icon className="note_jump"><span className="blind">Jump</span></Icon>
                            {/* <Icon className="note_refresh"><span className="blind">Refresh</span></Icon> */}
                            <span className="edit_date">2022.11.17 편집</span>
                        </div>
                        <div className="note_desc">
                            <p>작성된 노트입니다. ~~~~~~~~  </p>
                            <p>작성했습니다.</p>
                        </div>
                    </div>
                    <div className="note_list_item">
                        <div className="note_item_head">
                            <strong className="label note_pad">Note 1</strong>
                            <span className="edit_date">2022.11.17 편집</span>
                        </div>
                        <div className="note_desc">
                            <p>작성된 노트입니다.~~~~~~</p>
                            <p>작성했습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Note;