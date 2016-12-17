/*
 * @Author: zhengwei
 * @Date:   2016-11-23 23:23:00
 * @Last Modified by:   zhengwei
 * @Last Modified time: 2016-11-28 10:02:17
 */

'use strict';
//$(function() {
//
//    getindexMenu();
//
//    function getindexMenu() {
//        $.ajax({
//            url: "http://mmb.ittun.com/api/getindexmenu",
//            success: function(data) {
//                //因为data已经在后台打包成了一个对象 所以这里就直接传data不用打包
//                var html = template("menuTmp", data);
//                $('#menu').html(html);
//                // console.log($('#menu >.row > div:nth-child(8)'));
//                //由于现在的html的动态加载进来的 所以$('#menu >.row > div:nth-child(8)') 默认是获取不到
//                // 需要等html已经加载到页面上才能获取元素
//                //所以添加事件等DOM操作得在  $('#menu').html(html); 执行完成之后写
//                $('#menu >.row > div:nth-child(8)').on('click', function() {
//                    // toggle表示切换当前调用的元素的显示隐藏
//                    $('#menu >.row > div:nth-last-child(-n+4)').toggle(200);
//                });
//            }
//        })
//    }
//    getRecommen();
//
//    function getRecommen() {
//        $.ajax({
//            url: "http://mmb.ittun.com/api/getmoneyctrl",
//            success: function(data) {
//                var html = template('recommenTmp', data);
//                //将生成好的html模板放到 推荐列表的容器里
//                $('.recommen-list').html(html);
//            }
//        })
//    }
//})
myApp.controller('indexController',['$scope','$http','$sce', function ($scope, $http,$sce) {
    $scope.getindexMenu= function () {
        //获取主页菜单的函数
        $http({
            url:'http://mmb.ittun.com/api/getindexmenu'
        }).success(function (data) {
            for(var i=0;i<data.result.length;i++){
               data.result[i].img=$sce.trustAsHtml(data.result[i].img)
            }
            data.result[0].titlehref = "#/category";
            data.result[1].titlehref = "#/moneyctrl";
            data.result[2].titlehref = "#/inlanddiscount";
            data.result[3].titlehref = "#/baicaijia";
            data.result[4].titlehref = "#/moneyctrl";
            data.result[5].titlehref = "#/coupon";
            data.result[6].titlehref = "#/";
            data.result[7].titlehref = "#/";
            data.result[8].titlehref = "#/gsproduct";
            data.result[9].titlehref = "#/";
            data.result[10].titlehref = "#/sitenav";
            data.result[11].titlehref = "#/brandtitle";

          $scope.indexmenus=data.result;
        })
    }();
    $scope.getMoneyctrl=function(){
        $http({
            url:'http://mmb.ittun.com/api/getmoneyctrl'
        }).success(function(data){
            for(var i=0;i<data.result.length;i++){
                data.result[i].productImgSm=$sce.trustAsHtml(data.result[i].productImgSm)
            }
            $scope.moneyCtrl=data.result;
        });
    }();
    $scope.toggle=function(){
        $('#menu>.row>div:nth-last-child(-n+4)').toggle(200)
    }
}])