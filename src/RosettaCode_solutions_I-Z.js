'use strict';

/*
 * ROSETTA CODE
 *
 * I before E except after C
 * https://learn.freecodecamp.org/coding-interview-prep/rosetta-code/i-before-e-except-after-c/
 *
 * IBAN
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/iban
 *
 * Identity matrix
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/identity-matrix
 *
 * Iterated digits squaring
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/iterated-digits-squaring
 *
 * Jaro distance
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/jaro-distance
 *
 * Josephus problem
 * https://learn.freecodecamp.org/coding-interview-prep/rosetta-code/josephus-problem/
 *
 * Largest int from concatenated ints
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/largest-int-from-concatenated-ints
 *
 * Last Friday of each month
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/last-friday-of-each-month
 *
 * Leap year
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/leap-year
 *
 * Left factorials
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/left-factorials
 *
 * Letter frequency
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/letter-frequency
 *
 * Levenshtein distance
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/levenshtein-distance
 *
 * Linear congruential generator
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/linear-congruential-generator
 *
 * Long multiplication
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/long-multiplication
 *
 * Longest common subsequence
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/longest-common-subsequence
 *
 * Longest string challenge
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/longest-string-challenge
 *
 * Look-and-say sequence
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/look-and-say-sequence
 *
 * Loop over multiple arrays simultaneously
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/loop-over-multiple-arrays-simultaneously
 *
 * Lucas-Lehmer test
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/lucas-lehmer-test
 *
 * Luhn test of credit card numbers
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/luhn-test-of-credit-card-numbers
 *
 * Lychrel numbers
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/lychrel-numbers
 *
 * Sailors, coconuts and a monkey problem
 * https://learn.freecodecamp.org/coding-interview-prep/rosetta-code/sailors-coconuts-and-a-monkey-problem/
 *
 * Search a list of records
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/search-a-list-of-records
 *
 * SEDOLs
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/sedols
 *
 * Self Describing Numbers
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/self-describing-numbers
 *
 * Sort an array of composite structures
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/sort-an-array-of-composite-structures
 *
 * Sort disjoint sublist
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/sort-disjoint-sublist
 *
 * Sort using a custom comparator
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/sort-using-a-custom-comparator
 *
 * Soundex
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/soundex
 *
 * Spiral matrix
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/spiral-matrix
 *
 * Split a character string based on change of character
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/split-a-character-string-based-on-change-of-character
 *
 * Stream Merge
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/stream-merge
 *
 * Strip control codes and extended characters from a string
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/strip-control-codes-and-extended-characters-from-a-string
 *
 * Subleq
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/subleq
 *
 * Sum of squares
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/sum-of-squares
 *
 * Symmetric difference
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/symmetric-difference
 *
 * Top rank per group
 * https://learn.freecodecamp.org/coding-interview-prep/rosetta-code/top-rank-per-group/
 *
 * Towers of Hanoi
 * https://learn.freecodecamp.org/coding-interview-prep/rosetta-code/towers-of-hanoi/
 *
 * Vector cross product
 * https://learn.freecodecamp.org/coding-interview-prep/rosetta-code/vector-cross-product/
 *
 * Vector dot product
 * https://learn.freecodecamp.org/coding-interview-prep/rosetta-code/vector-dot-product/
 *
 * Word frequency
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/word-frequency
 */


/* eslint key-spacing: ["error", { "align": "colon" }] */


// I before E except after C
/* exported IBeforeExceptC */
function IBeforeExceptC(word) {

    word = word.toLowerCase();

    // Check for rules violation
    const violatedRule1 = word.includes('cie'); // "I before E when not preceded by C"
    const violatedRule2 = (/[^c]ei/).test(word); // "E before I when preceded by C"

    return !(violatedRule1 || violatedRule2);
}


