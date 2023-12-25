import React, {Component} from 'react'
import {
    Segment,
    Icon,
} from 'semantic-ui-react'

class SearchArea extends Component {
    render() {
        return (
            <div className="search-area">
                <Segment className="full">
                    <div className="ui main search input">
                        <span className="placeholder">mySUNI에서 다양한 컨텐츠를 탐색해보세요.</span>
                        <input type="text" placeholder=""/>
                        <Icon className='clear link'/>
                        <Icon className='search link'/>
                    </div>
                </Segment>
            </div>
        )
    }
}


export default SearchArea
