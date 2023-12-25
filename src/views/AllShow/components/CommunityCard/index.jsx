import React, {Component} from 'react';
import {Button, Container, Grid, Header, List, Menu, Segment, Select, Sticky, Table,Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './CommunityCard.css';

import bgImg from "../../../../images/all/player@3x.jpg"
import exampleImg01 from "../../../../images/all/img_banner_01.png";
import exampleImg02 from "../../../../images/all/img_banner_02.png";
import exampleImg03 from "../../../../images/all/img_banner_03_a.png";

const CommunityCard = 
() => (
    <div className="community-card-wrap">
        <div className="left-area">
            {/* <Image src={bgImg} /> */}
            image
        </div>
        <div className="right-area">
            <div className="card-area">
                <div className="card-type">
                    <div className="card-type_inner">
                        <Link to="/">
                            <div className="card_thumb"><Image src={exampleImg01} /></div>
                            <div className="card_txt">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate, accusamus impedit dolore earum, ratione, neque quia quo temporibus fugiat officia nemo.
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="card-type">
                    <div className="card-type_inner">
                        <Link to="/">
                            <div className="card_thumb"><Image src={exampleImg02} /></div>
                            <div className="card_txt">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate, accusamus impedit dolore earum, ratione, neque quia quo temporibus fugiat officia nemo.
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="card-type">
                    <div className="card-type_inner">
                        <Link to="/">
                            <div className="card_thumb"><Image src={exampleImg03} /></div>
                            <div className="card_txt">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate, accusamus impedit dolore earum, ratione, neque quia quo temporibus fugiat officia nemo.
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="card-type">
                    <div className="card-type_inner">
                        <Link to="/">
                            <div className="card_thumb"><Image src={exampleImg01} /></div>
                            <div className="card_txt">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate, accusamus impedit dolore earum, ratione, neque quia quo temporibus fugiat officia nemo.
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="card-type">
                    <div className="card-type_inner">
                        <Link to="/">
                            <div className="card_thumb"><Image src={exampleImg02} /></div>
                            <div className="card_txt">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate, accusamus impedit dolore earum, ratione, neque quia quo temporibus fugiat officia nemo.
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="card-type">
                    <div className="card-type_inner">
                        <Link to="/">
                            <div className="card_thumb"><Image src={exampleImg03} /></div>
                            <div className="card_txt">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate, accusamus impedit dolore earum, ratione, neque quia quo temporibus fugiat officia nemo.
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="card-type">
                    <div className="card-type_inner">
                        <Link to="/">
                            <div className="card_thumb"><Image src={exampleImg01} /></div>
                            <div className="card_txt">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate, accusamus impedit dolore earum, ratione, neque quia quo temporibus fugiat officia nemo.
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="card-type">
                    <div className="card-type_inner">
                        <Link to="/">
                            <div className="card_thumb"><Image src={exampleImg02} /></div>
                            <div className="card_txt">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate, accusamus impedit dolore earum, ratione, neque quia quo temporibus fugiat officia nemo.
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="card-type">
                    <div className="card-type_inner">
                        <Link to="/">
                            <div className="card_thumb"><Image src={exampleImg03} /></div>
                            <div className="card_txt">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate, accusamus impedit dolore earum, ratione, neque quia quo temporibus fugiat officia nemo.
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="card-type">
                    <div className="card-type_inner">
                        <Link to="/">
                            <div className="card_thumb"><Image src={exampleImg01} /></div>
                            <div className="card_txt">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate, accusamus impedit dolore earum, ratione, neque quia quo temporibus fugiat officia nemo.
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="card-type">
                    <div className="card-type_inner">
                        <Link to="/">
                            <div className="card_thumb"><Image src={exampleImg02} /></div>
                            <div className="card_txt">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate, accusamus impedit dolore earum, ratione, neque quia quo temporibus fugiat officia nemo.
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="card-type">
                    <div className="card-type_inner">
                        <Link to="/">
                            <div className="card_thumb"><Image src={exampleImg03} /></div>
                            <div className="card_txt">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam cupiditate, accusamus impedit dolore earum, ratione, neque quia quo temporibus fugiat officia nemo.
                            </div>
                        </Link>
                    </div>
                </div>

                
            </div>
        </div>
        <div className="category-area">
            <Button>카테고리 전체보기</Button>
        </div>
    </div>
);

export default CommunityCard