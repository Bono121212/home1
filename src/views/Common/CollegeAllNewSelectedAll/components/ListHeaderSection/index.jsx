import React, {Component} from 'react';
import CommentsSort from '../CommentsSort';

class ListHeaderSection extends Component {
    //
    render() {
        return (
            <div className='sort-reult'>
                <div class="section-count">
                    총 
                    <span>23</span>개의 학습 과정이 있습니다.
                </div>
                <CommentsSort/>
            </div>
        )
    }
}

export default ListHeaderSection;