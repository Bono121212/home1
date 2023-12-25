import React from 'react';
import { Tab } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const panes = [
    {
        menuItem: '1개월',
        render: () => 
        <Tab.Pane>
            <ol>
                <li><Link to="/"><span className="o_num">1</span><span className="p_word">AI</span></Link></li>
                <li><Link to="/"><span className="o_num">2</span><span className="p_word">인공지능</span></Link></li>
                <li><Link to="/"><span className="o_num">3</span><span className="p_word">디지털 트랜스포메이션</span></Link></li>
                <li><Link to="/"><span className="o_num">4</span><span className="p_word">Digital Transformation</span></Link></li>
                <li><Link to="/"><span className="o_num">5</span><span className="p_word">행복의 비결</span></Link></li>
                <li><Link to="/"><span className="o_num">6</span><span className="p_word">SV</span></Link></li>
                <li><Link to="/"><span className="o_num">7</span><span className="p_word">파이썬</span></Link></li>
                <li><Link to="/"><span className="o_num">8</span><span className="p_word">Hello, Python</span></Link></li>
                <li><Link to="/"><span className="o_num">9</span><span className="p_word">공정무역</span></Link></li>
                <li><Link to="/"><span className="o_num">10</span><span className="p_word">DT</span></Link></li>
            </ol>
        </Tab.Pane>,
    },
    { 
        menuItem: '6개월', 
        render: () => 
        <Tab.Pane>
            <ol>
                <li><Link to="/"><span className="o_num">1</span><span className="p_word">인공지능</span></Link></li>
                <li><Link to="/"><span className="o_num">2</span><span className="p_word">파이썬</span></Link></li>
                <li><Link to="/"><span className="o_num">3</span><span className="p_word">디지털 트랜스포메이션</span></Link></li>
                <li><Link to="/"><span className="o_num">4</span><span className="p_word">Digital Transformation</span></Link></li>
                <li><Link to="/"><span className="o_num">5</span><span className="p_word">행복의 비결</span></Link></li>
                <li><Link to="/"><span className="o_num">6</span><span className="p_word">SV</span></Link></li>
                <li><Link to="/"><span className="o_num">7</span><span className="p_word">AI</span></Link></li>
                <li><Link to="/"><span className="o_num">8</span><span className="p_word">Hello, Python</span></Link></li>
                <li><Link to="/"><span className="o_num">9</span><span className="p_word">공정무역</span></Link></li>
                <li><Link to="/"><span className="o_num">10</span><span className="p_word">DT</span></Link></li>
            </ol>
        </Tab.Pane> 
    },
    {
        menuItem: '1년', 
        render: () => 
        <Tab.Pane>
            <ol>
                <li><Link to="/"><span className="o_num">1</span><span className="p_word">공정무역</span></Link></li>
                <li><Link to="/"><span className="o_num">2</span><span className="p_word">파이썬</span></Link></li>
                <li><Link to="/"><span className="o_num">3</span><span className="p_word">디지털 트랜스포메이션</span></Link></li>
                <li><Link to="/"><span className="o_num">4</span><span className="p_word">Digital Transformation</span></Link></li>
                <li><Link to="/"><span className="o_num">5</span><span className="p_word">행복의 비결</span></Link></li>
                <li><Link to="/"><span className="o_num">6</span><span className="p_word">SV</span></Link></li>
                <li><Link to="/"><span className="o_num">7</span><span className="p_word">AI</span></Link></li>
                <li><Link to="/"><span className="o_num">8</span><span className="p_word">Hi, Python</span></Link></li>
                <li><Link to="/"><span className="o_num">9</span><span className="p_word">인공지능</span></Link></li>
                <li><Link to="/"><span className="o_num">10</span><span className="p_word">DT</span></Link></li>
            </ol>
        </Tab.Pane> 
    },
]

const SidePopular = () => <Tab panes={panes} />

export default SidePopular
