function cprint(name, count){
    if (typeof(count) == 'undefined') count = 1;
    console.log(`${name}이/가 ${count}개 있습니다`);
}

function print(name) {
    console.log(name)
}

cprint('사과')
print('Apple')

