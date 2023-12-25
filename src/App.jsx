import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// layout
import UserLayout from './layouts/UserLayout/UserLayout';
import UserLayoutCube from './layouts/UserLayoutCube/UserLayout';
import UserLayoutCard from './layouts/UserLayoutCard/UserLayout';
import UserLayoutHeader from './layouts/UserLayoutHeader/UserLayout';
import UserLayoutCom from './layouts/UserLayoutCom/UserLayout';
import UserLayoutMain from './layouts/UserLayoutMain/UserLayoutMain';
import UserLayoutSearch from './layouts/UserLayoutSearch/UserLayoutSearch';
import TeacherLayout from './layouts/TeacherLayout/TeacherLayout';
import UserLayoutTemplete from './layouts/UserLayoutTemplete/UserLayoutTemplete';
import UserLayoutCubeCareer from './layouts/UserLayoutCubeCareer/UserLayout';
import UserLayoutCareer from './layouts/UserLayoutCareer/UserLayoutCareer';
import UserLayoutMainCareer from './layouts/UserLayoutMainCareer/UserLayoutMainCareer';
import UserLayoutSearchCareer from './layouts/UserLayoutSearchCareer/UserLayoutSearchCareer';
//import UserLayoutOldV4TypeC from './layouts/UserLayoutOldV4TypeC/UserLayoutOldV4TypeC'
// page

// -------------------------------------------------------------------------------------
// Learning V2
// -------------------------------------------------------------------------------------
// Learning - Template
import CardOverviewTemp from './views/Learning/_Templates/CardOverviewTemp';
import SingleOverviewTemp from './views/Learning/_Templates/SingleOverviewTemp';
import SingleOverviewTempCareer from './views/Learning/_Templates/SingleOverviewTempCareer';
import CubeOverviewTemp from './views/Learning/_Templates/CubeOverviewTemp';
import SingleCubeTemp from './views/Learning/_Templates/SingleCubeTemp';

// Learning - Card Overview
import CardOverviewAlways from './views/Learning/CardOverview/CardOverviewAlways';
import CardOverviewAlwaysFail from './views/Learning/CardOverview/CardOverviewAlwaysFail';
import CardOverviewPreiod from './views/Learning/CardOverview/CardOverviewPreiod';
import CardOverviewPreiod02 from './views/Learning/CardOverview/CardOverviewPreiod02';
import CardOverviewPreiod03 from './views/Learning/CardOverview/CardOverviewPreiod03';
import CardOverviewLive from './views/Learning/CardOverview/CardOverviewLive';
import CardOverviewInqueryModal from './views/Learning/CardOverview/CardOverviewInqueryModal';
import CardOverviewInqueryModalError from './views/Learning/CardOverview/CardOverviewInqueryModalError';

// Learning - Video
import CubeVideo from './views/Learning/CubeVideo/CubeVideo';
import SingleVideo from './views/Learning/CubeVideo/SingleVideo';

// Learning - Video Quiz
import CubeVideoQuiz from './views/Learning/CubeVideoQuiz';
import CubeVideoQuizDefaut from './views/Learning/CubeVideoQuizDefaut';
import CubeVideoQuiz01Single from './views/Learning/CubeVideoQuiz01Single';
import CubeVideoQuizImageZoom from './views/Learning/CubeVideoQuizImageZoom';
import CubeVideoQuiz03Short from './views/Learning/CubeVideoQuiz03Short';
import CubeVideoQuiz04Descriptive from './views/Learning/CubeVideoQuiz04Descriptive';
import CubeVideoQuiz05ResultSurvey from './views/Learning/CubeVideoQuiz05ResultSurvey';
import CubeVideoQuizWrong from './views/Learning/CubeVideoQuizWrong';
import CubeVideoQuizAnswerOk from './views/Learning/CubeVideoQuizAnswerOk';
import CubeVideoQuizFinish from './views/Learning/CubeVideoQuizFinish';
import CubeVideoQuizSample from './views/Learning/CubeVideoQuizSample';
import CubeVideoQuizDescription from './views/Learning/CubeVideoQuizDescription';
import CubeVideoQuizAlertClose from './views/Learning/CubeVideoQuizAlertClose';

// Learning - Audio
import CubeAudio from './views/Learning/CubeAudio/CubeAudio';
import SingleAudio from './views/Learning/CubeAudio/SingleAudio';

// Learning - Document
import CubeDocument from './views/Learning/CubeDocument/CubeDocument';
import SingleDocument from './views/Learning/CubeDocument/SingleDocument';

// Learning - Assignment
import CubeAssignment from './views/Learning/CubeAssignment/CubeAssignment';
import CubeAssignmentCondStatic from './views/Learning/CubeAssignment/CubeAssignmentCondStatic';
import CubeAssignmentPostEmpty from './views/Learning/CubeAssignment/CubeAssignmentPostEmpty';
import CubeAssignmentPostNoData from './views/Learning/CubeAssignment/CubeAssignmentPostNoData';
import CubeAssignmentPostWrite from './views/Learning/CubeAssignment/CubeAssignmentPostWrite';
import CubeAssignmentPostDetail from './views/Learning/CubeAssignment/CubeAssignmentPostDetail';
import CubeAssignmentReportWrite from './views/Learning/CubeAssignment/CubeAssignmentReportWrite';
import CubeAssignmentReportGrading from './views/Learning/CubeAssignment/CubeAssignmentReportGrading';
import CubeAssignmentReportFail from './views/Learning/CubeAssignment/CubeAssignmentReportFail';
import CubeAssignmentReportPass from './views/Learning/CubeAssignment/CubeAssignmentReportPass';
import SingleAssignment from './views/Learning/CubeAssignment/SingleAssignment';

// Learning - Discussion
import CubeDiscussion from './views/Learning/CubeDiscussion/CubeDiscussion';
import CubeDiscussionNodata from './views/Learning/CubeDiscussion/CubeDiscussionNodata';
import SingleDiscussion from './views/Learning/CubeDiscussion/SingleDiscussion';

// Learning - Webpage
import CubeWebpage from './views/Learning/CubeWebpage/CubeWebpage';
import CubeWebpageCoursera from './views/Learning/CubeWebpage/CubeWebpageCoursera';
import SingleWebpage from './views/Learning/CubeWebpage/SingleWebpage';
import CubeWebpageEmbd from './views/Learning/CubeWebpage/CubeWebpageEmbd';
import SingleWebpageEmbd from './views/Learning/CubeWebpage/SingleWebpageEmbd';

// Learning - Class
import CubeClass from './views/Learning/CubeClass/CubeClass';
import CubeClassAbsence from './views/Learning/CubeClass/CubeClassAbsence';
import SingleClass from './views/Learning/CubeClass/SingleClass';
import SingleClassEnrolmentModal from './views/Learning/CubeClass/SingleClassEnrolmentModal';
// import CubeDetailClassSeriesDetailModalV2 from './views/Learning/CubeDetailClassSeriesDetailModalV2';
// import CubeDetailClassSeriesDetailSelectModal from './views/Learning/CubeDetailClassSeriesDetailSelectModal';
// import CubeDetailClassSeriesDetailApplyReferenceOptionModal from './views/Learning/CubeDetailClassSeriesDetailApplyReferenceOptionModal';

// Learning - Live
import CubeLive from './views/Learning/CubeLive/CubeLive';
import CubeLivePopup from './views/Learning/CubeLive/CubeLivePopup';
import CubeLivePopup02 from './views/Learning/CubeLive/CubeLivePopup02';
import SingleLive from './views/Learning/CubeLive/SingleLive';

// Learning - Test
import CubeTest from './views/Learning/CubeTest/CubeTest';
import CubeTest02 from './views/Learning/CubeTest/CubeTest02';
import CubeTestPass from './views/Learning/CubeTest/CubeTestPass';
import CubeTestFail from './views/Learning/CubeTest/CubeTestFail';
import CubeTestConfirm from './views/Learning/CubeTest/CubeTestConfirm';

import CubeTestText from './views/Learning/CubeTestText';
import CubeTestInfo from './views/Learning/CubeTestInfo';
import CubeTestComplete from './views/Learning/CubeTestComplete';
import SingleTest from './views/Learning/CubeTest/SingleTest';

// Learning - Talk
import CubeTalk from './views/Learning/CubeTalk/CubeTalk';

// Learning - Survey
import CubeSurvey from './views/Learning/CubeSurvey/CubeSurvey';
import CubeSurveyBasic from './views/Learning/CubeSurveyBasic';
import CubeSurveyGroup from './views/Learning/CubeSurveyGroup';
import CubeSurveyZoom from './views/Learning/CubeSurveyZoom';
import CubeSurveyCore from './views/Learning/CubeSurveyCore';
import CubeSurveyChartBasic from './views/Learning/CubeSurveyChartBasic';
import CubeSurveyChartCore from './views/Learning/CubeSurveyChartCore';
import CubeSurveyComplete from './views/Learning/CubeSurvey/CubeSurveyComplete';
import CubeSurveyDone from './views/Learning/CubeSurvey/CubeSurveyDone';
import SingleSurvey from './views/Learning/CubeSurvey/SingleSurvey';

// Learning - 삭제대기
import SurveyDetail from './views/Learning/SurveyDetail';
import TestDetail from './views/Learning/TestDetail';
import TestMarkedDetail from './views/Learning/TestMarkedDetail';
import LearningDetailReferenceModal from "./views/Learning/LearningDetailReferenceModal";
import LearningDetailCourseraModal from "./views/Learning/LearningDetailCourseraModal";
import LearningApproverAppointmentModal from './views/Learning/LearningApproverAppointmentModal';
// import CourseDetailOverview from "./views/Learning/CourseDetailOverview";
// import CourseDetailCase from "./views/Learning/CourseDetailCase";
// import CourseDetailSample from "./views/Learning/CourseDetailSample";
// import CourseDetailPreCourse from "./views/Learning/CourseDetailPreCourse";

import AllLecturerCommon from './views/Expert/AllLecturerCommon';
import TeacherLecture from './views/Expert/TeacherLecture';
import TeacherLectureNoData from './views/Expert/TeacherLectureNoData';
// import ExternalTeacherMain from './views/Expert/ExternalTeacherSystem/ExternalTeacherMain';
// import ExternalTeacherMainCubeTab from './views/Expert/ExternalTeacherSystem/ExternalTeacherMainCubeTab';
import ExternalTeacherMainCardV2 from './views/Expert/ExternalTeacherSystem/ExternalTeacherMainV2/CardTab';
import ExternalTeacherMainCubeV2 from './views/Expert/ExternalTeacherSystem/ExternalTeacherMainV2/CubeTab';
import ExternalTeacherMainCommunityV2 from './views/Expert/ExternalTeacherSystem/ExternalTeacherMainV2/CommunityTab';
import ExternalTeacherIntroCardV2 from './views/Expert/ExternalTeacherSystem/ExternalTeacherIntroV2/CardIndex';
import ExternalTeacherIntroCubeV2 from './views/Expert/ExternalTeacherSystem/ExternalTeacherIntroV2/CubeIndex';
import ExternalTeacherTask from './views/Expert/ExternalTeacherSystem/ExternalTeacherTask';
import ExternalTeacherTest from './views/Expert/ExternalTeacherSystem/ExternalTeacherTest';
import ExternalTeacherModalScore from './views/Expert/ExternalTeacherSystem/ExternalTeacherModalScore';
import ExternalTeacherModalView from './views/Expert/ExternalTeacherSystem/ExternalTeacherModalView';
import ExternalTeacherModalView2 from './views/Expert/ExternalTeacherSystem/ExternalTeacherModalView2';
import ExternalTeacherModalTestAll from './views/Expert/ExternalTeacherSystem/ExternalTeacherModalTestAll';
import ExternalTeacherModalTaskAll from './views/Expert/ExternalTeacherSystem/ExternalTeacherModalTaskAll';
import ExternalTeacherModalView2Task from './views/Expert/ExternalTeacherSystem/ExternalTeacherModalView2Task';
import ExternalTeacherOverview from './views/Expert/ExternalTeacherSystem/ExternalTeacherOverview';
import ExternalTeacherComment from './views/Expert/ExternalTeacherSystem/ExternalTeacherComment';
import ExternalTeacherSearchA from './views/Expert/ExternalTeacherSystem/ExternalTeacherSearchA';
import ExternalTeacherSearchB from './views/Expert/ExternalTeacherSystem/ExternalTeacherSearchB';
import ExternalTeacherMainProfile from './views/Expert/ExternalTeacherSystem/ExternalTeacherMain/profileOpen';

// Learning - BlendedChapter
import CubeBlendedChapter from './views/Learning/CubeBlendedChapter';
import CubeBlendedChapterCase2 from './views/Learning/CubeBlendedChapterCase2';
import CubeBlendedChapterCase3 from './views/Learning/CubeBlendedChapterCase3';
import CubeBlendedChapterQuiz from './views/Learning/CubeBlendedChapterQuiz';

// Learning
import MyLearningDetailCommonNew from './views/Learning/MyLearningDetailCommonNew';
import MyLearningDetailInProgressNote from './views/Learning/MyLearningDetailInProgressNote';
import MyLearningDetailEnrolled from './views/Learning/MyLearningDetailEnrolled';
import MyLearningDetailRequired from './views/Learning/MyLearningDetailRequired';
import MyLearningDetailCompleted from './views/Learning/MyLearningDetailCompleted';
import MyLearningDetailRetry from './views/Learning/MyLearningDetailRetry';
import MyLearningDetailAPLCompleted from './views/Learning/MyLearningDetailAPLCompleted';
import MyLearningDetailAPLDetail from './views/Learning/MyLearningDetailAPLDetail';

import AddPersonalLearningForm from './views/Learning/AddPersonalLearningForm';
import AddPersonalLearningFormNew from './views/Learning/AddPersonalLearningFormNew';
import AddPersonalLearningModal from './views/Learning/AddPersonalLearningModal';
import AddPersonalLearningCreate from './views/Learning/AddPersonalLearningCreate';
import LearningCardDetailLinkedInModal from './views/Learning/LearningCardDetailLinkedInModal';
import LearningCardDetailCourseraModal from './views/Learning/LearningCardDetailCourseraModal';


// import MyLearningDetailVideoContinueModal from './views/Learning/MyLearningDetailVideoContinueModal';
// import MyLearningDetailReportModal from './views/Learning/MyLearningDetailReportModals';
/*Learning add*/
import MyCommunityMain from './views/Learning/MyCommunityMain';
import MyCommunityMainFavoritesNodata from './views/Learning/MyCommunityMain/FavoritNodata';
import MyCommunityMainIngNodata from './views/Learning/MyCommunityMain/IngNodata';
import MyCommunityOpenPopup from './views/Learning/MyCommunityOpenPopup';
import MyCommunityMainFollow from './views/Learning/MyCommunityMainFollow';
import MyCommunityMainFollowNodata from './views/Learning/MyCommunityMainFollow/nodata';
import MyCommunityHome from './views/Learning/MyCommunityHome';
import MyCommunityHomeDetail from './views/Learning/MyCommunityHomeDetail';
import MyCommunityHomeDetailNew from './views/Learning/MyCommunityHomeDetailNew';
import MyCommunityHomeMember from './views/Learning/MyCommunityHomeMember';
import MyCommunityHomeGroup from './views/Learning/MyCommunityHomeGroup';
import MyCommunityHomeApproval from './views/Learning/MyCommunityHomeApproval';
import MyCommunityHomeApprovalNodata from './views/Learning/MyCommunityHomeApprovalNodata';
import MyCommunityHomeGroupNodata from './views/Learning/MyCommunityHomeGroupNodata';

// import MyCommunityMainNew from './views/Community/MyCommunityMainNew';

import MyCommunityOpen from './views/Community/MyCommunityOpen';
import MyCommunityOpenNodata from './views/Community/MyCommunityOpenNodata';


import MyCommunityBoardList from './views/Learning/MyCommunityBoardList';
import MyCommunityBoardListNew from './views/Community/MyCommunityBoardListNew';
import MyCommunityBoardListView from './views/Learning/MyCommunityBoardListView';
import MyCommunityBoardWrite from './views/Learning/MyCommunityBoardWrite';
import MyCommunityBoardWriteNew from './views/Community/MyCommunityBoardWriteNew';
import MyCommunityBoardWriteNewCard from './views/Community/MyCommunityBoardWriteNewCard';
import MyCommunityBoardRead from './views/Learning/MyCommunityBoardRead';
import MyCommunityBoardReadNew from './views/Learning/MyCommunityBoardReadNew';
import MyCommunityBoardDiscuss from './views/Learning/MyCommunityBoardDiscuss';
import MyCommunityBoardDiscuss04 from './views/Learning/MyCommunityBoardDiscuss04';
// import MyCommunityBoardPractice from './views/Learning/MyCommunityBoardPractice';


