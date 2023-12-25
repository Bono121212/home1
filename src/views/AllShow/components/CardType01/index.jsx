import React, {Component} from 'react';
import {Button, Container, Grid, Header, List, Menu, Segment, Select, Sticky, Table,} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './CardType01.css';



const CardType01 = () => (
    <div className="card-box">
        <div className="card">
            <div className="card-front">
                <div className="card-inner">
                    <div className="card-header">
                        <span className="type purple">AI</span>
                        <strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quisquam.</strong>
                    </div>
                    <div className="card-body">
                        <List>
                            <List.Item>
                                <span>classroom</span>
                                <span>유료</span>
                            </List.Item>
                            <List.Item>
                                <span className="time">90m</span>
                            </List.Item>
                            <List.Item>
                                <span className="done">이수 3,300명</span>
                            </List.Item>
                        </List>
                    </div>
                    <div className="card-footer">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, distinctio libero recusandae nisi dicta ullam fuga obcaecati, possimus, minima ex cum impedit.</p>
                    </div>
                </div>
            </div>

            <div className="card-back">
                <div className="card-inner">
                    <div className="card-header">
                        <span className="type purple">AI</span>
                        <strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, quisquam.</strong>
                    </div>
                    <div className="card-body">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, beatae numquam. Dolorum unde laborum minus optio? Esse ducimus quasi animi cumque nobis totam? Voluptas neque a aspernatur corporis beatae rem quia vitae ipsa temporibus, in cumque doloremque modi labore eligendi.
                    </div>
                    <div className="card-footer">
                        <Button className="btn-bookmark"></Button>
                        <Link  to="/" class="link-detail">상세보기</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default CardType01