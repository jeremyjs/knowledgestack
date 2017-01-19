import React from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import md5 from 'js-md5';
import { curriculumUrl } from '../../routes';
import { curriculumOwner } from '../../store/helpers';

const fullName = (profile) => `${profile.givenName} ${profile.familyName}`;

const gravatarHash = (emailAddress) => md5(emailAddress.trim().toLowerCase());

const gravatarUrl = (profile, size) => {
  const hash = gravatarHash(profile.emailAddress)
  return `https://www.gravatar.com/avatar/${hash}?s=${size}`;
};

const linkStyle = {
  display: 'block',
  marginBottom: '20px',
};

const mapStateToProps = (state, ownProps) => ({
  owner: curriculumOwner(state, ownProps),
});

const CurriculumItemPresenter = (curriculum) => {
console.log(curriculum)
  return (
  <a href={curriculumUrl(curriculum)} style={linkStyle}>
    <Card key={curriculum._id} className="curriculum-item">
      <CardHeader
        title={curriculum.title}
        subtitle={curriculum.owner.username}
        avatar={gravatarUrl(curriculum.owner, '128')}
      />
      <CardText>
        {curriculum.description}
        <br/>
        {`${curriculum.rating} / 5`}
      </CardText>
    </Card>
  </a>
);
};

export const CurriculumItem = connect(mapStateToProps)(CurriculumItemPresenter);
