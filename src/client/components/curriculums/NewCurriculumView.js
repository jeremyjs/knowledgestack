import React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';
import { topicById } from '../../store/helpers';
import { topicUrl } from '../../routes';
import { createCurriculum } from '../../api/curriculums';
import { Breadcrumbs } from '../../components/layout'
import { AutoComplete, TextField, RaisedButton } from 'material-ui';

const formStyle = {
  width: '50%',
};

const buttonStyle = {
  marginTop: '30px',
};

const topicConfig = { text: 'title', value: '_id' };

const topicByTitle = (state, title) => _.find(state.topics, { title });

const mapStateToProps = (state, ownProps) => {
  const topic = topicById(state, state.newCurriculum.topicId);
  console.log('topic:', topic);
  console.log('state.topics:', state.topics);
  return _.assign(
    {},
    {
      defaultTopic: topic,
      topics: state.topics,
      currentUserId: state.currentUserId,
      crumbs: [
        { title: 'Topics', linkUrl: '/' },
        { title: topic.title, linkUrl: topicUrl(topic) },
        { title: 'New Curriculum' },
      ],
    }
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log('ownProps:', ownProps);
  return {
    onCloseTopic: (e) => {
      console.log(e)
    },

    onSubmit: (stateProps) => (e) => {
      e.preventDefault();
      const formEl = document.querySelectorAll(`#${e.target.id}`)[0];
      const formInputs = formEl.getElementsByTagName('input');
      const formTextareas = formEl.getElementsByTagName('textarea');

      console.log('formInputs:', formInputs);

      const topic = topicByTitle(stateProps, formInputs.topicTitle.value);

      const curriculum = {
        topicId: topic._id,
        ownerId: stateProps.currentUserId,
        title: formInputs.title.value,
        description: formTextareas.description.value,
      };

      console.log('curriculum:', curriculum);

      createCurriculum(curriculum).then(curriculumId => {
        console.log('created curriculum with _id:', curriculumId);
        ownProps.router.push(topicUrl(topic));
      });
    },
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  console.log('dispatchProps:', dispatchProps);
  return _.assign(
    {},
    stateProps,
    dispatchProps,
    ownProps,
    { onSubmit: dispatchProps.onSubmit(stateProps) }
  )
};

const NewCurriculumPresenter = (props) => (
  <div className="new-curriculum-container">
    <Breadcrumbs crumbs={props.crumbs} />
    <form id="new-curriculum-item" className="new-curriculum-item" onSubmit={props.onSubmit} style={formStyle}>
      <AutoComplete
        name="topicTitle"
        id="new-curriculum-topic-title"
        className="field"
        floatingLabelText="Topic"
        searchText={props.defaultTopic.title}
        filter={AutoComplete.fuzzyFilter}
        maxSearchResults={7}
        dataSource={props.topics}
        dataSourceConfig={topicConfig}
        onClose={props.onCloseTopic}
        openOnFocus={true}
      />
      <br />
      <TextField name="title" id="new-curriculum-title" hintText="Basics of Knitting" floatingLabelText="Title" />
      <br />
      <TextField
        name="description"
        id="new-curriculum-description"
        className="field"
        hintText="Knitting is hype. This curriculum provides several resources for finding the best equipment and teaches you how to crochet."
        floatingLabelText="Description"
        fullWidth={true}
        multiLine={true}
        rows={2}
        rowsMax={4}
      />
      <br />
      <RaisedButton type="submit" label="Create Curriculum" primary={true} style={buttonStyle} />
    </form>
  </div>
);

export const NewCurriculumView = connect(mapStateToProps, mapDispatchToProps, mergeProps)(NewCurriculumPresenter);
