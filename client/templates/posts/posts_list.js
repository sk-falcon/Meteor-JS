var postsData = [
  {
    title: 'Post 1',
    url: 'http://google.com'
  },
  {
    title: 'Post 2',
    url: 'http://gmail.com'
  },
  {
    title: 'Post 3',
    url: 'http://facebook.com'
  }
];

Template.postsList.helpers(
  {
    posts: postsData
  }
);