import MyCommunityDataroomList from './views/Learning/MyCommunityDataroomList';
import MyCommunityDataroomListNew from './views/Community/MyCommunityDataroomListNew';
import MyCommunityDataroomWrite from './views/Learning/MyCommunityDataroomWrite';
import MyCommunityDataroomWriteNew from './views/Community/MyCommunityDataroomWriteNew';
import MyCommunityDataroomRead from './views/Learning/MyCommunityDataroomRead';
import MyCommunityDataroomPopup from './views/Learning/MyCommunityDataroomPopup';

import MyCommunitySurvey from './views/Learning/MyCommunitySurvey';
import MyCommunityHomeEmpty from './views/Learning/MyCommunityHomeEmpty';
import MyCommunityHomeEmptyTest from './views/Learning/MyCommunityHomeEmptyTest';

//Community Admin
import AdminMemberList from './views/Admin/AdminMemberList';
import AdminMemberAlertPopup from './views/Admin/AdminMemberAlertPopup';
import AdminMemberAlertPopupReject from './views/Admin/AdminMemberAlertPopupReject';
import AdminMemberListNodata from './views/Admin/AdminMemberListNodata';
import AdminMemberHoldingList from './views/Admin/AdminMemberHoldingList';
import AdminMemberHoldingListNodata from './views/Admin/AdminMemberHoldingListNodata';
import AdminMemberRegistration from './views/Admin/AdminMemberRegistration';
import AdminTempleteList from './views/Admin/AdminTempleteList';
import AdminTempleteListPopup from './views/Admin/AdminTempleteListPopup';
import AdminIntroList from './views/Admin/AdminIntroList';
import AdminIntroListNodata from './views/Admin/AdminIntroListNodata';
import AdminIntroListPopup from './views/Admin/AdminIntroListPopup';
import AdminIntroAddPopup from './views/Admin/AdminIntroAddPopup';
import AdminIntroDesign1200 from './views/Admin/AdminIntroDesign1200';
import AdminIntroDesign1200Sample from './views/Admin/AdminIntroDesign1200Sample';
import AdminIntroDesign100 from './views/Admin/AdminIntroDesign100';
import AdminIntroDesign100Sample from './views/Admin/AdminIntroDesign100Sample';
import AdminIntroDesignHtml from './views/Admin/AdminIntroDesignHtml';
import AdminTempleteAddA from './views/Admin/AdminTempleteAddA';
import AdminTempleteAddB from './views/Admin/AdminTempleteAddB';
import AdminTempleteAddC from './views/Admin/AdminTempleteAddC';
import AdminTempleteEdit from './views/Admin/AdminTempleteEdit';
import AdminTempleteEditPreview from './views/Admin/AdminTempleteEditPreview';
import AdminTempleteEditPreviewB from './views/Admin/AdminTempleteEditPreviewB';
import AdminTempleteEditPreviewC from './views/Admin/AdminTempleteEditPreviewC';
import AdminTempleteEditB from './views/Admin/AdminTempleteEditB';
import AdminTempleteEditC from './views/Admin/AdminTempleteEditC';
import AdminTempleteEditPopup1 from './views/Admin/AdminTempleteEditPopup1';
import AdminTempleteEditPopup2 from './views/Admin/AdminTempleteEditPopup2';
import AdminTempleteEditPopup3 from './views/Admin/AdminTempleteEditPopup3';
import AdminTempleteEditPopupCP1010 from './views/Admin/AdminTempleteEditPopupCP1010';
import AdminTempleteEditPopupCP1010Img from './views/Admin/AdminTempleteEditPopupCP1010Img';
import AdminTempleteEditPopupCP1010Board from './views/Admin/AdminTempleteEditPopupCP1010Board';
import AdminTempleteEditPopupCP2010ImgSlide from './views/Admin/AdminTempleteEditPopupCP2010ImgSlide';
import AdminTempleteEditPopupCP2010ImgGrid from './views/Admin/AdminTempleteEditPopupCP2010ImgGrid';
import AdminTempleteEditPopupCP3010ImgSlide from './views/Admin/AdminTempleteEditPopupCP3010ImgSlide';
import AdminTempleteEditPopupCP3010ImgGrid from './views/Admin/AdminTempleteEditPopupCP3010ImgGrid';
import AdminTempleteEditPopupCP2010Board from './views/Admin/AdminTempleteEditPopupCP2010Board';
import AdminTempleteEditPopupCP2010BoardImgTxt from './views/Admin/AdminTempleteEditPopupCP2010BoardImgTxt';
import AdminTempleteEditPopupCP3010Board from './views/Admin/AdminTempleteEditPopupCP3010Board';
import AdminTempleteEditPopupCP3010BoardPost from './views/Admin/AdminTempleteEditPopupCP3010BoardPost';
import AdminTempleteEditPopupCP3010BoardPost2 from './views/Admin/AdminTempleteEditPopupCP3010BoardPost2';
import AdminTempleteEditPopupCP3010BoardPostSearch from './views/Admin/AdminTempleteEditPopupCP3010BoardPostSearch';
import AdminTempleteEditPopupCP3010BoardPostSearchResult from './views/Admin/AdminTempleteEditPopupCP3010BoardPostSearchResult';
import AdminTempleteEditPopupCP1010Html from './views/Admin/AdminTempleteEditPopupCP1010Html';
import AdminTempleteEditPopupCP3010Html from './views/Admin/AdminTempleteEditPopupCP3010Html';
import AdminTempleteEditPopupCP1010Video from './views/Admin/AdminTempleteEditPopupCP1010Video';
import AdminTempleteEditPopupCP2010Video from './views/Admin/AdminTempleteEditPopupCP2010Video';
import AdminTempleteEditPopupCP3010VideoPost from './views/Admin/AdminTempleteEditPopupCP3010VideoPost';
import AdminTempleteEditPopupCP3010VideoYoutube from './views/Admin/AdminTempleteEditPopupCP3010VideoYoutube';
import AdminTempleteEditPopupCP1010Tab from './views/Admin/AdminTempleteEditPopupCP1010Tab';
import AdminTempleteEditPopupCP2010Tab from './views/Admin/AdminTempleteEditPopupCP2010Tab';
import AdminTempleteEditPopupCP3010Tab from './views/Admin/AdminTempleteEditPopupCP3010Tab';

import AdminTempleteEditPopupCP3010LCard1 from './views/Admin/AdminTempleteEditPopupCP3010LCard1';
import AdminTempleteEditPopupCP3010LCard2 from './views/Admin/AdminTempleteEditPopupCP3010LCard2';
import AdminTempleteEditPopupCP3010LCardPostSearch from './views/Admin/AdminTempleteEditPopupCP3010LCardPostSearch';
import AdminTempleteEditPopupCP3010LCardPostSearchResult from './views/Admin/AdminTempleteEditPopupCP3010LCardPostSearchResult';


import AdminGroupList from './views/Admin/AdminGroupList';
import AdminGroupListNodata from './views/Admin/AdminGroupListNodata';
import AdminGroupCreate from './views/Admin/AdminGroupCreate';
import AdminGroupAlertPopup from './views/Admin/AdminGroupAlertPopup';
import AdminGroupDetailList from './views/Admin/AdminGroupDetailList';
import AdminGroupDetailListNodata from './views/Admin/AdminGroupDetailListNodata';
import AdminMemberGroupAdd from './views/Admin/AdminMemberGroupAdd';
import MenuDefault from './views/Admin/MenuDefault';
import MenuDefaultAdd from './views/Admin/MenuDefaultAdd';
import MenuDefaultAddCategory from './views/Admin/MenuDefaultAddCategory';
import MenuDefaultAddDiscussion from './views/Admin/MenuDefaultAddDiscussion';
import MenuDefaultAddList from './views/Admin/MenuDefaultAddList';
import MenuDefaultAddSurvey from './views/Admin/MenuDefaultAddSurvey';
import AdminMenuAddSurveyPopup from './views/Admin/AdminMenuAddSurveyPopup';
import MenuDefaultAddLink from './views/Admin/MenuDefaultAddLink';
import MenuDefaultAddHtml from './views/Admin/MenuDefaultAddHtml';
import HomeMenuDefault from './views/Admin/HomeMenuDefault';
import HomeMenuDefaultNew from './views/Admin/HomeMenuDefaultNew';
import HomeMenuHtml from './views/Admin/HomeMenuHtml';
import AdminCommunityChartBoard from './views/Admin/AdminCommunityChartBoard';
import AdminCommunityChartBoard3m from './views/Admin/AdminCommunityChartBoard3m';
import AdminCommunityChartBoardDefault from './views/Admin/AdminCommunityChartBoardDefault';
import AdminCommunityChartBoardCnt from './views/Admin/AdminCommunityChartBoardCnt';
import AdminCommunityChartBoardCnt3m from './views/Admin/AdminCommunityChartBoardCnt3m';
import AdminCommunityChartBoardCntOpen from './views/Admin/AdminCommunityChartBoardCntOpen';
import AdminCommunityChartMember from './views/Admin/AdminCommunityChartMember';
import AdminCommunityChartMemberDefault from './views/Admin/AdminCommunityChartMemberDefault';
import AdminCommunityChartMenu from './views/Admin/AdminCommunityChartMenu';
import AdminCommunityChartMenuDefault from './views/Admin/AdminCommunityChartMenuDefault';
import AdminCommunityChartVisit from './views/Admin/AdminCommunityChartVisit';
import AdminCommunityChartVisit3m from './views/Admin/AdminCommunityChartVisit3m';
import AdminCommunityChartVisitDefault from './views/Admin/AdminCommunityChartVisitDefault';

//MyPage
import MyPageCompletedList from './views/MyPage/MyPageCompletedList';
import MyPageCompletedListNoData from './views/MyPage/MyPageCompletedListNoData';
import ProfilePhotoChangeModal from './views/MyPage/ProfilePhotoChangeModal';
import ChannelChangeModal from './views/MyPage/ChannelChangeModal';
import ChannelChangeSearchModal from './views/MyPage/ChannelChangeSearchModal';
import ChannelChangeSearchNoDataModal from './views/MyPage/ChannelChangeSearchNoDataModal';
import LearningTimeDetailModal from './views/MyPage/LearningTimeDetailModal';
import CompletedListCase from './views/MyPage/CompletedListCase';
import CompletedListCaseLearningTime from './views/MyPage/CompletedListCaseLearningTime';
import EarnedStampList from './views/MyPage/EarnedStampList';
import EarnedStampListNoData from './views/MyPage/EarnedStampListNoData';
import MyBadgeList from './views/MyPage/MyBadgeList';
// import MyFoundationSkill from './views/MyPage/MyFoundationSkill';
import MyFoundationSkillV2 from './views/MyPage/MyFoundationSkillV2';
import MyFoundationSkillV2Completed from './views/MyPage/MyFoundationSkillV2/Completed';
import LearningStateModal from './views/MyPage/MyFoundationSkillV2/LearningStateModal';
import LearningStateModal2 from './views/MyPage/MyFoundationSkillV2/LearningStateModal2';

import MyPageLnbNoteAll from './views/MyPage/MyPageLnbNoteAll';
import MyPageLnbNoteAllNodata from './views/MyPage/MyPageLnbNoteAllNodata';
import MyPageLnbNoteFolder from './views/MyPage/MyPageLnbNoteFolder';
import MyPageLnbNoteFolderPopup from './views/MyPage/MyPageLnbNoteFolderPopup';
import MyPageLnbNoteFolderNodata from './views/MyPage/MyPageLnbNoteFolderNodata';
import MyNoteListAll from './views/MyPage/MyNoteListAll';
import MyNoteListFolder from './views/MyPage/MyNoteListFolder';
import MyNoteListFolderPopup from './views/MyPage/MyNoteListFolderPopup';
import MyPageLnbProfileEdit from './views/MyPage/MyPageLnbProfileEdit';
import MyPageLnbProfileMyBadge from './views/MyPage/MyPageLnbProfileMyBadge';
import MyPageLnbProfileMyStamp from './views/MyPage/MyPageLnbProfileMyStamp';
import MyPageLnbProfileMyBadgeNodata from './views/MyPage/MyPageLnbProfileMyBadgeNodata';
import MyPageLnbProfileMyStampNodata from './views/MyPage/MyPageLnbProfileMyStampNodata';

//1203 v3
import MyPageLnbProfileEditV3 from './views/MyPage/MyPageLnbProfileEditV3';
import MyPageLnbProfileMyBadgeV4 from './views/MyPage/MyPageLnbProfileMyBadgeV4'; // 22-08-23 Badge
import MyPageLnbProfileMyBadgeNodataV3 from './views/MyPage/MyPageLnbProfileMyBadgeNodataV3';
import MyPageLnbProfileMyStampV3 from './views/MyPage/MyPageLnbProfileMyStampV3';
import MyPageLnbProfileMyStampNodataV3 from './views/MyPage/MyPageLnbProfileMyStampNodataV3';
import MyPageLnbNoteAllV3 from './views/MyPage/MyPageLnbNoteAllV3';
import MyPageLnbNoteFolderV3 from './views/MyPage/MyPageLnbNoteFolderV3';

//Mypage > Playlist
import MypageLnbPlaylistList from './views/MyPage/MypageLnbPlaylistList';
import MyPageLnbPlaylistListNodata from './views/MyPage/MypageLnbPlaylistListNodata';
import MypageLnbPlaylistDetailRecommended from './views/MyPage/MypageLnbPlaylistDetailRecommended';
import MypageLnbPlaylistDetailMyList from './views/MyPage/MypageLnbPlaylistDetailMyList';
import MypageLnbPlaylistDetailMyListNodata from './views/MyPage/MypageLnbPlaylistDetailMyListNodata';
import MypageLnbPlaylistDetailModifyMyList from './views/MyPage/MypageLnbPlaylistDetailModifyMyList';
import MypageLnbPlaylistCommentMyList from './views/MyPage/MypageLnbPlaylistCommentMyList';
import MypageLnbPlaylistCommentMyListNodata from './views/MyPage/MypageLnbPlaylistCommentMyListNodata';
import MypageLnbPlaylistDetailLike from './views/MyPage/MypageLnbPlaylistDetailLike';

//Mapage > Dashboard
import MypageLnbDashboard from './views/MyPage/MypageLnbDashboard';

//FoundationSkill
import FoundationSkillApply from './views/FoundationSkill/FoundationSkillApply';
import FoundationSkillApplyComp from './views/FoundationSkill/FoundationSkillApplyComp';
import FoundationSkillApplyPage from './views/FoundationSkill/FoundationSkillApplyPage';
import FoundationSkillApplyPageComp from './views/FoundationSkill/FoundationSkillApplyPageComp';
import FoundationSkillList from './views/FoundationSkill/FoundationSkillList';
import FoundationSkillApply2nd from './views/FoundationSkill/FoundationSkillApply2nd';

//PlayList
import PlaylistListAll from './views/PlayList/PlaylistListAll/';
import PlaylistListAllNoData from './views/PlayList/PlaylistListAll/indexNoData';
import PlaylistDetailMyList from './views/PlayList/PlaylistDetailMyList';
import PlaylistDetailOtherList from './views/PlayList/PlaylistDetailOtherList';
import PlaylistDetailSaveList from './views/PlayList/PlaylistDetailSaveList';
import PlaylistDetailRecommendedList from './views/PlayList/PlaylistDetailRecommendedList';

