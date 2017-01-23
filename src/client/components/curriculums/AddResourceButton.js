import React from 'react';
import { connect } from 'react-redux';
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
