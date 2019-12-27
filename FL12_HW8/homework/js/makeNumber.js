function makeNumber (str) {
    let arr = str.split('');
    arr = arr.filter(sym => (/\d/).test(sym))
    return arr.join('');
}

makeNumber('erer384jjjfd123'); //=>384123
makeNumber('123098h76gfdd'); //=>12309876
makeNumber('ijifjgdj'); //=> should return empty string ->''
