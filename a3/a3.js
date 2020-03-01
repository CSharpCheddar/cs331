/********************************************
   CS 331 - A3

   Your name(s):  Martin Mueller & Isaiah Ley

 ********************************************/

var fp = require('./fp');
if ( ! exports ) {
   var exports = [ ];
}

var removeLast = function (ns) {
  if (fp.isNull(fp.tl(ns))) {
    return [];
  } else {
    return fp.cons(fp.hd(ns), removeLast(fp.tl(ns)));
  }
};

var middle = function (ns) {
  if (fp.isNull(fp.tl(ns))) {
    return fp.hd(ns);
  } else if (fp.isNull(fp.tl(fp.tl(ns)))){
    return fp.hd(ns);
  } else {
    return middle(removeLast(fp.tl(ns)));
  }
};

var closest = function (ns, n) {
  if (fp.isNull(fp.tl(ns))) {
    return fp.hd(ns);
  } else if(fp.isLT(fp.mul(fp.sub(fp.hd(ns),n),
            fp.sub(fp.hd(ns),n)),
            fp.mul(fp.sub(closest(fp.tl(ns), n),n),
            fp.sub(closest(fp.tl(ns), n),n)))){
    return fp.hd(ns);
  } else {
    return closest(fp.tl(ns),n);
  }
};

var splitList = function (ns) {
  if (fp.isNull(ns)) {
    return fp.makeList([]);
  } else if (fp.isNull(fp.tl(ns))) {
    return fp.makeList(fp.makeList(fp.hd(ns)));
  } else {
    if (fp.isGT(fp.hd(ns), fp.hd(fp.tl(ns)))) {
      return fp.cons(fp.makeList(fp.hd(ns)), splitList(fp.tl(ns)));
    } else {
      return fp.cons(fp.cons(fp.hd(ns),
                     fp.hd(splitList(fp.tl(ns)))),
                     fp.tl(splitList(fp.tl(ns))));
    }
  }
};

var addDigits = function (n) {
  if (fp.isLT(fp.div(n, 10), 1)) {
    return n;
  } else {
    return fp.add(fp.rem(n, 10), addDigits(fp.div(n, 10)));
  }
};

var persistence = function (n) {
  if (fp.isLT(fp.div(n, 10), 1)) {
    return 0;
  } else {
    return fp.add(1, persistence(addDigits(n)));
  }
};

exports.removeLast = removeLast;
exports.middle = middle;
exports.closest = closest;
exports.splitList = splitList;
exports.addDigits = addDigits;
exports.persistence = persistence;
