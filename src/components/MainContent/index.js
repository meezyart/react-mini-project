import React from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';
import './main.css';

const MainContent = ({ match, section, pages }) => {
  const currentSection = R.prop(section.title, pages),
    content = currentSection && R.find(R.propEq('Id', match.params.id))(currentSection);
  // console.log('main content', match, currentSection, content);

  const renderContent = () => {
    let speaker = '';
    if (content.Speakers) {
      speaker = R.compose(
        R.map(content => ({
          Name: content.FirstName + ' ' + content.LastName,
          Title: content.Title,
          Biography: content.Biography,
          Company: content.Company
        })),
        R.take(1),
        R.prop('Speakers')
      )(content);
    }

    return <div className="content main--content">
        <h1 className="title is-1">{content.Title}</h1>
        {speaker && <span className="content--author content--author-blue">
            {`${speaker[0].Name}` +
              (speaker[0].Company ? `, ${speaker[0].Company}` : ``)}
          </span>}
        <p className="content--intro">{content.Description}</p>
        {content.Track.Title !== 'Activities' && content.Track.Title !== 'Training' ? <a className="content--link" rel="noopener noreferrer" target="_blank" href="http://atlassian.com">
            See the Q&A from this talk and others here.
          </a> : ''}

        {speaker && speaker[0].Biography && <article>
              <h2>About the Speaker</h2>
              <span className="content--author">
                {`${speaker[0].Name}` +
                  (speaker[0].Title ? `, ${speaker[0].Title}` : ``) +
                  (speaker[0].Company ? `, ${speaker[0].Company}` : ``)}
              </span>
              <p>
                {speaker[0].Biography ? `${speaker[0].Biography}` : ' '}
              </p>
            </article>}
      </div>;
  };

  return <div className="main-content">{content && renderContent()}</div>;
};

const mapStateToProps = state => ({
  section: state.section,
  pages: state.pages
});

export default connect(mapStateToProps)(MainContent);
