//Memoization is a form of caching where the return value of a function is cached based on its parameters. 
//If the parameter of that function is not changed, the cached version of the function is returned.

function memoizedAddTo256(){
  var cache = {};

  return function(num){
    if(num in cache){
      console.log("cached value");
      return cache[num]
    }
    else{
      cache[num] = num + 256;
      return cache[num];
    }
  }
}
var memoizedFunc = memoizedAddTo256();

memoizedFunc(20); // Normal return
memoizedFunc(20); // Cached return

//The memoizedAddTo256 function creates a memoized version of a function that adds 256 to a given number. When you call memoizedFunc(20) the first time, it calculates and caches the result. 
//On subsequent calls with the same argument, it quickly returns the cached result, saving computation time.

//Memoization is an optimization technique used to speed up function calls by storing the 
//results of expensive function calls and returning the cached result when the same inputs occur again.
