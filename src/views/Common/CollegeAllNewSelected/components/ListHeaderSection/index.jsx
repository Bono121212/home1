import React, {Component} from 'react';
//import CommentsSort from '../CommentsSort';

class ListHeaderSection extends Component {
    //
    render() {
        return (
            <div className="section-top">
                <div className="section-count-big">
                    <strong>마케팅 Essentials</strong>의 학습 과정 입니다.<strong>(21)</strong>
                </div>
                <div className="section-tit-btn">
                    <button type="button" className="btn-more">전체보기</button>
                </div>
            </div>
        )
    }
}

export default ListHeaderSection;