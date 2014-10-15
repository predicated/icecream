// app.js
angular.module('icecream', [])

    .controller('IceCreamController', function() {

    	this.flavors = 
    	[
    		'Vanilla',
    		'Chocolate',
    		'Neopolitan',
    		'Green Tea',
        'Pistachio',
        'Coffee',
        'Cake Batter'
    	];

      this.faveFlavors = [
      	'Chocolate'
      ];

      this.combinations = [];

      this.numScoops = 1;

      this.favesOnly = false;

      this.addFlavor = function() {
        this.flavors.push(this.newFlavor);
        this.newFlavor = null;
      };

      this.serveCombo = function() {
      	var combo = [];
        var arr = this.favesOnly ? this.faveFlavors : this.flavors;
      	for (i = 0; i < this.numScoops; i++) {
      		combo.push(this.randomItem(arr));
      	}
        console.log("Serving: " + combo.join(' + '));
      	this.combinations.push(combo.join(' + '));
      }

      this.randomItem = function(arr) {
        var i = Math.floor(Math.random() * arr.length);
        return arr[i];
      }

      this.removeCombo = function(combo) {
        var i = this.combinations.indexOf(combo);
        this.combinations.splice(i, 1);
      }

      this.isFave = function(flavor) {
      	return (this.faveFlavors.indexOf(flavor) != -1);
      }

      this.changeFaveStatus = function(flavor) {
      	var i = this.faveFlavors.indexOf(flavor);
      	if (i != -1) {
      		this.faveFlavors.splice(i, 1);
      	}
      	else {
      		this.faveFlavors.push(flavor);
      	}
      }

      this.cssClassesForFlavor = function(flavor) {
      	return {
      		fave: (this.isFave(flavor))
      	}
      }

    })

;