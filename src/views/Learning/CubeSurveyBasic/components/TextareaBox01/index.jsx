import React, { Component } from 'react'

class TextareaBox01 extends Component {
    render() {
        return (
            <div class="ui right-top-count input">
                <span class="count"><span class="now">0</span>/<span class="max">100</span></span>
                <textarea rows="3" placeholder="답변을 입력해주세요. (최대 1000자 입력 가능)" value="" />
            </div>
        )
    }
}


export default TextareaBox01
