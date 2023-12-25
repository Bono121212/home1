import React, {Component} from 'react'
import { Icon, Button } from 'semantic-ui-react';
import TopButtonGroup from '../TopButtonGroup';
import classNames from 'classnames';

class TopGuideTitle extends Component {
    //
    render() {
        //
        const { isOnFilter, onClickFilter } = this.props;

        return (
            <div className="top-guide-title">

                <TopButtonGroup/>
                <div className="right-wrap">
                    {/* <div className="view-all">
                        <Radio
                            label="코스만보기"
                            className="base"
                            name="radioGroup"
                            defaultChecked
                        />
                        <Radio
                            label="전체보기"
                            className="base"
                            name="radioGroup"
                        />
                    </div> */}
                    <Button icon className={classNames(isOnFilter ? 'on btn-filter-blue' : 'left post')} onClick={onClickFilter}>
                        {!isOnFilter && (<Icon className="filter2"/>)}
                        <span>Filter</span>
                    </Button>
                </div>

                {/*기존-운영반영*/}
                {/*<div className="list-number">총 <strong>24개</strong>의 리스트가 있습니다.</div>*/}
                {/*<div className="right-wrap">*/}
                    {/*<div className="view-all">*/}
                        {/*<Checkbox className="base" label="전체보기" />*/}
                    {/*</div>*/}
                    {/*<Button icon className='left post'><Icon className='filter2'/>Filter</Button>*/}
                {/*</div>*/}

                {/*/!*퍼블리싱 없이 개발에 추가된 부분 - 엑셀다운로드*!/*/}
                {/*<div className="right">*/}
                    {/*<span className='excel-wrap-guide'>※ 사별 교육시스템에서 이수한 학습정보는 제외(전체 학습시간은 반영)</span>*/}
                    {/*<span className='excel-wrap'>*/}
                        {/*<Button icon className='left post excel-down'><Icon className='excel-down'/>엑셀 다운로드</Button>*/}
                    {/*</span>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default TopGuideTitle
