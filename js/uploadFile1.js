$(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:8888/account/login/info/get?token="+$.cookie('token'),
        dataType: "JSON",
        success: function (res) {
            if(res.success){
                if(res.result == null){
                    $('#login').show();
                }else {

                    $('#logout').show();
                    $("#loginInfo").show();
                    $("#loginInfo_userName").text(res.result.username);
                }
            }
        }
    });

});

function logout() {
    $.cookie('token', '', { expires: -1,path:'/ '}); // 删除 cookie
    window.location.href="index.html";
}