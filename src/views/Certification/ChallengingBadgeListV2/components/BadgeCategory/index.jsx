
import React, {Component} from 'react';
import {Image} from 'semantic-ui-react';

class BadgeCategory extends Component {
    //
    render () {
        return (
            <div className="badge-category">
                <ul>
                    <li className="fn-parent on">
                        <a href={()=>false} className="fn-click">
                            <span className="icon">
                                <span>
                                    <Image src="/images/all/group-3.png" alt="Badge Category Sample Image" />
                                </span>
                            </span>
                            <span className="title">
                                <span className="ellipsis">AI/DT</span>
                            </span>
                        </a>
                    </li>
                    <li className="fn-parent">
                        <a href={()=>false} className="fn-click">
                            <span className="icon">
                                <span>
                                    <Image src="/images/all/group-3.png" alt="Badge Category Sample Image" />
                                </span>
                            </span>
                            <span className="title">
                                <span className="ellipsis">미래 Biz.</span>
                            </span>
                        </a>
                    </li>
                    <li className="fn-parent">
                        <a href={()=>false} className="fn-click">
                            <span className="icon">
                                <span>
                                    <Image src="/images/all/group-3.png" alt="Badge Category Sample Image" />
                                </span>
                            </span>
                            <span className="title">
                                <span className="ellipsis">BM Design</span>
                            </span>
                        </a>
                    </li>
                    <li className="fn-parent">
                        <a href={()=>false} className="fn-click">
                            <span className="icon">
                                <span>
                                    <Image src="/images/all/group-3.png" alt="Badge Category Sample Image" />
                                </span>
                            </span>
                            <span className="title">
                                <span className="ellipsis">Global</span>
                            </span>
                        </a>
                    </li>
                    <li className="fn-parent">
                        <a href={()=>false} className="fn-click">
                            <span className="icon">
                                <span>
                                    <Image src="/images/all/group-3.png" alt="Badge Category Sample Image" />
                                </span>
                            </span>
                            <span className="title">
                                <span className="ellipsis">행복 경영</span>
                            </span>
                        </a>
                    </li>
                    <li className="fn-parent">
                        <a href={()=>false} className="fn-click">
                            <span className="icon">
                                <span>
                                    <Image src="/images/all/group-3.png" alt="Badge Category Sample Image" />
                                </span>
                            </span>
                            <span className="title">
                                <span className="ellipsis">Mgmt.</span>
                            </span>
                        </a>
                    </li>
                    <li className="fn-parent">
                        <a href={()=>false} className="fn-click">
                            <span className="icon">
                                <span>
                                    <Image src="/images/all/group-3.png" alt="Badge Category Sample Image" />
                                </span>
                            </span>
                            <span className="title">
                                <span className="ellipsis">분분야 텍스트 긴경우 최대3줄까지 넘야 텍스트 긴경우 최대3줄까지 넘</span>
                            </span>
                        </a>
                    </li>
                    <li className="fn-parent">
                        <a href={()=>false} className="fn-click">
                            <span className="icon">
                                <span>
                                    <Image src="/images/all/group-3.png" alt="Badge Category Sample Image" />
                                </span>
                            </span>
                            <span className="title">
                                <span className="ellipsis">분야 분야 분야 분야 2줄</span>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default BadgeCategory;