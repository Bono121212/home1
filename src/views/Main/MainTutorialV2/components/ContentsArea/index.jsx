import React, {Component} from 'react'
import { Segment, Button, Icon, Card } from 'semantic-ui-react'
//import CommentsSort from '../CommentsSort'
//import ContentsMoreView from "../ContentsMoreView";
//import CardListGroup from "../CardListGroup";
import CardValueRequired from "../CardValue01";
import CardValueEnrolled from "../CardValueEnrolled";
import CardValueInprogress from "../CardValueInprogress";
import BoxLoopModeInfinityLoop from "../BoxLoopModeInfinityLoop";


class ContentsArea extends Component {
    render() {
        return (
            <>
                {/* .my-learning-area */}
                <div className="my-learning-area">
                    <Segment className="full">
                        <div className="table-css type1">{/* .type1, .type2 //*/}
                            <div className="row">
                                <div className="cell v-middle">
                                    <div className="cell-inner">
                                        <span className="text01">My Learning</span>
                                        <Button icon className="right btn-black">
                                            View all
                                            <Icon className='morelink'/>
                                        </Button>
                                    </div>
                                </div>
                                <div className="cell v-middle">
                                    <div className="cell-inner">
                                        <Button className="btn-complex48">
                                            <span className="i">
                                                <Icon className='time48'/><span className="blind">total time</span>
                                            </span>
                                            <span className="t">
                                                <span className="underline">총 학습시간</span>
                                                <span className="div">
                                                    <span className="t1">120</span><span className="t2">h</span>
                                                    <span className="t1">00</span><span className="t2">m</span>
                                                </span>
                                            </span>
                                        </Button>
                                        {/*
                                        <Button className="ui button btn-complex48">
                                            <span className="i"><Icon className="time48"><span className="blind">total time</span></span>
                                            <span className="t">
                                                <span className="underline">총 학습시간</span>
                                                <span className="div">
                                                    <span className="t4">학습대기중</span>
                                                </span>
                                            </span>
                                        </Button>
                                        */}
                                    </div>
                                </div>
                                <div className="cell v-middle">
                                    <div className="cell-inner">
                                        <div className="chart-wrap">
                                            <div className="ui pie w56" data-value="30">
                                                <span className="left"/>
                                                <span className="right"/>
                                            </div>
                                            <div className="ui list">
                                                <dl className="item sk">
                                                    <dt>mySUNI</dt>
                                                    <dd>14h 50m</dd>
                                                </dl>
                                                <dl className="item my">
                                                    <dt>My company</dt>
                                                    <dd>35h 30m</dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cell v-middle">
                                    <div className="cell-inner">
                                        <Button className="btn-complex48">
                                        <span className="i">
                                            <Icon className='complete48'/><span className="blind">complete edu</span>
                                        </span>
                                            <span className="t">
                                                <span className="underline">완료한 학습</span>
                                                <span className="div">
                                                    <span className="t1">14</span><span className="t3">개</span>
                                                </span>
                                            </span>
                                        </Button>
                                    </div>
                                </div>
                                <div className="cell v-middle">
                                    <div className="cell-inner">
                                        <Button className="btn-complex48">
                                        <span className="i">
                                            <Icon className='stamp48'><span className="blind">stamp</span></Icon>
                                        </span>
                                            <span className="t">
                                                <span className="underline">획득 Stamp</span>
                                                <span className="div">
                                                    <span className="t1">14</span><span className="t3">개</span>
                                                </span>
                                            </span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Segment>
                </div>
                {/* // .my-learning-area */}
                {/* .my-learning-area-tab */}
                <div className="my-learning-area-tab">
                    <Segment className="full">
                        <div className="ui tab-menu">
                            <div className="cont-inner">
                                <div className="ui sku menu">
                                    <a href={()=>false} className="active item" data-tab="first">
                                        권장과정
                                        {/*Required*/}
                                        <span className="count">+5</span>
                                    </a>
                                    <a href={()=>false} className="item" data-tab="second">
                                        관심목록
                                        {/*In My List*/}
                                    </a>
                                    <a href={()=>false} className="item" data-tab="third">
                                        학습중
                                        {/*In Progress*/}
                                    </a>
                                    <a href={()=>false} className="item" data-tab="fourth">
                                        학습예정
                                        {/*Enrolled*/}
                                        <span className="count">+3</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Segment>
                    <hr className="dash"/>
                    <div className="ui full segment">
                        <div className="ui active tab" data-tab="first">
                            <div className="scrolling">
                                <ul className="belt">
                                    <li>
                                        <Card.Group className='box-cards'>
                                            <CardValueRequired/>
                                        </Card.Group>
                                    </li>
                                    <li>
                                        <Card.Group className='box-cards'>
                                            <CardValueEnrolled/>
                                        </Card.Group>
                                    </li>
                                    <li>
                                        <Card.Group className='box-cards'>
                                            <CardValueEnrolled/>
                                        </Card.Group>
                                    </li>
                                    <li>
                                        <Card.Group className='box-cards'>
                                            <CardValueInprogress/>
                                        </Card.Group>
                                    </li>
                                    <li>
                                        <Card.Group className='box-cards'>
                                            <CardValueInprogress/>
                                        </Card.Group>
                                    </li>
                                    <li>
                                        <Card.Group className='box-cards'>
                                            <CardValueEnrolled/>
                                        </Card.Group>
                                    </li>
                                </ul>
                            </div>
                            {/*<div className="no-cont-wrap">*/}
                            {/*    <Icon className='no-contents80'/><span className="blind">콘텐츠 없음</span>*/}
                            {/*    <div className="text">Required 된 학습 과정이 없습니다.</div>*/}
                            {/*    <Button icon className='rigth btn-blue2'>*/}
                            {/*        <a href="#recommend">김유니 님에게 추천하는 학습 과정 보기</a>*/}
                            {/*        <Icon className='morelink'/>*/}
                            {/*    </Button>*/}
                            {/*</div>*/}
                        </div>
                        <div className="ui tab" data-tab="second">
                            <div className="no-cont-wrap">
                                <Icon className='no-contents80'/><span className="blind">콘텐츠 없음</span>
                                <div className="text">My List에 추가한 학습 과정이 없습니다.</div>
                                {/*<Button icon className='rigth btn-blue2'>*/}
                                {/*    <a href="#recommend">김유니 님에게 추천하는 학습 과정 보기</a>*/}
                                {/*    <Icon className='morelink'/>*/}
                                {/*</Button>*/}
                            </div>
                        </div>
                        <div className="ui tab" data-tab="third">
                            <div className="no-cont-wrap">
                                <Icon className='no-contents80'/><span className="blind">콘텐츠 없음</span>
                                <div className="text">수강중인 학습 과정이 없습니다.</div>
                                <Button icon className='rigth btn-blue2'>
                                    <a href="#recommend">김유니 님에게 추천하는 학습 과정 보기</a>
                                    <Icon className='morelink'/>
                                </Button>
                            </div>
                        </div>
                        <div className="ui tab" data-tab="fourth">
                            <div className="scrolling">
                                <ul className="belt">
                                    <li>
                                        <Card.Group className='box-cards'>
                                            {/*  상태값: Required  */}
                                            <CardValueRequired/>
                                        </Card.Group>
                                    </li>
                                    <li>
                                        <Card.Group className='box-cards'>
                                            {/*  상태값: Enrolled  */}
                                            <CardValueEnrolled/>
                                        </Card.Group>
                                    </li>
                                    <li>
                                        <Card.Group className='box-cards'>
                                            {/*  상태값: Enrolled  */}
                                            <CardValueEnrolled/>
                                        </Card.Group>
                                    </li>
                                    <li>
                                        <Card.Group className='box-cards'>
                                            {/*  상태값: Inprogress  */}
                                            <CardValueInprogress/>
                                        </Card.Group>
                                    </li>
                                    <li>
                                        <Card.Group className='box-cards'>
                                            {/*  상태값: Inprogress  */}
                                            <CardValueInprogress/>
                                        </Card.Group>
                                    </li>
                                    <li>
                                        <Card.Group className='box-cards'>
                                            {/*  상태값: Enrolled  */}
                                            <CardValueEnrolled/>
                                        </Card.Group>
                                    </li>
                                </ul>
                            </div>
                            <div className="no-cont-wrap">
                                <Icon className='no-contents80'/><span className="blind">콘텐츠 없음</span>
                                <div className="text">수강 대기중인 학습 과정이 없습니다.</div>
                                <Button icon className='rigth btn-blue2'>
                                    <a href="#recommend">김유니 님에게 추천하는 학습 과정 보기</a>
                                    <Icon className='morelink'/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* // .my-learning-area-tab */}
                {/* .middle-swiper */}
                <div className="middle-swiper">
                    <Segment className="full">
                        {/* .swiper-section .type2 */}
                        <div className='swiper-test swiper-section type2'>
                            <BoxLoopModeInfinityLoop/>
                        </div>
                        {/* // .swiper-section .type2 */}
                    </Segment>
                </div>
                {/* // .middle-swiper */}
                {/* .recommend-area */}
                <div className="recommend-area" id="recommend">
                    <Segment className="full">
                        <div className="recommend-head">
                            <span className="tit">김유니님을 위한 추천 채널</span>
                            <Button icon className="right btn-black">
                                View all<Icon className='morelink'/>
                            </Button>
                            <div className="right">
                                <Button icon className="img-icon">
                                    <span className="underline">현재 선택된 관심 Channel(<span
                                        className="sel">24</span>/80)</span>
                                    <Icon className='setting17'/><span className="blind">setting</span>
                                </Button>
                            </div>
                        </div>
                        <div className="section-head">
                            <span className="channel">AI Fundamental</span> 채널에서 김유니님께 추천하는 과정입니다.
                            <div className="right">
                                <Button icon className="right btn-blue">
                                    View all<Icon className='morelink'/>
                                </Button>
                            </div>
                        </div>
                        <div className="scrolling">
                            <ul className="belt">
                                <li>
                                    <Card.Group className='box-cards'>
                                        {/*  상태값: Required  */}
                                        <CardValueRequired/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        {/*  상태값: Enrolled  */}
                                        <CardValueEnrolled/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        {/*  상태값: Enrolled  */}
                                        <CardValueEnrolled/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        {/*  상태값: Inprogress  */}
                                        <CardValueInprogress/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        {/*  상태값: Inprogress  */}
                                        <CardValueInprogress/>
                                    </Card.Group>
                                </li>
                                <li>
                                    <Card.Group className='box-cards'>
                                        {/*  상태값: Enrolled  */}
                                        <CardValueEnrolled/>
                                    </Card.Group>
                                </li>
                            </ul>
                        </div>

                        <div className="section-head">
                            <span className="channel">Global Leader's Table</span> 채널에서 김유니님에게 추천하는 과정입니다.
                            <div className="right">
                                <Button icon className="right btn-blue">
                                    View all
                                    <Icon className='morelink'/>
                                </Button>
                            </div>
                        </div>
                        <div className="scrolling">
                            <ul className="belt">
                                <li>
                                    <Card.Group className='box-cards'>
                                        {/*  상태값: Required  */}
                                        <CardValueRequired/>
                                    </Card.Group>
                                </li>
                            </ul>
                        </div>
                    </Segment>
                </div>
                {/* // .recommend-area */}
            </>
        )
    }
}


export default ContentsArea
