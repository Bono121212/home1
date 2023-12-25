import React, {Component, createRef} from 'react';
import {  Table, Icon, Image, Button, Select, Label } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

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
                <CardCoManager />
            </div>
        )
    }
}


export default MmberList
