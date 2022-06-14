const palindromes = function (phrase) {
    const filtered = phrase.toLowerCase().replace(/[^a-z]/g, "");
    const comparison = filtered.split("");
    comparison.reverse();
    final = comparison.join("");
    return final == filtered;
};

// Do not edit below this line
module.exports = palindromes;
