import React from "react";
import { Image, Menu, Label, Tab } from "semantic-ui-react";
import manageImg01 from "../../../../../images/all/con-01.png";
import manageImg02 from "../../../../../images/all/con-02.png";
import manageImg09 from "../../../../../images/all/icon-category.png";
import manageImg10 from "../../../../../images/all/icon-chart.png";
import manageImg03 from "../../../../../images/all/con-01-1.png";

import Category from "../../../../../images/all/enter-category.png";
import Ing01 from "../../../../../images/all/ing-01.png";
import Ing02 from "../../../../../images/all/ing-02.png";
import Ing03 from "../../../../../images/all/ing-03.png";
import Ing04 from "../../../../../images/all/ing-04.png";
import Ing05 from "../../../../../images/all/ing-05.png";
import Ing06 from "../../../../../images/all/ing-06.png";
import Ing07 from "../../../../../images/all/ing-07.png";
import Ing08 from "../../../../../images/all/ing-08.png";
import Ing09 from "../../../../../images/all/ing-09.png";
import Ing10 from "../../../../../images/all/ing-10.png";
import Ing11 from "../../../../../images/all/ing-11.png";
import Ing12 from "../../../../../images/all/ing-12.png";
import Ing13 from "../../../../../images/all/ing-13.png";
import Ing14 from "../../../../../images/all/ing-14.png";
import Ing15 from "../../../../../images/all/ing-15.png";
import Ing16 from "../../../../../images/all/ing-16.png";
import Level01 from "../../../../../images/all/lv-01.png";
import Level02 from "../../../../../images/all/enter-lv-02.png";
import CourseBook from "../../../../../images/all/icon-course-book.png";

