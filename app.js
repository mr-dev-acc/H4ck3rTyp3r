// $ INP=TestString OP=e F=1 node app.js
// $ INP=TestString OP=e F=1 nodemon app.js

inp = process.env.INP || 'TestString'; // input string
op = process.env.OP || 'e';            // 'e': encode | 'd': decode
f = process.env.F || '1';              // '1': func 1 | '2': func 2

function encoder1(char) {
    switch(char) {
        case 'a':
        case 'A':
            return '4';
        case 'e':
        case 'E':
            return '3';
        case 'i':
        case 'I':
            return '1';
        case 'o':
        case 'O':
            return '0';
        default:
            return char;
    }
};

function decoder1(char) {
    switch(char) {
        case '4':
            return 'a';
        case '3':
            return 'e';
        case '1':
            return 'i';
        case '0':
            return 'o';
        default:
            return char;
    }
};

function encoder2(char) {
    switch(char) {
        case 'a':
        case 'A':
            return '4';
        case 'b':
        case 'B':
            return '8';
        case 'e':
        case 'E':
            return '3';
        case 'g':
        case 'G':
            return '6';
        case 'i':
        case 'I':
            return '1';
        case 'l':
        case 'L':
            return '7';
        case 'o':
        case 'O':
            return '0';
        case 'p':
        case 'P':
            return '9';
        case 's':
        case 'S':
            return '5';
        case 'z':
        case 'Z':
            return '2';
        default:
            return char;
    }
};

function decoder2(char) {
    switch(char) {
        case '4':
            return 'a';
        case '8':
            return 'b';
        case '3':
            return 'e';
        case '6':
            return 'g';
        case '1':
            return 'i';
        case '7':
            return 'l';
        case '0':
            return 'o';
        case '9':
            return 'p';
        case '5':
            return 's';
        case '2':
            return 'z';
        default:
            return char;
    }
};

function main(inp, op, f) {
    let out = 'OUT: ';
    if(f == '1') {
        console.log('Code: { A4-E3-I1-O0 }');
        if(op == 'e') {
            for(i=0 ; i<inp.length ; i++)
                out += encoder1(inp[i]);
        } else if(op == 'd') {
            for(i=0 ; i<inp.length ; i++)
                out += decoder1(inp[i]);
        } else {
            console.log(`Error: OP=${op}, F=${f}`);
        }
    } else if(f == '2') {
        console.log('Code: { A4-B8-E3-G6-I1-L7-O0-P9-S5-Z2 }');
        if(op == 'e') {
            for(i=0 ; i<inp.length ; i++)
                out += encoder2(inp[i]);
        } else if(op == 'd') {
            for(i=0 ; i<inp.length ; i++)
                out += decoder2(inp[i]);
        } else {
            console.log(`Error: OP=${op}, F=${f}`);
        }
    } else {
        console.log(`Error: OP=${op}, F=${f}`);
    }
    console.log(out);
};

main(inp, op, f);