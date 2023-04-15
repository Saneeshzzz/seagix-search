# SeaGiX Search [![Standard version](https://badge.fury.io/gh/conventional-changelog%2Fstandard-version.svg)](https://github.com/saneeshzzz/seagix-search/standard-version)

SeaGiX simple open-sourced search engine.


    <script src="https://cdn.jsdelivr.net/gh/saneeshzzz/seagix-search@v1.0/search.js"></script>

Developed by Saneesh Oinam.
# Syntax

    const sgx = new SeaGiX();
    const dataset = [{
        key: "... some text",
        keywords: "... some text",
        ...
        }, ...];
    let result = sgx.linearSearch(dataset, "... some text", "key.keywords.@object_keys", /* minimum search match; value between 0 - 1 */ );
    console.log(result);

# Status
Still under development.
Readme.md file also to be updated


