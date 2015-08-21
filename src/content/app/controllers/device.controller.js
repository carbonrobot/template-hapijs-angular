function DeviceController($http, $timeout) {
    var vm = this;

    // props
    vm.list = [];
    vm.device = null;
    vm.statusMsg = '';
    vm.updateDeviceForm = null;

    // methods
    vm.update = update;

    function getDevices() {
        $http.get('devices').then(function(response) {
            vm.list = response.data;
            if(vm.list && vm.list.length > 0)
            	vm.device = vm.list[0];
        });
    }

    function update() {
		$http.post('devices', vm.device).then(function(response){
			vm.updateDeviceForm.$setPristine();
			notify('Updated!');
			console.log(response);
		}, function(response){
			notify(response);
			console.log(response);
		});
    }

    function notify(msg){
    	vm.statusMsg = msg;
    	$timeout(function(){
    		vm.statusMsg = '';
    	}, 2000);
    }

    (function init() {
        getDevices();
    })();
}

angular.module('template-hapijs-angular').controller('DeviceController', DeviceController);
