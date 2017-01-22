import React from 'react';
import { connect } from 'react-redux';
import { createResource } from '../../api/resources';
import { addResourceToCurriculum, setIsAddingResource } from '../../store/actions';
import { TextField, RaisedButton } from 'material-ui';

const style = {
  marginRight: '20px',
};

const formOptions = {
  form: 'new-resource-form',
};

const mapStateToProps = (state, ownProps) => ({})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (e) => {
    e.preventDefault();
    const formEl = document.querySelectorAll(`#${e.target.id}`)[0];
    const formInputs = formEl.getElementsByTagName('input');

    const resource = {
      title: formInputs.title.value,
      url: formInputs.url.value,
    };

    const { curriculumId } = ownProps;
    console.log('curriculumId:', curriculumId);

    createResource(resource).then(resourceId => {
      dispatch(addResourceToCurriculum({ curriculumId, resourceId }));
      dispatch(setIsAddingResource(false));
    });
  },

  onCancel: (e) => {
    e.preventDefault();
    dispatch(setIsAddingResource(false));
  },
});

export const NewResourceItemPresenter = (props) => (
  <form id="new-resource-item" className="new-resource-item" onSubmit={props.onSubmit}>
    <TextField name="title" id="new-resource-title" hintText="Some Website" floatingLabelText="Title" style={style} />
    <TextField name="url" id="new-resource-url" hintText="http://somewebsite.com/path" floatingLabelText="Url" style={style} />
    <RaisedButton type="submit" label="Add" primary={true} style={{ marginRight: '20px' }} />
    <RaisedButton label="Cancel" onClick={props.onCancel} />
  </form>
);

export const NewResourceItem = connect(mapStateToProps, mapDispatchToProps)(NewResourceItemPresenter);
