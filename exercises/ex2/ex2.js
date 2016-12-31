function foo(keeper, ignore1, ignore2, ...args) {
    //we insert the 0th index and skip the 1th and 2th index as per the requirement sand spread the rest into an array.
    return [keeper, ...args];
}

function bar() {
    var a1 = [2, 4];
    var a2 = [6, 8, 10, 12];
    // by using spread, each value is passed in as it's own thing
    return foo(...a1, ...a2);
}

console.log(
    bar().join("") === "281012"
);
