function sing(number) {
    let lyric = "";
    if (number == 2) {
        lyric = `${number} lines of code in the file, ${number} lines of code; John strikes one out, clears it all out, ${number - 1} line of code in the file`;
    } else if (number == 1) {
        lyric = `${number} line of code in the file, ${number} line of code; John strikes one out, clears it all out, no more lines of code in the file`;
    } else {
        lyric = `${number} lines of code in the file, ${number} lines of code; John strikes one out, clears it all out, ${number - 1} lines of code in the file`;
    }
    console.log(lyric);
};
for (let index = 99; index > 0; index--) {
    //console.log("current value is ...", index);
    sing(index);
};
