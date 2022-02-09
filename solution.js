function order(value) {
  var array = value.split('');
  console.log(array.sort((a, b) => b - a));
}
order('82762431579');
