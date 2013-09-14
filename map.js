function myMap (arr, f) {
  var m_arr = new Array();
  for (var i = 0; i < arr.length; ++i) {
    m_arr[i] = f(arr[i]);
  }
  return m_arr;
};

Array.myMap = function (f) {
  var m_arr = new Array();
  for (var i = 0; i < this.length; ++i) {
    m_arr[i] = f(this[i]);
  }
  return m_arr;
}
