import React, {Component, createRef} from 'react';
import { Segment, Sticky, Menu, Label, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import CardBelt from '../CardBelt';
import BadgeCardGroup from '../BadgeCardGroup';


class ResultBadge extends Component {

    render() {
        return (
            <div className="result">
                <div className="result_title">
                    <strong>Badge (4)</strong>
                    <Link to="/" className="link_more">+ 더보기</Link>    
                </div>

                <div className="result_contents">
                    <BadgeCardGroup/>
                </div>
            </div>

        )
    }
}


export default ResultBadge
