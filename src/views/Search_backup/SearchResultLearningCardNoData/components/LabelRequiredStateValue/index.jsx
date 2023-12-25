import React, {Component, createRef} from 'react'
import {
    Segment,
    Image, Label, Icon, Rating, Card, Button
} from 'semantic-ui-react'

class LabelRequiredStateValue extends Component {
    constructor() {
        super();
        this.state = {
            isHovered: false
        };
        this.handleHover = this.handleHover.bind(this);

    }

    handleHover(isHovered) {
        this.setState({isHovered});
    }

    render() {
        const activeClass = this.state.isHovered ? 'on' : '';
        return (
            <>
                {/*Required 상태값 + label*/}
                {/* hover 시 on class 추가 */}
                <Card className={`card-h ${activeClass}`} onMouseEnter={() => this.handleHover(true)}
                      onMouseLeave={() => this.handleHover(false)}>
                    <div className="card-ribbon-wrap">
                    <Label className='ribbon2'>{/* Required */}핵인싸과정</Label>
                </div>
                    <div className="card-inner">
                        {/*썸네일*/}
                        <div className="thumbnail"/>

                        <div className="title-area">
                            <Label color='red'>혁신디자인</Label>
                            <div className="header">Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp
                            </div>
                        </div>
                        <div className="icon-area">
                            <Label className='bold onlytext'>
                                <Icon className='video2'/><span>Video</span>
                            </Label>
                            <Label className='bold onlytext'>
                                <Icon className='time2'/><span>1h 30m</span>
                            </Label>
                            <Label className='onlytext'>
                                <Icon className='complete'/><span>이수 3,300명</span>
                            </Label>
                        </div>
                        <div className="foot-area">
                            <Label className='bold onlytext'>
                                <Icon className='state'/><span>{/* Required */}권장과정</span>
                            </Label>
                            <div className="study-date">2019.10.10 필수 학습 등록</div>
                        </div>
                    </div>
                    <div className="hover-content">
                        <div className="title-area">
                            <Label color='red'>혁신디자인</Label>
                            <div className="header">Affiliate Marketing Masterclass: Newbie to Advanced Bootcamp
                            </div>
                        </div>
                        <p className="text-area">
                            This is a template for a simple marketing or informational website. It includes a
                            large
                            callout called a jumbo Tron and three
                        </p>
                        <div className="btn-area">
                            <Button icon className='icon-line'><Icon className='add-list'/></Button>
                            <Button icon className='fix bg'>Go to this activity</Button>
                        </div>
                    </div>
                </Card>

            </>

        )
    }
}


export default LabelRequiredStateValue
