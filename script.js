function toCase(text) {
  // write your code here
	let s1=text.toLowerCasse();
	let s2=text.toUpperCase();

	return s1 + "-" + s2;
	
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
