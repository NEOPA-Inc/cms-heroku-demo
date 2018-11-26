const demoModel = {
    articles: []
};

const CONSTS = {
    serverpath: ""
};

$.ajax({
    url: CONSTS.serverpath + '/api/v1/info'
})
    .then(
        // 通信成功時のコールバック
        function (data) {
            demoModel.articles = data;
        }
        ,
        // 通信失敗時のコールバック
        function () {
            console.log("読み込み失敗");
        });

const appVue = new Vue({
    el: '#app',
    data: demoModel
});