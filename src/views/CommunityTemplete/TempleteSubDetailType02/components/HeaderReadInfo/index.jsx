import React, {useState, useEffect} from "react";
import { Button, Icon, Image, Label } from "semantic-ui-react";
// import heartIcon from "../../../../../images/all/btn-community-like-on-16-px.png";
import profileImg from "../../../../../images/all/img-profile-56-px.png"


const HeaderReadInfo = () => {
    const [importance, setImportance] = useState(false);
    const [importanceText, setImportanceText] = useState('등록');

    const handlerImportance = () => {
        setImportance(!importance);
    }
    useEffect(() => {
        importance ? setImportanceText('해제') : setImportanceText('등록');
    }, [importance])
    return (
        <div className="board_header flex">
            <div className="header_left_area flex">
                <div className="pic_prf ">
                    <Image src={profileImg} alt="프로필이미지"/>
                    <div className="prf_info">
                        <strong>캠핑마스터</strong>
                        <span>2021.05.10</span>
                    </div>
                </div>
                <Label as="span" className="line_left">
                    조회
                    <Label.Detail>1,578</Label.Detail>
                </Label>
                <Label as="span" className="line_left">
                    좋아요
                    <Label.Detail>1,004</Label.Detail>
                </Label>
                <Label as="span" className="line_left">
                    댓글
                    <Label.Detail>109</Label.Detail>
                </Label>
            </div>
            <div className="header_right_area">
                <Button className="post_header" icon onClick={handlerImportance}>
                    <Icon className={importance?'importance_on':'importance_bk'}/>{importanceText}
                </Button>
                <Button className="post_header" icon> <Icon className="edit_bk"/>수정</Button>
                <Button className="post_header" icon> <Icon className="delete_bk"/>삭제</Button>
                <Button className="post_header" icon> <Icon className="share_bk"/>공유</Button>
                <Button className="post_header" icon> <Icon className="mark_bk"/>저장</Button>
                <Button className="post_header" icon> <Icon className="list_bk"/>목록</Button>
            </div>
        </div>
    );
};

export default HeaderReadInfo;
