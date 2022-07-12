angular.module('myApp', [])
    .controller('MyCtrl', ['$scope', function ($scope) {
        
        // 初始化message
        $scope.message=''
        // 计算剩余字数
        $scope.getCount = function () {
        //    判断用户输入的内容长度
        if ($scope.message.length > 100) {
            $scope.message = $scope.message.slice(0,100)       
        }
          return 100 - $scope.message.length
        }
    
        // 保存
        $scope.save = function () {
            alert('note is saved')

            // 使用localStorage存储数据
            // 转化成JSON数据寻出更安全
            localStorage.setItem('note_key', JSON.stringify($scope.message))
            $scope.message='' 
        }

        // 读取
        $scope.read = function (){
            $scope.message = JSON.parse(localStorage.getItem('note_key') || '[]')
            //||'[]'是处理用户输入为空的情况
        }

        // remove
        $scope.remove = function (){
            localStorage.removeItem('note_key')
            $scope.message='' 
        }

    }])