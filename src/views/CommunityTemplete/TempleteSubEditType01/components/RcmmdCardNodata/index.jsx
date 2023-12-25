import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import ModalSelectCard from "../ModalSelectCard";

class RcmmdCard extends Component {

    state = { activeIndex: 0, popup: false };

    handlePopup = () => {
        const {popup} = this.state
        this.setState({popup: !popup})
    }

    render(){
        const { activeIndex, popup } = this.state;

        return(
            <div className="rmd_form">
                <Form>
                    <Form.Field>
                        <div className="flex sp_bt">
                            <label className="field_tit">추천 과정</label>
                            <Button
                                active={activeIndex === 1}
                                index={1}
                                onClick={this.handlePopup}
                                className="btn_select add_file"
                            >
                                Card 선택
                            </Button>

                            {/* 카드선택 팝업 */}
                            {popup && <ModalSelectCard />}

                        </div>

                        {/* 'Card선택' 버튼 클릭 전에는 아래 테이블(table_card영역)이 보이지 않아야 하고,
                        팝업에서 선택한 카드가 있을때에는 보여야 합니다. */}
                        <div className="table_card">
                            {/*
                            <Table>
                            </Table> */}
                            <div className="nodata">
                                <p className="txt">추천하는 학습과정을 선택하세요.</p>
                            </div>
                        </div>
                    </Form.Field>
                </Form>
            </div>
        )
    }
}

export default RcmmdCard;