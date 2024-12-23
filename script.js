function toCase(text) {
  // write your code here
  // Convert to lowercase and uppercase and join with '-'
  return text.toLowerCase() + '-' + text.toUpperCase();

}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
