/* jshint unused: false */
function _createKey(name) {
  return name.toLowerCase().replace(/[^a-z]+/g, '-');
}

function _createName(key) {
  var words = key.replace('-', ' ').split(' ');

  for (var i = 0, l = words.length; i < l; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join(' ');
}

function _objLength(object) {
  var size = 0, key;
  for (key in object) {
    if (object.hasOwnProperty(key)) {
      size++;
    }
  }

  return size;
}

function _isDescendant(parent, child) {
  var node = child;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

export { _createKey, _createName, _objLength, _isDescendant };
