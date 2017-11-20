import $ from 'jquery'

export default {

  //端口
  // host: 'http://172.16.1.220:8080/argus',
  // host: 'http://171.16.46.115:8080/argus',
  host: 'http://eye.htd.cn/argus',
  //获取当前状态
  getState: function() {
    var stateText = localStorage.getItem('$state') || "{}";
    return JSON.parse(stateText);
  },
  //设置当前状态
  setState: function(state) {
    state = state || {};
    localStorage.setItem('$state', JSON.stringify(state));
  },
  //jsonp请求
  getJsonp: function(url, datas, loading, callback, complete) {
    $.ajax({
      url: url,
      jsonp: "callback",
      dataType: "jsonp",
      data: datas,
      beforeSend: loading,
      error: function(response) {
        console.log(response);
      },
      complete: complete,
    }).done(callback)
  },
  //判断是否登陆
  islogin: function() {
    var state = this.getState();
    if (!state.orgCode) {
        alert('对不起，请先登录');
        window.location.href='login'
    }
  }
}
