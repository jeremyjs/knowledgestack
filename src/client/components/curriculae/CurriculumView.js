import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { currentUser, curriculumById, curriculumOwner, curriculumTopic, resourcesByCurriculum } from '../../store/helpers';
import { ResourceList } from '../../components/resources';
import { AddResourceButton, NewResourceItem } from '../../components/curriculae';
import { gravatarUrl } from '../../../helpers';
import { Breadcrumbs, rootCrumb } from '../../components/layout';
import { topicUrl } from '../../routes';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

const paperStyle = {
  padding: '20px',
};

const headerStyle = {
  display: 'flex',
};

const titleContainerStyle = {
  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'space-between',
};

const titleStyle = {
  color: 'rgba(0, 0, 0, 0.870588)',
  margin: '0',
  marginBottom: '5px',
};

const subtitleStyle = {
  color: 'rgba(0, 0, 0, 0.541176)',
};

const avatarStyle = {
  fontSize: '2em',
  margin: '0',
  marginRight: '20px',
};

const mapStateToProps = (state, ownProps) => {
  const curriculum = curriculumById(state, ownProps.params._id);
  const topic = curriculumTopic(state, curriculum);
  return _.assign(
    {},
    curriculum,
    {
      currentCurriculum: state.currentCurriculum,
      currentUser: currentUser(state),
      owner: curriculumOwner(state, curriculum),
      topic,
      resources: resourcesByCurriculum(state, curriculum),
      crumbs: [
        rootCrumb,
        { title: topic.title, linkUrl: topicUrl(topic) },
        { title: curriculum.title },
      ],
    }
  );
};

const mapDispatchToProps = {};

const CurriculumPresenter = (props) => (
  <div className="curriculum-container">
    <Breadcrumbs crumbs={props.crumbs} />
    <Paper zDepth={3} style={paperStyle}>
      <header style={headerStyle}>
        <Avatar src={gravatarUrl(props.owner, '128')} size={64} style={avatarStyle} />
        <div className="title-container" style={titleContainerStyle}>
          <h1 className="title" style={titleStyle}>{props.title}</h1>
          <div className="subtitle" style={subtitleStyle}>{props.owner.username}</div>
        </div>
      </header>
      <p>{props.description}</p>
      {(props.resources && props.resources.length > 0) ?
        <ResourceList resources={props.resources} />
      :
        <p>Curriculum is empty.</p>
      }
      {props.currentCurriculum.isAddingResource ?
        <NewResourceItem curriculumId={props._id} />
      : ''}
      {!props.currentCurriculum.isAddingResource && props.owner === props.currentUser ?
        <AddResourceButton curriculumId={props._id} />
      : ''}
    </Paper>
  </div>
);

export const CurriculumView = connect(mapStateToProps, mapDispatchToProps)(CurriculumPresenter);
