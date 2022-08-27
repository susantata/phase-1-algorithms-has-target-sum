
function hasTargetSum(array, target) {
	// Write your algorithm here
	for(i=0; i < array.length; i++){
		let comp = array.splice(0, 1); 
		if(array.includes(target-comp)){
			return true
		}
	}
	return false
}

/* 
  Write the Big O time complexity of your function here
*/

// it has a time complexity of O(n)

/* 
  Add your pseudocode here
*/
// 1.destructively select the first Element,
// 2.check whether the array includes target-first element 
// 3. return true

/*
  Add written explanation of your solution here
*/

// i have used two loops(i know that this is not the optimal solution). 
//   the first loop creates identical copy of the array 
//   the second loop iterates through the array trying different combinations which add to our target 
//   if any found, it returns true, else false

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  // console.log("the array is " + array);
  // console.log("the target is " + target);
  // console.log('the combinations are ' + firstnumber + ' ' + secondnumber)
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;