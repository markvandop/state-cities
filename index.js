var states = require('./data/states').states;

//Main Method
var getCities = function(state){
	state = state.trim().toUpperCase();
	if(!states[state]){
		return null;
	}else{
		return states[state].cities;
	}
}

exports.getCities = getCities;