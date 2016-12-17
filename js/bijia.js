// /*
//  * @Author: zhengwei
//  * @Date:   2016-11-23 23:23:00
//  * @Last Modified by:   zhengwei
//  * @Last Modified time: 2016-11-27 10:27:17
//  */

// 'use strict';
// $(function() {
//     var productid = getQueryString("productid");
//     console.log(productid);
//     getProduct(productid)

//     function getProduct(productid) {
//         $.ajax({
//             url: "http://mmb.ittun.com/api/getproduct",
//             data: {
//                 "productid": productid
//             },
//             success: function(data) {
//                 console.log(data);
//                 var html = template("productInfoTmp", data);
//                 $('.product-info').html(html);
//                 //获取评论的时候等商品先出来了再获取评论 
//                 getProductCom(productid);
//             }
//         })
//     }

//     function getProductCom(productid) {
//         $.ajax({
//             url: "http://mmb.ittun.com/api/getproductcom",
//             data: {
//                 "productid": productid
//             },
//             success: function(data) {
//                 // console.log(data);
//                 var html = template("productComTmp", data);
//                 console.log($('.product-com-list'));
//                 $('.product-com-list').html(html);
//             }
//         })
//     }
//     //是用来获取url中的参数的值的 根据参数名获取参数值
//     function getQueryString(name) {
//         var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
//         var r = window.location.search.substr(1).match(reg);
//         if (r != null) {
//             return unescape(r[2]);
//         }
//         return null;
//     }
// });

myApp.controller('bijiaController',['$scope','$http','$sce','$routeParams',function($scope,$http,$sce,$routeParams){
    $scope.getProducts=function(){
            $http({
        url:'http://mmb.ittun.com/api/getproduct',
        params:{'productid':$routeParams.productid}
    })
    .success(function(data){
        for(var i=0;i<data.result.length;i++){
            data.result[i].productImg=$sce.trustAsHtml(data.result[i].productImg);
            data.result[i].bjShop=$sce.trustAsHtml(data.result[i].bjShop)
        }
        $scope.products=data.result[0];
    })
}();
$scope.getproductcom=function(){
    $http({
        url:'http://mmb.ittun.com/api/getproductcom',
        params:{ "productid": $routeParams.productid}
    })
    .success(function(data){
        $scope.prductcoms=data.result;
        console.log(data)
    })
}();
}])