// IBAN
const IBAN_FORMATS = Object.freeze({
    AD: /^AD\d{2}\d{8}[a-zA-Z0-9]{12}$/, // Andorra
    AE: /^AE\d{2}\d{19}$/, // United Arab Emirates
    AL: /^AL\d{2}\d{8}[a-zA-Z0-9]{16}$/, // Albania
    AT: /^AT\d{2}\d{16}$/, // Austria
    AZ: /^AZ\d{2}[A-Z]{4}[a-zA-Z0-9]{20}$/, // Azerbaijan
    BA: /^BA\d{2}\d{16}$/, // Bosnia and Herzegovina
    BE: /^BE\d{2}\d{12}$/, // Belgium
    BG: /^BG\d{2}[A-Z]{4}\d{6}[a-zA-Z0-9]{8}$/, // Bulgaria
    BH: /^BH\d{2}[A-Z]{4}[a-zA-Z0-9]{14}$/, // Bahrain
    BR: /^BR\d{2}\d{23}[A-Z]{1}[a-zA-Z0-9]{1}$/, // Brazil
    BY: /^BY\d{2}[a-zA-Z0-9]{4}\d{4}[a-zA-Z0-9]{16}$/, // Republic of Belarus
    CH: /^CH\d{2}\d{5}[a-zA-Z0-9]{12}$/, // Switzerland
    CR: /^CR\d{2}\d{18}$/, // Costa Rica
    CY: /^CY\d{2}\d{8}[a-zA-Z0-9]{16}$/, // Cyprus
    CZ: /^CZ\d{2}\d{20}$/, // Czech Republic
    DE: /^DE\d{2}\d{18}$/, // Germany
    DK: /^DK\d{2}\d{14}$/, // Denmark
    DO: /^DO\d{2}[a-zA-Z0-9]{4}\d{20}$/, // Dominican Republic
    EE: /^EE\d{2}\d{16}$/, // Estonia
    ES: /^ES\d{2}\d{20}$/, // Spain
    FI: /^FI\d{2}\d{14}$/, // Finland
    FO: /^FO\d{2}\d{14}$/, // Faroe Islands
    FR: /^FR\d{2}\d{10}[a-zA-Z0-9]{11}\d{2}$/, // France
    GB: /^GB\d{2}[A-Z]{4}\d{14}$/, // United Kingdom
    GE: /^GE\d{2}[A-Z]{2}\d{16}$/, // Georgia
    GI: /^GI\d{2}[A-Z]{4}[a-zA-Z0-9]{15}$/, // Gibraltar
    GL: /^GL\d{2}\d{14}$/, // Greenland
    GR: /^GR\d{2}\d{7}[a-zA-Z0-9]{16}$/, // Greece
    GT: /^GT\d{2}[a-zA-Z0-9]{24}$/, // Guatemala
    HR: /^HR\d{2}\d{17}$/, // Croatia
    HU: /^HU\d{2}\d{24}$/, // Hungary
    IE: /^IE\d{2}[A-Z]{4}\d{14}$/, // Ireland
    IL: /^IL\d{2}\d{19}$/, // Israel
    IQ: /^IQ\d{2}[A-Z]{4}\d{15}$/, // Iraq
    IS: /^IS\d{2}\d{22}$/, // Iceland
    IT: /^IT\d{2}[A-Z]{1}\d{10}[a-zA-Z0-9]{12}$/, // Italy
    JO: /^JO\d{2}[A-Z]{4}\d{4}[a-zA-Z0-9]{18}$/, // Jordan
    KW: /^KW\d{2}[A-Z]{4}[a-zA-Z0-9]{22}$/, // Kuwait
    KZ: /^KZ\d{2}\d{3}[a-zA-Z0-9]{13}$/, // Kazakhstan
    LB: /^LB\d{2}\d{4}[a-zA-Z0-9]{20}$/, // Lebanon
    LC: /^LC\d{2}[A-Z]{4}[a-zA-Z0-9]{24}$/, // Saint Lucia
    LI: /^LI\d{2}\d{5}[a-zA-Z0-9]{12}$/, // Liechtenstein
    LT: /^LT\d{2}\d{16}$/, // Lithuania
    LU: /^LU\d{2}\d{3}[a-zA-Z0-9]{13}$/, // Luxembourg
    LV: /^LV\d{2}[A-Z]{4}[a-zA-Z0-9]{13}$/, // Latvia
    MC: /^MC\d{2}\d{10}[a-zA-Z0-9]{11}\d{2}$/, // Monaco
    MD: /^MD\d{2}[a-zA-Z0-9]{20}$/, // Moldova
    ME: /^ME\d{2}\d{18}$/, // Montenegro
    MK: /^MK\d{2}\d{3}[a-zA-Z0-9]{10}\d{2}$/, // Macedonia
    MR: /^MR\d{2}\d{23}$/, // Mauritania
    MT: /^MT\d{2}[A-Z]{4}\d{5}[a-zA-Z0-9]{18}$/, // Malta
    MU: /^MU\d{2}[A-Z]{4}\d{19}[A-Z]{3}$/, // Mauritius
    NL: /^NL\d{2}[A-Z]{4}\d{10}$/, // Netherlands
    NO: /^NO\d{2}\d{11}$/, // Norway
    PK: /^PK\d{2}[A-Z]{4}[a-zA-Z0-9]{16}$/, // Pakistan
    PL: /^PL\d{2}\d{24}$/, // Poland
    PS: /^PS\d{2}[A-Z]{4}[a-zA-Z0-9]{21}$/, // Palestine
    PT: /^PT\d{2}\d{21}$/, // Portugal
    QA: /^QA\d{2}[A-Z]{4}[a-zA-Z0-9]{21}$/, // Qatar
    RO: /^RO\d{2}[A-Z]{4}[a-zA-Z0-9]{16}$/, // Romania
    RS: /^RS\d{2}\d{18}$/, // Serbia
    SA: /^SA\d{2}\d{2}[a-zA-Z0-9]{18}$/, // Saudi Arabia
    SC: /^SC\d{2}[A-Z]{4}\d{20}[A-Z]{3}$/, // Seychelles
    SE: /^SE\d{2}\d{20}$/, // Sweden
    SI: /^SI\d{2}\d{15}$/, // Slovenia
    SK: /^SK\d{2}\d{20}$/, // Slovakia
    SM: /^SM\d{2}[A-Z]{1}\d{10}[a-zA-Z0-9]{12}$/, // San Marino
    ST: /^ST\d{2}\d{21}$/, // Sao Tome and Principe
    SV: /^SV\d{2}[A-Z]{4}\d{20}$/, // El Salvador
    TL: /^TL\d{2}\d{19}$/, // Timor-Leste
    TN: /^TN\d{2}\d{20}$/, // Tunisia
    TR: /^TR\d{2}\d{6}[a-zA-Z0-9]{16}$/, // Turkey
    UA: /^UA\d{2}\d{6}[a-zA-Z0-9]{19}$/, // Ukraine
    VA: /^VA\d{2}\d{18}$/, // Vatican City State
    VG: /^VG\d{2}[A-Z]{4}\d{16}$/, // Virgin Islands
    XK: /^XK\d{2}\d{16}$/ // Kosovo
});


const IBAN_SUBSTITUTION_TABLE = Object.freeze({
    A: '10',
    B: '11',
    C: '12',
    D: '13',
    E: '14',
    F: '15',
    G: '16',
    H: '17',
    I: '18',
    J: '19',
    K: '20',
    L: '21',
    M: '22',
    N: '23',
    O: '24',
    P: '25',
    Q: '26',
    R: '27',
    S: '28',
    T: '29',
    U: '30',
    V: '31',
    W: '32',
    X: '33',
    Y: '34',
    Z: '35'
});


function modulo97(numStr) {

    /*
     * Input:
     * numStr -- numeric string, very big positive integer
     *
     * Based on: https://en.wikipedia.org/wiki/International_Bank_Account_Number#Structure#Modulo_operation_on_IBAN
     *
     * Returns an integer, the remainder after division of the given number by 97.
     */

    const len = numStr.length;

    let i = 9;
    let n = parseInt(numStr.slice(0, i));

    for (i; i < len; i += 7) {
        n = parseInt(`${n % 97}${numStr.slice(i, i + 7)}`);
    }

    return n % 97;
}


/* exported isValid */
function isValid(iban) {

    iban = iban.replace(/\s/g, ''); // remove all whitespace characters

    const countryCode = iban.slice(0, 2);

    if (!IBAN_FORMATS.hasOwnProperty(countryCode)) return false;
    if (!IBAN_FORMATS[countryCode].test(iban)) return false;

    iban = iban.toUpperCase();
    iban = `${iban.slice(4)}${iban.slice(0, 4)}`;
    iban = iban.split('')
        .map((char) => IBAN_SUBSTITUTION_TABLE[char] || char)
        .join('');

    return modulo97(iban) === 1;
}


// Identity matrix
/* exported idMatrix */
function idMatrix(n) {

    const m = n;
    const matrix = [];
    const row = new Array(m);

    row.fill(0);
    Object.freeze(row);
    Object.seal(row);

    for (n = 0; n < m; ++n) {
        matrix.push([...row]);
        matrix[n][n] = 1;
    }

    return matrix;
}


// Iterated digits squaring
/* exported iteratedSquare */
function iteratedSquare(n) {

    let sumSquaredDigits;

    while (n !== 1 && n !== 89) {
        sumSquaredDigits = 0;
        while (n > 0) {
            sumSquaredDigits += (n % 10) ** 2;
            n = (n / 10) >> 0;
        }
        n = sumSquaredDigits;
    }

    return n;
}


// Jaro distance
/* exported jaro */
function jaro(str1, str2) {

    // Rewritten from Python solution: https://rosettacode.org/wiki/Jaro_distance#Procedural

    if (str1 === str2) return 1;

    const maxMatchingDist = Math.floor(Math.max(str1.length, str2.length) / 2) - 1;
    const matchingFlagsStr1 = new Int8Array(str1.length);
    const matchingFlagsStr2 = new Int8Array(str2.length);

    matchingFlagsStr1.fill(0);
    matchingFlagsStr2.fill(0);

    let m = 0; // number of matching characters
    let i = 0;
    let j; // index of a character in the second string
    let t;

    for (i; i < str1.length; ++i) {

        // Lower and upper index bounds for a character in the second string defining a matching range
        j = Math.max(0, i - maxMatchingDist);
        t = Math.min(i + maxMatchingDist, str2.length);

        for (j; j <= t; ++j) {
            if (str1[i] !== str2[j] || matchingFlagsStr2[j] === 1) continue;
            matchingFlagsStr1[i] = 1;
            matchingFlagsStr2[j] = 1;
            ++m;
            break;
        }
    }

    if (m === 0) return 0;

    j = 0;
    t = 0; // number of transpositions

    for (i = 0; i < str1.length; ++i) {
        if (matchingFlagsStr1[i] === 0) continue; // go to matching character in string 1
        while (matchingFlagsStr2[j] === 0) ++j; // go to matching character in string 2
        if (str1[i] !== str2[j++]) ++t;
    }

    return (m / str1.length + m / str2.length + (m - t / 2) / m) / 3;
}


// Josephus problem
/* exported josephus */
function josephus(init, kill) {
    // Based on: https://en.wikipedia.org/wiki/Josephus_problem#The_general_case
    // For the positions numbered from 1 to n
    if (init === 1) return 1;
    return ((josephus(init - 1, kill) + kill - 1) % init) + 1;
}


// Largest int from concatenated ints
/* exported maxCombine */
function maxCombine(xs) {
    // Sort concatenated numbers in descending order
    const arr = xs.sort((a, b) => parseInt(`${b}${a}`) - parseInt(`${a}${b}`));
    return parseInt(arr.join(''));
}


// Last Friday of each month
/* exported lastFriday */
function lastFriday(year, month) {

    // Last day of the given month
    const d = new Date(year, month, 0);
    const lastDay = d.getDate();

    switch (d.getDay()) {
    case 0: return lastDay - 2; // Sunday
    case 1: return lastDay - 3; // Monday
    case 2: return lastDay - 4; // Tuesday
    case 3: return lastDay - 5; // Wednesday
    case 4: return lastDay - 6; // Thursday
    case 6: return lastDay - 1; // Saturday
    default: return lastDay; // Friday
    }
}


// Leap year
/* exported isLeapYear */
function isLeapYear(year) {
    // It is not valid before start of the Gregorian callendar (1582)
    return (year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0));
}


// Left factorials
/* exported leftFactorial */
function leftFactorial(n) {

    // https://oeis.org/A003422
    if (n === 0) return 0;

    const lim = n;
    let factorial = 1;
    let sum = 1; // because 0! is 1

    for (n = 1; n < lim; ++n) {
        factorial *= n;
        sum += factorial;
    }

    return sum;
}


// Letter frequency
/* exported letterFrequency */
function letterFrequency(txt) {

    const freqTab = {};

    for (const char of txt) {
        freqTab[char] = (freqTab[char] || 0) + 1;
    }

    // eslint-disable-next-line no-confusing-arrow
    return Object.entries(freqTab).sort((a, b) => a < b ? -1 : 1);
}


// Levenshtein distance
/* exported levenshtein */
function levenshtein(xWord, yWord) {

    // Based on:
    // https://www.baeldung.com/cs/levenshtein-distance-computation#4-iterative-with-one-row
    // https://en.wikipedia.org/wiki/Levenshtein_distance#Iterative_with_two_matrix_rows

    xWord = xWord.toLowerCase();
    yWord = yWord.toLowerCase();

    if (xWord === yWord) return 0;

    const deletionCost = 1; // cost of deleting one char from xWord
    const insertionCost = 1; // cost of inserting one char into xWord
    const substitutionCost = 1; // cost of replacing one char in xWord with one char from yWord
    const n = xWord.length; // number of columns
    const m = yWord.length; // number of rows

    if (!n) return m * insertionCost;
    if (!m) return n * deletionCost;

    // Auxiliary vector with (partial) edit distances, initialized with costs of deleting
    // characters from substrings of xWord with length i to get empty string
    const row = new Uint8Array(n + 1).map((_, i) => i * deletionCost);

    let i = 0; // position of a char in xWord (column index)
    let j; // position of a char in yWord (row index)
    let above;
    let diagonal;

    for (j = 0; j < m; ++j) {

        // Add character(s) to empty string to get substring of length j
        row[0] = j * insertionCost;

        above = row[0];
        for (i = 0; i < n; ++i) {
            diagonal = above;
            above = row[i + 1];
            row[i + 1] = Math.min(
                above + deletionCost,
                row[i] + insertionCost,
                diagonal + (xWord[i] === yWord[j] ? 0 : substitutionCost)
            );
        }
    }

    return row[n];
}


// Linear congruential generator
/* exported linearCongGenerator */
function linearCongGenerator(r, a, c, m, n) {

    for (n; n > 0; --n) {
        r = (a * r + c) % m;
    }

    return r;
}


// Long multiplication
/* exported mult */
function mult(strNum1, strNum2) {
    return (BigInt(strNum1) * BigInt(strNum2)).toString();
}