import CreatePlayListPopup from './views/PlayList/PlayListPopup/CreatePlayListPopup';
import CreatePlayListPopupError from './views/PlayList/PlayListPopup/CreatePlayListPopupError';
import AddPlayListPopup from './views/PlayList/PlayListPopup/AddPlayListPopup';
import AddPlayListPopupNodata from './views/PlayList/PlayListPopup/AddPlayListPopupNodata';
import ModalSelectCard from './views/PlayList/PlayListPopup/ModalSelectCard';
import SharePlayListPopup10 from './views/PlayList/PlayListPopup/SharePlayListPopup10';
import SharePlayListPopup11 from './views/PlayList/PlayListPopup/SharePlayListPopup11';
import SharePlayListPopup12 from './views/PlayList/PlayListPopup/SharePlayListPopup12';
import SharePlayListPopup20 from './views/PlayList/PlayListPopup/SharePlayListPopup20';
import SharePlayListPopup21 from './views/PlayList/PlayListPopup/SharePlayListPopup21';
import SharePlayListPopup22 from './views/PlayList/PlayListPopup/SharePlayListPopup22';
import SharePlayListPopup30 from './views/PlayList/PlayListPopup/SharePlayListPopup30';
import SharePlayListPopup31 from './views/PlayList/PlayListPopup/SharePlayListPopup31';
import SharePlayListPopup32 from './views/PlayList/PlayListPopup/SharePlayListPopup32';
import SharePlayListPopup33 from './views/PlayList/PlayListPopup/SharePlayListPopup33';
import ShareUserListPopup01 from './views/PlayList/PlayListPopup/ShareUserListPopup01';
import ShareUserListPopup02 from './views/PlayList/PlayListPopup/ShareUserListPopup02';
import ShareUserListPopupNodata from './views/PlayList/PlayListPopup/ShareUserListPopupNodata';
import ProfileCardPlaylist from './views/PlayList/PlayListPopup/ProfileCardPlayList';
import ProfileCardPlaylistGlobal from './views/PlayList/PlayListPopup/ProfileCardPlayListGlobal';
import ProfileCardPlaylistNodata from './views/PlayList/PlayListPopup/ProfileCardPlayListNodata';
import ProfileCardPlayListNocard from './views/PlayList/PlayListPopup/ProfileCardPlayListNocard';
import LearningOverviewPlayList from './views/PlayList/LearningOverviewPlayList'; //22-08-23 Badge
import InMyListPlayList from './views/PlayList/InMyListPlayList';

//Approval
import ApprovalRequiredList from "./views/Approval/ApprovalRequiredList";
import ApprovalRequiredApproveModal from "./views/Approval/ApprovalRequiredApproveModal";
import ApprovalRequiredRejectModal from "./views/Approval/ApprovalRequiredRejectModal";
import ApprovalRequiredDetail from "./views/Approval/ApprovalRequiredDetail";
import ApprovalRejectedList from "./views/Approval/ApprovalRejectedList";
import ApprovalRejectedDetail from "./views/Approval/ApprovalRejectedDetail";
import ApprovalCompletedList from "./views/Approval/ApprovalCompletedList";
import ApprovalRequiredTable from "./views/Approval/ApprovalRequiredTable";
import APLApprovalList from "./views/Approval/APLApprovalList";
import APLApprovalDetail from "./views/Approval/APLApprovalDetail";

//community
// import MyCommunityList from './views/Community/MyCommunityList';
// import MyCommunityListNoData from './views/Community/MyCommunityListNoData';
// import MyCreatedCommunityList from './views/Community/MyCreatedCommunityList';
// import MyCreatedCommunityListNoData from './views/Community/MyCreatedCommunityListNoData';
// import LearningCommunityMainCommunity from './views/Community/LearningCommunityMainCommunity';
// import LearningCommunityMainCommunityCase01 from './views/Community/LearningCommunityMainCommunityCase01';
// import LearningCommunityMainCommunityCase02 from './views/Community/LearningCommunityMainCommunityCase02';
// import LearningCommunityMainCommunityNoData from './views/Community/LearningCommunityMainCommunityNoData';
// import LearningCommunityMainMyposts from './views/Community/LearningCommunityMainMyposts';
// import LearningCommunityMainMypostsNodata from './views/Community/LearningCommunityMainMypostsNodata';
// import LearningCommunityMainOverviewBefore from './views/Community/LearningCommunityMainOverviewBefore';
// import LearningCommunityMainOverviewAfter from './views/Community/LearningCommunityMainOverviewAfter';
// import CommunityDetailComment from './views/Community/CommunityDetailComment';
// import CommunityCommentCase from './views/Community/CommunityCommentCase';
// import CommunityCreatePost from './views/Community/CommunityCreatePost';
// import CommunityEditPost from './views/Community/CommunityEditPost';
// import CommunityReplyPost from './views/Community/CommunityReplyPost';
// import MyCommunityMyFeedNoData from './views/Community/MyCommunityMyFeedNoData';
// import MyCommunityMyFeed from './views/Community/MyCommunityMyFeed';

//community add
import CommunityMyProfilesModalFollower from './views/Community/CommunityMyProfilesModalFollower'
// import CommunityMyProfile from './views/Community/CommunityMyProfile'
// import CommunityMyProfileEdit from './views/Community/CommunityMyProfileEdit'
// import CommunityProfileOther from './views/Community/CommunityProfileOther'
// import CommunityMyProfileFeed from './views/Community/CommunityMyProfileFeed'
// import CommunityMyProfileMyCommunityB from './views/Community/CommunityMyProfileMyCommunityB'
// import CommunityMyProfileMyCommunityNew from './views/Community/CommunityMyProfileMyCommunityNew'
// import CommunityMyProfileMyCommunityNewNodata from './views/Community/CommunityMyProfileMyCommunityNewNodata'
// import CommunityMyProfileMyCommunityNewNodata2 from './views/Community/CommunityMyProfileMyCommunityNewNodata2'
// import CommunityProFileModalPopup from './views/Community/CommunityProFileModalPopup'
// import CommunityProFileModalPopupNew from './views/Community/CommunityProFileModalPopupNew'
// import CommunityProFileModalPopupCom from './views/Community/CommunityProFileModalPopupCom'
// import CommunityProFileModalPopupFeed from './views/Community/CommunityProFileModalPopupFeed'
// import CommunityProFileModalPopupFeedExternal from './views/Community/CommunityProFileModalPopupFeedExternal'
// import CommunityProFileModalPopupNewNodata from './views/Community/CommunityProFileModalPopupNewNodata'
// import CommunityProFileModalPopupComNodata from './views/Community/CommunityProFileModalPopupComNodata'
// import CommunityProFileModalPopupFeedNodata from './views/Community/CommunityProFileModalPopupFeedNodata'
// import CommunityProFileModalPopupGlobal from './views/Community/CommunityProFileModalPopupGlobal'
// import CommunityMyProfileMyCommunityA from './views/Community/CommunityMyProfileMyCommunityA'
// import CommunityMyCommunityNoData from './views/Community/CommunityMyCommunityNoData'
// import CommunityFollowNoData from './views/Community/CommunityFollowNoData'

// CommunityTemplete
import MainHeader from './views/CommunityTemplete/MainHeader'
import MainSearch from './views/CommunityTemplete/MainSearch'
import MainSearchNodata from './views/CommunityTemplete/MainSearchNodata'
import Intro100 from './views/CommunityTemplete/Intro100'
import Intro1200 from './views/CommunityTemplete/Intro1200'
import TempleteA from './views/CommunityTemplete/TempleteA'
import TempleteB from './views/CommunityTemplete/TempleteB'
import TempleteC from './views/CommunityTemplete/TempleteC'

import TempleteSubListType01 from './views/CommunityTemplete/TempleteSubListType01'
import TempleteSubListType02 from './views/CommunityTemplete/TempleteSubListType02'
import TempleteSubImageType01 from './views/CommunityTemplete/TempleteSubImageType01'
import TempleteSubImageType02 from './views/CommunityTemplete/TempleteSubImageType02'
import TempleteSubDetailType01 from './views/CommunityTemplete/TempleteSubDetailType01'
import TempleteSubDetailType02 from './views/CommunityTemplete/TempleteSubDetailType02'
import TempleteSubEditType01 from './views/CommunityTemplete/TempleteSubEditType01'
import TempleteSubEditType02 from './views/CommunityTemplete/TempleteSubEditType02'
import TempleteSubEditType01b from './views/CommunityTemplete/TempleteSubEditType01b'
import TempleteSubEditType02b from './views/CommunityTemplete/TempleteSubEditType02b'
import TempleteSubRcmListType01 from './views/CommunityTemplete/TempleteSubRcmListType01'
import TempleteSubRcmListType02 from './views/CommunityTemplete/TempleteSubRcmListType02'
import TempleteSubSearchListType01 from './views/CommunityTemplete/TempleteSubSearchListType01'
import TempleteSubSearchListType02 from './views/CommunityTemplete/TempleteSubSearchListType02'
import TempleteSubSearchImageType01 from './views/CommunityTemplete/TempleteSubSearchImageType01'
import TempleteSubSearchImageType02 from './views/CommunityTemplete/TempleteSubSearchImageType02'

import TempleteMemberList890Tab1 from './views/CommunityTemplete/TempleteMemberList890Tab1'
import TempleteMemberList890Tab2 from './views/CommunityTemplete/TempleteMemberList890Tab2'
import TempleteMemberList890Tab3 from './views/CommunityTemplete/TempleteMemberList890Tab3'
import TempleteMemberList890Tab4 from './views/CommunityTemplete/TempleteMemberList890Tab4'
import TempleteMemberList890Tab3Nodata from './views/CommunityTemplete/TempleteMemberList890Tab3Nodata'
import TempleteMemberList890Tab4Nodata from './views/CommunityTemplete/TempleteMemberList890Tab4Nodata'

import TempleteMemberList1200Tab1 from './views/CommunityTemplete/TempleteMemberList1200Tab1'
import TempleteMemberList1200Tab2 from './views/CommunityTemplete/TempleteMemberList1200Tab2'
import TempleteMemberList1200Tab3 from './views/CommunityTemplete/TempleteMemberList1200Tab3'
import TempleteMemberList1200Tab4 from './views/CommunityTemplete/TempleteMemberList1200Tab4'
import TempleteMemberList1200Tab3Nodata from './views/CommunityTemplete/TempleteMemberList1200Tab3Nodata'
import TempleteMemberList1200Tab4Nodata from './views/CommunityTemplete/TempleteMemberList1200Tab4Nodata'

// 외부 login
import PrivacyAgree from './views/Login/PrivacyAgree';
import PasswordInfoModal from './views/Login/PasswordInfoModal';
import InterestSettingsPart from './views/Login/InterestSettingsPart';
import InterestSettingsJobPlan from './views/Login/InterestSettingsJobPlan';
import InterestSettingsJobPlanCase01 from './views/Login/InterestSettingsJobPlanCase01';
import InterestSettingsLearningType from './views/Login/InterestSettingsLearningType';
import InterestSettingsComplete from './views/Login/InterestSettingsComplete';
import InterestSettingsStart from './views/Login/InterestSettingsStart';
import InterestSettingsStartEng from './views/Login/InterestSettingsStart/indexEng';
import InterestSettingsStartZh from './views/Login/InterestSettingsStart/indexZh';
import InterestSettingsSuniIntroduction from './views/Login/InterestSettingsSuniIntroduction';
import NewPrivacyAgree from './views/Login/NewPrivacyAgree';
import JoiningForm from './views/Login/JoiningForm';
import JoiningFormLoader from './views/Login/JoiningFormLoader';
import JoiningFormPopupConfirm from './views/Login/JoiningFormPopupConfirm';
import JoiningFormPopup from './views/Login/JoiningFormPopup';
import PrivacyAgreeExtra from './views/Login/PrivacyAgreeExtra';
import PrivacyAgreeExtraError from './views/Login/PrivacyAgreeExtraError';
import RegiForm from './views/Login/RegiForm';
import RegiFormError from './views/Login/RegiFormError';
import RegiEnd from './views/Login/RegiEnd';

// 내부 login
// import LoginForm from './views/Login/LoginForm';
// import LoginInquery from './views/Login/LoginInquery/LoginInquery';
// import LoginInqueryError from './views/Login/LoginInquery/LoginInqueryError';

// 6개월 주기 비밀번호 변경안내
import PasswordChange from './views/Login/PasswordChange';
import PasswordChangeError from './views/Login/PasswordChangeError';
import PasswordChangeInfo from './views/Login/PasswordChangeInfo';
import PasswordChangeInfoError from './views/Login/PasswordChangeInfo/ErrorCase';

// Main
// import MainIndex from './views/Main/MainIndex';
// import MainIndexFinal from './views/Main/MainIndexFinal';
// import MainPersonalBoard from './views/Main/MainPersonalBoard';
// import MainPersonalBoardProfile from './views/Main/MainPersonalBoardProfile';
import MainPersonalBoardProfileNew from './views/Main/MainPersonalBoardProfileNew';
import MainPersonalBoardSetting from './views/Main/MainIndexNew/components/MainPersonalBoardSetting';
// import MainPersonalBoardZero from './views/Main/MainPersonalBoardZero';
// import MainPersonalBoardEvent from './views/Main/MainPersonalBoardEvent';
// import MainPersonalBoardEventV2 from './views/Main/MainPersonalBoardEventV2';
// import MainPersonalBoardNew from './views/Main/MainPersonalBoardNew';
// import MainPersonalBoardNewV2 from './views/Main/MainPersonalBoardNewV2';
// import MainPersonalBoardNow from './views/Main/MainPersonalBoardNow';
// import MainIndexNoData from './views/Main/MainIndexNoData';
// import MainTutorial from './views/Main/MainTutorial';
// import MainTutorialV2 from './views/Main/MainTutorialV2';
// import MainTutorialV3 from './views/Main/MainTutorialV3';
// import MainTutorialV4 from './views/Main/MainTutorialV4';
// import MainTutorialV4Chn from './views/Main/MainTutorialV4Chn';
// import MainTutorialV4Eng from './views/Main/MainTutorialV4Eng';
import MainTutorialPlaylistKo from './views/Main/MainTutorialPlaylistKo';
import MainTutorialPlaylistZh from './views/Main/MainTutorialPlaylistZh';
import MainTutorialPlaylistEn from './views/Main/MainTutorialPlaylistEn';
import MainTutorialV5Ko from './views/Main/MainTutorialV5Ko';
import MainTutorialV5Zh from './views/Main/MainTutorialV5Zh';
import MainTutorialV5En from './views/Main/MainTutorialV5En';

// 설정변경안내
import MainSettingKo from './views/Main/MainSettingKo';

import MainLearningViewAll from './views/Main/MainLearningViewAll';
// import MainLearningViewSelect from './views/Main/MainLearningViewSelect';
// import MainLearningViewAllNew from './views/Main/MainLearningViewAllNew';
// import MainLearningViewAllPopular from './views/Main/MainLearningViewAllPopular';
// import MainLearningViewAllRequired from './views/Main/MainLearningViewAllRequired';

import MainIndexNew from './views/Main/MainIndexNew';
import MainIndexNewCareer from './views/Main/MainIndexNewCareer';
import MainIndexNewNoBadge from './views/Main/MainIndexNewNoBadge';

// search
import SearchAllFilterDisable from './views/Search/SearchAllFilterDisable';
import SearchAllFilterDisableLoading from './views/Search/SearchAllFilterDisableLoading';
import SearchAllFilterDisableNoData from './views/Search/SearchAllFilterDisableNoData';
import SearchAllFilterNoData from './views/Search/SearchAllFilterNoData';
import SearchResultExport from './views/Search/SearchResultExport';
import SearchResultExportNoData from './views/Search/SearchResultExportNoData';
import SearchResultLearningCardNoData from './views/Search/SearchResultLearningCardNoData';
import SearchResultLearningCard from './views/Search/SearchResultLearningCard';
import SearchFilterSelect from './views/Search/SearchFilterSelect';

//통합검색
import SearchResultNew from './views/SearchTotal/SearchResultNew';
import SearchResultNewCareer from './views/SearchTotal/SearchResultNewCareer';
import SearchResultNewSuggest from './views/SearchTotal/SearchResultNewSuggest';
import SearchResultNewRe from './views/SearchTotal/SearchResultNewRe';
//import SearchResultAll from './views/SearchTotal/SearchResultAll';
import SearchResultAllBefore from './views/SearchTotal/SearchResultAllBefore';
import SearchResultLearncard from './views/SearchTotal/SearchResultLearncard';
import SearchResultLearncardTest from './views/SearchTotal/SearchResultLearncardTest';
//import SearchResultBadge from './views/SearchTotal/SearchResultBadge';
import SearchResultBadgeNew from './views/SearchTotal/SearchResultBadgeNew'; //22-08-23 badge
import SearchResultCommunity from './views/SearchTotal/SearchResultCommunity';
import SearchResultTeacher from './views/SearchTotal/SearchResultTeacher';
import SearchResultNodata from './views/SearchTotal/SearchResultNodata';
import SearchResultLoading from './views/SearchTotal/SearchResultLoading';
import SearchResultRe from './views/SearchTotal/SearchResultRe';


