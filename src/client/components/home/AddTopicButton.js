import React from 'react';
import { connect } from 'react-redux';
import { setIsAddingTopic } from '../../store/actions';
import RaisedButton from 'material-ui/RaisedButton';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setIsAddingTopic: () => {
    dispatch(setIsAddingTopic(true))
  },
});

const AddTopicButtonPresenter = (props) => (
  <RaisedButton className="add-topic-button" label="Add Topic" primary={true} onClick={props.setIsAddingTopic} />
);

export const AddTopicButton = connect(mapStateToProps, mapDispatchToProps)(AddTopicButtonPresenter);