// Longest common subsequence
function lcsBuildTable(a, b) {

    // Based on:
    // -- https://en.wikipedia.org/wiki/Longest_common_subsequence_problem#Code_for_the_dynamic_programming_solution
    // -- https://dyclassroom.com/dynamic-programming/longest-common-subsequence
    // Main difference is the lack of first row and first column with only 0 values.

    const aLen = a.length; // number of rows
    const bLen = b.length; // number of columns
    const table = [];
    let i; // row index and/or character position in a
    let j; // column index and/or character position in b

    for (i = aLen; i > 0; --i) {
        table.push(new Uint8Array(bLen)); // content of typed array is initialized to 0
    }

    // Populate the first row
    if (a[0] === b[0]) {
        table[0].fill(1);
    } else {
        for (j = 1; j < bLen; ++j) {
            table[0][j] = a[0] === b[j] ? 1 : table[0][j - 1];
        }
    }

    for (i = 1; i < aLen; ++i) {
        table[i][0] = a[i] === b[0] ? 1 : table[i - 1][0]; // populate first column in current row
        for (j = 1; j < bLen; ++j) {
            // eslint-disable-next-line max-len
            table[i][j] = a[i] === b[j] ? table[i - 1][j - 1] + 1 : Math.max(table[i][j - 1], table[i - 1][j]);
        }
    }

    return table;
}


function lcsBacktrackTable(table, a, b) {

    // Based on: https://dyclassroom.com/dynamic-programming/longest-common-subsequence
    // Main difference is the lack of first row and first column with only 0 values.

    let i = a.length - 1; // position of character in a (row index)
    let j = b.length - 1; // position of character in b (column index)
    const lcsCharList = Array(table[i][j]);
    let lcsPosition = lcsCharList.length - 1;

    while (i > 0 && j > 0 && lcsPosition >= 0) {
        if (a[i] === b[j]) {
            lcsCharList[lcsPosition] = a[i];
            --lcsPosition;
            --i;
            --j;
        } else if (table[i - 1][j] > table[i][j - 1]) {
            --i;
        } else {
            --j;
        }
    }

    // One character can still be missing in the longest common subsequence character list:
    // -- the first character from string a if the loop stops at the first row (index i is 0)
    // -- the first character from string b if the loop stops at the first column (index j is 0)
    if (lcsPosition === 0) {
        lcsCharList[0] = i === 0 ? a[0] : b[0];
    }

    return lcsCharList.join('');
}


/* exported lcs */
function lcs(a, b) {
    if (a.length > b.length) {
        [a, b] = [b, a];
    }
    // String comparison is case sensitive
    const table = lcsBuildTable(a, b);
    return lcsBacktrackTable(table, a, b);
}


// Longest string challenge
/* exported longestString */
function longestString(strings) {
    const longestStringLength = Math.max(...strings.map((str) => str.length));
    return strings.filter((str) => str.length === longestStringLength);
}


// Look-and-say sequence
/* exported lookAndSay */
function lookAndSay(str) {

    // Input str must be a nonempty string.

    const groups = [];
    let char = str[0];
    let count = 1;

    str = str.slice(1);

    for (const c of str) {
        if (c === char) {
            ++count;
        } else {
            groups.push(`${count}${char}`);
            char = c;
            count = 1;
        }
    }

    groups.push(`${count}${char}`);

    return groups.join('');
}


// Loop over multiple arrays simultaneously
/* exported loopSimult */
function loopSimult(arr) {

    // Input arr must be a nonempty nested array.
    // All subarrays must have the same length.

    const result = [];
    const rowLength = arr[0].length; // number of columns
    let i = 0; // column index
    const select = (row) => row[i];

    for (i; i < rowLength; ++i) {
        result.push(arr.map(select).join('')); // concatenate column array
    }

    return result;
}


// Lucas-Lehmer test
function isPrime(n) {

    /*
     * Input n must be a positive integer number.
     * Return true if the given number is prime, false otherwise.
     */

    if (n <= 3) return n > 1;
    if (!(n & 1)) return false; // if n is even

    const lim = Math.floor(Math.sqrt(n)) + 1;
    const num = n;

    for (n = 3; n < lim; n += 2) {
        if (!(num % n)) return false;
    }

    return true;
}


/* exported lucasLehmer */
function lucasLehmer(p) {

    /*
     * Input p must be an integer number.
     * Return true if the given Mersenne number is prime, false otherwise.
     */

    if (p === 2) return true;
    if (!isPrime(p)) return false;

    const one = BigInt(1);
    const two = BigInt(2);
    const q = BigInt(p);
    const m = (one << q) - one; // (2 ** p - 1)
    let s = BigInt(4);

    /*
     * Based on:
     * https://en.wikipedia.org/wiki/Lucas-Lehmer_primality_test#Time_complexity
     *
     * In each of p - 2 iterations calculate (s * s - 2) % m
     *
     * Use bitwise operations to compute modulus of (nonnegative) s:
     * -- s & m  is equivalent to s % (2 ** p)
     * -- s >> q is equivalent to Math.floor(s / (2 ** p))
     *
     */

    for (p -= 2; p > 0; --p) {
        s = s * s - two;
        s = (s & m) + (s >> q);
        if (s >= m) {
            s -= m;
        }
    }

    return !s;
}


