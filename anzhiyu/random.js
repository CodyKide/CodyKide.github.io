var posts=["2023/03/26/hello-world/","2023/03/26/README/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };