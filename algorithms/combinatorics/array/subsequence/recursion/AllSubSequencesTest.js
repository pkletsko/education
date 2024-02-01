import {generateAllSubSequences} from "./AllSubSequences.js";


console.log(generateAllSubSequences(0, [1,2,3], [], []));
console.log(generateAllSubSequences(0, [], [], []));
console.log(generateAllSubSequences(0, [1,2,3,4], [], []));

// Can we count original sequence as subsequence ?

// Yes, in the context of sequences, the original sequence is considered a subsequence of itself.
// A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.
// Since the original sequence doesn't involve deleting any elements, it is, by definition, a subsequence of itself.
// For example, if you have a sequence:
// Original Sequence: [A,B,C,D,E]
// The entire sequence
// [A,B,C,D,E] is a subsequence of itself.
// In general, any sequence is a subsequence of itself, as it meets the criteria of being derived from itself without changing the order of its elements.
