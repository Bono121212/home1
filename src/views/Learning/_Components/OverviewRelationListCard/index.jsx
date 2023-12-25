import React from 'react'
import { Icon, Label, Card, Image } from 'semantic-ui-react'

const OverviewRelationListCard = (props) => {
    return (
        <Card className="card-item topic-list">
            <div className="card-inner">
                <div className="thumbnail-area">
                    <div className="thumb-img-area">
                        <Image src={props.src} className="thumb-img" alt="프로필 이미지" />
                    </div>
                    <div className="thumb-info bottom">
                        <Label><span>{props.time}</span></Label>
                    </div>
                </div>
                <div className="contents-area">
                    <div className="contents-inner">
                        <div className="topic-card-tit">
                            <Label className="college-name"><span>{props.name}</span></Label>
                            <div className="topic-card-title">{props.title}</div>
                            {/* <div className="tipic-card-txt">{props.desc}</div> */}
                        </div>
                        <div className="icon-area txticon-wrap">
                            <Label><Icon className="custom-icon icon-user"/><span>{props.user}</span></Label>
                            <Label><Icon className="custom-icon icon-star"/><span>{props.star}</span></Label>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}
export default OverviewRelationListCard