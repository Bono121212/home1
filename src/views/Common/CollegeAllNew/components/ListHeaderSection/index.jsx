import React, {Component} from 'react';
import CommentsSort from '../CommentsSort';

class ListHeaderSection extends Component {
    //
    render() {
        return (
            <div className="section-top">
                <div className="section-count-big">
                    <strong>기업 경영/전략</strong>의 학습 과정 입니다.<strong>(21)</strong>
                </div>
                <CommentsSort/>
            </div>
        )
    }
}

export default ListHeaderSection;