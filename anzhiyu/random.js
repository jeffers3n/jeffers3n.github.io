var posts=["2024/10/18/这是一篇新的博文/","2024/10/17/hello-world/","2023/10/10/财富/抄盘手05/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };