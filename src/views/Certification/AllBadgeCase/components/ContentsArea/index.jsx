import React, {Component} from 'react'
import BadgeCase01 from '../BadgeCase01';
import BadgeCase02 from '../BadgeCase02';
import BadgeCase03 from '../BadgeCase03';
import BadgeCase04 from '../BadgeCase04';

class ContentsArea extends Component {
    render() {
        return (
            <>
                <div className="parents">
                    <h2 className="tt">size:280x280 / 뱃지에 링크 있는 경우</h2>
                    <BadgeCase01/>
                </div>

                <div className="parents">
                    <h2 className="tt">size:220x220 / 뱃지에 링크 있는 경우</h2>
                    <BadgeCase02/>
                </div>

                <div className="parents">
                    <h2 className="tt">size:280x280 / 뱃지에 링크 없는 경우</h2>
                    <BadgeCase03/>
                </div>

                <div className="parents">
                    <h2 className="tt">size:220x220 / 뱃지에 링크 없는 경우</h2>
                    <BadgeCase04/>
                </div>

            </>
        )
    }
}


export default ContentsArea
