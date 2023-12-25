import React from 'react';
import { Tab } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const panes = [
    {
        menuItem: '1주',
        render: () => 
        <Tab.Pane>
            <ol>
                <li><span className="o_num">1</span><Link to="/"><span className="p_word ellipsis">AI</span></Link></li>
                <li><span className="o_num">2</span><Link to="/"><span className="p_word ellipsis">인공지능</span></Link></li>
                <li><span className="o_num">3</span><Link to="/"><span className="p_word ellipsis">디지털 트랜스포메이션트랜스포메이션트랜스포메이션트랜스포메이션</span></Link></li>
                <li><span className="o_num">4</span><Link to="/"><span className="p_word ellipsis">Digital Transformation</span></Link></li>
                <li><span className="o_num">5</span><Link to="/"><span className="p_word ellipsis">행복의 비결</span></Link></li>
                <li><span className="o_num">6</span><Link to="/"><span className="p_word ellipsis">SV</span></Link></li>
                <li><span className="o_num">7</span><Link to="/"><span className="p_word ellipsis">파이썬파이썬파이썬파이썬파이썬파이썬파이썬파이썬파이썬파이썬파이썬</span></Link></li>
                <li><span className="o_num">8</span><Link to="/"><span className="p_word ellipsis">Hello, Python</span></Link></li>
                <li><span className="o_num">9</span><Link to="/"><span className="p_word ellipsis">공정무역</span></Link></li>
                <li><span className="o_num">10</span><Link to="/"><span className="p_word ellipsis">DT</span></Link></li>
            </ol>
        </Tab.Pane>,
    },
    { 
        menuItem: '1개월', 
        render: () => 
        <Tab.Pane>
            <ol>
                <li><span className="o_num">1</span><Link to="/"><span className="p_word ellipsis">인공지능인공지능인공지능인공지능인공지능인공지능인공지능인공지능인공지능</span></Link></li>
                <li><span className="o_num">2</span><Link to="/"><span className="p_word ellipsis">파이썬</span></Link></li>
                <li><span className="o_num">3</span><Link to="/"><span className="p_word ellipsis">디지털 트랜스포메이션</span></Link></li>
                <li><span className="o_num">4</span><Link to="/"><span className="p_word ellipsis">Digital Transformation</span></Link></li>
                <li><span className="o_num">5</span><Link to="/"><span className="p_word ellipsis">행복의 비결</span></Link></li>
                <li><span className="o_num">6</span><Link to="/"><span className="p_word ellipsis">SVSVSVSVSVSVSVSVSVSVSVSVSVSVSVSVSVSVSVSV</span></Link></li>
                <li><span className="o_num">7</span><Link to="/"><span className="p_word ellipsis">AI</span></Link></li>
                <li><span className="o_num">8</span><Link to="/"><span className="p_word ellipsis">Hello, Python</span></Link></li>
                <li><span className="o_num">9</span><Link to="/"><span className="p_word ellipsis">공정무역</span></Link></li>
                <li><span className="o_num">10</span><Link to="/"><span className="p_word ellipsis">DT</span></Link></li>
            </ol>
        </Tab.Pane> 
    },
    {
        menuItem: '3개월', 
        render: () => 
        <Tab.Pane>
            <ol>
                <li><span className="o_num">1</span><Link to="/"><span className="p_word ellipsis">공정무역</span></Link></li>
                <li><span className="o_num">2</span><Link to="/"><span className="p_word ellipsis">파이썬</span></Link></li>
                <li><span className="o_num">3</span><Link to="/"><span className="p_word ellipsis">디지털 트랜스포메이션</span></Link></li>
                <li><span className="o_num">4</span><Link to="/"><span className="p_word ellipsis">Digital Transformation</span></Link></li>
                <li><span className="o_num">5</span><Link to="/"><span className="p_word ellipsis">행복의 비결</span></Link></li>
                <li><span className="o_num">6</span><Link to="/"><span className="p_word ellipsis">SV</span></Link></li>
                <li><span className="o_num">7</span><Link to="/"><span className="p_word ellipsis">AI</span></Link></li>
                <li><span className="o_num">8</span><Link to="/"><span className="p_word ellipsis">Hi, Python</span></Link></li>
                <li><span className="o_num">9</span><Link to="/"><span className="p_word ellipsis">인공지능</span></Link></li>
                <li><span className="o_num">10</span><Link to="/"><span className="p_word ellipsis">DT</span></Link></li>
            </ol>
        </Tab.Pane> 
    },
]

const SidePopular = () => <Tab panes={panes} />

export default SidePopular
