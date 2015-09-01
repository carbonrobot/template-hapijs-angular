'use strict';

angular.module('app.signup').factory('ApplicantModel', ApplicantModel);

function ApplicantModel(){

	function Applicant(data){
		if(data){
			this.setData(data);
		}
	}

	Applicant.prototype = {
		setData: function(data){
			angular.extend(this, data);
		},
		update: function(){
			console.log('Updated!');
		}
	};

	return Applicant;
}