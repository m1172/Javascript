const  username = 'smd';
const password = 1234;

console.log('started..');
new Promise((resolve, reject) => {
    setTimeout(() => {
        if (username === 'smd' && password == 12334)
            resolve('welcome to facebook');
            else reject('login yoki pw xato');
    }, 2000);
})

    .then((info) => console.log(info))
    .catch((err) => console.log(err));


    const getInfo = async () => {
        try{
        console.log('started...');
        const usr = user;
        console.log(usr);
        } catch(err) {
            console.log(err);
        }
        console.log('finished');
    };

    getInfo();
  