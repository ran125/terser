octal_escape_sequence: {
    input: {
        var boundaries = "\0\7\00\07\70\77\000\077\300\377";
        var border_check = "\400\700\0000\3000";
    }
    expect: {
        var boundaries = "\x00\x07\x00\x07\x38\x3f\x00\x3f\xc0\xff";
        var border_check = "\x20\x30\x38\x30\x00\x30\xc0\x30";
    }
}

issue_1929: {
    input: {
        function f(s) {
            return s.split(/[\\/]/);
        }
        var r = f("A/B\\C\\D/E\\F");
        console.log(r.length, r[5], r[4], r[3], r[2], r[1], r[0]);
    }
    expect: {
        function f(s) {
            return s.split(/[\\/]/);
        }
        var r = f("A/B\\C\\D/E\\F");
        console.log(r.length, r[5], r[4], r[3], r[2], r[1], r[0]);
    }
    expect_stdout: "6 'F' 'E' 'D' 'C' 'B' 'A'"
}
