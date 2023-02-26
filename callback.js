axios({
  method: "post",
  url: `https://github.com/login/oauth/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`,
  headers: {
    accept: "application/json",
  }, //이 부분을 작성하지 않으면 객체형태로 응답을 받지 못한다.(이 부분 작성하지 않은 result를 콘솔로 찍어보니 그냥 문자열 형태...)
  data: {
    client_id: "a92b736d280cfbc480bd",
    client_secret: "38a6171ad8ee8fefb52ca3f8c43d69e9f2e09983",
    code: req.body.authorizationCode,
    //클라이언트가 보낸 POST요청 내 body에서 받아온 authorization code를 가지고
    //authorization server에 access token을 달라고 POST요청을 보낸다
  },
});
