import React, {Component} from 'react'
import { Accordion,  Image } from 'semantic-ui-react'

import '../../UserLayoutOldV3/UserLayoutOldV3.css';
import classNames from 'classnames';

// import GsearchInputWhite from './GsearchInputWhite';

import BtnSearch from '../../../images/all/icon-gnb-search-36-px.png'
import BtnClose from '../../../images/all/btn-search.svg'
import GsearchField from '../GsearchField';

class Gsearch extends Component {
    state = { activeIndex: 1 }

    handleClick = (e, titleProps) => {
      const { index } = titleProps
      const { activeIndex } = this.state
      const newIndex = activeIndex === index ? -1 : index
  
      this.setState({ activeIndex: newIndex })
    }


    render () {
        const { activeIndex } = this.state

        return (
            <>
                <Accordion>
                    <Accordion.Title
                        active={activeIndex === 0}
                        index={0}
                        onClick={this.handleClick}
                    >
                       <div className="inner">
                           <Image src={BtnSearch} className="btn_search b_search" alt="검색버튼"/>
                           <Image src={BtnClose} className="btn_search b_close" alt="검색버튼"/>
                       </div>
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        {/* 검색어 입력필드 */}
                        <GsearchField />
                    </Accordion.Content>
                </Accordion>
                
            </>
        )
    }
}

export default Gsearch;