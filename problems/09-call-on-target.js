function callOnTarget(func, obj1, obj2) {
  // let call = func.bind(obj1);
  // return call(obj2);
  return func.call(obj1,obj2);

}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;
