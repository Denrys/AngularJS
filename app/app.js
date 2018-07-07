    var app =angular.module("myApp",["ngRoute"]);
app.config(["$routeProvider",function($routeProvider){
    $routeProvider
    .when("/add",{
        templateUrl:"tmpl/add.html",
       controller:"addView"
    }).when("/main",{
        templateUrl:"tmpl/main.html",
//        controller:"add"
    }).when("/edit/:id",{
        templateUrl:"tmpl/edit.html",
         controller:"editView"
    }).when("/login",{
        templateUrl:"tmpl/admin/login.html",    
    }).otherwise({
        redirectTo:"/login"
    })
}]);