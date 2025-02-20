var posts=["2025/02/14/Essence of linear algebra/","2025/02/20/hello-world/","2025/02/14/大二上学期回顾与计划/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };