const  username = 'smd';
const password = 1234;

console.log('started');
new Promise((resolve, reject) => {
    setTimeout(() => {
        if (username === 'smd' && password == 12334)\
            resolve('welcome to facebook');
            else reject('login yoki pw xato');
    }, 2000);
}).then((info) => console.log(info));