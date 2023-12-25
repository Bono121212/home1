import React, { Component } from "react";
import { Link } from 'react-router-dom';

class CardTableBody extends Component {
    render() {
        return (
            <>
                <table className="ui admin_table">
                    <colgroup>
                        <col width="104px"/>
                        <col width=""/>
                        <col width="100px"/>
                        <col width="200px"/>
                        <col width="100px"/>
                        <col width="100px"/>
                        <col width="100px"/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th>구분</th>
                            <th>제목</th>
                            <th>이수</th>
                            <th>신규 학습</th>
                            <th>신규 댓글</th>
                            <th>과제 제출</th>
                            <th>채점 대기</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>AI</td>
                            <td><Link to="/"><span>AI/DT 시대의 고객 경험 디자인 디자인 디자인 디자인 디자인 디자인 디자인 디자인 디자인</span></Link></td>
                            <td><span>19,235</span></td>
                            <td>5</td>
                            <td>12</td>
                            <td>12</td>
                            <td>12</td>
                        </tr>

                        <tr>
                            <td>AI</td>
                            <td><Link to="/"><span>Data로 생각하는 인재되기 (16가지 역량)</span></Link></td>
                            <td><span>19,235</span></td>
                            <td>5</td>
                            <td>12</td>
                            <td>12</td>
                            <td>12</td>
                        </tr>

                        <tr>
                            <td>반도체</td>
                            <td><Link to="/"><span>반도체 Industry 이해 Part1. 반도체 산업의 기본개념과 시장 경쟁구도</span></Link></td>
                            <td><span>9,245</span></td>
                            <td>3</td>
                            <td>33</td>
                            <td>42</td>
                            <td>5</td>
                        </tr>

                        <tr>
                            <td>DT</td>
                            <td><Link to="/"><span>&lt; ST, DT를 만나다 &gt;- SK하이닉스 편</span></Link></td>
                            <td><span>3,212</span></td>
                            <td>6</td>
                            <td>13</td>
                            <td>11</td>
                            <td>12</td>
                        </tr>

                        <tr>
                            <td>A</td>
                            <td><Link to="/"><span>Data로 생각하는 인재되기 (16가지 역량)</span></Link></td>
                            <td><span>3,212</span></td>
                            <td>3</td>
                            <td>12</td>
                            <td>34</td>
                            <td>12</td>
                        </tr>

                        <tr>
                            <td>반도체</td>
                            <td><Link to="/"><span>반도체 Industry 이해 Part1. 반도체 산업의 기본개념과 시장 경쟁구도</span></Link></td>
                            <td><span>9,245</span></td>
                            <td>3</td>
                            <td>12</td>
                            <td>34</td>
                            <td>5</td>
                        </tr>

                        <tr>
                            <td>DT</td>
                            <td><Link to="/"><span>&lt; ST, DT를 만나다 &gt;- SK하이닉스 편</span></Link></td>
                            <td><span>3,212</span></td>
                            <td>6</td>
                            <td>13</td>
                            <td>11</td>
                            <td>12</td>
                        </tr>

                        <tr>
                            <td>A</td>
                            <td><Link to="/"><span>Data로 생각하는 인재되기 (16가지 역량)</span></Link></td>
                            <td><span>3,212</span></td>
                            <td>3</td>
                            <td>12</td>
                            <td>34</td>
                            <td>12</td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }
}

export default CardTableBody;