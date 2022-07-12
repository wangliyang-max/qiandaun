angular.module('myApp', [])
.controller('myCtrl',function ($scope){
    $scope.todos = [
        { name: '吃饭', isChecked: false },
        { name: '睡觉', isChecked: true },
        { name: '打豆豆', isChecked: false },
    ]
    $scope.add = function () {
        if (!$scope.newTodo) {
            alert("添加的内容不能为空")
            return;
        }

        var obj = {
            name: $scope.newTodo,
            isChecked:false
        }
    //    unshift添加到前面,unshift的返回值是数组的长度
        $scope.todos.unshift(obj)
        $scope.newTodo = ''
    }

    // $scope.del=function (){
    //     $scope.todos.forEach(function (item, index) {
    //         if (item.isChecked) {
    //            $scope.todos.splice(index, 1);
    //             $scope.del() 
    //         }
    //     }
    //     )
    // }

    $scope.del = function () {
        var oldTodo = $scope.todos;
        $scope.todos = []
        oldTodo.forEach(function (item,index){
            if (!item.isChecked) {
                // 将为选中的留下来
                $scope.todos.push(item)
                
           }
        })

    }
})