// recommend
import RecommendDetailChannelOpen from './views/Recommend/RecommendDetailChannelOpen';
import RecommendDetailNoData from './views/Recommend/RecommendDetailChannelOpen/nodata';
import RecommendViewallChannelChange from './views/Recommend/RecommendViewallChannelChange';
import RecommendViewNoData from './views/Recommend/RecommendViewallChannelChange/nodata';

// support
import NoticeListUser from './views/Support/NoticeListUser';
import NoticeListAdmin from './views/Support/NoticeListAdmin';
import NoticeViewUser from './views/Support/NoticeViewUser';
import NoticeViewAdmin from './views/Support/NoticeViewAdmin';
import CreateNoticeAdminMain from './views/Support/CreateNoticeAdminMain';
import EditNoticeAdminMain from './views/Support/EditNoticeAdminMain';
import FaqListUser from './views/Support/FaqListUser';
import FaqListAdmin from './views/Support/FaqListAdmin';
import FaqViewUser from './views/Support/FaqViewUser';
import FaqViewAdmin from './views/Support/FaqViewAdmin';
import FaqUserList from './views/Support/FaqUserList';
import FaqUserListNodata from './views/Support/FaqUserListNodata';
import CreateFaqAdmin from './views/Support/CreateFaqAdmin';
import EditFaqAdmin from './views/Support/EditFaqAdmin';
import QAListUser from './views/Support/QAListUser';
import NoitceListNew from './views/Support/NoitceListNew';
import NoitceListNewNodata from './views/Support/NoitceListNewNodata';
import QAAdminList from './views/Support/QAAdminList';
import QAAdminAnswer from './views/Support/QAAdminAnswer';
import QAAdminAnswerView from './views/Support/QAAdminAnswerView';
import QAAdminAnswerViewSurvey from './views/Support/QAAdminAnswerViewSurvey';
import QAAdminAnswerViewSurveyDone from './views/Support/QAAdminAnswerViewSurveyDone';
import QAViewUserQuestion from './views/Support/QAViewUserQuestion';
import QAViewUserAnswer from './views/Support/QAViewUserAnswer';
import CreateQA from './views/Support/CreateQA';
import EditQA from './views/Support/EditQA';
import NoticeListNoDataUser from './views/Support/NoticeListNoDataUser';
import UserQAList from './views/Support/UserQAList';
import UserQAWrite from './views/Support/UserQAWrite';
import UserQAWriteModalFaq from './views/Support/UserQAWriteModalFaq';
import UserQAWriteModalFaqNodata from './views/Support/UserQAWriteModalFaqNodata';

// Introduction
import CategoryIntroductionV2 from './views/Introduction/CategoryIntroductionV2';
import CategoryIntroductionV2Eng from './views/Introduction/CategoryIntroductionV2Eng';
import CategoryIntroductionV2Chn from './views/Introduction/CategoryIntroductionV2Chn';
import CollegeIntroductionNew from './views/Introduction/CollegeIntroductionNew';
// import AllIntroduction from './views/Introduction/AllIntroduction';
// import CollegeIntroduction from './views/Introduction/CollegeIntroduction';
import CollegeIntroductionManage from './views/Introduction/CollegeIntroductionManage';
// import CollegeIntroductionTest from './views/Introduction/CollegeIntroductionTest';
//22-08-23 badge
import CertificationSystemIntroductionKo from './views/Introduction/CertificationSystemIntroduction';
import CertificationSystemIntroductionEn from './views/Introduction/CertificationSystemIntroduction/indexEn';
import CertificationSystemIntroductionZh from './views/Introduction/CertificationSystemIntroduction/indexZh';
import PromotionData from './views/Introduction/PromotionData';

import CertificationSystemIntroductionV2Ko from './views/Introduction/CertificationSystemIntroductionV2';


// Common
import CategoryDetail from './layouts/CategoryDetail/CategoryDetail';
import SiteMapModal from './views/Common/SiteMapModal';
import SiteMapModalCareer from './views/Common/SiteMapModalCareer';
import CollegeAllNew from './views/Common/CollegeAllNew';
import CollegeAllNewSelectedAll from './views/Common/CollegeAllNewSelectedAll';
import CollegeAllNewSelectedAll111 from './views/Common/CollegeAllNewSelectedAll111';
import CollegeAllNewSelected from './views/Common/CollegeAllNewSelected';
import CollegeAllNewNoDepth from './views/Common/CollegeAllNewNoDepth';
import CollegeAllNewNoDepthSelected from './views/Common/CollegeAllNewNoDepthSelected';

import PrivacyPolicyModal from './views/Common/PrivacyPolicyModal';
import PersonalInfoModal from './views/Common/PersonalInfoModal';
import PersonalInfoModalNoChk from './views/Common/PersonalInfoModalNoChk';

import IframeTest from './views/Common/IframeTest';

import Error404 from './views/Common/Error404';
import Loading from './views/Common/Loading';
import SystemError from './views/Common/SystemError';
import SystemCheckModal from './views/Common/SystemCheckModal';

import ModalSet from './views/Common/ModalSet';

import ListFilterModal from './views/Common/ListFilterModal';
import BrowserAlign from './views/Common/BrowserAlign';


import EditorEmojiPopup from './views/Common/EditorEmojiPopup';

// Create
import ListCreate from './views/Create/ListCreate';
import ListShared from './views/Create/ListShared';
import ListCreatePersonal from './views/Create/ListCreatePersonal';
import ListCreateNoData from './views/Create/ListCreateNoData';
import CreateMovieModal from './views/Create/CreateMovieModal';
import CreateStep1Input from './views/Create/CreateStep1Input';
import CreateStep2Video from './views/Create/CreateStep2Video';
import VideoFileUploadModal from './views/Create/VideoFileUploadModal';
import CreateStep2Audio from './views/Create/CreateStep2Audio';
import CreateStep2Webpage from './views/Create/CreateStep2Webpage';
import CreateStep2Document from './views/Create/CreateStep2Document';
import CreateStep2Community from './views/Create/CreateStep2Community';
import ShareDetailVideo from './views/Create/ShareDetailVideo';
import ShareDetailAudio from './views/Create/ShareDetailAudio';
import ShareDetailWebpage from './views/Create/ShareDetailWebpage';
import ShareDetailDocument from './views/Create/ShareDetailDocument';
import ShareDetailCommunity from './views/Create/ShareDetailCommunity';
import ShareDetailCompleteVideo from './views/Create/ShareDetailCompleteVideo';
import CreateOneStep from './views/Create/CreateOneStep';
import CreateTabDetail from './views/Create/CreateTabDetail';

import SupportList from './views/Support/SupportList';
import NoticeView from './views/Support/NoticeView';
import QAView from './views/Support/QAView';
import QACreate from './views/Support/QACreate';
// import NoticeCreate from './views/Support/NoticeCreate';

// ETC
import SafetyEducation from './views/ETC/SafetyEducation';
import SafetyEducationError from './views/ETC/SafetyEducation/Error';
import SafetyEducationCert from './views/ETC/SafetyEducation/Cert';
import CommonInfoModal from './views/ETC/CommonInfoModal';
import WelcomeMessageModal from './views/ETC/WelcomeMessageModal';
import SystemInfoModal from './views/ETC/SystemInfoModal';

import TabSticky from './views/Sample/TabSticky';
import TitleTabSticky from './views/Sample/TitleTabSticky';
import MainTopBanner from './views/Sample/MainTopBanner';
import MainFooterNew from './views/Sample/MainFooterNew';
import CommentCaseNew from './views/Sample/CommentCaseNew';
import CommentCaseNewZoom from './views/Sample/CommentCaseNewZoom';
import CardSample from './views/Sample/CardSample';
import NoteSample from './views/Sample/NoteSample/CaseSample';
import NoteSampleVideo from './views/Sample/NoteSample/NoteSampleVideo';
import NoteSamplePopup from './views/Sample/NoteSample/Note';

import StyleGuide from './views/StyleGuide';
import PageList2022 from './views/PageList/PageList2022';
import PageList2023 from './views/PageList/PageList2023';

// Certification
import AllBadgeCase from "./views/Certification/AllBadgeCase";
import BadgeSample from "./views/Certification/BadgeSample";
import AllBadgeListSlideV2 from "./views/Certification/AllBadgeListSlideV2";
// import AllBadgeListSlideV2FS from "./views/Certification/AllBadgeListSlideV2/FSindex";
// import AllBadgeListSlideV2Nodata from "./views/Certification/AllBadgeListSlideV2/indexnodata";
import AllBadgeListDetailV2 from "./views/Certification/AllBadgeListDetailV2";
import AllBadgeListDetailV2Career from "./views/Certification/AllBadgeListDetailV2/AllBadgeListDetailV2Career";
// import AllBadgeListDetailCaseV2 from "./views/Certification/AllBadgeListDetailCaseV2";
import ChallengingBadgeListV2 from "./views/Certification/ChallengingBadgeListV2";
import EarnedBadgeListV2 from "./views/Certification/EarnedBadgeListV2";
//22-08-23 Badge

// import AllBadgeListTest from "./views/Certification/AllBadgeListTest";
// import PersonalBoardMainPopup from './views/PersonalBoard/PersonalBoardMainPopup';

// Hot Topic
import HotTopicList from './views/HotTopic/HotTopicList';
import HotTopicPage from './views/HotTopic/HottopicPage';

//공통모아보기
import AllShow from './views/AllShow';
// import MyBadgeModal from './views/MyPage/MyPageLnbProfileMyBadge/components/MyBadgeModal/index';

// 관리자신청권한 추가 (230627 배포)
import AdminAuthorityForm from './views/ETC/Authority/AdminAuthorityForm/index';
import AdminAuthorityList from './views/ETC/Authority/AdminAuthorityList/index';
import AdminAuthorityListEmpty from './views/ETC/Authority/AdminAuthorityList/Empty';
import AdminAuthorityView from './views/ETC/Authority/AdminAuthorityView/index';
import AdminAuthorityViewExpand from './views/ETC/Authority/AdminAuthorityView/Expand';
import AdminAuthorityModify from './views/ETC/Authority/AdminAuthorityModify/index';

// 프로모션대시보드
import PromotionDashboard from './views/ETC/PromotionDashboard';

