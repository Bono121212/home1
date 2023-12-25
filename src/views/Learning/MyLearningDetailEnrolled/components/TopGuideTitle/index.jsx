import React, {Component} from 'react'


class TopGuideTitle extends Component {
    render() {
        return (
            <div className="top-guide-title">
                <div className="list-number">총 <strong>24개</strong>의 리스트가 있습니다.</div>
                <div className="right-wrap">
                    {/* <Button icon className={classNames('btn-filter-blue', isOnFilter ? 'on' : '')} onClick={onClickFilter}>
                        <span>Filter(05)</span>
                    </Button> */}
                </div>
            </div>
        )
    }
}

export default TopGuideTitle
