if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Post 1',
    url: 'http://google.com'
  });

  Posts.insert({
    title: 'Post 2',
    url: 'http://gmail.com'
  });
  Posts.insert({
    title: 'Post 3',
    url: 'http://facebook.com'
  });
}
