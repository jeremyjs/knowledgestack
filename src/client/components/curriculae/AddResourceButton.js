import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { currentUser, curriculumById, curriculumOwner, curriculumTopic, resourcesByCurriculum } from '../../store/helpers';
import { setIsAddingResource } from '../../store/actions';
import RaisedButton from 'material-ui/RaisedButton';

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setIsAddingResource: () => {
    dispatch(setIsAddingResource(true))
  },
});

const AddResourceButtonPresenter = (props) => (
  <RaisedButton className="add-resource-button" label="Add Resource" primary={true} onClick={props.setIsAddingResource} />
);

export const AddResourceButton = connect(mapStateToProps, mapDispatchToProps)(AddResourceButtonPresenter);
