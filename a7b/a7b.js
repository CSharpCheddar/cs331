/*************************************************************
 * CS 331 - Assignment A7b
 * Student name(s) : Martin Mueller
 *                   Isaiah Ley
 *************************************************************/

var is = require('./is');

module.exports = { };

"use strict";

(function (exports) {

    // Do NOT modify this file above this point

    ///////////////////////////////////////////////////////////////////////////
    //                              Problem 1
    ///////////////////////////////////////////////////////////////////////////

    var makeSqrtSeq = function (n, guess) {
      return is.cons(guess,
        function() {
          return makeSqrtSeq(n, (guess + n / guess) / 2);
        }
      );
    };

    ///////////////////////////////////////////////////////////////////////////
    //                              Problem 2
    ///////////////////////////////////////////////////////////////////////////

    var sqrt = function (sequence, epsilon) {
      if ((is.hd(is.tl(sequence)) - is.hd(sequence)) *
          (is.hd(is.tl(sequence)) - is.hd(sequence)) <
          epsilon * epsilon) {
        return is.hd(is.tl(sequence));
      } else {
        return sqrt(is.tl(sequence), epsilon);
      }
    };

    ///////////////////////////////////////////////////////////////////////////
    //                              Problem 3
    ///////////////////////////////////////////////////////////////////////////

    var cumulate = function (sequence) {
      return is.cons(is.hd(sequence),
        function() {
          return cumulate(is.map(
            function(n) {
              return n + is.hd(sequence);
            }, is.tl(sequence))
          );
        }
      );
    };

    // Do NOT modify this file below this point

    exports.makeSqrtSeq = makeSqrtSeq;
    exports.sqrt = sqrt;
    exports.cumulate = cumulate;

}) (module.exports);
