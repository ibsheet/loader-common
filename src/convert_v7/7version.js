const IBSheetConvert = {};
IBSheetConvert.v7 = {};

function clone(obj) {
  if (obj === null || typeof (obj) !== 'object') return obj;
  var copy = obj.constructor();
  for (var attr in obj) {
    if (obj.hasOwnProperty(attr)) {
      copy[attr] = clone(obj[attr]);
    }
  }
  return copy;
}
