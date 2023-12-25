import React from 'react';
import { Link } from "react-router-dom";
import {Button, Checkbox, Icon, Radio} from 'semantic-ui-react';
import classNames from 'classnames';


const FilterContainer = ({isOnFilter}) => {
    //
    return (
        <div className={classNames('filter-table', isOnFilter ? 'on' : '')}>
            <div className="title">Filter</div>
            <table>
                <tbody>
                    <tr>
                        <th>컬리지</th>
                        <td>
                            <Checkbox className="base" label="SelectAll"/>
                            <Checkbox className="base" label="Al(13)" checked={true}/>
                            <Checkbox className="base" label="DT(13)"/>
                            <Checkbox className="base" label="행복(13)"/>
                            <Checkbox className="base" label="SV·ESG(13)"/>
                            <Checkbox className="base" label="혁신디자인(13)"/>
                            <Checkbox className="base" label="Global(13)"/>
                            <Checkbox className="base" label="Leadership(13)"/>
                            <Checkbox className="base" label="Management(13)"/>
                            <Checkbox className="base" label="미래반도체(13)"/>
                            <Checkbox className="base" label="Green(13)"/>
                            <Checkbox className="base" label="BM Design &amp; Storytelling(13)"/>
                            <Checkbox className="base" label="SK경영(13)"/>
                            <Checkbox className="base" label="SK아카데미(13)"/>
                            <Checkbox className="base" label="Life Style(13)"/>
                        </td>
                    </tr>
                    <tr>
                        <th>교육유형</th>
                        <td>
                            <Checkbox className="base" label="SelectAll"/>
                            <Checkbox className="base" label="Course(13)"/>
                            <Checkbox className="base" label="Video(13)"/>
                            <Checkbox className="base" label="Audio(13)"/>
                            <Checkbox className="base" label="e-Learning(13)" checked={true}/>
                            <Checkbox className="base" label="Classroom(13)"/>
                            <Checkbox className="base" label="Community(13)"/>
                            <Checkbox className="base" label="Web Page(13)"/>
                            <Checkbox className="base" label="Documents(13)"/>
                        </td>
                    </tr>
                    <tr>
                        <th>난이도</th>
                        <td>
                            <Checkbox className="base" label="SelectAll"/>
                            <Checkbox className="base" label="Basic"/>
                            <Checkbox className="base" label="Intermediate" checked={true}/>
                            <Checkbox className="base" label="Advanced"/>
                            <Checkbox className="base" label="Expert"/>
                        </td>
                    </tr>
                    <tr>
                        <th>교육기관</th>
                        <td>
                            <Checkbox className="base" label="SelectAll"/>
                            <Checkbox className="base" label="mySUNI" checked={true}/>
                            <Checkbox className="base" label="Coursera" checked={true}/>
                            <Checkbox className="base" label="Linkedin"/>
                        </td>
                    </tr>
                    <tr>
                        <th>핵인싸</th>
                        <td>
                            <Radio className="base" label="선택안함" name="radio01" checked={true}/>
                            <Radio className="base" label="유" name="radio01"/>
                            <Radio className="base" label="무" name="radio01"/>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="selected">
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <button className="clear">
                                    <Icon className="reset"/>
                                    <span className="blind">reset</span>
                                </button>
                                <span>전체해제</span>
                            </th>
                            <td>
                                <Button className="del" content="AI"/>
                                <Button className="del" content="e-Learning"/>
                                <Button className="del" content="Intermediate"/>
                                <Button className="del" content="mySUNI"/>
                                <Button className="del" content="Coursera"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="moreAll"><Link className="more-text">결과보기</Link></div>
        </div>
    );
}

export default FilterContainer;