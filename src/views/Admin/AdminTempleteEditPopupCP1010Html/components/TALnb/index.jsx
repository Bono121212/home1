import React, { Component } from "react";
import { List, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

class TALnb extends Component {

    render() {
        return (
            <>
               <div className="ta_lnb_area">
                    <List as="ul" className="ta_lnb">
                        <List.Item as="li">
                            <Link to="/"><Icon className="i_board"/> 공지사항</Link>
                        </List.Item>
                        <List.Item as="li">
                            <Link to="/"><Icon className="i_board"/>딥 러닝의 역사</Link>                        
                        </List.Item>
                        <List.Item as="li" className="active">
                            <Link to="/"><Icon className="i_board"/>딥 러닝의 중요성</Link>   
                            <List as="ul" className="ta_lnb_sub">
                                <List.Item as="li">
                                    <Link to="/"><Icon className="i_board"/><span className="ellipsis">알고리즘</span></Link> 
                                </List.Item>
                                <List.Item as="li">
                                    <Link to="/"><Icon className="i_download"/><span className="ellipsis">알고리즘</span></Link> 
                                </List.Item>
                                <List.Item as="li">
                                    <Link to="/"><Icon className="i_survey"/><span className="ellipsis">알고리즘</span></Link> 
                                </List.Item>
                                <List.Item as="li">
                                    <Link to="/"><Icon className="i_link"/><span className="ellipsis">알고리즘</span></Link> 
                                </List.Item>
                            </List>                     
                        </List.Item>
                        <List.Item as="li">
                            <Link to="/"><Icon className="i_board"/>왜 다시 딥러닝인가</Link>                        
                        </List.Item>
                    </List>
               </div>
            </>
        );
    }
}

export default TALnb;
