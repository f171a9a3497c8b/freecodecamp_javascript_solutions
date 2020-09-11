#!usr/bin/node

'use strict';

/* eslint-env node, amd */
/* eslint no-console: "off" */


const {
    loadTestCases,
    formatString,
    printSummary
} = require('./test_utils.js');

const {
    add12Hours,
    equilibrium,
    farey,
    maximumSubsequence
} = require('./RosettaCode.js');


const {
    printCacheSize: printCollatzCacheSize,
    longestCollatzSequence
} = require('./ProjectEuler_collatz.js');


function testSolution(fn, description, singleValue) {
    'use strict';

    /*
     * Input:
     * fn -- reference to a function
     * description -- string, a brief description of the tested function
     * singleValue -- boolean, when set to true, the tested function is expected
     *                to return one primitive value, otherwise the tested function
     *                should return one array of primitives
     *
     * General test for a simple function that takes one argument
     * and returns either a single primitive value or an array of primitives.
     *
     * This function does not return any value.
     */

    console.log(`\nTesting '${fn.name}' function for correct output\n(${description})`);

    const testCases = loadTestCases(fn.name);

    let check;
    let errMsgTempl;

    if (singleValue) {
        check = (answer, output) => answer === output;
        errMsgTempl = '- test {} failed: expected {}, got {}';
    } else {
        check = (answer, output) => Array.isArray(output)
            && answer.length === output.length
            && answer.every((v, i) => v === output[i]);
        errMsgTempl = '- test {} failed: expected [{}], got [{}]';
    }

    let arg;
    let ans;
    let out;

    let pass = 0;
    let i = 0;
    let t = process.hrtime();

    for (i; i < testCases.length; i++) {

        [arg, ans] = testCases[i];
        out = fn(arg);

        if (check(ans, out)) {
            pass++;
        } else {
            console.warn(formatString(errMsgTempl, [i, ans, out]));
        }
    }

    t = process.hrtime(t);
    printSummary(pass, testCases.length, ...t);
}


function runTests() {
    'use strict';

    testSolution(add12Hours, 'Rosetta Code: Date manipulation problem', true);
    testSolution(equilibrium, 'Rosetta Code: Equilibrium index problem', false);
    testSolution(farey, 'Rosetta Code: Farey sequence problem', false);
    testSolution(maximumSubsequence, 'Rosetta Code: Greatest subsequential sum problem', false);
    testSolution(longestCollatzSequence, 'Project Euler: Problem 14 - Longest Collatz sequence', true);
    printCollatzCacheSize();
}


runTests();