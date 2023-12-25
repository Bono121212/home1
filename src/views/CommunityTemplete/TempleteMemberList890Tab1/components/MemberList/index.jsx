import React, {Component} from 'react';
import CardManager from '../CardManager';
import CardCoManager from '../CardCoManager';
import CardMember from '../CardMember';

class MmberList extends Component {
    
    render() {

        return (
            <div className="member_list">
                {/* 매니저 */}
                <CardManager />

                {/*  부매니저 */}
                <CardCoManager />

                {/*  일반멤버 */}
                <CardMember />
                <CardMember />
                <CardMember />
                <CardMember />
                <CardMember />
                <CardMember />
                <CardMember />
                <CardMember />
                <CardMember />
                <CardMember />
                <CardMember />
                <CardMember />
                <CardMember />
                <CardMember />
            </div>
        )
    }
}


export default MmberList
