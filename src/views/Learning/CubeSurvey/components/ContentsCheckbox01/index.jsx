import React from 'react'
import {
    Checkbox
  } from "semantic-ui-react";


const ContentRadio = () => {
    return (
    <div className="course-survey-list">
                <Checkbox
                    className='base'
                    label='멧돼지가 덤벼들어도 두려워하지 않게된다'
                    name='radioGroup'
                    value='newest'
                    defaultChecked
                />
                <Checkbox
                    className='base'
                    label='만족 지연의 능력이 약화된다'
                    name='radioGroup'
                    value='oldest'
                />
                <Checkbox
                    className='base'
                    label='숫자를 거꾸로 세는 능력이 저하된다'
                    name='radioGroup'
                    value='oldest'
                />
                <Checkbox
                    className='base'
                    label='사물을 분류하고 개념화하는 능력이 저하된다'
                    name='radioGroup'
                    value='oldest'
                />
          </div>
    )
}


export default ContentRadio
