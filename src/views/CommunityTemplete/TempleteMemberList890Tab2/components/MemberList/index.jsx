import React, {Component} from 'react';
import CardManager from '../CardManager';
import CardCoManager from '../CardCoManager';

class MmberList extends Component {
    
    render() {

        return (
            <div className="member_list">
                {/* 매니저 */}
                <CardManager />
                <CardManager />

                {/*  부매니저 */}
                <CardCoManager />
                <CardCoManager />
                
                <CardCoManager />
                <CardCoManager />

                <CardCoManager />
                <CardCoManager />
                
                <CardCoManager />
                <CardCoManager />
                
                <CardCoManager />
                <CardCoManager />

                <CardCoManager />
                <CardCoManager />
                
                <CardCoManager />
                <CardCoManager />
            </div>
        )
    }
}


export default MmberList
