import React from 'react'
import previewImg from "../../../../../images/all/preview-img.png";
import {
    Radio,
    Checkbox
  } from "semantic-ui-react";
import { Link } from 'react-router-dom';



const ContentRadio = () => {
    return (
    <div className="course-survey-list">
            <div className="checkbox-wrap">
                <Checkbox
                    className='base'
                    label='스티브 잡스의 PT와 같은 핵심만 간결한 기획서'
                    name='radioGroup'
                    value='newest'
                    defaultChecked
                />
                <Link className="quiz-preview-img" to="">
                    <img src={previewImg} alt="" />
                </Link>
            </div>
            <div className="checkbox-wrap">
                <Checkbox
                    className='base'
                    label='발표 내용을 친절한 디자인으로 멋지게 정리한 기획서'
                    name='radioGroup'
                    value='oldest'
                />
                <Link className="quiz-preview-img" to="">
                    <img src={previewImg} alt="" />
                </Link>
            </div>
            <div className="checkbox-wrap">
                <Checkbox
                    className='base'
                    label='정리가 잘 된 기획서를 벤치마크 적용한 기획서'
                    name='radioGroup'
                    value='oldest'
                    defaultChecked
                />
                <Link className="quiz-preview-img" to="">
                    <img src={previewImg} alt="" />
                </Link>
            </div>
            <div className="checkbox-wrap">
                <Checkbox
                    className='base'
                    label='문서의 의도를 논리적으로 정리한 기획서'
                    name='radioGroup'
                    value='oldest'
                />
                <Link className="quiz-preview-img" to="">
                    <img src={previewImg} alt="" />
                </Link>
            </div>
        </div>
    )
}


export default ContentRadio
