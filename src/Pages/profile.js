import React, { useEffect } from "react";
import NCard from "../component/Nt_Card";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../queries/index";
import auth from "../components/auth";
import "../Style/Profile.css";

const UserNotes = () => {
  const { data, refetch } = useQuery(GET_USER);
  useEffect( () => {
    refetch();
    return () => null
  })
  return(
    <div>
      {data.activeUser.Not.length <= 0 ? (
        <div className="nsn">
          <h5>Not paylaşılmamış...</h5>
        </div>
      ) : (
        data.activeUser.Not.map((Not) => (
          <NCard
            key={Not.id}
            Name={Not.Name}
            Link={Not.Link}
            Ders={Not.Lesson.Name}
          />
        ))
      )}
    </div>
  )
};

const profile = ({ session: { activeUser } }) => {
  return (
    <div>    
      <div className="clearfix" id="contentCol">
        <div id="header">
          <div className="uiHeader uiHeaderPage">
            <div className="clearfix uiHeaderTop">
              <div className="rfloat _ohf">
                <h2 className="accessible_elem">Kullanıcı Bilgileri</h2>
                <div className="uiHeaderActions"></div>
              </div>
              <div>
                <h2 className="uiHeaderTitle" aria-hidden="true">
                  Kullanıcı Bilgileri
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div id="content" role="main">
          <div id="ProfilePage_Content">
            <ul className="uiList fbSettingsList fbSettingsListBorderTop fbSettingsListBorderBottom _4kg _4ks">
              <li className="fbSettingsListItem clearfix _5b2_ fbSettingsListItemLabeled">
                <div className="fbSettingsListLink clearfix pvm phs">
                  <h3 className="pls fbSettingsListItemLabel">Adın</h3>
                  <span className="fbSettingsListItemContent fcg ">
                    {activeUser.UserName}
                  </span>
                </div>
              </li>
              <li className="fbSettingsListItem clearfix _5b2_ fbSettingsListItemLabeled">
                <div className="fbSettingsListLink clearfix pvm phs">
                  <h3 className="pls fbSettingsListItemLabel">E-posta</h3>
                  <span className="fbSettingsListItemContent fcg ">
                    {activeUser.email}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div id="header">
          <div className="uiHeader uiHeaderPage">
            <div className="clearfix uiHeaderTop">
              <div className="rfloat _ohf">
                <h2 className="accessible_elem">Kullanıcı Bilgileri</h2>
                <div className="uiHeaderActions"></div>
              </div>
              <div>
                <h2 className="uiHeaderTitle" aria-hidden="true">
                  Kullanıcının Paylaştığı Notlar
                </h2>
              </div>
              <UserNotes />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default auth( session => session && session.activeUser)(profile);
