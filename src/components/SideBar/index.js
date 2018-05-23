import React from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';
import { withRouter } from 'react-router';
import { NavLink, Redirect } from 'react-router-dom';
import './sidebar.css';

const SideBar = ({ section, pages, match }) => {
  const currentSection = R.prop(section.title, pages);
  // console.log(currentSection, 'sidebar match', match, pages);
  const renderNavlink = item => {
    const { Id, Title } = item;
    let speaker = '';
    if (item.Speakers) {
      speaker = R.compose(R.map(item => ({
          FirstName: item.FirstName,
          LastName: item.LastName,
          Title: item.Title,
          Company: item.Company
        })), R.take(1), R.prop('Speakers'))(item);
    }

    return <li key={Id} className="sidebar--item">
        <NavLink to={`/${section.title}/${Id}`}>
          <h6 className="sidebar--header">{Title}</h6>
          {speaker && <span className="sidebar--author">
              {`${speaker[0].FirstName} ${speaker[0].LastName}` +
                (speaker[0].Company ? `, ${speaker[0].Company}` : ``)}
            </span>}
        </NavLink>
      </li>;
  };

  const loadFirst = () => {
    if (!match.params.id ) {
      return <Redirect replace to={`/${section.title}/${currentSection[0].Id}`} />;
    }
  };

  return <div className="sidebar">
      <h5 className="sidebar--header--big">{section.title}</h5>
      <ul className="sidebar--list">
        {currentSection && loadFirst()}
        {currentSection && currentSection.map(item => renderNavlink(item))}
      </ul>
    </div>;
};

const mapStateToProps = state => ({
  section: state.section,
  pages: state.pages
});

export default withRouter(connect(mapStateToProps)(SideBar));
