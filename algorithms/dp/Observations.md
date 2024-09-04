Thinking flow:

1) How do we build the tree (regardless of its form)?
 - subsequence
 - permutation
 - deduplication
 - what is the init value, Aka: Entry point (from each point, from the beginning/end, from both)
2) What is the pruning condition?
3) How do we define the leaf node (termination condition)?
4) Do we need to pass information from parent to child?
5) What do we return (does it have a dual purpose)?
6) Do we need to do Pre-order (prepare value based on parent sate) of Post Order (calculate final value based on children) or both ?


**Note!!!**
I have never seen that DP problem required to modify the tree, probably because we build it on the way and it is pointless. 
