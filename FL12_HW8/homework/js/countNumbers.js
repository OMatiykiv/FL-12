function countNumbers (str) {
    let arr = str.split('');
    arr = arr.filter(sym => (/\d/).test(sym));
    const obj = {};
    for (let num of arr) {
        if(obj[num]) {
        obj[num]++;
        }else{
         obj[num] = 1;
        }
    }
    return obj;
}

countNumbers('erer384jj4444666888jfd123');// => {'1': 1, '2': 1, '3': 2, '4': 5, '6': 3, '8': 4}
countNumbers('jdjjka000466588kkkfs662555');// => {'0': 3, '2': 1, '4': 1, '5': 4, '6': 4, '8': 2}
countNumbers(''); // => {}
