import React, {useState} from 'react';
import {Label, Icon, Button} from 'semantic-ui-react';
import PlayListDetailTable from '../PlayListDetailTable';
import PlayListDetailEditTable from '../PlayListDetailEditTable';
import classNames from 'classnames';

function PlaylistDetailCardList ({type}){
    const [isEdit, setIsEdit] = useState(false);
    return(
        <div className='playlist-view-content'>
            {
                /* 내가만든 => 기존과 동일*/
                type === 'My' ? (
                <div className={classNames('list-top',{'active' : isEdit})}>
                    {!isEdit ?    
                        (
                            <div className='list-top-left f-left'>
                                <div>총 <strong>11개</strong> 학습카드</div>
                                <div>84h 30m</div>
                            </div>
                        ):(
                            <div className='list-top-left f-left'>
                                <Button className='btn-delete-list'>선택 삭제</Button>
                                <Label as='button' className='onlytext btn-add-list'>
                                    <Icon className='plus round16'/><span>학습카드 추가</span>
                                </Label>
                            </div>
                        )
                    }
                    <div className="list-top-right f-right">
                        <Label
                            as="button"
                            className="onlytext btn-modify-list"
                            onClick={() => { setIsEdit(!isEdit);}}
                        >
                            <Icon className="cog16" />
                            <span>
                                {isEdit ? `편집완료` : `편집하기`}
                            </span>
                        </Label>
                    </div>
                </div>
                ):(
                    /* 그외 => 기존과 동일*/
                    <div className='list-top'>
                        <div className='list-top-left f-left'>
                            <div>총 <strong>11개</strong> 학습카드</div>
                            <div>84h 30m</div>
                        </div>
                    </div>
                )
            }
            { /* 기존과 동일 */
                !isEdit ? (
                    <>
                        <PlayListDetailTable/>
                        <div className="more-comments">
                            <Button icon className="left moreview"><Icon className="icon moreview"/>list more</Button>
                        </div>
                    </>
                ):(<PlayListDetailEditTable/>)
            }
        </div>
    )
}

export default PlaylistDetailCardList;