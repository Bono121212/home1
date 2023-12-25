import React from "react";
import { Tab } from "semantic-ui-react";

const panes = [
  {
    menuItem: "1주일",
    render: () => (
      <Tab.Pane>
        <ul className="personal_list">
          <li className="ai">
            <span className="personal_list_number">1</span>
            <p className="personal_list_txt">사회문제에 대한 이해 : 심화</p>
          </li>
          <li className="dt">
            <span className="personal_list_number">2</span>
            <p className="personal_list_txt">
              국제정세의 현상과 본질 (Series 2)
            </p>
          </li>
          <li className="happy">
            <span className="personal_list_number">3</span>
            <p className="personal_list_txt">명상의 이해</p>
          </li>
          <li className="sv">
            <span className="personal_list_number">4</span>
            <p className="personal_list_txt">AI UX 기초 Essentials</p>
          </li>
          <li className="inno">
            <span className="personal_list_number">5</span>
            <p className="personal_list_txt">
              고객 이해에 도움되는 '디자인 방법 ' 맛보기
            </p>
          </li>
        </ul>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "1개월",
    render: () => (
      <Tab.Pane>
        <ul className="personal_list">
          <li className="global">
            <span className="personal_list_number">1</span>
            <p className="personal_list_txt">AI UX 기초 Essentials</p>
          </li>
          <li className="leader">
            <span className="personal_list_number">2</span>
            <p className="personal_list_txt">
              고객 이해에 도움되는 '디자인 방법 ' 맛보기
            </p>
          </li>
          <li className="manage">
            <span className="personal_list_number">3</span>
            <p className="personal_list_txt">명상의 이해</p>
          </li>
          <li className="semi">
            <span className="personal_list_number">4</span>
            <p className="personal_list_txt">
              국제정세의 현상과 본질 (Series 2)
            </p>
          </li>
          <li className="green">
            <span className="personal_list_number">5</span>
            <p className="personal_list_txt">사회문제에 대한 이해 : 심화</p>
          </li>
        </ul>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "3개월",
    render: () => (
      <Tab.Pane>
        <ul className="personal_list">
          <li className="bm">
            <span className="personal_list_number">1</span>
            <p className="personal_list_txt">명상의 이해</p>
          </li>
          <li className="academy">
            <span className="personal_list_number">2</span>
            <p className="personal_list_txt">
              국제정세의 현상과 본질 (Series 2)
            </p>
          </li>
          <li className="happy">
            <span className="personal_list_number">3</span>
            <p className="personal_list_txt">사회문제에 대한 이해 : 심화</p>
          </li>
          <li className="ai">
            <span className="personal_list_number">4</span>
            <p className="personal_list_txt">
              고객 이해에 도움되는 '디자인 방법 ' 맛보기
            </p>
          </li>
          <li className="inno">
            <span className="personal_list_number">5</span>
            <p className="personal_list_txt">AI UX 기초 Essentials</p>
          </li>
        </ul>
      </Tab.Pane>
    ),
  },
];

const PersonalTab = () => <Tab panes={panes} />;

export default PersonalTab;
