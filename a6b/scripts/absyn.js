/* global SLang : true */
/*
 * Names: Martin Mueller and Isaiah Ley
*/

(function (){
  "use strict";
  var exports = {};

function createProgram(e) {
  return ["Program", e];
}

function isProgram(e) {
  return e[0] === "Program";
}

function getProgramExp(e) {
  if (isProgram(e)) {
    return e[1];
  } else {
    throw new Error("Interpreter error: "  +
    "The argument of getProgramExp is not a program.");
  }
}

function createVarExp(v) {
  return ["VarExp", v];
}

function isVarExp(e) {
  return e[0] === "VarExp";
}

function getVarExpId(e) {
  if (isVarExp(e)) {
    return e[1];
  } else {
    throw new Error("Interpreter error: "  +
    "The argument of getVarExpId is not a VarExp.");
  }
}

function createIntExp(n) {
  return ["IntExp", parseInt(n)];
}

function isIntExp(e) {
  return e[0] === "IntExp";
}

function getIntExpValue(e) {
  if (isIntExp(e)) {
    return e[1];
  } else {
    throw new Error("Interpreter error: "  +
    "The argument of getIntExpValue is not an IntExp.");
  }
}

function createFnExp(params,body) {
  return ["FnExp", params, body];
}

function isFnExp(e) {
  return e[0] === "FnExp";
}

function getFnExpParams(e) {
  if (isFnExp(e)) {
    return e[1];
  } else {
    throw new Error("Interpreter error: "  +
    "The argument of getFnExpParams is not an FnExp.");
  }
}

function getFnExpBody(e) {
  if (isFnExp(e)) {
    return e[2];
  } else {
    throw new Error("Interpreter error: "  +
    "The argument of getFnExpBody is not an FnExp.");
  }
}

function createAppExp(fn,args) {
  return ["AppExp", fn, args];
}

function isAppExp(e) {
  return e[0] === "AppExp";
}

function getAppExpFn(e) {
  if (isAppExp(e)) {
    return e[1];
  } else {
    throw new Error("Interpreter error: "  +
    "The argument of getAppExpFn is not an AppExp.");
  }
}

function getAppExpArgs(e) {
  if (isAppExp(e)) {
    return e[2].slice(1); // eliminate the first element (i.e., "args")
  } else {
    throw new Error("Interpreter error: "  +
    "The argument of getAppExpArgs is not an AppExp.");
  }
}

function createPrimAppExp(prim,args) {
  return ["PrimAppExp", prim, args];
}

function isPrimAppExp(e) {
  return e[0] === "PrimAppExp";
}

function getPrimAppExpPrim(e) {
  if (isPrimAppExp(e)) {
    return e[1];
  } else {
    throw new Error("Interpreter error: "  +
    "The argument of getPrimAppExpPrim is not a PrimAppExp.");
  }
}

function getPrimAppExpArgs(e) {
  if (isPrimAppExp(e)) {
    return e[2];
  } else {
    throw new Error("Interpreter error: "  +
    "The argument of getPrimAppExpArgs is not a PrimAppExp.");
  }
}

function createStringExp(s) {
  return ["StringExp", s.replace("\"", "").replace("\"", "")];
}

function isStringExp(s) {
  return s[0] === "StringExp";
}

function getStringExp(s) {
  if (isStringExp(s)) {
    return s[1];
  } else {
    throw new Error("Interpreter error: "  +
    "The argument of getStringExp is not a StringExp.");
  }
}

function createIfExp(n1, n2, e1, e2) {
  return ["IfExp", n1, n2, e1, e2];
}

function isIfExp(e) {
  return e[0] === "IfExp";
}

function getIfExpNum1(e) {
  if (isIfExp(e)) {
    return e[1];
  } else {
    throw new Error("Interpreter error: "  +
    "The argument of getIfExp is not an IfExp.");
  }
}

function getIfExpNum2(e) {
  if (isIfExp(e)) {
    return e[2];
  } else {
    throw new Error("Interpreter error: "  +
    "The argument of getIfExp is not an IfExp.");
  }
}

function getIfExpExp1(e) {
  if (isIfExp(e)) {
    return e[3];
  } else {
    throw new Error("Interpreter error: "  +
    "The argument of getIfExp is not an IfExp.");
  }
}

function getIfExpExp2(e) {
  if (isIfExp(e)) {
    return e[4];
  } else {
    throw new Error("Interpreter error: "  +
    "The argument of getIfExp is not an IfExp.");
  }
}

exports.createProgram = createProgram;
exports.isProgram = isProgram;
exports.getProgramExp = getProgramExp;
exports.createVarExp = createVarExp;
exports.isVarExp = isVarExp;
exports.getVarExpId = getVarExpId;
exports.createIntExp = createIntExp;
exports.isIntExp = isIntExp;
exports.getIntExpValue = getIntExpValue;
exports.createFnExp = createFnExp;
exports.isFnExp = isFnExp;
exports.getFnExpParams = getFnExpParams;
exports.getFnExpBody = getFnExpBody;
exports.createAppExp = createAppExp;
exports.isAppExp = isAppExp;
exports.getAppExpFn = getAppExpFn;
exports.getAppExpArgs = getAppExpArgs;
exports.createPrimAppExp = createPrimAppExp;
exports.isPrimAppExp = isPrimAppExp;
exports.getPrimAppExpPrim = getPrimAppExpPrim;
exports.getPrimAppExpArgs = getPrimAppExpArgs;
exports.createStringExp = createStringExp;
exports.isStringExp = isStringExp;
exports.getStringExp = getStringExp;
exports.createIfExp = createIfExp;
exports.isIfExp = isIfExp;
exports.getIfExpNum1 = getIfExpNum1;
exports.getIfExpNum2 = getIfExpNum2;
exports.getIfExpExp1 = getIfExpExp1;
exports.getIfExpExp2 = getIfExpExp2;

window.SLang.absyn = exports;
}());
