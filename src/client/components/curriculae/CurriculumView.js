import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { app } from '../../app';
import { curriculumById, resourcesByCurriculum } from '../../store/helpers';
import { ResourceList } from '../../components/resources';

const mapStateToProps = (state, ownProps) => {
  const curriculum = curriculumById(state, ownProps.params._id);
  return _.assign(
    {},
    curriculum,
    { resources: resourcesByCurriculum(state, curriculum) }
  );
};

const mapDispatchToProps = {};

const CurriculumPresenter = (props) => {
  console.log(props)
  return (
    <div className="main-container">
      <h1>{props.title}</h1>
      <ResourceList resources={props.resources} />
    </div>
  );
};

export const CurriculumView = connect(mapStateToProps, mapDispatchToProps)(CurriculumPresenter);
