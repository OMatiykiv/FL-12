//task №1
function convert(...args) {
    const arr = [];
    for (let arg of args) {
        if (typeof arg === 'number') {
            arr.push(arg.toString())
        } else if (typeof arg === 'string') {
            arr.push(parseInt(arg))
        }
    }

    return arr;
}
  
//task №2
let executeforEach = (arr, func) => {
    for (let elem of arr) {
        func(elem);
    }
}

//task №3
let mapArray = (arr, func) => {
    const mapArr = [];
    executeforEach(arr, (el) => {
        let elem = el;
        if (parseInt(el)) {
            elem = parseInt(el);
        }
        mapArr.push(func(elem));
    });

    return mapArr;    
}

//task №4
let filterArray = (arr, func) => {
    let filteredArr = [];
    executeforEach(arr, (el) => {
        if (func(el)) {
            filteredArr.push(el)
        }
    });

    return filteredArr;
}

//task №5
let flipOver = str => {
    const arr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        arr.push(str[i]);
    }

    return arr.join('');
}

//task №6
let makeListFromRange = arr => {
    let rangeArr = [];
    let bigger, smaller;

    if (arr[0] > arr[1]) {
        bigger = arr[0];
        smaller = arr[1];
    } else { 
        bigger = arr[1];
        smaller = arr[0];
    }

    for (let i = smaller; i <= bigger; i++) {
        rangeArr.push(i);
    }

    return rangeArr;
}

//task №7
let getArrayOfKeys = (arr, keyName) => {
    let arrOfKeys = [];
    executeforEach(arr, (el) => {
        arrOfKeys.push(el[keyName])
    });

    return arrOfKeys;
}

//task №8
let substitute = arr => {
    const min = 30;
    return mapArray(arr, el => {
        let elem = el;
        if (elem < min) {
            elem = '*'
        }
        return elem;
    })
}
  
//task №9
let getPastDay = (date, dif) => {
    const mil = 1000;
    const sec = 60;
    const min = 60;
    const hours = 24;
    const options = {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }
    const previousDateMil = new Date(date - dif * mil * sec * min * hours);
    const previousDate = previousDateMil.toLocaleString('en-GB', options);

    return `${previousDateMil.getDate()}, (${previousDate})`
}
  
//task №10
let formatDate = data => {
    const dateOptions = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    }
    const timeOptions = {
        hour: 'numeric',
        minute: 'numeric'
    }

    const date = data.toLocaleString('zh-CN', dateOptions);
    const time = data.toLocaleString('en-GB', timeOptions);
    return `${date} ${time}`;
}
