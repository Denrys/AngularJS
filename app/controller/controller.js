
//main.html   显示所有信息
app.controller("main",function($scope,$http){
        $http.get("data/persons.json").then(function(resp){
            $scope.persons = resp.data;
        });
    //  main.html  删除界面
    $scope.removePer = function(id) {
        //forEach(array,function(obj,index)){}
		angular.forEach($scope.persons, function(val, key) {
			if(id === val.id) {
                //splice(index,howmany,item1,.....,itemX)
                //index需要删除项目的位置，howmany删除的数量
                //item1可添加的项目
				$scope.persons.splice(key, 1);
			}
		});
	};
    });

//login.html 登录页面
app.controller("form",function($scope,$location){  
    $scope.login = function(){
        if( $scope.person.name== "admin"&&  $scope.person.passwd == "pwd"){
            alert("登陆成功");
            $location.path("/main");
        }else{
            alert("登陆失败");
        }       
    }
});

//edit.html   编辑界面
app.controller("editView",function($scope,$http,$routeParams){

    //性别初始化
    $scope.sexs = [
        {id:"M",val:"男"},
        {id:"W",val:"女"}
    ],
       //爱好初始化 
    $scope.hobbys = [
        {id:"L",val:"篮球"},
        {id:"Z",val:"足球"},
        {id:"P",val:"乒乓球"},
        {id:"B",val:"保龄球"},
        {id:"W",val:"网球"}
        
    ],
    
       $http.get("data/persons.json").then(function(resp) {
       //$routeParamsy用于检索当前路由的参数
		var i = $routeParams.id-1;
        //数据写入per，edit model调用
		$scope.per = resp.data[i];
	}); 
    
    //数据提交到后端
    $scope.addSubmit = function(){
     $http.post("/postdata",$scope.per).then(function(resp){
         console.log("Saved successfully"  + resp.status);
     },function(resp){
         console.log("Saved faild  "  + resp.status);
     });   
    }

     
});
//add.html 

app.controller("addView",function($scope,$http){
    $scope.sexs = [
        {id:"M",val:"男"},
        {id:"W",val:"女"}
    ],
       //爱好初始化 
    $scope.hobbys = [
        {id:"L",val:"篮球"},
        {id:"Z",val:"足球"},
        {id:"P",val:"乒乓球"},
        {id:"B",val:"保龄球"},
        {id:"W",val:"网球"}
        
    ],
    $scope.addSubmit= function(){
        alert($scope.person.name);
        $http.post("/add/data",$scope.person).then(function(resp){
            console.log("Add  Successfully" + resp.status);
        },function(resp){
            console.log("Add  Failed" + resp.status);
        });
    }
});

//author:fakuy
//date:2018.07.07


