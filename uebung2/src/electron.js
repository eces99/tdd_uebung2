// electron.js
function Electrons() {}

var win = 5;

Electrons.prototype.add = function(electron_array) {
	// Sith simple prod code
    var sum = 0;
    var electron_array = electron_array.replace(/\[|\]/g, '').split(', ');
    for (var i = 0; i < electron_array.length; i++) {
        if(electron_array[i] == 1 || electron_array[i] == 2 || electron_array[i] == 4 || electron_array[i] == 6) {
            electron_array[i] = 0;
            sum += electron_array[i];
        }
        else if (electron_array[i] == 3) {
            electron_array[i] = 2;
            sum += electron_array[i];    
        } else {
            electron_array[i] = 4;
            sum += electron_array[i];
        }
    }
    return sum;
};