// 커리어플랫폼
import CareerPlatform from './views/MyCareer/CareerPlatform';
import CareerPlatformModal from './views/MyCareer/CareerPlatformModal';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/2022" component={PageList2022} />
                    <Route exact path="/" component={PageList2023} />
                    <Route path="/style" component={StyleGuide} />
                    <UserLayout path="/sample/tab-sticky" component={TabSticky} />
                    <UserLayout path="/sample/title-tab-sticky" component={TitleTabSticky} />
                    <UserLayout path="/sample/MainTopBanner" component={MainTopBanner} />
                    <UserLayout path="/sample/main-footer-new" component={MainFooterNew} />
                    <UserLayout path="/sample/comment-case-new" component={CommentCaseNew} />
                    <UserLayout path="/sample/comment-case-new-zoom" component={CommentCaseNewZoom} />
                    <UserLayout path="/sample/card-sample" component={CardSample} />
                    <UserLayout path="/sample/note-sample" component={NoteSample} />
                    <UserLayout path="/sample/note-sample-video" component={NoteSampleVideo} />
                    <Route path="/sample/note-sample-popup" component={NoteSamplePopup} />

                    {/* ---------------------------------------------------------------------------- */}
                    {/* Learning V2 */}
                    {/* ---------------------------------------------------------------------------- */}
                    {/* Learning - Template */}
                    <UserLayoutCard path="/learning/card-overview-temp" component={CardOverviewTemp} />
                    <UserLayoutCube path="/learning/single-overview-temp" component={SingleOverviewTemp} />
                    <UserLayoutCubeCareer path="/learning/single-overview-temp-career" component={SingleOverviewTempCareer} />
                    <UserLayoutCube path="/learning/cube-overview-temp" component={CubeOverviewTemp} />
                    <UserLayoutCube path="/learning/single-cube-temp" component={SingleCubeTemp} />

                    {/* Learning - Card Overview */}
                    <UserLayoutCard path="/learning/card-overview-always" component={CardOverviewAlways} />
                    <UserLayoutCard path="/learning/card-overview-always-fail" component={CardOverviewAlwaysFail} />
                    <UserLayoutCard path="/learning/card-overview-preiod" component={CardOverviewPreiod} />
                    <UserLayoutCard path="/learning/card-overview-preiod-02" component={CardOverviewPreiod02} />
                    <UserLayoutCard path="/learning/card-overview-preiod-03" component={CardOverviewPreiod03} />
                    <UserLayoutCard path="/learning/card-overview-live" component={CardOverviewLive} />
                    <UserLayoutCard path="/learning/card-overview-inquery-modal" component={CardOverviewInqueryModal} />
                    <UserLayoutCard path="/learning/card-overview-inquery-modal-error" component={CardOverviewInqueryModalError} />

                    {/* Learning - BlendedChapter */}
                    <UserLayoutCube path="/learning/cube-blendedchapter" component={CubeBlendedChapter} />
                    <UserLayoutCube path="/learning/cube-blendedchapter-case2" component={CubeBlendedChapterCase2} />
                    <UserLayoutCube path="/learning/cube-blendedchapter-case3" component={CubeBlendedChapterCase3} />
                    <UserLayoutCube path="/learning/cube-blendedchapter-quiz" component={CubeBlendedChapterQuiz} />

                    {/* Learning - Video */}
                    <UserLayoutCube path="/learning/cube-video" component={CubeVideo} />
                    <UserLayoutCube path="/learning/single-video" component={SingleVideo} />

                    {/* Learning - Video Quiz */}
                    <UserLayoutCube path="/learning/cube-video-quiz" component={CubeVideoQuiz} />
                    <UserLayoutCube path="/learning/cube-video-quiz-defaut" component={CubeVideoQuizDefaut} />
                    <UserLayoutCube path="/learning/cube-video-quiz-01-single" component={CubeVideoQuiz01Single} />
                    <UserLayoutCube path="/learning/cube-video-quiz-image-zoom" component={CubeVideoQuizImageZoom} />
                    <UserLayoutCube path="/learning/cube-video-quiz-03-short" component={CubeVideoQuiz03Short} />
                    <UserLayoutCube path="/learning/cube-video-quiz-04-descriptive" component={CubeVideoQuiz04Descriptive} />
                    <UserLayoutCube path="/learning/cube-video-quiz-05-result-survey" component={CubeVideoQuiz05ResultSurvey} />
                    <UserLayoutCube path="/learning/cube-video-quiz-wrong" component={CubeVideoQuizWrong} />
                    <UserLayoutCube path="/learning/cube-video-quiz-answer-ok" component={CubeVideoQuizAnswerOk} />
                    <UserLayoutCube path="/learning/cube-video-quiz-finish" component={CubeVideoQuizFinish} />
                    <UserLayoutCube path="/learning/cube-video-quiz-sample" component={CubeVideoQuizSample} />
                    <UserLayoutCube path="/learning/cube-video-quiz-description" component={CubeVideoQuizDescription} />
                    <UserLayoutCube path="/learning/cube-video-quiz-alert-close" component={CubeVideoQuizAlertClose} />

                    {/* Learning - Audio */}
                    <UserLayoutCube path="/learning/cube-audio" component={CubeAudio} />
                    <UserLayoutCube path="/learning/single-audio" component={SingleAudio} />

                    {/* Learning - Document */}
                    <UserLayoutCube path="/learning/cube-document" component={CubeDocument} />
                    <UserLayoutCube path="/learning/single-document" component={SingleDocument} />

                    {/* Learning - Assignment */}
                    <UserLayoutCube path="/learning/cube-assignment" component={CubeAssignment} />
                    <UserLayoutCube path="/learning/cube-assignment-cond-static" component={CubeAssignmentCondStatic} />
                    <UserLayoutCube path="/learning/cube-assignment-post-empty" component={CubeAssignmentPostEmpty} />
                    <UserLayoutCube path="/learning/cube-assignment-post-nodata" component={CubeAssignmentPostNoData} />
                    <UserLayoutCube path="/learning/cube-assignment-post-write" component={CubeAssignmentPostWrite} />
                    <UserLayoutCube path="/learning/cube-assignment-post-detail" component={CubeAssignmentPostDetail} />
                    <UserLayoutCube path="/learning/cube-assignment-report-write" component={CubeAssignmentReportWrite} />
                    <UserLayoutCube path="/learning/cube-assignment-report-grading" component={CubeAssignmentReportGrading} />
                    <UserLayoutCube path="/learning/cube-assignment-report-fail" component={CubeAssignmentReportFail} />
                    <UserLayoutCube path="/learning/cube-assignment-report-pass" component={CubeAssignmentReportPass} />
                    <UserLayoutCube path="/learning/single-assignment" component={SingleAssignment} />

                    {/* Learning - Discussion */}
                    <UserLayoutCube path="/learning/cube-discussion" component={CubeDiscussion} />
                    <UserLayoutCube path="/learning/cube-discussion-nodata" component={CubeDiscussionNodata} />
                    <UserLayoutCube path="/learning/single-discussion" component={SingleDiscussion} />

                    {/* Learning - Webpage */}
                    <UserLayoutCube path="/learning/cube-webpage" component={CubeWebpage} />
                    <UserLayoutCube path="/learning/single-webpage" component={SingleWebpage} />
                    <UserLayoutCube path="/learning/cube-webpage-embed" component={CubeWebpageEmbd} />
                    <UserLayoutCube path="/learning/cube-webpage-coursera" component={CubeWebpageCoursera} />
                    <UserLayoutCube path="/learning/single-webpage-embed" component={SingleWebpageEmbd} />

                    {/* Learning - Class */}
                    <UserLayoutCube path="/learning/cube-class" component={CubeClass} />
                    <UserLayoutCube path="/learning/single-class" component={SingleClass} />
                    <UserLayoutCube path="/learning/cube-class-absence" component={CubeClassAbsence} />
                    <UserLayoutCube path="/learning/single-class-enrolment-modal" component={SingleClassEnrolmentModal} />
                    {/* <UserLayout path="/learning/cube-detail-class-series-detail-modal-v2" component={CubeDetailClassSeriesDetailModalV2} />
                    <UserLayout path="/learning/cube-detail-class-series-detail-select-modal" component={CubeDetailClassSeriesDetailSelectModal} />
                    <UserLayout path="/learning/cube-detail-class-series-detail-apply-reference-option-modal" component={CubeDetailClassSeriesDetailApplyReferenceOptionModal} /> */}

                    {/* Learning - Live */}
                    <UserLayoutCube path="/learning/cube-live" component={CubeLive} />
                    <UserLayoutCube path="/learning/cube-live-popup" component={CubeLivePopup} />
                    <UserLayoutCube path="/learning/cube-live-popup02" component={CubeLivePopup02} />
                    <UserLayoutCube path="/learning/single-live" component={SingleLive} />

                    {/* Learning - Test */}
                    <UserLayoutCube path="/learning/cube-test" component={CubeTest} />
                    <UserLayoutCube path="/learning/cube-test-02" component={CubeTest02} />
                    <UserLayoutCube path="/learning/cube-test-pass" component={CubeTestPass} />
                    <UserLayoutCube path="/learning/cube-test-fail" component={CubeTestFail} />
                    <UserLayoutCube path="/learning/cube-test-confirm" component={CubeTestConfirm} />
                    <UserLayoutCube path="/learning/cube-test-text" component={CubeTestText} />
                    <UserLayoutCube path="/learning/cube-test-info" component={CubeTestInfo} />
                    <UserLayoutCube path="/learning/cube-test-complete" component={CubeTestComplete} />
                    <UserLayoutCube path="/learning/single-test" component={SingleTest} />

                    {/* Learning - Talk */}
                    <UserLayoutCube path="/learning/cube-talk" component={CubeTalk} />

                    {/* Learning - Survey */}
                    <UserLayoutCube path="/learning/cube-survey" component={CubeSurvey} />
                    <UserLayoutCube path="/learning/cube-survey-basic" component={CubeSurveyBasic} />
                    <UserLayoutCube path="/learning/cube-survey-group" component={CubeSurveyGroup} />
                    <UserLayoutCube path="/learning/cube-survey-zoom" component={CubeSurveyZoom} />
                    <UserLayoutCube path="/learning/cube-survey-core" component={CubeSurveyCore} />
                    <UserLayoutCube path="/learning/cube-survey-chart-core" component={CubeSurveyChartCore} />
                    <UserLayoutCube path="/learning/cube-survey-chart-basic" component={CubeSurveyChartBasic} />
                    <UserLayoutCube path="/learning/cube-survey-complete" component={CubeSurveyComplete} />
                    <UserLayoutCube path="/learning/cube-survey-done" component={CubeSurveyDone} />
                    <UserLayoutCube path="/learning/single-survey" component={SingleSurvey} />

                    {/* Learning - 삭제보류 */}
                    <UserLayoutCube path="/learning/learning-survey-detail" component={SurveyDetail} />
                    <UserLayoutCube path="/learning/learning-test-detail" component={TestDetail} />
                    <UserLayoutCube path="/learning/learning-test-marked-detail" component={TestMarkedDetail} />
                    <UserLayoutCube path="/learning/learning-detail-reference-modal" component={LearningDetailReferenceModal} />
                    <UserLayoutCube path="/learning/learning-detail-coursera-modal" component={LearningDetailCourseraModal} />
                    <UserLayoutCube path="/learning/learning-approver-appointment-modal" component={LearningApproverAppointmentModal} />

                    {/* My Learning */}
                    <UserLayout path="/learning/my-learning-detail-common-new" component={MyLearningDetailCommonNew} />
                    <UserLayout path="/learning/my-learning-detail-inprogress-note" component={MyLearningDetailInProgressNote} />
                    <UserLayout path="/learning/my-learning-detail-enrolled" component={MyLearningDetailEnrolled} />
                    <UserLayout path="/learning/my-learning-detail-required" component={MyLearningDetailRequired} />
                    <UserLayout path="/learning/my-learning-detail-completed" component={MyLearningDetailCompleted} />
                    <UserLayout path="/learning/my-learning-detail-retry" component={MyLearningDetailRetry} />
                    <UserLayout path="/learning/my-learning-detail-aplcompleted" component={MyLearningDetailAPLCompleted} />
                    <UserLayout path="/learning/my-learning-detail-apldetail" component={MyLearningDetailAPLDetail} />

                    <UserLayout path="/learning/add-personal-learning-form" component={AddPersonalLearningForm} />
                    <UserLayout path="/learning/AddPersonalLearningFormNew" component={AddPersonalLearningFormNew} />
                    <UserLayout path="/learning/add-personal-learning-modal" component={AddPersonalLearningModal} />
                    <UserLayout path="/learning/add-personal-learning-create" component={AddPersonalLearningCreate} />
                    <UserLayout path="/learning/learning-detail-linkedin-modal" component={LearningCardDetailLinkedInModal} />
                    <UserLayout path="/learning/learning-detail-coursera-modal" component={LearningCardDetailCourseraModal} />

                    <UserLayoutCom path="/community/MycommunityMain" component={MyCommunityMain} />
                    <UserLayoutCom path="/community/MycommunityMainFavoritesNodata" component={MyCommunityMainFavoritesNodata} />
                    <UserLayoutCom path="/community/MycommunityMainIngNodata" component={MyCommunityMainIngNodata} />

                    <UserLayoutCom path="/community/MycommunityOpen" component={MyCommunityOpen} />
                    <UserLayoutCom path="/community/MycommunityOpenNodata" component={MyCommunityOpenNodata} />
                    <UserLayoutCom path="/community/MycommunityOpenPopup" component={MyCommunityOpenPopup} />
                    <UserLayoutCom path="/community/MycommunityMainFollow" component={MyCommunityMainFollow} />
                    <UserLayoutCom path="/community/MycommunityMainFollowNodata" component={MyCommunityMainFollowNodata} />
                    <UserLayoutCom path="/community/mycommunity-home" component={MyCommunityHome} />
                    <UserLayoutCom path="/community/mycommunity-home-member" component={MyCommunityHomeMember} />
                    <UserLayoutCom path="/community/mycommunity-home-group" component={MyCommunityHomeGroup} />
                    <UserLayoutCom path="/community/mycommunity-home-approval" component={MyCommunityHomeApproval} />
                    <UserLayoutCom path="/community/mycommunity-home-approval-nodata" component={MyCommunityHomeApprovalNodata} />
                    <UserLayoutCom path="/community/mycommunity-home-group-nodata" component={MyCommunityHomeGroupNodata} />
                    <UserLayoutCom path="/community/mycommunity-survey" component={MyCommunitySurvey} />
                    <UserLayoutCom path="/community/mycommunity-home-empty" component={MyCommunityHomeEmpty} />
                    <UserLayoutCom path="/community/mycommunity-home-empty-test" component={MyCommunityHomeEmptyTest} />
                    <UserLayoutCom path="/community/mycommunity-home-detail" component={MyCommunityHomeDetail} />
                    <UserLayoutCom path="/community/mycommunity-home-detail-new" component={MyCommunityHomeDetailNew} />

                    <UserLayoutCom path="/community/mycommunity-board-list" component={MyCommunityBoardList} />
                    <UserLayoutCom path="/community/mycommunity-board-list-new" component={MyCommunityBoardListNew} />
                    <UserLayoutCom path="/community/mycommunity-board-list-view" component={MyCommunityBoardListView} />
                    <UserLayoutCom path="/community/mycommunity-board-write" component={MyCommunityBoardWrite} />
                    <UserLayoutCom path="/community/mycommunity-board-write-new" component={MyCommunityBoardWriteNew} />
                    <UserLayoutCom path="/community/mycommunity-board-write-new-card" component={MyCommunityBoardWriteNewCard} />
                    <UserLayoutCom path="/community/mycommunity-board-read" component={MyCommunityBoardRead} />
                    <UserLayoutCom path="/community/mycommunity-board-read-new" component={MyCommunityBoardReadNew} />
                    <UserLayoutCom path="/community/mycommunity-board-discuss" component={MyCommunityBoardDiscuss} />
                    <UserLayoutCom path="/community/mycommunity-board-discuss04" component={MyCommunityBoardDiscuss04} />
                    {/* <UserLayout path="/community/mycommunity-board-practice" component={MyCommunityBoardPractice}/> */}




                    <UserLayout path="/community/mycommunity-dataroom-list" component={MyCommunityDataroomList} />
                    <UserLayout path="/community/mycommunity-dataroom-list-new" component={MyCommunityDataroomListNew} />
                    <UserLayout path="/community/mycommunity-dataroom-write" component={MyCommunityDataroomWrite} />
                    <UserLayout path="/community/mycommunity-dataroom-write-new" component={MyCommunityDataroomWriteNew} />
                    <UserLayout path="/community/mycommunity-dataroom-read" component={MyCommunityDataroomRead} />
                    <UserLayout path="/community/mycommunity-dataroom-popup" component={MyCommunityDataroomPopup} />


                    {/* MyPage */}
                    <UserLayout path="/mypage/mypage-completed-list" component={MyPageCompletedList} />
                    <UserLayout path="/mypage/mypage-completed-list-nodata" component={MyPageCompletedListNoData} />
                    <UserLayout path="/mypage/profile-photo-change-modal" component={ProfilePhotoChangeModal} />
                    <UserLayout path="/mypage/channel-change-modal" component={ChannelChangeModal} />
                    <UserLayout path="/mypage/channel-change-search-modal" component={ChannelChangeSearchModal} />
                    <UserLayout path="/mypage/channel-change-search-nodata-modal" component={ChannelChangeSearchNoDataModal} />
                    <UserLayout path="/mypage/learning-time-detail-modal" component={LearningTimeDetailModal} />
                    <UserLayout path="/mypage/completed-list-case" component={CompletedListCase} />
                    <UserLayout path="/mypage/completed-list-case-learning-time" component={CompletedListCaseLearningTime} />
                    <UserLayout path="/mypage/earned-stamp-list" component={EarnedStampList} />
                    <UserLayout path="/mypage/earned-stamp-list-nodata" component={EarnedStampListNoData} />
                    {/*0707*/}
                    <UserLayout path="/mypage/my-badge-list" component={MyBadgeList} />
                    <UserLayout path="/mypage/my-page-lnb-note-all" component={MyPageLnbNoteAll} />
                    <UserLayout path="/mypage/my-page-lnb-note-all-nodata" component={MyPageLnbNoteAllNodata} />
                    <UserLayout path="/mypage/my-page-lnb-note-folder" component={MyPageLnbNoteFolder} />
                    <UserLayout path="/mypage/my-page-lnb-note-folder-popup" component={MyPageLnbNoteFolderPopup} />
                    <UserLayout path="/mypage/my-page-lnb-note-folder-nodata" component={MyPageLnbNoteFolderNodata} />
                    <UserLayout path="/mypage/my-note-list-all" component={MyNoteListAll} />
                    <UserLayout path="/mypage/my-note-list-folder" component={MyNoteListFolder} />
                    <UserLayout path="/mypage/my-note-list-folder-popup" component={MyNoteListFolderPopup} />
                    {/* <UserLayout path="/mypage/my-foundationSkill" component={MyFoundationSkill} /> */}
                    <UserLayoutCube path="/mypage/MyFoundationSkillV2" component={MyFoundationSkillV2} />
                    <UserLayoutCube path="/mypage/MyFoundationSkillV2Completed" component={MyFoundationSkillV2Completed} />
                    <UserLayoutCube path="/mypage/LearningStateModal" component={LearningStateModal} />
                    <UserLayoutCube path="/mypage/LearningStateModal2" component={LearningStateModal2} />

                    <UserLayout path="/mypage/my-page-lnb-profile-edit" component={MyPageLnbProfileEdit} />
                    <UserLayout path="/mypage/my-page-lnb-profile-my-badge" component={MyPageLnbProfileMyBadge} />
                    <UserLayout path="/mypage/my-page-lnb-profile-my-stamp" component={MyPageLnbProfileMyStamp} />
                    <UserLayout path="/mypage/my-page-lnb-profile-my-badge-nodata" component={MyPageLnbProfileMyBadgeNodata} />
                    <UserLayout path="/mypage/my-page-lnb-profile-my-stamp-nodata" component={MyPageLnbProfileMyStampNodata} />

                    {/* 1203 v3 */}
                    <UserLayout path="/mypage/my-page-lnb-profile-edit-v3" component={MyPageLnbProfileEditV3} />
                    <UserLayoutCareer path="/MyPage/MyPageLnbProfileEditV3Career" component={MyPageLnbProfileEditV3} />
                    {/* <UserLayout path="/mypage/my-page-lnb-profile-my-badge-v3" component={MyPageLnbProfileMyBadgeV3} /> */}
                    <UserLayout path="/mypage/my-page-lnb-profile-my-badge-v4" component={MyPageLnbProfileMyBadgeV4} />
                    <UserLayout path="/mypage/my-page-lnb-profile-my-badge-nodata-v3" component={MyPageLnbProfileMyBadgeNodataV3} />
                    <UserLayout path="/mypage/my-page-lnb-profile-my-stamp-v3" component={MyPageLnbProfileMyStampV3} />
                    <UserLayout path="/mypage/my-page-lnb-profile-my-stamp-nodata-v3" component={MyPageLnbProfileMyStampNodataV3} />
                    <UserLayout path="/mypage/my-page-lnb-note-all-v3" component={MyPageLnbNoteAllV3} />
                    <UserLayout path="/mypage/my-page-lnb-note-folder-v3" component={MyPageLnbNoteFolderV3} />

                    {/* Mypage > Playlist */}
                    <UserLayout path="/mypage/my-page-lnb-playlist-list" component={MypageLnbPlaylistList} />
                    <UserLayout path="/mypage/my-page-lnb-playlist-list-nodata" component={MyPageLnbPlaylistListNodata} />
                    <UserLayout path="/mypage/my-page-lnb-playlist-detail-recommended" component={MypageLnbPlaylistDetailRecommended} />
                    <UserLayout path="/mypage/my-page-lnb-playlist-detail-mylist" component={MypageLnbPlaylistDetailMyList} />
                    <UserLayout path="/mypage/my-page-lnb-playlist-detail-mylist-nodata" component={MypageLnbPlaylistDetailMyListNodata} />
                    <UserLayout path="/mypage/my-page-lnb-playlist-detail-modify-mylist" component={MypageLnbPlaylistDetailModifyMyList} />
                    <UserLayout path="/mypage/my-page-lnb-playlist-comment-mylist" component={MypageLnbPlaylistCommentMyList} />
                    <UserLayout path="/mypage/my-page-lnb-playlist-comment-mylist-nodata" component={MypageLnbPlaylistCommentMyListNodata} />
                    <UserLayout path="/mypage/my-page-lnb-playlist-detail-like" component={MypageLnbPlaylistDetailLike} />

                    {/* Mypage > Dashboard */}
                    <UserLayout path="/mypage/my-page-lnb-dashboard" component={MypageLnbDashboard} />

                    {/* Foundation Skill */}
                    <UserLayout path="/foundationskill/foundationskill-apply" component={FoundationSkillApply} />
                    <UserLayout path="/foundationskill/foundationskill-apply-comp" component={FoundationSkillApplyComp} />
                    <Route path="/foundationskill/foundationskill-apply-page" component={FoundationSkillApplyPage} />
                    <Route path="/foundationskill/foundationskill-apply-page-comp" component={FoundationSkillApplyPageComp} />
                    <UserLayout path="/foundationskill/foundationskill-list" component={FoundationSkillList} />
                    <UserLayout path="/foundationskill/foundationskill-apply-2nd" component={FoundationSkillApply2nd} />

                    {/* PlayList */}
                    <UserLayout path='/playlist/playlist-list-all' component={PlaylistListAll} />
                    <UserLayout path='/playlist/playlist-list-all-noData' component={PlaylistListAllNoData} />
                    <UserLayout path='/playlist/playlist-detail-otherlist' component={PlaylistDetailOtherList} />
                    <UserLayout path='/playlist/playlist-detail-mylist' component={PlaylistDetailMyList} />
                    <UserLayout path='/playlist/playlist-detail-savelist' component={PlaylistDetailSaveList} />
                    <UserLayout path='/playlist/playlist-detail-reclist' component={PlaylistDetailRecommendedList} />
                    <UserLayout path='/playlist/playlist-popup/create-playlist-popup' component={CreatePlayListPopup} />
                    <UserLayout path='/playlist/playlist-popup/create-playlist-popup-error' component={CreatePlayListPopupError} />
                    <UserLayout path='/playlist/playlist-popup/add-playlist-popup' component={AddPlayListPopup} />
                    <UserLayout path='/playlist/playlist-popup/add-playlist-popup-nodata' component={AddPlayListPopupNodata} />
                    <UserLayout path='/playlist/playlist-popup/modal-select-card' component={ModalSelectCard} />
                    <UserLayout path='/playlist/playlist-popup/share-playlist-popup10' component={SharePlayListPopup10} />
                    <UserLayout path='/playlist/playlist-popup/share-playlist-popup11' component={SharePlayListPopup11} />
                    <UserLayout path='/playlist/playlist-popup/share-playlist-popup12' component={SharePlayListPopup12} />
                    <UserLayout path='/playlist/playlist-popup/share-playlist-popup20' component={SharePlayListPopup20} />
                    <UserLayout path='/playlist/playlist-popup/share-playlist-popup21' component={SharePlayListPopup21} />
                    <UserLayout path='/playlist/playlist-popup/share-playlist-popup22' component={SharePlayListPopup22} />
                    <UserLayout path='/playlist/playlist-popup/share-playlist-popup30' component={SharePlayListPopup30} />
                    <UserLayout path='/playlist/playlist-popup/share-playlist-popup31' component={SharePlayListPopup31} />
                    <UserLayout path='/playlist/playlist-popup/share-playlist-popup32' component={SharePlayListPopup32} />
                    <UserLayout path='/playlist/playlist-popup/share-playlist-popup33' component={SharePlayListPopup33} />
                    <UserLayout path='/playlist/playlist-popup/profilecard-playlist' component={ProfileCardPlaylist} />
                    <UserLayout path='/playlist/playlist-popup/profilecard-playlist-global' component={ProfileCardPlaylistGlobal} />
                    <UserLayout path='/playlist/playlist-popup/profilecard-playlist-nodata' component={ProfileCardPlaylistNodata} />
                    <UserLayout path='/playlist/playlist-popup/profilecard-playlist-nocard' component={ProfileCardPlayListNocard} />
                    <UserLayout path='/playlist/learning-overview-playlist' component={LearningOverviewPlayList} />
                    <UserLayout path='/playlist/playlist-popup/share-userlist-popup01' component={ShareUserListPopup01} />
                    <UserLayout path='/playlist/playlist-popup/share-userlist-popup02' component={ShareUserListPopup02} />
                    <UserLayout path='/playlist/playlist-popup/share-userlist-popup-nodata' component={ShareUserListPopupNodata} />
                    <UserLayout path='/playlist/in-mylist-playlist' component={InMyListPlayList} />

                    {/*Approval - 0707 메뉴 분리*/}
                    <UserLayout path="/approval/approval-required-list" component={ApprovalRequiredList} />
                    <UserLayout path="/approval/approval-required-table" component={ApprovalRequiredTable} />
                    <UserLayout path="/approval/approval-required-approve-modal" component={ApprovalRequiredApproveModal} />
                    <UserLayout path="/approval/approval-required-reject-modal" component={ApprovalRequiredRejectModal} />
                    <UserLayout path="/approval/approval-required-detail" component={ApprovalRequiredDetail} />
                    <UserLayout path="/approval/approval-rejected-list" component={ApprovalRejectedList} />
                    <UserLayout path="/approval/approval-rejected-detail" component={ApprovalRejectedDetail} />
                    <UserLayout path="/approval/approval-completed-list" component={ApprovalCompletedList} />
                    <UserLayout path="/approval/apl-approval-list" component={APLApprovalList} />
                    <UserLayout path="/approval/apl-approval-detail" component={APLApprovalDetail} />

                    {/* Community */}
                    {/* <UserLayout path="/community/my-community-list" component={MyCommunityList} />
                    <UserLayout path="/community/my-community-list-nodata" component={MyCommunityListNoData} />
                    <UserLayout path="/community/my-created-community-list" component={MyCreatedCommunityList} />
                    <UserLayout path="/community/my-created-community-list-nodata" component={MyCreatedCommunityListNoData} />
                    <UserLayout path="/community/learning-community-main-community" component={LearningCommunityMainCommunity} />
                    <UserLayout path="/community/learning-community-main-community-case01" component={LearningCommunityMainCommunityCase01} />
                    <UserLayout path="/community/learning-community-main-community-case02" component={LearningCommunityMainCommunityCase02} />
                    <UserLayout path="/community/learning-community-main-community-nodata" component={LearningCommunityMainCommunityNoData} />
                    <UserLayout path="/community/learning-community-main-myposts" component={LearningCommunityMainMyposts} />
                    <UserLayout path="/community/learning-community-main-myposts-nodata" component={LearningCommunityMainMypostsNodata} />
                    <UserLayout path="/community/learning-community-main-overview-before" component={LearningCommunityMainOverviewBefore} />
                    <UserLayout path="/community/learning-community-main-overview-after" component={LearningCommunityMainOverviewAfter} /> */}
                    {/* <UserLayout path="/community/community-detail-comment" component={CommunityDetailComment} />
                    <UserLayout path="/community/community-comment-case" component={CommunityCommentCase} />
                    <UserLayout path="/community/community-create-post" component={CommunityCreatePost} /> */}
                    {/* <UserLayout path="/community/community-edit-post" component={CommunityEditPost} />
                    <UserLayout path="/community/community-reply-post" component={CommunityReplyPost} /> */}
                    {/* <UserLayout path="/community/my-community-feed" component={MyCommunityMyFeed} />
                    <UserLayout path="/community/my-community-feed-nodata" component={MyCommunityMyFeedNoData} /> */}

                    {/*Community add*/}
                    {/* <UserLayout path="/community/my-profile/profile" component={CommunityMyProfile} />
                    <UserLayout path="/community/my-profile/edit" component={CommunityMyProfileEdit} />
                    <UserLayout path="/community/other-profile/profile" component={CommunityProfileOther} />
                    <UserLayout path="/community/my-profile/feed" component={CommunityMyProfileFeed} />
                    <UserLayout path="/community/my-profile/bookmark" component={CommunityMyProfileFeed} />
                    <UserLayout path="/community/my-profile/my-community-b" component={CommunityMyProfileMyCommunityB} />
                    <UserLayout path="/community/my-profile/my-community-new" component={CommunityMyProfileMyCommunityNew} />
                    <UserLayout path="/community/my-profile/my-community-new-nodata" component={CommunityMyProfileMyCommunityNewNodata} />
                    <UserLayout path="/community/my-profile/my-community-new-nodata2" component={CommunityMyProfileMyCommunityNewNodata2} /> */}
                    <UserLayout path="/community/my-profile/modal-follower" component={CommunityMyProfilesModalFollower} />
                    {/* <UserLayout path="/community/profile/modal-popup" component={CommunityProFileModalPopup} />
                    <UserLayout path="/community/profile/modal-popup-new" component={CommunityProFileModalPopupNew} />
                    <UserLayout path="/community/profile/modal-popup-com" component={CommunityProFileModalPopupCom} />
                    <UserLayout path="/community/profile/modal-popup-feed" component={CommunityProFileModalPopupFeed} />
                    <UserLayout path="/community/profile/modal-popup-feed-external" component={CommunityProFileModalPopupFeedExternal} />
                    <UserLayout path="/community/profile/modal-popup-new-nodata" component={CommunityProFileModalPopupNewNodata} />
                    <UserLayout path="/community/profile/modal-popup-com-nodata" component={CommunityProFileModalPopupComNodata} />
                    <UserLayout path="/community/profile/modal-popup-feed-nodata" component={CommunityProFileModalPopupFeedNodata} />
                    <UserLayout path="/community/my-profile/my-community-a" component={CommunityMyProfileMyCommunityA} />
                    <UserLayout path="/community/mycommunity-no-data" component={CommunityMyCommunityNoData} />
                    <UserLayout path="/community/profile/modal-popup-global" component={CommunityProFileModalPopupGlobal} />
                    <UserLayout path="/community/follow-no-data" component={CommunityFollowNoData} /> */}

                    <UserLayoutTemplete path="/community-templete/main-header" component={MainHeader} />
                    <UserLayoutTemplete path="/community-templete/main-search" component={MainSearch} />
                    <UserLayoutTemplete path="/community-templete/main-search-nodata" component={MainSearchNodata} />
                    <UserLayoutTemplete path="/community-templete/intro100" component={Intro100} />
                    <UserLayoutTemplete path="/community-templete/intro1200" component={Intro1200} />
                    <UserLayoutTemplete path="/community-templete/templete-a" component={TempleteA} />
                    <UserLayoutTemplete path="/community-templete/templete-a" component={TempleteA} />
                    <UserLayoutTemplete path="/community-templete/templete-b" component={TempleteB} />
                    <UserLayoutTemplete path="/community-templete/templete-c" component={TempleteC} />

                    <UserLayoutTemplete path="/community-templete/templete-sub-list-type-01" component={TempleteSubListType01} />
                    <UserLayoutTemplete path="/community-templete/templete-sub-list-type-02" component={TempleteSubListType02} />
                    <UserLayoutTemplete path="/community-templete/templete-sub-image-type-01" component={TempleteSubImageType01} />
                    <UserLayoutTemplete path="/community-templete/templete-sub-image-type-02" component={TempleteSubImageType02} />
                    <UserLayoutTemplete path="/community-templete/templete-sub-detail-type-01" component={TempleteSubDetailType01} />
                    <UserLayoutTemplete path="/community-templete/templete-sub-detail-type-02" component={TempleteSubDetailType02} />
                    <UserLayoutTemplete path="/community-templete/templete-sub-edit-type-01" component={TempleteSubEditType01} />
                    <UserLayoutTemplete path="/community-templete/templete-sub-edit-type-02" component={TempleteSubEditType02} />
                    <UserLayoutTemplete path="/community-templete/templete-sub-edit-type-01b" component={TempleteSubEditType01b} />
                    <UserLayoutTemplete path="/community-templete/templete-sub-edit-type-02b" component={TempleteSubEditType02b} />
                    <UserLayoutTemplete path="/community-templete/templete-sub-rcm-list-type-01" component={TempleteSubRcmListType01} />
                    <UserLayoutTemplete path="/community-templete/templete-sub-rcm-list-type-02" component={TempleteSubRcmListType02} />
                    <UserLayoutTemplete path="/community-templete/templete-sub-search-list-type-01" component={TempleteSubSearchListType01} />
                    <UserLayoutTemplete path="/community-templete/templete-sub-search-list-type-02" component={TempleteSubSearchListType02} />
                    <UserLayoutTemplete path="/community-templete/templete-sub-search-image-type-01" component={TempleteSubSearchImageType01} />
                    <UserLayoutTemplete path="/community-templete/templete-sub-search-image-type-02" component={TempleteSubSearchImageType02} />

                    <UserLayoutTemplete path="/community-templete/templete-member-list890-tab1" component={TempleteMemberList890Tab1} />
                    <UserLayoutTemplete path="/community-templete/templete-member-list890-tab2" component={TempleteMemberList890Tab2} />
                    <UserLayoutTemplete path="/community-templete/templete-member-list890-tab3" component={TempleteMemberList890Tab3} />
                    <UserLayoutTemplete path="/community-templete/templete-member-list890-tab4" component={TempleteMemberList890Tab4} />
                    <UserLayoutTemplete path="/community-templete/templete-member-list890-tab3-nodata" component={TempleteMemberList890Tab3Nodata} />
                    <UserLayoutTemplete path="/community-templete/templete-member-list890-tab4-nodata" component={TempleteMemberList890Tab4Nodata} />

                    <UserLayoutTemplete path="/community-templete/templete-member-list1200-tab1" component={TempleteMemberList1200Tab1} />
                    <UserLayoutTemplete path="/community-templete/templete-member-list1200-tab2" component={TempleteMemberList1200Tab2} />
                    <UserLayoutTemplete path="/community-templete/templete-member-list1200-tab3" component={TempleteMemberList1200Tab3} />
                    <UserLayoutTemplete path="/community-templete/templete-member-list1200-tab4" component={TempleteMemberList1200Tab4} />
                    <UserLayoutTemplete path="/community-templete/templete-member-list1200-tab3-nodata" component={TempleteMemberList1200Tab3Nodata} />
                    <UserLayoutTemplete path="/community-templete/templete-member-list1200-tab4-nodata" component={TempleteMemberList1200Tab4Nodata} />

                    <UserLayoutTemplete path="/admin/admin-member-list" component={AdminMemberList} />
                    <UserLayoutTemplete path="/admin/admin-member-list-nodata" component={AdminMemberListNodata} />
                    <UserLayoutTemplete path="/admin/admin-member-alert-popup" component={AdminMemberAlertPopup} />
                    <UserLayoutTemplete path="/admin/admin-member-alert-popup-reject" component={AdminMemberAlertPopupReject} />
                    <UserLayoutTemplete path="/admin/admin-member-holding-list" component={AdminMemberHoldingList} />
                    <UserLayoutTemplete path="/admin/admin-member-holding-list-nodata" component={AdminMemberHoldingListNodata} />
                    <UserLayoutTemplete path="/admin/admin-member-registration" component={AdminMemberRegistration} />
                    <UserLayoutTemplete path="/admin/admin-templete-list" component={AdminTempleteList} />
                    <UserLayoutTemplete path="/admin/admin-templete-list-popup" component={AdminTempleteListPopup} />
                    <UserLayoutTemplete path="/admin/admin-intro-list" component={AdminIntroList} />
                    <UserLayoutTemplete path="/admin/admin-intro-list-nodata" component={AdminIntroListNodata} />
                    <UserLayoutTemplete path="/admin/admin-intro-list-popup" component={AdminIntroListPopup} />
                    <UserLayoutTemplete path="/admin/admin-intro-add-popup" component={AdminIntroAddPopup} />
                    <UserLayoutTemplete path="/admin/admin-intro-design1200" component={AdminIntroDesign1200} />
                    <UserLayoutTemplete path="/admin/admin-intro-design1200-sample" component={AdminIntroDesign1200Sample} />
                    <UserLayoutTemplete path="/admin/admin-intro-design100" component={AdminIntroDesign100} />
                    <UserLayoutTemplete path="/admin/admin-intro-design100-sample" component={AdminIntroDesign100Sample} />
                    <UserLayoutTemplete path="/admin/admin-intro-design-html" component={AdminIntroDesignHtml} />

                    <UserLayoutTemplete path="/admin/admin-templete-add-a" component={AdminTempleteAddA} />
                    <UserLayoutTemplete path="/admin/admin-templete-add-b" component={AdminTempleteAddB} />
                    <UserLayoutTemplete path="/admin/admin-templete-add-c" component={AdminTempleteAddC} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit" component={AdminTempleteEdit} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-preview" component={AdminTempleteEditPreview} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-preview-b" component={AdminTempleteEditPreviewB} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-preview-c" component={AdminTempleteEditPreviewC} />

                    <UserLayoutTemplete path="/admin/admin-templete-edit-b" component={AdminTempleteEditB} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-c" component={AdminTempleteEditC} />

                    <UserLayoutTemplete path="/admin/admin-templete-edit-popup1" component={AdminTempleteEditPopup1} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-popup2" component={AdminTempleteEditPopup2} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-popup3" component={AdminTempleteEditPopup3} />

                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp1010" component={AdminTempleteEditPopupCP1010} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp1010-img" component={AdminTempleteEditPopupCP1010Img} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp2010-img-slide" component={AdminTempleteEditPopupCP2010ImgSlide} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp2010-img-grid" component={AdminTempleteEditPopupCP2010ImgGrid} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp3010-img-slide" component={AdminTempleteEditPopupCP3010ImgSlide} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp3010-img-grid" component={AdminTempleteEditPopupCP3010ImgGrid} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp1010-board" component={AdminTempleteEditPopupCP1010Board} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp2010-board" component={AdminTempleteEditPopupCP2010Board} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp2010-board-img-txt" component={AdminTempleteEditPopupCP2010BoardImgTxt} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp3010-board" component={AdminTempleteEditPopupCP3010Board} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp3010-board-post" component={AdminTempleteEditPopupCP3010BoardPost} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp3010-board-post2" component={AdminTempleteEditPopupCP3010BoardPost2} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp3010-board-post-search" component={AdminTempleteEditPopupCP3010BoardPostSearch} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp3010-board-post-search-result" component={AdminTempleteEditPopupCP3010BoardPostSearchResult} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp1010-html" component={AdminTempleteEditPopupCP1010Html} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp3010-html" component={AdminTempleteEditPopupCP3010Html} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp1010-video" component={AdminTempleteEditPopupCP1010Video} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp2010-video" component={AdminTempleteEditPopupCP2010Video} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp3010-video-post" component={AdminTempleteEditPopupCP3010VideoPost} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp3010-video-youtube" component={AdminTempleteEditPopupCP3010VideoYoutube} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp1010-tab" component={AdminTempleteEditPopupCP1010Tab} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp2010-tab" component={AdminTempleteEditPopupCP2010Tab} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp3010-tab" component={AdminTempleteEditPopupCP3010Tab} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp3010-lcard1" component={AdminTempleteEditPopupCP3010LCard1} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp3010-lcard2" component={AdminTempleteEditPopupCP3010LCard2} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp3010-lcard-post-search" component={AdminTempleteEditPopupCP3010LCardPostSearch} />
                    <UserLayoutTemplete path="/admin/admin-templete-edit-pop-cp3010-lcard-post-search-result" component={AdminTempleteEditPopupCP3010LCardPostSearchResult} />

                    <UserLayoutTemplete path="/admin/admin-group-list" component={AdminGroupList} />
                    <UserLayoutTemplete path="/admin/admin-group-list-nodata" component={AdminGroupListNodata} />
                    <UserLayoutTemplete path="/admin/admin-group-create" component={AdminGroupCreate} />
                    <UserLayoutTemplete path="/admin/admin-group-alert-popup" component={AdminGroupAlertPopup} />
                    <UserLayoutTemplete path="/admin/admin-group-detail-list" component={AdminGroupDetailList} />
                    <UserLayoutTemplete path="/admin/admin-member-group-add" component={AdminMemberGroupAdd} />
                    <UserLayoutTemplete path="/admin/admin-group-detail-list-nodata" component={AdminGroupDetailListNodata} />
                    <UserLayoutTemplete path="/admin/menu-default" component={MenuDefault} />
                    <UserLayoutTemplete path="/admin/menu-default-add" component={MenuDefaultAdd} />
                    <UserLayoutTemplete path="/admin/menu-default-add-category" component={MenuDefaultAddCategory} />
                    <UserLayoutTemplete path="/admin/menu-default-add-discussion" component={MenuDefaultAddDiscussion} />
                    <UserLayoutTemplete path="/admin/menu-default-add-list" component={MenuDefaultAddList} />
                    <UserLayoutTemplete path="/admin/menu-default-add-survey" component={MenuDefaultAddSurvey} />
                    <UserLayoutTemplete path="/admin/menu-default-add-survey-popup" component={AdminMenuAddSurveyPopup} />
                    <UserLayoutTemplete path="/admin/menu-default-add-link" component={MenuDefaultAddLink} />
                    <UserLayoutTemplete path="/admin/menu-default-add-html" component={MenuDefaultAddHtml} />
                    <UserLayoutTemplete path="/admin/home-menu-default" component={HomeMenuDefault} />
                    <UserLayoutTemplete path="/admin/home-menu-default-new" component={HomeMenuDefaultNew} />
                    <UserLayoutTemplete path="/admin/home-menu-html" component={HomeMenuHtml} />
                    <UserLayoutTemplete path="/admin/admin-community-chart-board-default" component={AdminCommunityChartBoardDefault} />
                    <UserLayoutTemplete path="/admin/admin-community-chart-board" component={AdminCommunityChartBoard} />
                    <UserLayoutTemplete path="/admin/admin-community-chart-board-3m" component={AdminCommunityChartBoard3m} />
                    <UserLayoutTemplete path="/admin/admin-community-chart-board-cnt" component={AdminCommunityChartBoardCnt} />
                    <UserLayoutTemplete path="/admin/admin-community-chart-board-cnt-3m" component={AdminCommunityChartBoardCnt3m} />
                    <UserLayoutTemplete path="/admin/admin-community-chart-board-cnt-open" component={AdminCommunityChartBoardCntOpen} />
                    <UserLayoutTemplete path="/admin/admin-community-chart-visit" component={AdminCommunityChartVisit} />
                    <UserLayoutTemplete path="/admin/admin-community-chart-visit-3m" component={AdminCommunityChartVisit3m} />
                    <UserLayoutTemplete path="/admin/admin-community-chart-visit-default" component={AdminCommunityChartVisitDefault} />
                    <UserLayoutTemplete path="/admin/admin-community-chart-member" component={AdminCommunityChartMember} />
                    <UserLayoutTemplete path="/admin/admin-community-chart-member-default" component={AdminCommunityChartMemberDefault} />
                    <UserLayoutTemplete path="/admin/admin-community-chart-menu" component={AdminCommunityChartMenu} />
                    <UserLayoutTemplete path="/admin/admin-community-chart-menu-default" component={AdminCommunityChartMenuDefault} />



                    {/* 외부 Login */}
                    <Route path="/login/privacy-agree" component={PrivacyAgree} />
                    <Route path="/login/password-info-modal" component={PasswordInfoModal} />
                    <Route path="/login/interest-settings-part" component={InterestSettingsPart} />
                    <Route path="/login/interest-settings-job-plan" component={InterestSettingsJobPlan} />
                    <Route path="/login/interest-settings-job-plan-case01" component={InterestSettingsJobPlanCase01} />
                    <Route path="/login/interest-settings-learning-type" component={InterestSettingsLearningType} />
                    <Route path="/login/interest-settings-complete" component={InterestSettingsComplete} />
                    <Route path="/login/interest-settings-start" component={InterestSettingsStart} />
                    <Route path="/login/interest-settings-start-zh" component={InterestSettingsStartZh} />
                    <Route path="/login/interest-settings-start-eng" component={InterestSettingsStartEng} />
                    <Route path="/login/interest-settings-suni-intro" component={InterestSettingsSuniIntroduction} />
                    <Route path="/login/new-privacy-agree" component={NewPrivacyAgree} />
                    <Route path="/login/joining-form" component={JoiningForm} />
                    <Route path="/login/joining-form-loader" component={JoiningFormLoader} />
                    <Route path="/login/joining-form-popup-confirm" component={JoiningFormPopupConfirm} />
                    <Route path="/login/joining-form-popup" component={JoiningFormPopup} />
                    <Route path="/login/privacy-agree-extra" component={PrivacyAgreeExtra} />
                    <Route path="/login/privacy-agree-extra-error" component={PrivacyAgreeExtraError} />
                    <Route path="/login/regi-form" component={RegiForm} />
                    <Route path="/login/regi-form-error" component={RegiFormError} />
                    <Route path="/login/regi-end" component={RegiEnd} />
                    <Route path="/login/password-change" component={PasswordChange} />
                    <Route path="/login/password-change-error" component={PasswordChangeError} />

                    {/* 내부 Login */}
                    {/* <Route path="/login/LoginForm" component={LoginForm} /> */}
                    {/* <Route path="/login/LoginInquery" component={LoginInquery} />
                    <Route path="/login/LoginInqueryError" component={LoginInqueryError} /> */}


                    {/* 비밀번호 6개월 주기 변경 안내 */}
                    <Route path="/login/password-change-info" component={PasswordChangeInfo} />
                    <Route path="/login/password-change-info-error" component={PasswordChangeInfoError} />

                    {/* Main */}
                    <UserLayoutMain path="/main/MainIndexNew" component={MainIndexNew} />
                    <UserLayoutMainCareer path="/main/MainIndexNewCareer" component={MainIndexNewCareer} />
                    <UserLayoutMain path="/main/MainIndexNewNoBadge" component={MainIndexNewNoBadge} />
                    <UserLayoutMain path="/main/MainPersonalBoardProfileNew" component={MainPersonalBoardProfileNew} />
                    <UserLayoutMain path="/main/MainPersonalBoardSetting" component={MainPersonalBoardSetting} />
                    {/* <UserLayoutMain path="/main/main-index" component={MainIndex} />
                    <UserLayoutMain path="/main/main-index-final" component={MainIndexFinal} />
                    <UserLayoutMain path="/main/main-index-nodata" component={MainIndexNoData} />
                    <UserLayoutMain path="/main/main-personal-board" component={MainPersonalBoard} />
                    <UserLayoutMain path="/main/main-personal-board-profile" component={MainPersonalBoardProfile} />
                    <UserLayoutMain path="/main/main-personal-board-zero" component={MainPersonalBoardZero} />
                    <UserLayoutMain path="/main/main-personal-board-event" component={MainPersonalBoardEvent} />
                    <UserLayoutMain path="/main/main-personal-board-event-v2" component={MainPersonalBoardEventV2} />
                    <UserLayoutMain path="/main/main-personal-board-new" component={MainPersonalBoardNew} />
                    <UserLayoutMain path="/main/main-personal-board-new-v2" component={MainPersonalBoardNewV2} />
                    <UserLayoutMain path="/main/main-personal-board-now" component={MainPersonalBoardNow} /> */}

                    {/* <UserLayoutMain path="/main/main-tutorial" component={MainTutorial} />
                    <UserLayoutMain path="/main/main-tutorial-v2" component={MainTutorialV2} />
                    <UserLayoutMain path="/main/main-tutorial-v3" component={MainTutorialV3} />
                    <UserLayoutMain path="/main/main-tutorial-v4" component={MainTutorialV4} />
                    <UserLayoutMain path="/main/main-tutorial-v4-chn" component={MainTutorialV4Chn} />
                    <UserLayoutMain path="/main/main-tutorial-v4-eng" component={MainTutorialV4Eng} /> */}
                    <UserLayoutMain path="/main/MainTutorialPlaylistKo" component={MainTutorialPlaylistKo} />
                    <UserLayoutMain path="/main/MainTutorialPlaylistZh" component={MainTutorialPlaylistZh} />
                    <UserLayoutMain path="/main/MainTutorialPlaylistEn" component={MainTutorialPlaylistEn} />
                    <UserLayoutMain path="/main/MainTutorialV5Ko" component={MainTutorialV5Ko} />
                    <UserLayoutMain path="/main/MainTutorialV5Zh" component={MainTutorialV5Zh} />
                    <UserLayoutMain path="/main/MainTutorialV5En" component={MainTutorialV5En} />
                    <UserLayoutMain path="/main/MainLearningViewAll" component={MainLearningViewAll} />
                    {/* <UserLayoutMain path="/main/main-learning-view-select" component={MainLearningViewSelect} />
                    <UserLayoutMain path="/main/MainLearningViewAll-new" component={MainLearningViewAllNew} />
                    <UserLayoutMain path="/main/MainLearningViewAll-popular" component={MainLearningViewAllPopular} />
                    <UserLayoutMain path="/main/MainLearningViewAll-required" component={MainLearningViewAllRequired} /> */}

                    {/* 설정변경안내 */}
                    <UserLayoutMain path="/main/MainSettingKo" component={MainSettingKo} />

                    {/* search SearchLayout -> UserLayout으로 변경*/}
                    <UserLayout path="/search/search-all-filter-disable" component={SearchAllFilterDisable} />
                    <UserLayout path="/search/search-all-filter-disable-loading" component={SearchAllFilterDisableLoading} />
                    <UserLayout path="/search/search-all-filter-disable-nodata" component={SearchAllFilterDisableNoData} />
                    <UserLayout path="/search/search-all-filter-nodata" component={SearchAllFilterNoData} />
                    <UserLayout path="/search/search-result-learningcard" component={SearchResultLearningCard} />
                    <UserLayout path="/search/search-result-export" component={SearchResultExport} />
                    <UserLayout path="/search/search-result-export-nodata" component={SearchResultExportNoData} />
                    <UserLayout path="/search/search-result-learningcard-nodata" component={SearchResultLearningCardNoData} />
                    <UserLayout path="/search/search-filter-select" component={SearchFilterSelect} />


                    {/* LMS통합검색 - 리뉴얼 */}
                    <UserLayoutSearch path="/searchTotal/search-result-new" component={SearchResultNew} />
                    <UserLayoutSearchCareer path="/searchTotal/search-result-new-career" component={SearchResultNewCareer} />
                    <UserLayoutSearch path="/searchTotal/search-result-new-suggest" component={SearchResultNewSuggest} />
                    <UserLayoutSearch path="/searchTotal/search-result-new-re" component={SearchResultNewRe} />
                    <UserLayoutSearch path="/searchTotal/search-result-nodata" component={SearchResultNodata} />
                    <UserLayoutSearch path="/searchTotal/search-result-badge-new" component={SearchResultBadgeNew} />
                    {/* LMS통합검색 */}
                    {/* <UserLayout path="/searchTotal/search-result-all" component={SearchResultAll} /> */}
                    <UserLayout path="/searchTotal/search-result-all-before" component={SearchResultAllBefore} />
                    <UserLayout path="/searchTotal/search-result-learncard" component={SearchResultLearncard} />
                    <UserLayout path="/searchTotal/search-result-learncard-test" component={SearchResultLearncardTest} />
                    <UserLayout path="/searchTotal/search-result-community" component={SearchResultCommunity} />
                    <UserLayout path="/searchTotal/search-result-teacher" component={SearchResultTeacher} />
                    <UserLayout path="/searchTotal/search-result-loading" component={SearchResultLoading} />
                    <UserLayout path="/searchTotal/search-result-re" component={SearchResultRe} />

                    {/* Recommend */}
                    <UserLayout path="/recommend/RecommendDetailChannelOpen" component={RecommendDetailChannelOpen} />
                    <UserLayout path="/recommend/RecommendDetailNoData" component={RecommendDetailNoData} />
                    <UserLayout path="/recommend/RecommendViewallChannelChange" component={RecommendViewallChannelChange} />
                    <UserLayout path="/recommend/RecommendViewNoData" component={RecommendViewNoData} />

                    {/* Support */}
                    <UserLayout path="/support/notice-list-user" component={NoticeListUser} />
                    <UserLayout path="/support/notice-view-user" component={NoticeViewUser} />
                    <UserLayout path="/support/faq-list-user" component={FaqListUser} />
                    <UserLayout path="/support/faq-view-user" component={FaqViewUser} />
                    <UserLayout path="/support/qa-list-user" component={QAListUser} />
                    <UserLayout path="/support/qa-view-user-question" component={QAViewUserQuestion} />
                    <UserLayout path="/support/qa-view-user-answer" component={QAViewUserAnswer} />
                    <UserLayout path="/support/create-qa" component={CreateQA} />
                    <UserLayout path="/support/edit-qa" component={EditQA} />
                    <UserLayout path="/support/notice-list-admin" component={NoticeListAdmin} />
                    <UserLayout path="/support/notice-view-admin" component={NoticeViewAdmin} />
                    <UserLayout path="/support/create-notice-admin-main" component={CreateNoticeAdminMain} />
                    <UserLayout path="/support/edit-notice-admin-main" component={EditNoticeAdminMain} />
                    <UserLayout path="/support/faq-list-admin" component={FaqListAdmin} />
                    <UserLayout path="/support/faq-view-admin" component={FaqViewAdmin} />
                    <UserLayout path="/support/create-faq-admin" component={CreateFaqAdmin} />
                    <UserLayout path="/support/edit-faq-admin" component={EditFaqAdmin} />
                    <UserLayout path="/support/notice-no-data" component={NoticeListNoDataUser} />
                    <UserLayout path="/support/notice-list-new" component={NoitceListNew} />
                    <UserLayout path="/support/notice-list-new-nodata" component={NoitceListNewNodata} />
                    <UserLayout path="/support/qa-admin-list" component={QAAdminList} />
                    <UserLayout path="/support/qa-admin-answer" component={QAAdminAnswer} />
                    <UserLayout path="/support/qa-admin-answer-view" component={QAAdminAnswerView} />
                    <UserLayout path="/support/qa-admin-answer-view-survey" component={QAAdminAnswerViewSurvey} />
                    <UserLayout path="/support/qa-admin-answer-view-survey-done" component={QAAdminAnswerViewSurveyDone} />
                    <UserLayout path="/support/faq-user-list" component={FaqUserList} />
                    <UserLayout path="/support/faq-user-list-nodata" component={FaqUserListNodata} />
                    <UserLayout path="/support/user-qa-list" component={UserQAList} />
                    <UserLayout path="/support/user-qa-write" component={UserQAWrite} />
                    <UserLayout path="/support/user-qa-write-modal-faq" component={UserQAWriteModalFaq} />
                    <UserLayout path="/support/user-qa-write-modal-faq-nodata" component={UserQAWriteModalFaqNodata} />

                    {/* Introduction */}
                    <UserLayout path="/introduction/category-introduction-v2" component={CategoryIntroductionV2} />
                    <UserLayout path="/introduction/category-introduction-v2-eng" component={CategoryIntroductionV2Eng} />
                    <UserLayout path="/introduction/category-introduction-v2-chn" component={CategoryIntroductionV2Chn} />
                    <UserLayout path="/introduction/college-introduction-new" component={CollegeIntroductionNew} />
                    {/* <UserLayout path="/introduction/all-introduction" component={AllIntroduction}/> */}
                    {/* <UserLayout path="/introduction/college-introduction" component={CollegeIntroduction}/> */}
                    <UserLayout path="/introduction/college-introduction-manage" component={CollegeIntroductionManage} />
                    {/* <UserLayout path="/introduction/cogmlxollege-introduction-test" component={CollegeIntroductionTest}/> */}
                    <UserLayout path="/introduction/certification-system-introduction-ko" component={CertificationSystemIntroductionKo} />
                    <UserLayout path="/introduction/certification-system-introduction-en" component={CertificationSystemIntroductionEn} />
                    <UserLayout path="/introduction/certification-system-introduction-zh" component={CertificationSystemIntroductionZh} />
                    <UserLayout path="/introduction/promotion-data" component={PromotionData} />
                    <UserLayout path="/introduction/certification-system-introduction-ko-v2" component={CertificationSystemIntroductionV2Ko} />

                    {/* Common */}
                    <UserLayout path="/common/site-map-modal" component={SiteMapModal} />
                    <UserLayoutCareer path="/common/SiteMapModalCareer" component={SiteMapModalCareer} />
                    <UserLayout path="/common/categoryDetail" component={CategoryDetail} />
                    <UserLayout path="/common/CollegeAllNew" component={CollegeAllNew} />
                    <UserLayout path="/common/CollegeAllNewSelected" component={CollegeAllNewSelected} />
                    <UserLayout path="/common/CollegeAllNewSelectedAll" component={CollegeAllNewSelectedAll} />
                    <UserLayout path="/common/CollegeAllNewNoDepth" component={CollegeAllNewNoDepth} />
                    <UserLayout path="/common/CollegeAllNewNoDepthSelected" component={CollegeAllNewNoDepthSelected} />

                    <UserLayout path="/common/privacy-policy-modal" component={PrivacyPolicyModal} />
                    <UserLayout path="/common/personal-info-modal" component={PersonalInfoModal} />
                    <UserLayout path="/common/personal-info-modal-no-chk" component={PersonalInfoModalNoChk} />

                    <UserLayout path="/common/iframe-test" component={IframeTest} />
                    <Route path="/common/error404" component={Error404} />
                    <UserLayout path="/common/loading" component={Loading} />
                    <UserLayout path="/common/system-error" component={SystemError} />
                    <UserLayoutCareer path="/common/system-check" component={SystemCheckModal} />
                    <UserLayout path="/common/modal-set" component={ModalSet} />
                    <UserLayout path="/common/list-filter-modal" component={ListFilterModal} />
                    <Route path="/common/browser-align" component={BrowserAlign} />
                    <UserLayout path='/common/editor-emoji-popup' component={EditorEmojiPopup} />

                    {/* Create */}
                    <UserLayout path="/create/list-create" component={ListCreate} />
                    <UserLayout path="/create/list-create-personal" component={ListCreatePersonal} />
                    <UserLayout path="/create/list-shared" component={ListShared} />
                    <UserLayout path="/create/list-create-nodata" component={ListCreateNoData} />
                    <UserLayout path="/create/create-movie-modal" component={CreateMovieModal} />
                    <UserLayout path="/create/create-step1-input" component={CreateStep1Input} />
                    <UserLayout path="/create/create-step2-video" component={CreateStep2Video} />
                    <UserLayout path="/create/video-file-upload-modal" component={VideoFileUploadModal} />
                    <UserLayout path="/create/create-step2-audio" component={CreateStep2Audio} />
                    <UserLayout path="/create/create-step2-webpage" component={CreateStep2Webpage} />
                    <UserLayout path="/create/create-step2-document" component={CreateStep2Document} />
                    <UserLayout path="/create/create-step2-community" component={CreateStep2Community} />
                    <UserLayout path="/create/share-detail-video" component={ShareDetailVideo} />
                    <UserLayout path="/create/share-detail-audio" component={ShareDetailAudio} />
                    <UserLayout path="/create/share-detail-webpage" component={ShareDetailWebpage} />
                    <UserLayout path="/create/share-detail-document" component={ShareDetailDocument} />
                    <UserLayout path="/create/share-detail-community" component={ShareDetailCommunity} />
                    <UserLayout path="/create/share-detail-complete-video" component={ShareDetailCompleteVideo} />
                    <UserLayout path="/create/create-one-step" component={CreateOneStep} />
                    <UserLayout path="/create/create-tab-detail" component={CreateTabDetail} />

                    <UserLayout path="/support/support-list" component={SupportList} />
                    <UserLayout path="/support/notice-view" component={NoticeView} />
                    <UserLayout path="/support/qa-view" component={QAView} />
                    <UserLayout path="/support/qa-create" component={QACreate} />

                    {/* ETC */}
                    <UserLayoutHeader path="/etc/SafetyEducation" component={SafetyEducation} />
                    <UserLayoutHeader path="/etc/SafetyEducationError" component={SafetyEducationError} />
                    <UserLayoutHeader path="/etc/SafetyEducationCert" component={SafetyEducationCert} />
                    <UserLayout path="/etc/common-info-modal" component={CommonInfoModal} />
                    <UserLayout path="/etc/welcome-message-modal" component={WelcomeMessageModal} />
                    <UserLayout path="/etc/system-info-modal" component={SystemInfoModal} />

                    <UserLayout path="/etc/promotion-dashboard" component={PromotionDashboard} />

                    {/*Certification*/}
                    <UserLayout path="/certification/all-badge-case" component={AllBadgeCase} />
                    <UserLayout path="/certification/BadgeSample" component={BadgeSample} />
                    <UserLayout path="/certification/AllBadgeListSlideV2" component={AllBadgeListSlideV2} />
                    {/* <UserLayout path="/certification/AllBadgeListSlideV2-fs" component={AllBadgeListSlideV2FS} /> */}
                    {/* <UserLayout path="/certification/AllBadgeListSlideV2Nodata" component={AllBadgeListSlideV2Nodata} /> */}
                    <UserLayout path="/certification/AllBadgeListDetailV2" component={AllBadgeListDetailV2} />
                    <UserLayoutCareer path="/certification/AllBadgeListDetailV2Career" component={AllBadgeListDetailV2Career} /> {/* 커리어플랫폼용 샘플 */}
                    {/* <UserLayout path="/certification/all-badge-list-detail-case-v2" component={AllBadgeListDetailCaseV2} /> */}
                    <UserLayout path="/certification/ChallengingBadgeListV2" component={ChallengingBadgeListV2} />
                    <UserLayout path="/certification/EarnedBadgeListV2" component={EarnedBadgeListV2} />
                    {/* <UserLayout path="/certification/all-badge-list-test" component={AllBadgeListTest} /> */}
                    <UserLayout path="/all-show" component={AllShow} />

                    {/* Hot Topic */}
                    <UserLayout path="/hot-topic/HotTopicList" component={HotTopicList} />
                    <UserLayout path="/hot-topic/HotTopicPage" component={HotTopicPage} />

                    <UserLayout path="/expert/all-lecturer-common" component={AllLecturerCommon} />
                    <UserLayout path="/expert/teacher-lecture" component={TeacherLecture} />
                    <UserLayout path="/expert/teacher-lecture-nodata" component={TeacherLectureNoData} />
                    {/* <TeacherLayout path="/expert/external-teacher-main" component={ExternalTeacherMain} />
                    <TeacherLayout path="/expert/external-teacher-main-cube-tab" component={ExternalTeacherMainCubeTab} /> */}
                    <TeacherLayout path="/expert/external-teacher-main-card-v2" component={ExternalTeacherMainCardV2} />
                    <TeacherLayout path="/expert/external-teacher-main-cube-v2" component={ExternalTeacherMainCubeV2} />
                    <TeacherLayout path="/expert/external-teacher-main-community-v2" component={ExternalTeacherMainCommunityV2} />
                    <TeacherLayout path="/expert/external-teacher-intro-card-v2" component={ExternalTeacherIntroCardV2} />
                    <TeacherLayout path="/expert/external-teacher-intro-cube-v2" component={ExternalTeacherIntroCubeV2} />
                    <TeacherLayout path="/expert/external-teacher-task" component={ExternalTeacherTask} />
                    <TeacherLayout path="/expert/external-teacher-test" component={ExternalTeacherTest} />
                    <TeacherLayout path="/expert/external-teacher-modal-score" component={ExternalTeacherModalScore} />
                    <TeacherLayout path="/expert/external-teacher-modal-view" component={ExternalTeacherModalView} />
                    <TeacherLayout path="/expert/external-teacher-modal-view2" component={ExternalTeacherModalView2} />
                    <TeacherLayout path="/expert/external-teacher-modal-test-all" component={ExternalTeacherModalTestAll} />
                    <TeacherLayout path="/expert/external-teacher-modal-task-all" component={ExternalTeacherModalTaskAll} />
                    <TeacherLayout path="/expert/external-teacher-modal-view2-task" component={ExternalTeacherModalView2Task} />
                    <TeacherLayout path="/expert/external-teacher-overview" component={ExternalTeacherOverview} />
                    <TeacherLayout path="/expert/external-teacher-comment" component={ExternalTeacherComment} />
                    <TeacherLayout path="/expert/external-teacher-search-a" component={ExternalTeacherSearchA} />
                    <TeacherLayout path="/expert/external-teacher-search-b" component={ExternalTeacherSearchB} />
                    <TeacherLayout path="/expert/external-teacher-main-profile" component={ExternalTeacherMainProfile} />

                    {/* 관리자 권한신청 페이지 추가 */}
                    <Route path="/Authority/AdminAuthorityForm" component={AdminAuthorityForm} />
                    <Route path="/Authority/AdminAuthorityList" component={AdminAuthorityList} />
                    <Route path="/Authority/AdminAuthorityListEmpty" component={AdminAuthorityListEmpty} />
                    <Route path="/Authority/AdminAuthorityView" component={AdminAuthorityView} />
                    <Route path="/Authority/AdminAuthorityViewExpand" component={AdminAuthorityViewExpand} />
                    <Route path="/Authority/AdminAuthorityModify" component={AdminAuthorityModify} />

                    {/* 카테고리 커리큘럼 */}
                    {/* <UserLayout path="/Category/01_AI_KOR" component={CA_01_AI_KOR} /> */}
                    {/* <UserLayout path="/Category/01_AI_ENG" component={CA_01_AI_ENG} /> */}
                    {/* <UserLayout path="/Category/01_AI_CHN" component={CA_01_AI_CHN} /> */}
                    {/* <UserLayout path="/Category/02_DT_KOR" component={CA_02_DT_KOR} /> */}
                    {/* <UserLayout path="/Category/02_DT_ENG" component={CA_02_DT_ENG} /> */}
                    {/* <UserLayout path="/Category/02_DT_CHN" component={CA_02_DT_CHN} /> */}
                    {/* <UserLayout path="/Category/03_Happy_KOR" component={CA_03_Happy_KOR} /> */}
                    {/* <UserLayout path="/Category/03_Happy_ENG" component={CA_03_Happy_ENG} /> */}
                    {/* <UserLayout path="/Category/03_Happy_CHN" component={CA_03_Happy_CHN} /> */}
                    {/* <UserLayout path="/Category/04_SV_KOR" component={CA_04_SV_KOR} /> */}
                    {/* <UserLayout path="/Category/04_SV_ENG" component={CA_04_SV_ENG} /> */}
                    {/* <UserLayout path="/Category/04_SV_CHN" component={CA_04_SV_CHN} /> */}
                    {/* <UserLayout path="/Category/05_Innovation_KOR" component={CA_05_Innovation_KOR} /> */}
                    {/* <UserLayout path="/Category/05_Innovation_ENG" component={CA_05_Innovation_ENG} /> */}
                    {/* <UserLayout path="/Category/05_Innovation_CHN" component={CA_05_Innovation_CHN} /> */}
                    {/* <UserLayout path="/Category/06_Global_KOR" component={CA_06_Global_KOR} /> */}
                    {/* <UserLayout path="/Category/06_Global_ENG" component={CA_06_Global_ENG} /> */}
                    {/* <UserLayout path="/Category/06_Global_CHN" component={CA_06_Global_CHN} /> */}
                    {/* <UserLayout path="/Category/07_Leadership_KOR" component={CA_07_Leadership_KOR} /> */}
                    {/* <UserLayout path="/Category/07_Leadership_ENG" component={CA_07_Leadership_ENG} /> */}
                    {/* <UserLayout path="/Category/07_Leadership_CHN" component={CA_07_Leadership_CHN} /> */}
                    {/* <UserLayout path="/Category/08_Management_KOR" component={CA_08_Management_KOR} /> */}
                    {/* <UserLayout path="/Category/08_Management_ENG" component={CA_08_Management_ENG} /> */}
                    {/* <UserLayout path="/Category/08_Management_CHN" component={CA_08_Management_CHN} /> */}
                    {/* <UserLayout path="/Category/09_Semiconductor_KOR" component={CA_09_Semiconductor_KOR} /> */}
                    {/* <UserLayout path="/Category/09_Semiconductor_ENG" component={CA_09_Semiconductor_ENG} /> */}
                    {/* <UserLayout path="/Category/09_Semiconductor_CHN" component={CA_09_Semiconductor_CHN} /> */}
                    {/* <UserLayout path="/Category/10_EnergySolution_KOR" component={CA_10_EnergySolution_KOR} /> */}
                    {/* <UserLayout path="/Category/10_EnergySolution_ENG" component={CA_10_EnergySolution_ENG} /> */}
                    {/* <UserLayout path="/Category/10_EnergySolution_CHN" component={CA_10_EnergySolution_CHN} /> */}
                    {/* <UserLayout path="/Category/11_BMDesign_KOR" component={CA_11_BMDesign_KOR} /> */}
                    {/* <UserLayout path="/Category/11_BMDesign_ENG" component={CA_11_BMDesign_ENG} /> */}
                    {/* <UserLayout path="/Category/11_BMDesign_CHN" component={CA_11_BMDesign_CHN} /> */}
                    {/* <UserLayout path="/Category/12_SKAcademy_KOR" component={CA_12_SKAcademy_KOR} /> */}
                    {/* <UserLayout path="/Category/12_SKAcademy_ENG" component={CA_12_SKAcademy_ENG} /> */}
                    {/* <UserLayout path="/Category/12_SKAcademy_CHN" component={CA_12_SKAcademy_CHN} /> */}

                    {/* 커리어플랫폼 */}
                    <UserLayoutCareer path="/MyCareer/CareerPlatform" component={CareerPlatform} />
                    <UserLayoutCareer path="/MyCareer/CareerPlatformModal" component={CareerPlatformModal} />
                </Switch>
            </Router>
        )
    }
}

export default App;
