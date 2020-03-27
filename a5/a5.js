/*************************************
   CS 331 - A5

   your name(s): Martin Mueller & Isaiah Ley

 *************************************/

var fp = require('./fp');

if ( ! exports ) {
  var exports = [ ];
}

var weightedSum = function (ns,ws) {
  var helper = function (ns, ws, k) {
    if (fp.isNull(ws)) {
      if (fp.isNull(ns)) {
        return k(0);
      } else {
        return "Too few weights provided!";
      }
    } else if (fp.isNull(ns)) {
      return k(0);
    } else if (fp.isLT(fp.hd(ws), 0)) {
      throw new Error("Negative weight detected!");
    } else if (fp.isEq(fp.hd(ws), 0)) {
      return helper(fp.tl(ns), fp.tl(ws), k);
    } else if (fp.isEq(fp.hd(ws), 1)) {
      return helper(fp.tl(ns), fp.tl(ws),
        function(x) {
          return k(fp.add(x, fp.hd(ns)));
        }
      );
    } else if (fp.isEq(fp.hd(ns), 1)) {
      return helper(fp.tl(ns), fp.tl(ws),
        function(x) {
          return k(fp.add(x, fp.hd(ws)));
        }
      );
    } else {
      return helper(fp.tl(ns), fp.tl(ws),
        function(x) {
          return k(fp.add(x, fp.mul(fp.hd(ns), fp.hd(ws))));
        }
      );
    }
  };
  return helper(ns, ws, function(x) {return x;});
};

// a few test cases

console.log("> weightedSum([2,3,4], [5,6,7]) // should return 2*5 + 3*6 + 4*7");
console.log( weightedSum([2,3,4], [5,6,7]) );
console.log("> weightedSum([1,2], [3,4])");
console.log( weightedSum([1,2], [3,4]) );
console.log("> weightedSum([2,3], [1,4])");
console.log( weightedSum([2,3], [1,4]) );
console.log("> weightedSum([1,2,3], [3,0,5])");
console.log( weightedSum([1,2,3], [3,0,5]) );
console.log("> weightedSum([1,2,3], [3,4])");
console.log( weightedSum([1,2,3], [3,4]) );
console.log("> weightedSum([2], [3])");
console.log( weightedSum([2], [3]) );
console.log("> weightedSum([1,2,3,4,5,6,7,8], [8,7,6,5,4,3,2,1])");
console.log( weightedSum([1,2,3,4,5,6,7,8], [8,7,6,5,4,3,2,1] ) );
console.log("> weightedSum([1,2,3,4,5,6,7,8], [0,0,0,0,0,0,0,0])");
console.log( weightedSum([1,2,3,4,5,6,7,8], [0,0,0,0,0,0,0,0]) );
console.log("> weightedSum([1,2,3], [0,1,1])");
console.log( weightedSum([1,2,3], [0,1,1]) );
console.log("> weightedSum([1,2,3], [3,4,-1])");
console.log( weightedSum([1,2,3], [3,4,-1]) );



exports.weightedSum = weightedSum;