// Luhn test of credit card numbers
/* exported luhnTest */
function luhnTest(str) {

    // Input str must be a nonempty numeric string.

    const sum = (total, num) => total + num;
    const digits = Uint8Array.from(str.split('').reverse());

    // Partial sum of the odd digits (adjusted to 0-based array indexing)
    const s1 = digits.filter((_, i) => !(i & 1))
        .reduce(sum, 0);

    const s2 = digits.filter((_, i) => i & 1)
        .map((num) => num < 5 ? num * 2 : (num - 5) * 2 + 1) // eslint-disable-line no-confusing-arrow
        .reduce(sum, 0);

    return !((s1 + s2) % 10);
}


// Lychrel numbers
function reverse(n) {

    /*
     * Inputs:
     * n -- positive BigInt number
     *
     * Return a BigInt number with digits in reversed order from the given number.
     *
     * Based on:
     * https://www.mathblog.dk/project-euler-36-palindromic-base-10-2/
     */

    const zero = BigInt(0);
    const base = BigInt(10); // radix of a number system
    let num = BigInt(n);
    let reversed = zero;

    while (num > zero) {
        reversed = reversed * base + (num % base);
        num = (num / base) >> zero;
    }

    return reversed;
}


/* exported isLychrel */
function isLychrel(n) {

    let num = BigInt(n);
    let rev = reverse(num);

    for (n = 500; n > 0; --n) {
        num += rev;
        rev = reverse(num);
        if (num === rev) return false;
    }

    return true;
}


// Sailors, coconuts and a monkey problem
/* exported splitCoconuts */
function splitCoconuts(n) {
    // This equations are from: http://oeis.org/A002021
    return n & 1 ? (n ** n) - n + 1 : (n - 1) * ((n ** n) - 1);
}


// Search a list of records
/* exported searchCity */
function searchCity(name) {
    /* global list */
    return list.findIndex((entity) => entity.name === name);
}


// SEDOLs
/* exported sedol */
function sedol(input) {

    if (input.length !== 6) return null;

    const values = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        B: 11,
        C: 12,
        D: 13,
        F: 15,
        G: 16,
        H: 17,
        J: 19,
        K: 20,
        L: 21,
        M: 22,
        N: 23,
        P: 25,
        Q: 26,
        R: 27,
        S: 28,
        T: 29,
        V: 31,
        W: 32,
        X: 33,
        Y: 34,
        Z: 35,
    };

    for (const char of input) {
        if (!values.hasOwnProperty(char)) return null;
    }

    const weights = [1, 3, 1, 7, 3, 9];
    let checksum = 0;
    let i = 0;

    for (i; i < 6; ++i) {
        checksum += weights[i] * values[input[i]];
    }

    checksum = (10 - (checksum % 10)) % 10;
    return `${input}${checksum}`;
}


// Self Describing Numbers
/* exported isSelfDescribing */
function isSelfDescribing(num) {

    const numstr = `${num}`;
    let position = numstr.length - 1;
    let counter;
    let value;

    for (position; position >= 0; --position) {
        counter = numstr.split(`${position}`).length - 1; // nonoverlapping occurrences
        value = parseInt(numstr[position]);
        if (counter !== value) return false;
    }

    return true;
}


// Sort an array of composite structures
/* exported sortByKey */
function sortByKey(arr) {
    return arr.sort((a, b) => a.key - b.key);
}


// Sort disjoint sublist
/* exported sortDisjoint */
function sortDisjoint(values, indices) {

    const subArr = [];
    const n = indices.length;
    const sortAscending = (a, b) => a - b;

    let i;

    for (i of indices) {
        subArr.push(values[i]);
    }

    subArr.sort(sortAscending);
    indices.sort(sortAscending);

    for (i = 0; i < n; ++i) {
        values[indices[i]] = subArr[i];
    }

    return values;
}


