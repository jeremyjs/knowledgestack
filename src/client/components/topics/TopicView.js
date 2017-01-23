import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { topicById, curriculumsByTopicId } from '../../store/helpers';
import { setAddingCurriculumTopicId } from '../../store/actions';
import { CurriculumList } from '../../components/curriculums';
import { Breadcrumbs } from '../../components/layout'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  width: '50%',
  margin: '0 auto',
};

const mapStateToProps = (state, ownProps) => {
  const topic = topicById(state, ownProps.params._id);
  return _.assign(
    {},
    topic,
    { curriculums: curriculumsByTopicId(state, ownProps.params._id) },
    { crumbs: [ { title: 'Topics', linkUrl: '/' }, { title: topic.title } ] }
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAddCurriculum: () => {
    console.log(ownProps)
    dispatch(setAddingCurriculumTopicId(ownProps.params._id));
    ownProps.router.push('/curriculums/new');
  },
});

const TopicPresenter = (props) => (
  <div className="topic-container" style={style}>
    <Breadcrumbs crumbs={props.crumbs} />

    <h1>{props.title} Curriculums</h1>

    <CurriculumList curriculums={props.curriculums} />

    <RaisedButton className="add-curriculum-button" label="Add Curriculum" primary={true} onClick={props.onAddCurriculum} />
  </div>
);

export const TopicView = connect(mapStateToProps, mapDispatchToProps)(TopicPresenter);
