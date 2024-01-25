import {generateAllSubArrays} from "./AllSubArrays.js";
import {stringToArray} from "../utils/Converters.js";
import {generateAllSubSequences} from "../subsequences/AllSubSequences.js";

// original array [1,2,3]
// all possible sub arrays :
// [] // An empty substring is a substring that contains no characters. This is typically considered a valid substring.
// Do we need to generate it if we already know that every array can have empty subarray ?
// 1
// 1,2
// 1,2,3
// 2
// 2,3
// 3

console.log(generateAllSubArrays(0, [1,2,3], [], []));
console.log(generateAllSubArrays(0, [], [], []));
console.log(generateAllSubArrays(0, [1,2,3,4], [], []));


// Subarray = Substring != Subsequence
console.log('Subarray = Substring')
console.log(generateAllSubArrays(0, [1,2,3], [], []));
console.log(generateAllSubArrays(0, stringToArray('abc'), [], []));
// Subsequence = Subset != Subarray
console.log('Subsequence = Subset')
console.log(generateAllSubSequences(0, [1,2,3], [], []));
console.log(generateAllSubSequences(0, stringToArray('abc'), [], []));

// Can we count original array as subarray ?
// Yes, in the context of arrays, the original array is considered a subarray of itself.
// A subarray is defined as any contiguous subsequence of an array.
// Since the original array is a contiguous subsequence of itself, it satisfies the definition of a subarray.
// For example, if you have an array:
// Original Array: [1,2,3,4,5]
// The entire array
// [1,2,3,4,5] is a subarray of itself.
// In general, any array is a subarray of itself, as it meets the criteria of being a contiguous subsequence of the array.

// Is Substring is always Contiguous ?
// Yes, a substring is always contiguous.
// In the context of strings, a substring is defined as a contiguous sequence of characters within the original string.
// Therefore, by definition, a substring consists of characters that appear consecutively and in the same order as they do in the original string.
// If the characters are not consecutive, or if they are not in the same order as in the original string, then the term used is typically "subsequence" rather than "substring."
// A subsequence is a more general concept that allows for characters to be skipped or appear in a different order, but it does not require them to be contiguous.
// In summary, while substrings are always contiguous, subsequences can be non-contiguous and may skip characters in between.
