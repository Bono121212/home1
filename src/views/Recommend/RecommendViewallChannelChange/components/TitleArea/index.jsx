import React, {Component} from 'react'
import {
    Segment,
    Icon,
} from 'semantic-ui-react'

// const selectOptions01 = [
//     {key: 'val00', value: 'val00', text: 'AI 채널의 추천과정'},
//     {key: 'val01', value: 'val01', text: 'AI'},
//     {key: 'val02', value: 'val02', text: 'Design'},
//     {key: 'val03', value: 'val03', text: 'Database'},
//     {key: 'val04', value: 'val04', text: 'Project Managing'},
//     {key: 'val05', value: 'val05', text: 'Big Data'},
//     {key: 'val06', value: 'val06', text: 'AI'},
//     {key: 'val07', value: 'val07', text: 'Design'},
//     {key: 'val08', value: 'val08', text: 'Database'},
//     {key: 'val09', value: 'val09', text: 'Project Managing'},
//     {key: 'val10', value: 'val10', text: 'Big Data'},
// ];

class TitleArea extends Component {
    render() {
        return (
            <div className="main-filter">
                <Segment className='full'>
                    <div className="ui inline transparent large dropdown active visible"
                         data-add=" 채널의 추천과정">{/* data-addText 선택시 추가될 text // */}
                        <div className="text">AI 채널의 추천과정</div>
                        <Icon className='dropdown'/>
                        <div className="menu transition visible">
                            <div className="item">AI</div>
                            <div className="item">Design</div>
                            <div className="item">Database</div>
                            <div className="item">Project Managing</div>
                            <div className="item">Big Data</div>
                            <div className="item">AI</div>
                            <div className="item">Design</div>
                            <div className="item">Database</div>
                            <div className="item">Project Managing</div>
                            <div className="item">Big Data</div>
                        </div>
                    </div>
                </Segment>
            </div>
        )
    }
}

export default TitleArea