const panes = [
  {
    menuItem: "Management Category 소개",
    render: () => (
      <Tab.Pane attached={false}>
        <div className="belt">
          <div className="text-right-box">
            <a
              href="https://mysuni.sk.com/suni-main/lecture/college/CLG00008/channel/CHN0007m"
              className="item-button"
            >
              <img src={CourseBook} alt="" />
              과정 바로가기
            </a>
          </div>
        </div>
        <div className="belt">
          <div className="belt_wrapper">
            <div className="belt sub">
              <img src={manageImg01} />
            </div>
            <div className="belt_texts">
              <p>“ Intergrative Perspective &#38; Decision ”</p>
              <span>
                기업 경영 전반에 걸친 Perspective와 전략적 의사결정 역량 확보
              </span>
              <p>“ Over the Silo ”</p>
              <span>
                Function간, Function &#38; 역량 간 융합을 통해 보다 넓은 관점과{" "}
                <br />
                다양한 간접 경험 확보
              </span>
              <p>“ Set the Fundamental ”</p>
              <span>
                - Function 과정 : Function Group별 기초 지식 및 전문성 확보
              </span>
              <br />
              <span>- Competency 과정 : Deep Change를 위한 공통 역량 제고</span>
            </div>
          </div>
          <div className="belt college-mana-text">
            <p>
              <strong>개인의 직무와 수준, 관심사를 고려</strong>하여 스스로
              필요한 Online Contents의 자기주도적 학습, On-Off 통합 또는 Offline
              W/S을 통해 <br />
              Discussion, 내/외부 Case Study, Practice 공유 등{" "}
              <strong>실행 지향적 학습방식</strong>을 적용합니다. <br />
              특히, 외부의 Top Expert 뿐 아니라 SK 리더/전문가의 Insight와
              경험을 공유하는 SK Exclusive Contents를 제공할 계획입니다.
            </p>
          </div>
        </div>

        <div className="college-cont-map sub pbtom">
          <div className="belt">
            <div className="label sub">Management College 체계도</div>

            <div className="manage-main-wrap">
              <div className="manage-main-table con01">
                <div className="manage-main-tit tit tit_01">
                  <h3>Intergrative(통합)</h3>
                  <p>
                    3. 경영 Perspective 확보 위한
                    <br />
                    철학, 통합 의사결정
                  </p>
                  <span>신규 확장 영역</span>
                </div>
                <div className="manage-main-con">
                  <ul>
                    <li>
                      <a href={()=>false}>Advanced Management Program</a>
                    </li>
                    <li>
                      <a href={()=>false}>Capstone Project</a>
                    </li>
                    <li>
                      <a href={()=>false}>경영 Simulation, Case Study</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="manage-main-wrap">
              <div className="manage-main-table con01">
                <div className="manage-main-tit tit tit_02">
                  <h3>Combined(융합)</h3>
                  <p>
                    2. 복수의 Function Group /<br />
                    Competency 역량간 융합
                  </p>
                  <span>신규 확장 영역</span>
                </div>
                <div className="manage-main-con2">
                  <table>
                    <tbody>
                      <tr>
                        <td colspan="4" className="combine-texts">
                          <a href={()=>false}>Biz. Analytics와 의사결정</a>
                        </td>
                        <td></td>
                        <td></td>
                        <td className="combine-texts-sm">
                          <a href={()=>false}>
                            Biz. Analytics와
                            <br />
                            의사결정
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="combine-texts-sm">
                          <a href={()=>false}>통합 SCM 전략</a>
                        </td>
                        <td></td>
                        <td className="combine-texts-sm">
                          <a href={()=>false}>통합 SCM 전략</a>
                        </td>
                        <td></td>
                        <td className="combine-texts">
                          <a href={()=>false}>통합 SCM 전략</a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td colspan="2" className="combine-texts">
                          <a href={()=>false}>Marketing 성과 분석(ROI 등)</a>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td className="combine-texts">
                          <a href={()=>false}>비시장 전략</a>
                        </td>
                        <td></td>
                        <td className="combine-texts-sm">
                          <a href={()=>false}>비시장 전략</a>
                        </td>
                        <td colspan="2"></td>
                        <td colspan="2" className="combine-texts">
                          <a href={()=>false}>법무 협상 실무 과정</a>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" className="combine-texts">
                          <a href={()=>false}>Risk Management</a>
                        </td>
                        <td></td>
                        <td></td>
                        <td className="combine-texts">
                          <a href={()=>false}>구매협상과정</a>
                        </td>
                        <td></td>
                        <td className="combine-texts">
                          <a href={()=>false}>구매협상과정</a>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" className="combine-texts">
                          <a href={()=>false}>Biz Strategy & Finacial Performance</a>
                        </td>
                        <td></td>
                        <td className="combine-texts">
                          <a href={()=>false}>행복과 조직설계</a>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="manage-main-wrap">
              <div className="manage-main-table con01">
                <div className="manage-main-tit tit tit_03">
                  <h3>Function &#38; Competency</h3>
                  <p>
                    1. Function별 지식/전문성, <br />
                    공통 역량 확보{" "}
                  </p>
                  <span>기존 집중 영역</span>
                </div>

                <div className="manage-main-con3">
                  <div class="contents-wrapper">
                    <div class="contents-left">
                      <div class="contents-box">
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>
                              전사
                              <br />
                              Intelligence
                            </a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>자금 조달/운영</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>마케팅 조사 방법론</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>전략적 HR</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>전략적 BP발굴</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>기업법</a>
                          </span>
                        </div>
                      </div>
                      <div class="contents-box">
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>
                              전략실행과
                              <br />
                              성과관리
                            </a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>국제 세무</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>
                              B2B 마케팅
                              <br />
                              &Sales
                            </a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>Agile 직무 관리</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>구매전략</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>공정거래법</a>
                          </span>
                        </div>
                      </div>
                      <div class="contents-box">
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>
                              Corporate
                              <br />
                              Strategy
                            </a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>고급 회계</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>디지털 융합 마케팅</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>조직 설계 방법론</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>
                              구매의 미래,
                              <br />
                              품질관리
                            </a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>특허활용과 매입</a>
                          </span>
                        </div>
                      </div>

                      <div class="dot-belt">
                        <p></p>
                        <p></p>
                        <p></p>
                      </div>
                      <div class="dotdot-line"></div>

                      <div class="contents-box">
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>전략101</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>
                              세무회계 실무
                              <br />첫 걸음
                            </a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>
                              마케팅
                              <br />
                              Framework
                            </a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>HR 공통</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>구매 Process</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>법무 101</a>
                          </span>
                        </div>
                      </div>
                      <div class="contents-box">
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>경영환경분석</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>
                              궁금해요, 내부회계
                              <br />
                              관리제도
                            </a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>B2B 101</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>인력 확보</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>입찰 전략 수립</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>지식재산권 101</a>
                          </span>
                        </div>
                      </div>
                      <div class="contents-box">
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>전략적문제해결</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>
                              처음만나는 원가/
                              <br />
                              관리회계
                            </a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>상품기획101</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>직무 관리</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>구매 Do & Don’t</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>특허분쟁개론</a>
                          </span>
                        </div>
                      </div>
                      <div class="contents-box">
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>전략적숫자읽기</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>Fun-Fun한 회계</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>브랜드 관리</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>보상</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>SCM</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>보상</a>
                          </span>
                        </div>
                      </div>
                      <div class="dot-belt">
                        <p></p>
                        <p></p>
                        <p></p>
                      </div>
                    </div>
                    <div class="contents-right">
                      <div class="contents-box2">
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>Decision Making</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>Negotiation</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>Measurement</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>Problem Solving</a>
                          </span>
                        </div>
                        <div class="contents-list">
                          <span>
                            <a href={()=>false}>Comm. Skill</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* contents-wrapper2 */}
                  <div class="contents-wrapper2">
                    <div class="contents-list">
                      <span>
                        <a href={()=>false}>기업 경영/전략</a>
                      </span>
                    </div>
                    <div class="contents-list">
                      <span>
                        <a href={()=>false}>재무/회계</a>
                      </span>
                    </div>
                    <div class="contents-list">
                      <span>
                        <a href={()=>false}>마케팅/Brand</a>
                      </span>
                    </div>
                    <div class="contents-list">
                      <span>
                        <a href={()=>false}>HR/조직 설계</a>
                      </span>
                    </div>
                    <div class="contents-list">
                      <span>
                        <a href={()=>false}>SCM/Operation</a>
                      </span>
                    </div>
                    <div class="contents-list">
                      <span>
                        <a href={()=>false}>법무/IP</a>
                      </span>
                    </div>
                  </div>
                  {/* //contents-wrapper2 */}
                  <div className="category-box">
                    <img src={manageImg09} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="college-cont-map sub">
          <div className="belt">
            <div className="label sub">Management College Badge 체계</div>

            <div className="manage-main-wrap">
              <div className="manage-main-table con01">
                <div className="manage-main-tit tit02">
                  <h3>
                    <strong>Level 1</strong>(Essential)
                  </h3>
                </div>
                <div className="manage-badge-main">
                  <p>
                    해당 영역 관련 역량 강화를 위한 주춧돌(Foundation)
                    과정으로서,
                    <br />
                    직무 수행 시 리더/구성원 모두 반드시 알아야 하는 기본적 지식
                    습득을 목적으로 합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="manage-main-wrap">
              <div className="manage-main-table con01">
                <div className="manage-main-tit tit02">
                  <h3>
                    <strong>Level 2</strong>(Advanced)
                  </h3>
                </div>
                <div className="manage-badge-main">
                  <p>
                    해당 직무를 5년 이상 경험한 리더/구성원들을 학습 대상으로
                    하며
                  </p>
                  <p className="badge-descrip">
                    <strong>
                      실무 현장에서 필요로 하는 전문 지식/Knowhow 학습
                    </strong>
                  </p>
                  <p className="badge-descrip">
                    <strong>
                      워크샵 등을 활용한 전문가 및 동료 구성원들과의 상호작용{" "}
                    </strong>
                    등을 통한 직무 전문성 제고를 목적으로 합니다.
                  </p>
                </div>
              </div>
            </div>

            <div class="chart_belt">
              <div class="chart-left">
                <img src={manageImg10} />
              </div>
              <div class="chart-right">
                <table>
                  <tbody>
                    <tr>
                      <td colspan="2"></td>
                      <td className="badge-texts">
                        <a href={()=>false}>
                          디지털 융합
                          <br />
                          마케팅
                        </a>
                      </td>
                      <td className="badge-texts">
                        <a href={()=>false}>조직 Design</a>
                      </td>
                      <td className="badge-texts">
                        <a href={()=>false}>
                          구매
                          <br />
                          Advanced
                        </a>
                      </td>
                      <td className="badge-texts">
                        <a href={()=>false}>
                          회사법
                          <br />
                          /<br />
                          공정거래법
                        </a>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="badge-texts">
                        <a href={()=>false}>
                          Strategy
                          <br />
                          Essentials
                        </a>
                      </td>
                      <td className="badge-texts">
                        <a href={()=>false}>
                          재무
                          <br />
                          Essentials
                        </a>
                      </td>
                      <td className="badge-texts">
                        <a href={()=>false}>
                          브랜드
                          <br />
                          Essentials
                          <br />
                          /<br />
                          마케팅
                          <br />
                          Essentials
                        </a>
                      </td>
                      <td className="badge-texts">
                        <a href={()=>false}>
                          HR
                          <br />
                          Essentials
                        </a>
                      </td>
                      <td className="badge-texts">
                        <a href={()=>false}>
                          구매
                          <br />
                          Essentials
                        </a>
                      </td>
                      <td className="badge-texts">
                        <a href={()=>false}>
                          IP Mindset
                          <br />
                          Essentials
                        </a>
                      </td>
                      <td className="badge-texts grey">
                        <a href={()=>false}>
                          협상
                          <br />
                          Essentials
                          <br />
                          /<br />
                          Measurement
                          <br />
                          Essentials
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="badge-texts-sm">
                        <a href={()=>false}>기업 경영/전략</a>
                      </td>
                      <td className="badge-texts-sm">
                        <a href={()=>false}>재무/회계</a>
                      </td>
                      <td className="badge-texts-sm">
                        <a href={()=>false}>마케팅/Brand</a>
                      </td>
                      <td className="badge-texts-sm">
                        <a href={()=>false}>HR/조직 설계</a>
                      </td>
                      <td className="badge-texts-sm">
                        <a href={()=>false}>SCM/Operation</a>
                      </td>
                      <td className="badge-texts-sm">
                        <a href={()=>false}>법무/IP</a>
                      </td>
                      <td className="badge-texts-sm grey">
                        <a href={()=>false}>Competency</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "기업 경영/전략",
    render: () => (
      <Tab.Pane attached={false}>
        {/* 과정 바로가기 버튼t */}
        <div className="belt">
          <div className="text-right-box">
            <a
              href="https://mysuni.sk.com/suni-main/lecture/college/CLG00008/channel/CHN0007m"
              className="item-button"
            >
              <img src={CourseBook} alt="" />
              과정 바로가기
            </a>
          </div>
        </div>

        {/* 컬리지 텍스트 */}
        <div className="college-sub-txt">
          <strong>SCM/Operation</strong>
          <div>
            <ul>
              <li>
                고객에게 상품을 적시에, 저렴한 가격으로 제공하고 차별화된
                서비스를 제공하기 위한 경영활동 전반을 효율화하는 ‘공급망
                관리’에 대해 다룸으로써, 해당 직무 관련 SK 구성원들의 Deep
                Change 실행력 제고를 위한 체계적인 컨텐츠를 제공합니다.
              </li>
            </ul>
            <p className="p_link hidden">
              각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.
            </p>
          </div>
        </div>

        {/* 컬리지 콘텐츠 */}
        <div className="college-link-box">
          <div className="belt">
            <img src={Category} />

            {/* 컬리지 콘텐츠 전체 틀 */}
            <div className="legal-wrap">
              <div className="fundamental-topic">
                <div className="level_icon">
                  <img src={Level01} />
                  <p>
                    방법론/ <br />
                    적용학습
                  </p>
                </div>
                <img src={Ing12} />
              </div>

              <div className="combined-topic">
                <div className="con_wrap sub03 ing_con01">
                  {/* 콘텐츠 리스트 */}
                  <h3>AI/DT & Strategy</h3>
                  <div className="con_box">
                    <div className="con_sub_box">
                      <ul>
                        <li>
                          <a href={()=>false}> AI/DT 기반의 Deep Change 전략</a>
                        </li>
                        <li>
                          <a href={()=>false}>- AI/DT 전략의 기본 개념</a>
                        </li>
                        <li>
                          <a href={()=>false}>- AI/DT 전략 수립 Process</a>
                        </li>
                        <li>
                          <a href={()=>false}>- AI 기반 DT의 전략적 의미</a>
                        </li>
                        <li>
                          <a href={()=>false}>- AI/DT 전략 가설의 재구성</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="con_wrap sub02 ing_con02">
                  <img src={Ing14} />
                </div>


                <div className="con_wrap sub03 ing_con01">
                  {/* 콘텐츠 리스트 */}
                  <h3>ESG & Strategy</h3>
                  <div className="con_box">
                    <div className="con_sub_box">
                      <ul>
                        <li>
                          <a href={()=>false}>SV 기반의 Deep Change 전략</a>
                        </li>
                        <li>
                          <a href={()=>false}>- SV 전략수립 Process</a>
                        </li>
                        <li>
                          <a href={()=>false}>- SV 창출을 위한 논의</a>
                        </li>
                        <li>
                          <a href={()=>false}>- SV 창출 내재화 방안</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 전략에 SV 적용하기</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="con_wrap sub02 ing_con02">
                <img src={Ing15} />
                </div>
              </div>
            </div>

            {/* 컬리지 콘텐츠 전체 틀 */}
            <div className="legal-wrap">
              <div className="fundamental-topic">
                <div className="level_icon">
                  <img src={Level01} />
                  <p>
                    방법론/ <br />
                    적용학습
                  </p>
                </div>
                <div className="con_wrap sub02">
                  {/* 콘텐츠 리스트 */}
                  <h3>Strategy Essentials</h3>
                  <div className="con_box">
                    <div className="con_sub_box">
                      <ul>
                        <li>
                          <a href={()=>false}>전략 101 : 어서 와, 전략은 처음이지?</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 전략이란 무엇인가?</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 전략 경영 Process</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 전략의 수립 및 실행</a>
                        </li>
                        <li>
                          <a href={()=>false}>- Strategy in SK</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href={()=>false}>All about Portfolio Strategy</a>
                        </li>
                        <li>
                          <a href={()=>false}>- Portfolio Mgmt의 Option</a>
                        </li>
                        <li>
                          <a href={()=>false}>- M&A/JV</a>
                        </li>
                        <li>
                          <a href={()=>false}>- Separation/Divestiture</a>
                        </li>
                        <li>
                          <a href={()=>false}>- SK M&A History & Case</a>
                        </li>
                      </ul>
                    </div>
                    <div className="con_sub_box">
                      <ul className="sub">
                        <li>
                          <a href={()=>false}>전략 수립의 시작, 경영환경분석</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 외부환경분석 Tool & Framework</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 내부환경분석 Tool & Framework</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 경영환경분석 실전 Tip</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                        <img src={Ing13} />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="combined-topic">
                <img src={Ing16} />
              </div>
            </div>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "재무/회계",
    render: () => (
      <Tab.Pane attached={false}>
        <div className="belt">
          <div className="text-right-box">
            <a
              href="https://mysuni.sk.com/suni-main/lecture/college/CLG00008/channel/CHN0007m"
              className="item-button"
            >
              과정 바로가기
            </a>
          </div>
        </div>

        <div className="college-sub-txt">
          <strong>재무/회계</strong>
          <div>
            <ul>
              <li>
                Finance/회계/세무 분야의 직무 전문성을 제고하고, 이론 뿐만
                아니라 SK 내부 Practice 및 Case 제시를 통해 구성원 여러분들의
                다양한 학습 Needs 충족을 목표로 합니다.
              </li>
              <li>
                사내 전문가를 활용한 SK Practice/Case 발굴∙공유,
                Workshop/Community 활동 확대를 통한 구성원간 상호 지식 공유를
                지향함으로써, SK 구성원들의 Deep Change 실행력을 강화하고자
                합니다.
              </li>
            </ul>
            <p className="p_link hidden">
              각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.
            </p>
          </div>
        </div>

        <div className="college-link-box">
          <div className="belt">
            <img src={Category} />
            <div className="legal-wrap">
              <div className="fundamental-topic">
                <h2>Finance</h2>
                <h2>회계</h2>
                <h2>세무</h2>
              </div>

              <div className="combined-topic">
                <h2>Finance/회계/세무+a</h2>
              </div>

              <div className="ing_contents">
                <div className="level_icon">
                  <img src={Level01} />
                  <p>
                    방법론/ <br />
                    적용학습
                  </p>
                </div>
                <img src={Ing05} />
              </div>

              <div className="fundamental-topic">
                <div className="con_wrap sub02">
                  <div className="level_icon">
                    <img src={Level02} />
                    <p>개념 이해</p>
                  </div>
                  <h3>재무 Essentials</h3>
                  <div className="con_box">
                    <div className="con_sub_box">
                      <ul className="ul_style">
                        <li>
                          <a href={()=>false}>재무관리 101</a>
                        </li>
                        <li>
                          <a href={()=>false}>기업가치, 무엇이고 어떻게 평가하는가?</a>
                        </li>
                      </ul>
                    </div>
                    <div className="con_sub_box">
                      <ul className="ul_style">
                        <li>
                          <a href={()=>false}>궁금해요, 내부회계관리제도</a>
                        </li>
                        <li>
                          <a href={()=>false}>처음 만나는 원가/관리회계</a>
                        </li>
                        <li>
                          <a href={()=>false}>하나씩 쉽게, 계정과목 별 회계처리</a>
                        </li>
                        <li>
                          <a href={()=>false}>Fun-Fun한 회계</a>
                        </li>
                      </ul>
                    </div>
                    <div className="con_sub_box">
                      <ul className="ul_one">
                        <li>
                          <a href={()=>false}>세무회계 실무 첫걸음</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="combined-topic"></div>
            </div>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "마케팅/브랜드",
    render: () => (
      <Tab.Pane attached={false}>
        <div className="belt">
          <div className="text-right-box">
            <a
              href="https://mysuni.sk.com/suni-main/lecture/college/CLG00008/channel/CHN0007m"
              className="item-button"
            >
              <img src={CourseBook} alt="" />
              과정 바로가기
            </a>
          </div>
        </div>

        <div className="college-sub-txt">
          <strong>마케팅/브랜드</strong>
          <div>
            <ul>
              <li>
                기업이 상품 또는 서비스를 고객에게 유통시키는 과정에서 창출되는
                다양한 Value 와 관련된 ‘마케팅’,
                <br />
                경쟁 기업/상품과 구별되는 무형자산으로서 해당 기업의 가치를
                상징하는 ‘브랜드’에 대해 다룸으로써,
                <br />
                해당 직무 관련 SK 구성원들의{" "}
                <strong>Deep Change 실행력 제고</strong>를 위한 체계적인
                컨텐츠를 제공합니다.
              </li>
            </ul>
            <p className="p_link hidden">
              각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.
            </p>
          </div>
        </div>

        <div className="college-link-box">
          <div className="belt">
            <img src={Category} />

            <div className="legal-wrap">
              <div className="fundamental-topic">
                <div className="level_icon">
                  <img src={Level01} />
                  <p>
                    방법론/ <br />
                    적용학습
                  </p>
                </div>

                <img src={Ing06} />
              </div>
              <div className="combined-topic">
                <div className="con_wrap sub03">
                  {/* 콘텐츠 리스트 */}
                  <h3>마케팅 Essentials</h3>
                  <div className="con_box">
                    <div className="con_sub_box">
                      <ul>
                        <li>
                          <a href={()=>false}>디지털 고객 Data 마케팅</a>
                        </li>
                        <li>
                          <a href={()=>false}>- Marketing DT Trend</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 데이터 기반 고객 분석</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 퍼포먼스 마케팅 분석</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 디지털 채널 경쟁력 분석</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href={()=>false}>디지털마케팅 사례</a>
                        </li>
                        <li>
                          <a href={()=>false}>- Mastercard의 DT 성공전략</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 디지털마케팅 Trend & Case</a>
                        </li>
                        <li>
                          <a href={()=>false}>- SK의 고객 Data 기반 Deep Change</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href={()=>false}>AI 마케팅 </a>
                        </li>
                        <li>
                          <a href={()=>false}>1. Reach : AI 로 고객을 유인하라</a>
                        </li>
                        <li>
                          <a href={()=>false}>2. ACT : 고객 지갑을 열게 하는 AI</a>
                        </li>
                        <li>
                          <a href={()=>false}>3. Convert : AI 로 단골 고객 만들기</a>
                        </li>
                        <li>
                          <a href={()=>false}>4. Engage : AI 기반 고객 예측</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="legal-wrap flex">
              <div className="combined-topic">
                <div className="con_wrap sub02">
                  {/* 콘텐츠 리스트 */}
                  <h3>마케팅 Essentials</h3>
                  <div className="con_box">
                    <div className="con_sub_box">
                      <ul>
                        <li>
                          <a href={()=>false}>마케팅 Framework & Tool</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 마케팅 환경 분석</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 마케팅 전략 수립</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 마케팅 실행 전술</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href={()=>false}>Global 마케팅 사례분석</a>
                        </li>
                        <li>
                          <a href={()=>false}>- Fedex Case : 나의 고객은 누구인가</a>
                        </li>
                        <li>
                          <a href={()=>false}>- Ebay Case : 왕의 귀환</a>
                        </li>
                        <li>
                          <a href={()=>false}>- Starbucks Case : 나무에서 떨어지다</a>
                        </li>
                        <li>
                          <a href={()=>false}>- Exxon Mobil Case : 영원한 것은 없다</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href={()=>false}>마케팅 101</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 키워드로 배우는 마케팅 101</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 사례로 배우는 B2B 마케팅 1011</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 사례로 배우는 상품기획 관리 101</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fundamental-topic">
                <div className="con_wrap sub02">
                  {/* 콘텐츠 리스트 */}
                  <h3>브랜드 Essentials</h3>
                  <div className="con_box">
                    <div className="con_sub_box">
                      <ul>
                        <li>
                          <a href={()=>false}>Brand What & Why?</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 브랜드의 중요성 </a>
                        </li>
                        <li>
                          <a href={()=>false}>- Brand vs. Branding</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 브랜드의 정의와 브랜드 Elements</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href={()=>false}>Source of Brand Equity</a>
                        </li>
                        <li>
                          <a href={()=>false}>
                            - Brand Equity Pyramid와 Brand Awareness
                          </a>
                        </li>
                        <li>
                          <a href={()=>false}>- Brand Association</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href={()=>false}>전략적 브랜드 관리의 Key insight</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 브랜드 관리에 대한 흔한 착각</a>
                        </li>
                        <li>
                          <a href={()=>false}>-- Value : 브랜드 관리의 핵심 개념</a>
                        </li>
                        <li>
                          <a href={()=>false}>- Value Innovation</a>
                        </li>
                        <li>
                          <a href={()=>false}>- Holistic Branding & HCEM</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 브랜드 관리의 전략적 Framework</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href={()=>false}>Brand Identify System</a>
                        </li>
                        <li>
                          <a href={()=>false}>- BIS의 기본요소</a>
                        </li>
                        <li>
                          <a href={()=>false}>- Brand Personality</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href={()=>false}>
                            (효과적 브랜드 관리를 위한) 소비자 행동의 이해
                          </a>
                        </li>
                        <li>
                          <a href={()=>false}>- 소비자 정보처리와 기억</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 소비단계별 고객욕구</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 제품과 고객욕구의 연결</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 소비자 조사 방법</a>
                        </li>
                      </ul>
                    </div>
                    <div className="con_sub_box">
                      <ul>
                        <li>
                          <a href={()=>false}>기업결합의 제한</a>
                        </li>
                        <li>
                          <a href={()=>false}>- M&A, 기업결합신고 필요한가?</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 기업결합은 어떤 경우에 규제되는가?</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 혼합결합이 왜 문제가 되는가?</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href={()=>false}>시장 지배적 지위 남용 행위</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 시장 지배적 지위 남용 행위 이해하기</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 주요 법리와사례 연구</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 동의의결 사례 연구</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href={()=>false}>부당한 공동행위</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 부당한 공동행위 알아보기</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 부당한 공동행위 사례 연구</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href={()=>false}>하도급법</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 하도급법 알아보기</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 하도급법 주요 법리와 사례 연구</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 기술자료제공 요구 및 유용행위</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "HR/조직 설계",
    render: () => (
      <Tab.Pane attached={false}>
        <div className="belt">
          <div className="text-right-box">
            <a
              href="https://mysuni.sk.com/suni-main/lecture/college/CLG00008/channel/CHN0007m"
              className="item-button"
            >
              <img src={CourseBook} alt="" />
              과정 바로가기
            </a>
          </div>
        </div>

        <div className="college-sub-txt">
          <strong>HR/조직 설계</strong>
          <div>
            <ul>
              <li>
                HR Function에서는 (1) HR 실무에 기반한 기초 이해 및 방법론,
                Practice와 <br />
                (2) 미래 기술 변화에 따른 HR Tech 관련 지식 등 HR 담당자들의
                업무 실행력과 Insight 확대를 위한 <br />
                체계적인 컨텐츠를 제공합니다.
              </li>
              <li>
                조직 설계 Function에서는 (1) 조직 설계의 핵심 개념/원칙들과
                Practical 한 방법론을 익히고, <br />
                (2) Silo 해소/ 구성원 행복/ 신사업 추진 등 조직 설계상의 현실적
                고민들을 해결할 수 있는 장을 제공합니다.
              </li>
            </ul>
            <p className="p_link hidden">
              각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.
            </p>
          </div>
        </div>

        <div className="college-link-box">
          <div className="belt">
            <img src={Category} />

            <div className="legal-wrap">
              <div className="fundamental-topic">
                <div className="depth">
                  <div className="con_wrap sub02 ing">
                    <div className="level_icon">
                      <img src={Level02} />
                      <p>개념 이해</p>
                    </div>
                    <img src={Ing09} />
                  </div>
                </div>

                <div className="depth">
                  <div className="con_wrap sub01 depth">
                    <h3>조직 Design</h3>
                    <div className="con_box">
                      <div className="con_sub_box">
                        <ul>
                          <li>
                            <a href={()=>false}>조직 설계 Workshop</a>
                          </li>
                          <li>
                            <a href={()=>false}>1. 조직 설계 Workshop</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href={()=>false}>조직 설계 방법론</a>
                          </li>
                          <li>
                            <a href={()=>false}>1. 조직 설계 방법론 : Star Model</a>
                          </li>
                          <li>
                            <a href={()=>false}>2. 조직 설계 실무 Approach</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href={()=>false}>조직 Self-Design</a>
                          </li>
                          <li>
                            <a href={()=>false}>1. 조직 Self-Design : Why & What</a>
                          </li>
                          <li>
                            <a href={()=>false}>2. 조직 Self-Design 사례</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <ul className="sub_ul">
                    <li>
                      <a href={()=>false}>조직 설계 실무 Approach (중장기적)</a>
                    </li>
                    <li>
                      <a href={()=>false}>양손잡이 조직 설계 이해</a>
                    </li>
                    <li>
                      <a href={()=>false}>미래 Tech. 기업의 조직 설계 사례</a>
                    </li>
                    <li>
                      <a href={()=>false}>Agile 조직으로의 전환 사례</a>
                    </li>
                    <li>
                      <a href={()=>false}>SV 지향 조직 설계 방안</a>
                    </li>
                    <li>
                      <a href={()=>false}>Org. Culture & Leader</a>
                    </li>
                  </ul>
                  <img src={Ing10} />
                </div>
              </div>

              <div className="combined-topic">
                <img src={Ing11} />
              </div>
            </div>

            <div className="legal-wrap">
              <div className="fundamental-topic">
                <div className="depth">
                  <div className="con_wrap sub02 depth">
                    <h3>HR Essentials</h3>
                    <div className="con_box">
                      <div className="con_sub_box">
                        <ul>
                          <li>
                            <a href={()=>false}>인력 확보</a>
                          </li>
                          <li>
                            <a href={()=>false}>1. 인력 계획! 왜 해야 하는가?</a>
                          </li>
                          <li>
                            <a href={()=>false}>2. 채용 프로세스 꼼꼼하게 확인하기</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href={()=>false}>직무 관리</a>
                          </li>
                          <li>
                            <a href={()=>false}>1. 직무란 무엇인가?</a>
                          </li>
                          <li>
                            <a href={()=>false}>22. 직무분석과 직무평가 왜 필요한가?</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href={()=>false}>보상</a>
                          </li>
                          <li>
                            <a href={()=>false}>1. 보상 운영을 위해 꼭 알아야 할 것들</a>
                          </li>
                          <li>
                            <a href={()=>false}>2. 보상 제도 어떻게 변화하였나</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href={()=>false}>성과 관리</a>
                          </li>
                          <li>
                            <a href={()=>false}>1. 성과 관리와 평가, 꼭 해야 하나요?</a>
                          </li>
                          <li>
                            <a href={()=>false}>2. 성과 관리 프로세스 핵심 요약!</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href={()=>false}>Global HR</a>
                          </li>
                          <li>
                            <a href={()=>false}>1. 주재원 제도, 제대로 이해하기</a>
                          </li>
                          <li>
                            <a href={()=>false}>2. 반드시 알아야 할 Global Staff 관리</a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href={()=>false}>노사관계</a>
                          </li>
                          <li>
                            <a href={()=>false}>1. 개별적 근로 관계의 이해</a>
                          </li>
                          <li>
                            <a href={()=>false}>2. 비정규직 제도의 이해</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="depth">
                  <div className="con_wrap sub02 depth">
                    <h3>조직 Design</h3>
                    <div className="con_box">
                      <div className="con_sub_box">
                        <ul>
                          <li>
                            <a href={()=>false}>조직 설계의 기본 원칙과 사례</a>
                          </li>
                          <li>
                            <a href={()=>false}>1. 조직 설계의 기본 원칙</a>
                          </li>
                          <li>
                            <a href={()=>false}>2. 조직 설계 New Trend</a>
                          </li>
                          <li>
                            <a href={()=>false}>3. 기업 사례 ( MS, SKHY )</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <ul className="sub_ul">
                    <li>
                      <a href={()=>false}>조직 설계 길라잡이</a>
                    </li>
                    <li>
                      <a href={()=>false}>조직 설계 Tip : Smart Design</a>
                    </li>
                    <li>
                      <a href={()=>false}>조직 설계 효과성 측정</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="combined-topic"></div>
            </div>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "SCM/Operation",
    render: () => (
      <Tab.Pane attached={false}>
        {/* 과정 바로가기 버튼t */}
        <div className="belt">
          <div className="text-right-box">
            <a
              href="https://mysuni.sk.com/suni-main/lecture/college/CLG00008/channel/CHN0007m"
              className="item-button"
            >
              <img src={CourseBook} alt="" />
              과정 바로가기
            </a>
          </div>
        </div>

        {/* 컬리지 텍스트 */}
        <div className="college-sub-txt">
          <strong>SCM/Operation</strong>
          <div>
            <ul>
              <li>
                고객에게 상품을 적시에, 저렴한 가격으로 제공하고 차별화된
                서비스를 제공하기 위한 경영활동 전반을 효율화하는 ‘공급망
                관리’에 대해 다룸으로써, 해당 직무 관련 SK 구성원들의 Deep
                Change 실행력 제고를 위한 체계적인 컨텐츠를 제공합니다.
              </li>
            </ul>
            <p className="p_link hidden">
              각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.
            </p>
          </div>
        </div>

        {/* 컬리지 콘텐츠 */}
        <div className="college-link-box">
          <div className="belt">
            <img src={Category} />

            {/* 컬리지 콘텐츠 전체 틀 */}
            <div className="legal-wrap">
              <div className="fundamental-topic">
                <div className="con_wrap sub01">
                  <div className="level_icon">
                    <img src={Level01} />
                    <p>
                      방법론/ <br />
                      적용학습
                    </p>
                  </div>
                  <h3>구매 Advanced</h3>
                  <div className="con_box">
                    <div className="con_sub_box">
                      <ul>
                        <li>
                          <a href={()=>false}>기업 성공을 위한 전략적 구매</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 기업 전략과 기업 경쟁력 이해</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 기업 전략과 일치된 구매 전략</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 기업의 성공과 구매의 역할</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href={()=>false}>전략적 공급자 관리</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 공급자 관리의 두 방법 - 협력과 경쟁</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 공급자 육성 및 성과공유제</a>
                        </li>
                        <li>
                          <a href={()=>false}>- SRM & 구매체스보드의 이해</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href={()=>false}>구매와 타 부서와의 협력과 연계</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 개발과 구매의 연계 - 개발 구매</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 타부서와 구매의 연계</a>
                        </li>
                      </ul>
                    </div>
                    <div className="con_sub_box">
                      <ul>
                        <li>
                          <a href={()=>false}>성공적인 구매 협상</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 협상이란 무엇인가?</a>
                        </li>
                        <li>
                          <a href={()=>false}>
                            - 의견이 첨예하게 대립하는 현상, 어떻게 풀어야 하나?
                          </a>
                        </li>
                        <li>
                          <a href={()=>false}>
                            - 교착에 빠진 협상, 어떻게 타결해야 하나?
                          </a>
                        </li>
                        <li>
                          <a href={()=>false}>
                            - 파이를 키우는 협상, 어떻게 해야 가능할까?
                          </a>
                        </li>
                        <li>
                          <a href={()=>false}>
                            - 목표와 전략도 없이 협상에 나간다고? 깨질 수 밖에
                            없다!
                          </a>
                        </li>
                        <li>
                          <a href={()=>false}>
                            - 내 주장을 아무리 해도 꼼짝도 안하는 상대 어떻게
                            설득해야 하나?
                          </a>
                        </li>
                        <li>
                          <a href={()=>false}>- 협상력을 결정하는 가장 중요한 요소는?</a>
                        </li>
                        <li>
                          <a href={()=>false}>
                            - 원래 생각했던 것보다 더 많은 것을 얻는 협상의
                            방법은?
                          </a>
                        </li>
                        <li>
                          <a href={()=>false}>- 상대를 납득시키는 최고의 무기는?</a>
                        </li>
                        <li>
                          <a href={()=>false}>
                            - 갑질하는 독점 공급자, 어떻게 다뤄야 하나?
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <img src={Ing04} />

                <div className="con_wrap sub02">
                  <div className="level_icon">
                    <img src={Level02} />
                    <p>
                      방법론/ <br />
                      적용학습
                    </p>
                  </div>
                  <h3>구매 Essentials</h3>
                  <div className="con_box">
                    <div className="con_sub_box">
                      <ul>
                        <li>
                          <a href={()=>false}>나는 진정한 구매인인가, 구매의 본질</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 구매 업무의 이해</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 구매 업무의 5R 이해</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 구매 업무의 핵심</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 발전하고 변화하는 구매관리</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href={()=>false}>
                            모르면 큰 코 다치는, 구매 계약/구매 관련 법규 이해
                          </a>
                        </li>
                        <li>
                          <a href={()=>false}>- 구매 업무 시 지켜야할 윤리</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 구매 계약의 이해</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 하도급법과 상생협력법</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 하도급 대금, 이것만은 알아두자</a>
                        </li>
                        <li>
                          <a href={()=>false}>
                            - 기술자료제공 요구 금지, 무엇을 조심해야할까
                          </a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href={()=>false}>
                            나는 무엇을 구매하고 있나, 구매 품목의 이해 및 관리
                          </a>
                        </li>
                        <li>
                          <a href={()=>false}>- 구매 품복의 분류 및 관리 </a>
                        </li>
                        <li>
                          <a href={()=>false}>- 품목 분류에 따른 자재관리 전략</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 서비스/용역 품목의 이해</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href={()=>false}>방심은 금물, 구매 위험 관리</a>
                        </li>
                        <li>
                          <a href={()=>false}>- Intro : 타이레놀 위험 관리</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 구매 위험 관리 및 조달 연속성 계획</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 구매 자제 가격 변동 위험 관리</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 팬데믹 시대와 구매 위험관리</a>
                        </li>
                      </ul>
                    </div>
                    <div className="con_sub_box">
                      <ul>
                        <li>
                          <a href={()=>false}>구매 업무 프로세스 이해 및 활용</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 구매업무프로세스의 이해와 활용</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 공급자 탐색 및 평가</a>
                        </li>
                        <li>
                          <a href={()=>false}>- RFP, RFQ 작성방법과 유의점</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 입찰 절차 관리 및 평가</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 공급자 선택 및 계약</a>
                        </li>
                        <li>
                          <a href={()=>false}> PO 작성의 이해</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 계약 후의 구매활동</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href={()=>false}>
                            알수록 돈버는, 구매인을 위한 재무/회계/물류
                          </a>
                        </li>
                        <li>
                          <a href={()=>false}>- 계좌등록관리</a>
                        </li>
                        <li>
                          <a href={()=>false}>- Incoterms 2020 이해와 적용</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 공급사 신용 및 재무분석</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 무역보험/수입보험 실무</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 수입통관, 관세와 부가세</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href={()=>false}>구매 원가 관리</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 구매 원가의 전략적 의미</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 가격 분석 및 가격 적정성 검토</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 원가 분석의 의미와 원가 분석 기법</a>
                        </li>
                        <li>
                          <a href={()=>false}>- TCO ( Total Cost of Ownership ) 이해</a>
                        </li>
                        <li>
                          <a href={()=>false}>- TCO ( Total Cost of Ownership ) 활용</a>
                        </li>
                        <li>
                          <a href={()=>false}> - 목표원가 및 가치분석</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href={()=>false}>기업의 사회적 가치와 구매</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 구매와 ESG, SV 실천 (1)</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 구매와 ESG, SV 실천 (2)</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <img src={Ing07} />
              </div>
              <div className="combined-topic">
                <img src={Ing08} />
              </div>
            </div>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "법무/IP",
    render: () => (
      <Tab.Pane attached={false}>
        {/* 과정 바로가기 버튼t */}
        <div className="belt">
          <div className="text-right-box">
            <a
              href="https://mysuni.sk.com/suni-main/lecture/college/CLG00008/channel/CHN0007m"
              className="item-button"
            >
              <img src={CourseBook} alt="" />
              과정 바로가기
            </a>
          </div>
        </div>

        {/* 컬리지 텍스트 */}
        <div className="college-sub-txt">
          <strong>법무/IP</strong>
          <div>
            <ul>
              <li>
                법무/IP Function 에서는 기업활동에서 발생하는 Legal Risk를
                미연에 방지하고 해결하는 ‘법무’, 새로운 사업추진이나 기존
                사업에서 특허경쟁력을 제고하는 ‘IP’에 대해 다룸으로써, 해당 직무
                관련 SK 구성원들의 Deep Change 실행력 제고를 위한 체계적인
                컨텐츠를 제공합니다.
              </li>
            </ul>
            <p className="p_link hidden">
              각 Badge와 코스를 클릭하면 해당 페이지로 이동합니다.
            </p>
          </div>
        </div>

        {/* 컬리지 콘텐츠 */}
        <div className="college-link-box">
          <div className="belt">
            <img src={Category} />

            {/* 컬리지 콘텐츠 전체 틀 */}
            <div className="legal-wrap">
              <div className="fundamental-topic">
                <div className="con_wrap sub01">
                  {/* Level 사이드 */}
                  <div className="level_icon">
                    <img src={Level02} />
                    <p>
                      방법론/ <br />
                      적용학습
                    </p>
                  </div>
                  {/* 콘텐츠 리스트 */}
                  <h3>공정거래법</h3>
                  <div className="con_box">
                    <div className="con_sub_box">

                      <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00008/cube/CUBE-cb3/lecture-card/LECTURE-CARD-9sl">
                        <ul>
                          <li>
                            <a href={()=>false}>공정거래법 강의소개</a>
                          </li>
                          <li>
                            <a href={()=>false}>- 공정거래법 이해 및 정책 방향</a>
                          </li>
                        </ul>
                      </a>

                      <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00008/course-plan/COURSE-PLAN-1d0/Course/C-LECTURE-16k">
                        <ul>
                          <li>
                            <a href={()=>false}>전략적 공급자 관리</a>
                          </li>
                          <li>
                            <a href={()=>false}>- 부당 지원/사익 편취 이해하기</a>
                          </li>
                          <li>
                            <a href={()=>false}>- 부당 지원의 법리와 사례 연구</a>
                          </li>
                          <li>
                            <a href={()=>false}>- 공정위 최근 규제 동향 및 심결례 연구</a>
                          </li>
                        </ul>
                      </a>

                      <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00008/course-plan/COURSE-PLAN-1bz/Course/C-LECTURE-15o">
                        <ul>
                          <li>
                            <a href={()=>false}>불공정 거래와 부당표시 광고</a>
                          </li>
                          <li>
                            <a href={()=>false}>- 불공정 거래행위 이해하기</a>
                          </li>
                          <li>
                            <a href={()=>false}>- 불공정 거래행위 중요 법리/사례 연구</a>
                          </li>
                        </ul>
                      </a>

                      <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00008/course-plan/COURSE-PLAN-1c0/Course/C-LECTURE-15p">
                        <ul>
                          <li>
                            <a href={()=>false}>경제력 집중 억제</a>
                          </li>
                          <li>
                            <a href={()=>false}>- 공정거래법상 기업집단 규제 이해하기</a>
                          </li>
                          <li>
                            <a href={()=>false}>- 공정위 최근 규제 사례 소개 및 시사점</a>
                          </li>
                        </ul>
                      </a>


                    </div>
                    <div className="con_sub_box">
                      <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00008/course-plan/COURSE-PLAN-1bw/Course/C-LECTURE-15n">
                        <ul>
                          <li>
                            <a href={()=>false}>기업결합의 제한</a>
                          </li>
                          <li>
                            <a href={()=>false}>- M&A, 기업결합신고 필요한가?</a>
                          </li>
                          <li>
                            <a href={()=>false}>- 기업결합은 어떤 경우에 규제되는가?</a>
                          </li>
                          <li>
                            <a href={()=>false}>- 혼합결합이 왜 문제가 되는가?</a>
                          </li>
                        </ul>
                      </a>
                      <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00008/course-plan/COURSE-PLAN-1c1/Course/C-LECTURE-15q">
                        <ul>
                          <li>
                            <a href={()=>false}>시장 지배적 지위 남용 행위</a>
                          </li>
                          <li>
                            <a href={()=>false}>- 시장 지배적 지위 남용 행위 이해하기</a>
                          </li>
                          <li>
                            <a href={()=>false}>- 주요 법리와사례 연구</a>
                          </li>
                          <li>
                            <a href={()=>false}>- 동의의결 사례 연구</a>
                          </li>
                        </ul>
                      </a>

                      <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00008/course-plan/COURSE-PLAN-1c2/Course/C-LECTURE-15r">
                        <ul>
                          <li>
                            <a href={()=>false}>부당한 공동행위</a>
                          </li>
                          <li>
                            <a href={()=>false}>- 부당한 공동행위 알아보기</a>
                          </li>
                          <li>
                            <a href={()=>false}>- 부당한 공동행위 사례 연구</a>
                          </li>
                        </ul>
                      </a>

                      <a href="https://mysuni.sk.com/suni-main/lecture/cineroom/ne1-m2-c2/college/CLG00008/course-plan/COURSE-PLAN-1c3/Course/C-LECTURE-15s">
                        <ul>
                          <li>
                            <a href={()=>false}>하도급법</a>
                          </li>
                          <li>
                            <a href={()=>false}>- 하도급법 알아보기</a>
                          </li>
                          <li>
                            <a href={()=>false}>- 하도급법 주요 법리와 사례 연구</a>
                          </li>
                          <li>
                            <a href={()=>false}>- 기술자료제공 요구 및 유용행위</a>
                          </li>
                        </ul>
                      </a>

                    </div>
                  </div>
                </div>
                <div className="con_wrap sub01">
                  <h3>특허관리</h3>
                  <div className="con_box">
                    <div className="con_sub_box">
                      <ul>
                        <li>
                          <a href={()=>false}>한국 출원 제도와 법</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 특허요건사</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 특허출원</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 특허심사</a>
                        </li>
                      </ul>
                    </div>
                    <div className="con_sub_box">
                      <ul>
                        <li>
                          <a href={()=>false}>한국 출원 실무</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 국문명세서 작성</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 한국 심사 대응</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 한국 심판 대응</a>
                        </li>
                      </ul>
                    </div>
                    <div className="con_sub_box">
                      <ul>
                        <li>
                          <a href={()=>false}>특허활용과 매입</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 특허활용의 개요</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 특허 수익화와 IP펀드 이해</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 특허와 사업화전략</a>
                        </li>
                      </ul>
                    </div>
                    <div className="con_sub_box">
                      <ul>
                        <li>
                          <a href={()=>false}>M&A와 IP Transaction</a>
                        </li>
                        <li>
                          <a href={()=>false}>- M&A와 IP 이슈</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 이슈별 검토사항</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 기타 검토사항</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="con_wrap sub01">
                  <h3>특허 분쟁</h3>
                  <div className="con_box">
                    <div className="con_sub_box">
                      <ul>
                        <li>
                          <a href={()=>false}>한국 특허분쟁 실무</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 특허 심판 제도의 이해</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 무효심판</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 증거보존 실무</a>
                        </li>
                      </ul>
                    </div>
                    <div className="con_sub_box">
                      <ul>
                        <li>
                          <a href={()=>false}>미국 특허분쟁 Key Points</a>
                        </li>
                        <li>
                          <a href={()=>false}>- Discovery 단계</a>
                        </li>
                        <li>
                          <a href={()=>false}>- Trial(Jury /Bench Trial) </a>
                        </li>
                        <li>
                          <a href={()=>false}>- ITC 소송</a>
                        </li>
                      </ul>
                    </div>
                    <div className="con_sub_box">
                      <ul>
                        <li>
                          <a href={()=>false}>특허 협상 및 라이선스</a>
                        </li>
                        <li>
                          <a href={()=>false}>- - 특허 Claim 단계</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 특허기술 협상</a>
                        </li>
                        <li>
                          <a href={()=>false}>- Royality 협상</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <img src={Ing01} />

                <div className="con_wrap sub02">
                  <div className="level_icon">
                    <img src={Level01} />
                    <p>개념이해</p>
                  </div>
                  <h3>IP Mind-Set Essential</h3>
                  <div className="con_box">
                    <div className="con_sub_box">
                      <ul>
                        <li>
                          <a href={()=>false}>지적 재산권 101</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 지식재산권의 개념과 종류</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 특허제도 AtoZ</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 상표제도 AtoZ</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href={()=>false}>AI 특허</a>
                        </li>
                        <li>
                          <a href={()=>false}>- AI 특허 동향</a>
                        </li>
                        <li>
                          <a href={()=>false}>- AI 특허 장성 방법Z</a>
                        </li>
                        <li>
                          <a href={()=>false}>- AI 특허 Case Study</a>
                        </li>
                      </ul>
                    </div>
                    <div className="con_sub_box">
                      <ul>
                        <li>
                          <a href={()=>false}>연구 개발과 지식재산</a>
                        </li>
                        <li>
                          <a href={()=>false}>- R&D에서의 특허개발의 필요성</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 선행기술 조사 및 검색</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 발명신고서 작성 가이드</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href={()=>false}>특허 분쟁 개론</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 특허분쟁의 종류</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 특허분쟁의 주요 사례</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 한국 특허소송 제도</a>
                        </li>
                      </ul>
                    </div>
                    <div className="con_sub_box">
                      <ul>
                        <li>
                          <a href={()=>false}>직무발명</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 직무발명의 이해</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 직무발명의 권리귀속 관계</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 보상제도와 발명보상 사례</a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href={()=>false}>직무발명</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 문서 관리 정책</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 상시 문서 관리</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 분쟁 발생시 문서 관리</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="con_wrap sub02">
                  <h3>오픈소스 Essentials</h3>
                  <div className="con_box">
                    <div className="con_sub_box">
                      <ul>
                        <li>
                          <a href={()=>false}>오픈소스의 선형적 발전</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 오픈소스의 출현배경</a>
                        </li>
                        <li>
                          <a href={()=>false}>
                            - 오픈소스의 패러다임 변화와 성장 모맨텀
                          </a>
                        </li>
                        <li>
                          <a href={()=>false}>
                            - 폐쇄기업의 견제에 따른 오픈소스의 성장통
                          </a>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href={()=>false}>오픈소스 라이선스</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 오픈소스의 정의 및 양면성</a>
                        </li>
                        <li>
                          <a href={()=>false}>
                            - GPI, BSD계열 라이선스 특징 및 의무사항
                          </a>
                        </li>
                        <li>
                          <a href={()=>false}>- 소프트웨어 공개범위</a>
                        </li>
                      </ul>
                    </div>
                    <div className="con_sub_box">
                      <ul>
                        <li>
                          <a href={()=>false}>연구 개발과 지식재산</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 소프트웨어 저작권의 주요 쟁점</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 소프트웨어 지식재산권과 BM</a>
                        </li>
                        <li>
                          <a href={()=>false}>- 소프트웨어 라이선스 유형과 주요 내용</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <img src={Ing02} />
              </div>
              <div className="combined-topic">
                <img src={Ing03} />
              </div>
            </div>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
];

const TabMenuInnerSub = () => (
  <Tab
    menu={{ attached: false, tabular: false }}
    panes={panes}
    className="sub-tab-menu"
  />
);

export default TabMenuInnerSub;
