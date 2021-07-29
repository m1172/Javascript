// const ar = [
//     { id: 1, name: 'Muhammadali 1'},
//     { id: 2, name: 'Muhammadali 2'},
//     { id: 3, name: 'Muhammadali 3'},
//     { id: 4, name: 'Muhammadali 4'},
//     { id: 5, name: 'Muhammadali 5'},
//     { id: 6, name: 'Muhammadali 6'},
// ];

// const ochirish = (id) => {
//     const yangi = ar.filter((value) => value.id !=id);
//     console.log(yangi);
// };

// ochirish(1);


// const ozgartirish = (id) => {
//     const yangi1 = ar.map((value) =>
//       value.id === id ? {...value, name: 'Bekzod'} : value
//       );
//     console.log(yangi1);
// };

// ozgartirish(3);

const username = 'smd';
const password = 12345;

const Facebook = (usr, pw, callback) => {
    setTimeout(() => {
        if (username === usr && password === pw)
         return callback('welcome to Facebook');
        else return callback('login yoki pw xato');
    }, 3000);
};
console.log('started...');
Facebook('smd', 12345, (data) => console.log(data));