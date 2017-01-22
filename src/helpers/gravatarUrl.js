import md5 from 'js-md5';

const gravatarHash = (emailAddress) => md5(emailAddress.trim().toLowerCase());

export const gravatarUrl = (profile, size) => {
  const hash = gravatarHash(profile.emailAddress)
  return `https://www.gravatar.com/avatar/${hash}?s=${size}`;
};
