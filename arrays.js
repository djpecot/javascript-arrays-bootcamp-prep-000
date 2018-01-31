var chocolateBars = ['snickers','hundred grand','kitkat','skittles'];

chai.config.truncateThreshold = 0;

<<<<<<< HEAD
var array = [1,2,3,4,5,6];
=======
var array = [1];
>>>>>>> a2ded434a359a92d4274cc68c3d8e3e108d38069
var element = 'foo';

function addElementToBeginningOfArray(array,element){
  var newarray = [1,2,3,4];
  return newarray = [element,...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array,element){
  var newarray = [1,2,3,4];
  return newarray = [...array,element];
}
var array = [1];
var element = 'foo';
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element);
  return array;
}

<<<<<<< HEAD
  var array = [1,2,3,4,5];
=======
  var array = [1,2,3,4];
>>>>>>> a2ded434a359a92d4274cc68c3d8e3e108d38069
  var index = 2;

function accessElementInArray(array,index){

  return array[index];
}

<<<<<<< HEAD
function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  return array = array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}

var array = [1,2,3,4,5];

function removeElementFromEndOfArray(array){
  return array = array.slice(0,array.length-1)
}
=======
function 

>>>>>>> a2ded434a359a92d4274cc68c3d8e3e108d38069
