function toCase(text) {
  // write your code here
  // Convert to lowercase and uppercase and join with '-'
  return str.toLowerCase() + '-' + str.toUpperCase();

}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
