import React, { Component } from "react";
import { Link } from 'react-router-dom';

class CubeTableBody extends Component {
    render() {
        return (
            <table className="ui admin_table">
                <thead>
                    <tr>
                        <th className="category">구분</th>
                        <th className="type">타입</th>
                        <th className="title">제목</th>
                        <th className="done">이수</th>
                        <th className="new">신규 학습</th>
                        <th className="reply">신규 댓글</th>
                        <th className="send">과제 제출</th>
                        <th className="wait">승인 대기</th>
                        <th className="grade">채점 대기</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="category">AI</td>
                        <td className="type">Video</td>
                        <td className="title"><Link to="/"><span>AI/DT 시대의 고객 경험 디자인 디자인 디자인 디자인 디자인 디자인 디자인 디자인 디자인</span></Link></td>
                        <td className="done"><span>19,235</span></td>
                        <td className="new">5</td>
                        <td className="reply">12</td>
                        <td className="send">12</td>
                        <td className="wait">0</td>
                        <td className="grade">12</td>
                    </tr>

                    <tr>
                        <td className="category">AI</td>
                        <td className="type">Video</td>
                        <td className="title"><Link to="/"><span>Data로 생각하는 인재되기 (16가지 역량)</span></Link></td>
                        <td className="done"><span>19,235</span></td>
                        <td className="new">5</td>
                        <td className="reply">12</td>
                        <td className="send">12</td>
                        <td className="wait">0</td>
                        <td className="grade">12</td>
                    </tr>

                    <tr>
                        <td className="category">반도체</td>
                        <td className="type">Video</td>
                        <td className="title"><Link to="/"><span>반도체 Industry 이해 Part1. 반도체 산업의 기본개념과 시장 경쟁구도</span></Link></td>
                        <td className="done"><span>9,245</span></td>
                        <td className="new">3</td>
                        <td className="reply">33</td>
                        <td className="send">42</td>
                        <td className="wait">1</td>
                        <td className="grade">5</td>
                    </tr>

                    <tr>
                        <td className="category">DT</td>
                        <td className="type">Video</td>
                        <td className="title"><Link to="/"><span>&lt; ST, DT를 만나다 &gt;- SK하이닉스 편</span></Link></td>
                        <td className="done"><span>3,212</span></td>
                        <td className="new">6</td>
                        <td className="reply">13</td>
                        <td className="send">11</td>
                        <td className="wait">5</td>
                        <td className="grade">12</td>
                    </tr>

                    <tr>
                        <td className="category">A</td>
                        <td className="type">Video</td>
                        <td className="title"><Link to="/"><span>Data로 생각하는 인재되기 (16가지 역량)</span></Link></td>
                        <td className="done"><span>3,212</span></td>
                        <td className="new">3</td>
                        <td className="reply">12</td>
                        <td className="send">34</td>
                        <td className="wait">7</td>
                        <td className="grade">12</td>
                    </tr>

                    <tr>
                        <td className="category">반도체</td>
                        <td className="type">Video</td>
                        <td className="title"><Link to="/"><span>반도체 Industry 이해 Part1. 반도체 산업의 기본개념과 시장 경쟁구도</span></Link></td>
                        <td className="done"><span>9,245</span></td>
                        <td className="new">3</td>
                        <td className="reply">12</td>
                        <td className="send">34</td>
                        <td className="wait">1</td>
                        <td className="grade">5</td>
                    </tr>

                    <tr>
                        <td className="category">DT</td>
                        <td className="type">Video</td>
                        <td className="title"><Link to="/"><span>&lt; ST, DT를 만나다 &gt;- SK하이닉스 편</span></Link></td>
                        <td className="done"><span>3,212</span></td>
                        <td className="new">6</td>
                        <td className="reply">13</td>
                        <td className="send">11</td>
                        <td className="wait">5</td>
                        <td className="grade">12</td>
                    </tr>

                    <tr>
                        <td className="category">A</td>
                        <td className="type">Video</td>
                        <td className="title"><Link to="/"><span>Data로 생각하는 인재되기 (16가지 역량)</span></Link></td>
                        <td className="done"><span>3,212</span></td>
                        <td className="new">3</td>
                        <td className="reply">12</td>
                        <td className="send">34</td>
                        <td className="wait">7</td>
                        <td className="grade">12</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default CubeTableBody;