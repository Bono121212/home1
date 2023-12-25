import React from "react";
import { Accordion, Button, Icon, Image, Segment, Select, Form } from "semantic-ui-react";
import Nodata from "../../../images/all/icon-comment-nonenote-80-px.svg";
import Openchevron from "../../../images/all/icon-pboard-open.svg";
import { Link } from "react-router-dom";

const NoteSample = () => {
    return(
		<section className='content lms' style={{display : "block"}}>
			<div className="cube-info-detail type-ov type-cube" style={{margin: "20px 0"}}>
                <h2 style={{fontSize: "20px", fontWeight: "bold", color: "#aaa", margin : "20px 0"}}>[Video/Audio Note]</h2>
                <ul style={{display:"flex", flexWrap :"wrap"}}>
                    <li style={{flex : "none", margin : "0 15px"}}>
                        <h3 style={{fontSize: "16px", color : "#444", fontWeight : "bold" , marginBottom : "16px"}}>작성된 노트 없음</h3>
                        {/* !!!width : 420px, height : 530px!!! border, box-sizing은 제외*/}
                        <div style={{width:"420px", height:"530px", border : "1px solid #ddd", boxSizing : "content-box"}}>
                            {/* Note영역 */}
                            <div className="note_popup_v2">
                                <div className="note_popup_head">
                                    <div className="note_popup_count">
                                        <strong>작성한 노트</strong>
                                        <strong className="count">0개</strong>
                                    </div>
                                    <div className="note_popup_cube_info">
                                        <div className="note_cube_title">
                                            <strong>CUBE명 [Why Green] 환경을 읽음 미래는 맑음 EP 01</strong>
                                        </div>
                                        <div className="note_cube_type">
                                            <span>Video</span>
                                            <span>40m</span>
                                        </div>
                                    </div>
                                    <div className="note_btn">
                                        <Button className="full btn_note_edit">Note를 작성해 보세요.</Button>
                                    </div>
                                </div>
                                <div className="note_popup_body">
                                    <div className="note_list">
                                        <div className="note_nodata">
                                            <Image src={Nodata}/>
                                            <p className="txt">
                                                <strong>작성된 노트가 없습니다.</strong>
                                                <span>학습 내용을 기록해보세요!</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Note영역 */}
                        </div>
                    </li>
                    <li style={{flex : "none", margin : "0 15px"}}>
                        <h3 style={{fontSize: "16px", color : "#444", fontWeight : "bold" , marginBottom : "16px"}}>작성된 노트 있음</h3>
                        {/* !!!width : 420px, height : 530px!!! border, box-sizing은 제외*/}
                        <div style={{width:"420px", height:"530px", border : "1px solid #ddd", boxSizing : "content-box"}}>
                            {/* Note영역 */}
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
                                            <span>Video</span>
                                            <span>40m</span>
                                        </div>
                                    </div>
                                    <div className="note_btn">
                                        <Button className="full btn_note_edit">Note를 작성해 보세요.</Button>
                                    </div>
                                </div>
                                <div className="note_popup_body">
                                    <div className="note_list">
                                        {/* list item - time*/}
                                        <div className="note_list_item">
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
                                        {/* list item */}
                                        {/* list item - time*/}
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
                                        {/* list item */}
                                        {/* list item - note*/}
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
                                        {/* list item */}

                                    </div>
                                </div>
                            </div>
                            {/* Note영역 */}
                        </div>
                    </li>
                    <li style={{flex : "none", margin : "0 15px"}}>
                        <h3 style={{fontSize: "16px", color : "#444", fontWeight : "bold" , marginBottom : "16px"}}>노트 편집시</h3>
                        {/* !!!width : 420px, height : 530px!!! border, box-sizing은 제외*/}
                        <div style={{width:"420px", height:"530px", border : "1px solid #ddd", boxSizing : "content-box"}}>
                            {/* Note영역 */}
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
                                            <span>Video</span>
                                            <span>40m</span>
                                        </div>
                                    </div>
                                    <div className="note_btn">
                                        <Button className="full btn_note_edit">Note를 작성해 보세요.</Button>
                                    </div>
                                </div>
                                <div className="note_popup_body">
                                    <div className="note_list">
                                        {/* 입력form */}
                                        <div className="note_form">
                                            <div className="note_info">
                                                <strong className="icon time">00:00:00</strong>
                                                {/* <strong className="icon note_pad">Note</strong> */}
                                                {/* <Icon className="note_refresh"><span className="blind">Refresh</span></Icon> */}
                                                <Icon className="note_jump"><span className="blind">Jump</span></Icon>
                                                <div className="edit_date">
                                                    {/* <span>2022년 11월 15일 작성</span> */}
                                                    <span>2022. 11.14 편집</span>
                                                </div>
                                            </div>
                                            <div className="note_edit">
                                                <textarea placeholder="Note 내용을 입력해주세요." />
                                                <div className="form_count">
                                                    <Icon className="note_trash"><span className="blind">Delete</span></Icon>
                                                    <strong>23</strong>
                                                    <span>/100</span>
                                                </div>
                                            </div>
                                            <div className="note_action">
                                                <Button className="cancle">취소</Button>
                                                <Button className="save">저장</Button>
                                            </div>
                                        </div>
                                        {/* 입력form */}

                                        {/* list item - time*/}
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
                                        {/* list item */}
                                        {/* list item - note*/}
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
                                        {/* list item */}

                                    </div>
                                </div>
                            </div>
                            {/* Note영역 */}
                        </div>
                    </li>
                    <li style={{flex : "none", margin : "0 15px"}}>
                        <h3 style={{fontSize: "16px", color : "#444", fontWeight : "bold" , marginBottom : "16px"}}>노트 작성시</h3>
                        {/* !!!width : 420px, height : 530px!!! border, box-sizing은 제외*/}
                        <div style={{width:"420px", height:"530px", border : "1px solid #ddd", boxSizing : "content-box"}}>
                            {/* Note영역 */}
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
                                            <span>Video</span>
                                            <span>40m</span>
                                        </div>
                                    </div>{/* 
                                    <div className="note_btn">
                                        <Button className="full btn_note_edit">Note를 작성해 보세요.</Button>
                                    </div> */}
                                </div>
                                <div className="note_popup_body">
                                    <div className="note_list">
                                        {/* 입력form */}
                                        <div className="note_form">
                                            <div className="note_info">
                                                <strong className="icon time">00:00:00</strong>
                                                {/* <strong className="icon note_pad">Note</strong> */}
                                                <Icon className="note_refresh"><span className="blind">Refresh</span></Icon>
                                                {/* <Icon className="note_jump"><span className="blind">Jump</span></Icon> */}
                                                <div className="edit_date">
                                                    <span>2022년 11월 15일 작성</span>
                                                    {/* <span>2022. 11.14 편집</span> */}
                                                </div>
                                            </div>
                                            <div className="note_edit">
                                                <textarea placeholder="Note 내용을 입력해주세요." />
                                                <div className="form_count">
                                                    {/* <Icon className="note_trash"><span className="blind">Delete</span></Icon> */}
                                                    <strong>23</strong>
                                                    <span>/100</span>
                                                </div>
                                            </div>
                                            <div className="note_action">
                                                <Button className="cancle">취소</Button>
                                                <Button className="save">저장</Button>
                                            </div>
                                        </div>
                                        {/* 입력form */}

                                        {/* list item - time*/}
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
                                        {/* list item */}
                                        {/* list item - note*/}
                                        <div className="note_list_item">
                                            <div className="note_item_head">
                                                <strong className="label note_pad">Note 2</strong>
                                                <span className="edit_date">2022.11.17 편집</span>
                                            </div>
                                            <div className="note_desc">
                                                <p>작성된 노트입니다.~~~~~~</p>
                                                <p>작성했습니다.</p>
                                            </div>
                                        </div>
                                        {/* list item */}
                                        {/* list item - note*/}
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
                                        {/* list item */}

                                    </div>
                                </div>
                            </div>
                            {/* Note영역 */}
                        </div>
                    </li>
                </ul>
                <hr/>
                <h2 style={{fontSize: "20px", fontWeight: "bold", color: "#aaa", margin : "20px 0"}}>[그외 Note]</h2>
                <ul style={{display:"flex", flexWrap :"wrap"}}>
                    <li style={{flex : "none", margin : "0 15px"}}>
                        <h3 style={{fontSize: "16px", color : "#444", fontWeight : "bold" , marginBottom : "16px"}}>작성된 노트 없음</h3>
                        {/* !!!width : 420px, height : 530px!!! border, box-sizing은 제외*/}
                        <div style={{width:"420px", height:"530px", border : "1px solid #ddd", boxSizing : "content-box"}}>
                            {/* Note영역 */}
                            <div className="note_popup_v2">
                                <div className="note_popup_head">
                                    <div className="note_popup_count">
                                        <strong>작성한 노트</strong>
                                        <strong className="count">0개</strong>
                                    </div>
                                    <div className="note_popup_cube_info">
                                        <div className="note_cube_title">
                                            <strong>CUBE명 [Why Green] 환경을 읽음 미래는 맑음 EP 01</strong>
                                        </div>
                                        <div className="note_cube_type">
                                            <span>Webpage</span>
                                            <span>40m</span>
                                        </div>
                                    </div>
                                    <div className="note_btn">
                                        <Button className="full btn_note_edit">Note를 작성해 보세요.</Button>
                                    </div>
                                </div>
                                <div className="note_popup_body">
                                    <div className="note_list">
                                        <div className="note_nodata">
                                            <Icon><Image src={Nodata}/></Icon>
                                            <p className="txt">
                                                <strong>작성된 노트가 없습니다.</strong>
                                                <span>학습 내용을 기록해보세요!</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Note영역 */}
                        </div>
                    </li>
                    <li style={{flex : "none", margin : "0 15px"}}>
                        <h3 style={{fontSize: "16px", color : "#444", fontWeight : "bold" , marginBottom : "16px"}}>작성된 노트 있음</h3>
                        {/* !!!width : 420px, height : 530px!!! border, box-sizing은 제외*/}
                        <div style={{width:"420px", height:"530px", border : "1px solid #ddd", boxSizing : "content-box"}}>
                            {/* Note영역 */}
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
                                            <span>Webpage</span>
                                            <span>40m</span>
                                        </div>
                                    </div>
                                    <div className="note_btn">
                                        <Button className="full btn_note_edit">Note를 작성해 보세요.</Button>
                                    </div>
                                </div>
                                <div className="note_popup_body">
                                    <div className="note_list">
                                        {/* list item - note*/}
                                        <div className="note_list_item">
                                            <div className="note_item_head">
                                                <strong className="label note_pad">Note 3</strong>
                                                {/* <strong className="label note_time">00:06:13</strong>
                                                <Icon className="note_jump"><span className="blind">Jump</span></Icon>
                                                <Icon className="note_refresh"><span className="blind">Refresh</span></Icon> */}
                                                <span className="edit_date">2022.11.17 편집</span>
                                            </div>
                                            <div className="note_desc">
                                                <p>작성된 노트입니다. ~~~~~~~~  </p>
                                                <p>작성했습니다.</p>
                                            </div>
                                        </div>
                                        {/* list item */}
                                        {/* list item - note*/}
                                        <div className="note_list_item">
                                            <div className="note_item_head">
                                                <strong className="label note_pad">Note 2</strong>
                                                {/* <strong className="label note_time">00:06:13</strong>
                                                <Icon className="note_jump"><span className="blind">Jump</span></Icon>
                                                <Icon className="note_refresh"><span className="blind">Refresh</span></Icon> */}
                                                <span className="edit_date">2022.11.17 편집</span>
                                            </div>
                                            <div className="note_desc">
                                                <p>작성된 노트입니다. ~~~~~~~~  </p>
                                                <p>작성했습니다.</p>
                                            </div>
                                        </div>
                                        {/* list item */}
                                        {/* list item - note*/}
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
                                        {/* list item */}

                                    </div>
                                </div>
                            </div>
                            {/* Note영역 */}
                        </div>
                    </li>
                    <li style={{flex : "none", margin : "0 15px"}}>
                        <h3 style={{fontSize: "16px", color : "#444", fontWeight : "bold" , marginBottom : "16px"}}>노트 편집시</h3>
                        {/* !!!width : 420px, height : 530px!!! border, box-sizing은 제외*/}
                        <div style={{width:"420px", height:"530px", border : "1px solid #ddd", boxSizing : "content-box"}}>
                            {/* Note영역 */}
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
                                            <span>Webpage</span>
                                            <span>40m</span>
                                        </div>
                                    </div>
                                    <div className="note_btn">
                                        <Button className="full btn_note_edit">Note를 작성해 보세요.</Button>
                                    </div>
                                </div>
                                <div className="note_popup_body">
                                    <div className="note_list">
                                        {/* 입력form */}
                                        <div className="note_form">
                                            <div className="note_info">
                                               {/*  <strong className="icon time">00:00:00</strong> */}
                                                <strong className="icon note_pad">Note 3</strong>
                                               {/*  <Icon className="note_refresh"><span className="blind">Refresh</span></Icon>
                                                <Icon className="note_jump"><span className="blind">Jump</span></Icon> */}
                                                <div className="edit_date">
                                                    {/* <span>2022년 11월 15일 작성</span> */}
                                                    <span>2022. 11.14 편집</span>
                                                </div>
                                            </div>
                                            <div className="note_edit">
                                                <textarea placeholder="Note 내용을 입력해주세요." />
                                                <div className="form_count">
                                                    <Icon className="note_trash"><span className="blind">Delete</span></Icon>
                                                    <strong>23</strong>
                                                    <span>/100</span>
                                                </div>
                                            </div>
                                            <div className="note_action">
                                                <Button className="cancle">취소</Button>
                                                <Button className="save">저장</Button>
                                            </div>
                                        </div>
                                        {/* 입력form */}

                                        {/* list item - note*/}
                                        <div className="note_list_item">
                                            <div className="note_item_head">
                                                <strong className="label note_pad">Note 2</strong>
                                                {/* <strong className="label note_time">00:03:09</strong>
                                                <Icon className="note_jump"><span className="blind">Jump</span></Icon>
                                                <Icon className="note_refresh"><span className="blind">Refresh</span></Icon> */}
                                                <span className="edit_date">2022.11.17 편집</span>
                                            </div>
                                            <div className="note_desc">
                                                <p>작성된 노트입니다. ~~~~~~~~  </p>
                                                <p>작성했습니다.</p>
                                            </div>
                                        </div>
                                        {/* list item */}
                                        {/* list item - note*/}
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
                                        {/* list item */}

                                    </div>
                                </div>
                            </div>
                            {/* Note영역 */}
                        </div>
                    </li>
                    <li style={{flex : "none", margin : "0 15px"}}>
                        <h3 style={{fontSize: "16px", color : "#444", fontWeight : "bold" , marginBottom : "16px"}}>노트 작성시</h3>
                        {/* !!!width : 420px, height : 530px!!! border, box-sizing은 제외*/}
                        <div style={{width:"420px", height:"530px", border : "1px solid #ddd", boxSizing : "content-box"}}>
                            {/* Note영역 */}
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
                                            <span>Webpage</span>
                                            <span>40m</span>
                                        </div>
                                    </div>{/* 
                                    <div className="note_btn">
                                        <Button className="full btn_note_edit">Note를 작성해 보세요.</Button>
                                    </div> */}
                                </div>
                                <div className="note_popup_body">
                                    <div className="note_list">
                                        {/* 입력form */}
                                        <div className="note_form">
                                            <div className="note_info">
                                                <strong className="icon note_pad">Note</strong>
                                                {/* <strong className="icon time">00:00:00</strong>
                                                <Icon className="note_refresh"><span className="blind">Refresh</span></Icon>
                                                <Icon className="note_jump"><span className="blind">Jump</span></Icon> */}
                                                <div className="edit_date">
                                                    <span>2022년 11월 15일 작성</span>
                                                    {/* <span>2022. 11.14 편집</span> */}
                                                </div>
                                            </div>
                                            <div className="note_edit">
                                                <textarea placeholder="Note 내용을 입력해주세요." />
                                                <div className="form_count">
                                                    {/* <Icon className="note_trash"><span className="blind">Delete</span></Icon> */}
                                                    <strong>23</strong>
                                                    <span>/100</span>
                                                </div>
                                            </div>
                                            <div className="note_action">
                                                <Button className="cancle">취소</Button>
                                                <Button className="save">저장</Button>
                                            </div>
                                        </div>
                                        {/* 입력form */}

                                        {/* list item - note*/}
                                        <div className="note_list_item">
                                            <div className="note_item_head">
                                                <strong className="label note_pad">Note 3</strong>
                                                {/* <strong className="label note_time">00:03:09</strong>
                                                <Icon className="note_jump"><span className="blind">Jump</span></Icon>
                                                <Icon className="note_refresh"><span className="blind">Refresh</span></Icon> */}
                                                <span className="edit_date">2022.11.17 편집</span>
                                            </div>
                                            <div className="note_desc">
                                                <p>작성된 노트입니다. ~~~~~~~~  </p>
                                                <p>작성했습니다.</p>
                                            </div>
                                        </div>
                                        {/* list item */}
                                        {/* list item - note*/}
                                        <div className="note_list_item">
                                            <div className="note_item_head">
                                                <strong className="label note_pad">Note 2</strong>
                                                <span className="edit_date">2022.11.17 편집</span>
                                            </div>
                                            <div className="note_desc">
                                                <p>작성된 노트입니다.~~~~~~</p>
                                                <p>작성했습니다.</p>
                                            </div>
                                        </div>
                                        {/* list item */}
                                        {/* list item - note*/}
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
                                        {/* list item */}

                                    </div>
                                </div>
                            </div>
                            {/* Note영역 */}
                        </div>
                    </li>
                </ul>
            </div>
            <Segment style={{width : "1200px", margin :"0 auto"}}>
                <h2 style={{fontSize: "20px", fontWeight: "bold", color: "#aaa", margin : "20px 0"}}>MYPage &gt; NOTE / note_info,  삭제버튼만 다름</h2>
                
                <div className="note_area">
                    <div className="note_title">
                        <div className="tit">
                            <div className={`ui label red`}>혁신디자인</div>
                            <strong className="header">Customer Story를 소개합니다! (방송인 박경림과 함께 합니다.)</strong>
                            <Link
                                className="time"
                                to="/"
                            >
                                <p>[제작발표회] 왜 Customer Story인가! (방송인 박경림과 함께 합니다.)</p>
                            </Link>
                        </div>

                        <div className="option_box">
                        <Select
                            placeholder="폴더 미지정"
                            options={[{
                                key : 0,
                                text : "폴더이름 1"
                            }, {
                                key : 1,
                                text : "폴더이름 2"
                            }]}
                        />
                        </div>
                    </div>
                    <Accordion>
                        <Accordion.Title
                        className="active"
                        >
                        <Image src={Openchevron} alt="더보기" />
                        </Accordion.Title>
                        <Accordion.Content
                            className="active"
                        >
                            <div className="note_content">
                                <div className="note_content_total">
                                    <strong className="txt">작성한 노트</strong><span className="cnt"> 2개</span>
                                    <Button className="btn_write active">
                                        <Icon />
                                        <span>Note</span>
                                    </Button>
                                </div>
                                <div className="mynote mynote_write">
                                    <div className="note_info">
                                        <span className="date">YYYY년 MM월 DD일 작성</span>
                                    </div>
                                    <Form>
                                        <textarea
                                            placeholder={'Note 내용을 입력해주세요.'}
                                        />
                                    </Form>
                                    <div className="note_btn">
                                        <Button className="cancel">취소</Button>
                                        <Button className="save">저장</Button>
                                        <span className="txt_cnt">
                                            <span className="txt_now">0</span>
                                            /<span>1000</span>
                                        </span>
                                    </div>
                                </div>
                                <div className='mynote '>
                                    <div className="note_info">
                                        <strong class="label note_pad">Note 1</strong>
                                        <Icon className="note_jump"><span className="blind">Jump</span></Icon>
                                        <span className="date">2021년 5월 4일 작성</span>
                                    </div>
                                    <p className="note">
                                        <p>노트 작성 내용</p>
                                        <p>노트 작성 내용</p>
                                        <p>노트 작성 내용</p>
                                    </p>
                                </div>
                                <div className='mynote '>
                                    <div className="note_info">
                                        <strong class="label note_time">00:08:37</strong>
                                        <Icon className="note_jump"><span className="blind">Jump</span></Icon>
                                        <span className="date">2021년 5월 4일 작성</span>
                                    </div>
                                    <p className="note">
                                        <p>노트 작성 내용</p>
                                        <p>노트 작성 내용</p>
                                        <p>노트 작성 내용</p>
                                    </p>
                                </div>
                            </div>
                        </Accordion.Content>
                    </Accordion>
                    <Accordion>
                        <Accordion.Title
                        className="active"
                        >
                        <Image src={Openchevron} alt="더보기" />
                        </Accordion.Title>
                        <Accordion.Content
                            className="active"
                        >
                            <div className="note_content">
                                <div className="note_content_total">
                                    <strong className="txt">작성한 노트</strong><span className="cnt"> 2개</span>
                                    <Button className="btn_write">
                                        <Icon />
                                        <span>Note</span>
                                    </Button>
                                </div>
                                <div className='mynote '>
                                    <div className="note_info">
                                    {/* note_info변경 */}
                                        <strong class="label note_pad">Note 1</strong>
                                        <Icon className="note_jump"><span className="blind">Jump</span></Icon>
                                    {/* note_info변경 */}
                                        <span className="date">2021년 5월 4일 작성</span>
                                    </div>
                                    <p className="note">
                                        <p>노트 작성 내용</p>
                                        <p>노트 작성 내용</p>
                                        <p>노트 작성 내용</p>
                                    </p>
                                </div>
                                <div className="mynote mynote_write">
                                    <div className="note_info">
                                        <strong class="label note_time">00:08:37</strong>
                                        <Icon className="note_jump"><span className="blind">Jump</span></Icon>
                                        <span className="date">YYYY년 MM월 DD일 편집</span>
                                    </div>
                                    <Form>
                                        <textarea
                                            placeholder={'Note 내용을 입력해주세요.'}
                                            value={`기존의 note 편집하는 화면`}
                                        />
                                    </Form>
                                    <div className="note_btn">
                                        {/* 삭제버튼 변경 */}
                                        <Button icon className="delete">
                                            <Icon className="note_trash"/><span className="blind">Delete</span>
                                        </Button>
                                        {/* 삭제버튼 변경 */}

                                        <Button className="cancel">취소</Button>
                                        <Button className="save">저장</Button>
                                        <span className="txt_cnt">
                                            <span className="txt_now">0</span>
                                            /<span>1000</span>
                                        </span>
                                    </div>
                                </div>
                                <div className='mynote '>
                                    <div className="note_info">
                                        <strong class="label note_time">00:08:37</strong>
                                        <Icon className="note_jump"><span className="blind">Jump</span></Icon>
                                        <span className="date">2021년 5월 4일 작성</span>
                                    </div>
                                    <p className="note">
                                        <p>노트 작성 내용</p>
                                        <p>노트 작성 내용</p>
                                        <p>노트 작성 내용</p>
                                    </p>
                                </div>
                            </div>
                        </Accordion.Content>
                    </Accordion>
                </div>
            </Segment>
        </section>
    )
}

export default NoteSample