// Sort using a custom comparator
/* exported lengthSorter */
function lengthSorter(arr) {
    return arr.sort((a, b) => {
        if (a.length !== b.length) return b.length - a.length;
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
}


// Soundex
/* exported soundex */
function soundex(word) {

    const firstLetter = word[0].toUpperCase();
    const specialConsonantsGroupId = 0;
    const charsToDiscardGroupId = -1;

    const groupsTable = {
        h: specialConsonantsGroupId,
        w: specialConsonantsGroupId,
        a: charsToDiscardGroupId,
        e: charsToDiscardGroupId,
        i: charsToDiscardGroupId,
        o: charsToDiscardGroupId,
        u: charsToDiscardGroupId,
        y: charsToDiscardGroupId,
        b: 1,
        f: 1,
        p: 1,
        v: 1,
        c: 2,
        g: 2,
        j: 2,
        k: 2,
        q: 2,
        s: 2,
        x: 2,
        z: 2,
        d: 3,
        t: 3,
        l: 4,
        m: 5,
        n: 5,
        r: 6,
    };

    const threeDigits = Int8Array.from(word.toLowerCase(), (char) => groupsTable[char])
        .filter((num) => num !== specialConsonantsGroupId)
        .map((num, i, arr) => arr[i > 0 ? i - 1 : 0] === num ? charsToDiscardGroupId : num) // eslint-disable-line no-confusing-arrow
        .filter((num) => num !== charsToDiscardGroupId)
        .slice(0, 3)
        .join('')
        .padEnd(3, '0');

    return `${firstLetter}${threeDigits}`;
}


// Spiral matrix
/* exported spiralArray */
function spiralArray(num) {

    const lim = num * num;
    const matrix = new Array(num);

    let row = 0;
    let col = 0;
    let minRow = 0;
    let maxRow = num - 1;
    let minCol = 0;
    let maxCol = num - 1;
    let direction = 0;

    for (num = 0; num < matrix.length; ++num) {
        matrix[num] = new Array(matrix.length);
    }

    for (num = 0; num < lim; ++num) {

        matrix[row][col] = num;

        switch (direction) {

        // To right
        case 0:
            if (col < maxCol) {
                ++col;
            } else {
                ++row;
                ++minRow;
                direction = 1;
            }
            break;

        // To bottom
        case 1:
            if (row < maxRow) {
                ++row;
            } else {
                --col;
                --maxCol;
                direction = 2;
            }
            break;

        // To left
        case 2:
            if (col > minCol) {
                --col;
            } else {
                --row;
                --maxRow;
                direction = 3;
            }
            break;

        // To top
        default:
            if (row > minRow) {
                --row;
            } else {
                ++col;
                ++minCol;
                direction = 0;
            }
        }

    }

    return matrix;
}


// Split a character string based on change of character
/* exported split */
function split(str) {

    const groups = [];
    let char = str[0];
    let size = 1;

    str = str.slice(1);

    for (const c of str) {
        if (char === c) {
            ++size;
        } else {
            groups.push(char.repeat(size));
            char = c;
            size = 1;
        }
    }

    groups.push(char.repeat(size));

    return groups;
}


// Stream Merge
function insert(sortedNestedArray, newItem) {

    /*
     * Inputs:
     *
     * sortedNestedArray
     * -- nested array of numbers
     * -- must be sorted in ascending order according to the first element in subarray
     * -- subarrays cannot be empty
     *
     * newItem -- nonempty array of numbers
     *
     *
     * Add new subarray to the nested array at the position that will preserve sorting order.
     *
     *
     * Based on:
     * https://en.wikipedia.org/wiki/Binary_search_algorithm#Procedure_for_finding_the_leftmost_element
     */

    const newItemComparisonKey = newItem[0];
    let left = 0;
    let right = sortedNestedArray.length - 1;

    if (right < 0 || sortedNestedArray[right][0] < newItemComparisonKey) {
        sortedNestedArray.push(newItem);
        return;
    }

    if (sortedNestedArray[left][0] >= newItemComparisonKey) {
        sortedNestedArray.unshift(newItem);
        return;
    }

    let middle;

    while (left < right) {
        middle = (left + right) >>> 1;
        if (sortedNestedArray[middle][0] < newItemComparisonKey) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }

    sortedNestedArray.splice(left, 0, newItem);
}


/* exported mergeLists */
function mergeLists(sortedArrays) {

    // Filter out empty array(s)
    sortedArrays = sortedArrays.filter((arr) => arr.length);

    // Populate merged array from highest to lowest values (from right to left)
    // without changing original subarrays.

    // Array of arrays of integers that holds (at most) one value-origin pair from each
    // input subarray sorted in ascending order by values. Along with insert function,
    // this provides functionality similar to maximum priority queue.
    const maxPriorityArray = sortedArrays
        .map((arr, id) => [arr[arr.length - 1], id])
        .sort((a, b) => a[0] - b[0]);

    // Keep track of index of value from each subarray that is stored in maxPriorityArray
    const indexes = new Int16Array(sortedArrays.map((arr) => arr.length - 1));

    const merged = new Array(sortedArrays.reduce((total, arr) => total + arr.length, 0));

    let i = merged.length - 1; // index at which new value is inserted to the merged array
    let value;
    let origin; // index of a subarray that contributes the value
    let anotherValueIndex;

    for (i; i >= 0; --i) {
        [value, origin] = maxPriorityArray.pop();
        merged[i] = value;
        anotherValueIndex = --indexes[origin];
        if (anotherValueIndex >= 0) {
            insert(maxPriorityArray, [sortedArrays[origin][anotherValueIndex], origin]);
        }
    }

    return merged;
}


// Strip control codes and extended characters from a string
/* exported strip */
function strip(str) {
    return str.split('')
        .filter((char) => {
            const num = char.charCodeAt(0);
            return num > 31 && num < 127;
        })
        .join('');
}


// Subleq
/* exported Subleq */
function Subleq(init) {

    const input = 'Hello, world!\n\0'.split('').reverse(); // mock standard input (stdin)
    const output = [];
    const mem = new Map();

    init.forEach((val, addr) => {
        mem.set(addr, val);
    });

    let pos = 0; // instruction pointer
    let a;
    let b;

    while (pos >= 0) {

        a = mem.get(pos);
        b = mem.get(pos + 1);

        if (a < 0) {
            mem.set(b, input.pop().charCodeAt(0));
        } else if (b < 0) {
            output.push(mem.get(a));
        } else {
            mem.set(b, mem.get(b) - mem.get(a));
            if (mem.get(b) <= 0) {
                pos = mem.get(pos + 2);
                continue;
            }
        }

        pos += 3;
    }

    return String.fromCharCode(...output);
}


// Sum of squares
/* exported sumsq */
function sumsq(arr) {
    return arr.reduce((sum, num) => sum + num ** 2, 0);
}


// Symmetric difference
/* exported symmetricDifference */
function symmetricDifference(arrA, arrB) {

    // Based on:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#Implementing_basic_set_operations

    const diff = new Set(arrA);
    const setB = new Set(arrB);

    for (const elem of setB) {
        if (diff.has(elem)) {
            diff.delete(elem);
        } else {
            diff.add(elem);
        }
    }

    return [...diff].sort();
}


// Top rank per group
/* exported topRankPerGroup */
function topRankPerGroup(n, data, groupby, rankby) {

    if (n < 0) {
        return undefined;
    }

    const uniqueGroups = new Set(data.map((item) => item[groupby]));
    const arrangeDesc = (a, b) => b[rankby] - a[rankby];
    const processedData = [];

    if (uniqueGroups.size === 1) {
        data = [...data]; // create a shallow copy, do not change the original array
        data = data.sort(arrangeDesc).slice(0, n);
        processedData.push(data);
        return processedData;
    }

    const sortedGroups = [...uniqueGroups].sort();
    let group;
    let items;
    const selectGroup = (item) => item[groupby] === group;

    for (group of sortedGroups) {
        items = data.filter(selectGroup).sort(arrangeDesc).slice(0, n);
        processedData.push(items);
    }

    return processedData;
}


// Towers of Hanoi
/* exported towerOfHanoi */
function towerOfHanoi(num, source, target, auxiliary) {

    const moves = [];

    // This algorithm is from: https://en.wikipedia.org/wiki/Tower_of_Hanoi#Recursive_implementation
    const makeMove = (n, a, b, c) => {
        if (n > 0) {
            makeMove(n - 1, a, c, b);
            moves.push([a, b]);
            makeMove(n - 1, c, b, a);
        }
    };

    makeMove(num, source, target, auxiliary);

    return moves;
}


// Vector cross product
/* exported crossProduct */
function crossProduct() {

    if (arguments.length !== 2) {
        return null;
    }

    const [v, w] = arguments;

    if (v.length !== 3 || w.length !== 3) {
        return null;
    }

    const [vx, vy, vz] = v;
    const [wx, wy, wz] = w;

    return [
        vy * wz - vz * wy,
        vz * wx - vx * wz,
        vx * wy - vy * wx
    ];
}


// Vector dot product
/* exported dotProduct */
function dotProduct() {

    let vectors;

    if (arguments.length === 1) {
        vectors = [...arguments[0]];
    } else if (arguments.length > 1) {
        vectors = [...arguments];
    } else {
        return null;
    }

    if (vectors.length < 2) {
        return null;
    }

    const n = vectors[0].length;

    if (n === 0 || vectors.some((vec) => vec.length !== n)) {
        return null;
    }

    let i = 0;
    let dot = 0;

    const mul = (prod, vec) => prod * vec[i];

    for (i; i < n; i++) {
        dot += vectors.reduce(mul, 1);
    }

    return dot;
}


// Word frequency
/* exported wordFrequency */
function wordFrequency(txt, n) {
    txt = txt.trim().toLowerCase();
    if (!txt.length) return [];
    const frequencyTable = {};
    for (const word of txt.split(' ')) {
        frequencyTable[word] = (frequencyTable[word] || 0) + 1;
    }
    return Object.entries(frequencyTable)
        .sort(([, a], [, b]) => b - a) // sort in descending order by the number of occurrences
        .slice(0, n);
}
