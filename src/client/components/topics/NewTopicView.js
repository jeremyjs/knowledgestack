import React from 'react';
import { connect } from 'react-redux'
import { createTopic } from '../../api/topics';
import { Breadcrumbs } from '../../components/layout'
import { TextField, RaisedButton } from 'material-ui';

const buttonStyle = {
  marginTop: '30px',
};

const crumbs = [ { title: 'Topics', linkUrl: '/' }, { title: 'New Topic' } ];

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (e) => {
    e.preventDefault();
    const formEl = document.querySelectorAll(`#${e.target.id}`)[0];
    const formInputs = formEl.getElementsByTagName('input');

    const topic = {
      title: formInputs.title.value,
      imgUrl: formInputs.imgUrl.value,
    };

    createTopic(topic).then(topicId => {
      console.log('created topic with _id:', topicId);
      ownProps.router.push('/');
    });
  },
});

const NewTopicPresenter = (props) => (
  <div className="new-topic-container">
    <Breadcrumbs crumbs={crumbs} />
    <form id="new-resource-item" className="new-resource-item" onSubmit={props.onSubmit}>
      <TextField name="title" id="new-resource-title" hintText="Philately" floatingLabelText="Title" />
      <br />
      <TextField name="imgUrl" id="new-resource-img-url" hintText="http://www.philately.com/stamps.jpg" floatingLabelText="Image Url" />
      <br />
      <RaisedButton type="submit" label="Create Topic" primary={true} style={buttonStyle} />
    </form>
  </div>
);

export const NewTopicView = connect(mapStateToProps, mapDispatchToProps)(NewTopicPresenter);
