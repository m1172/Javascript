var students= [
    {
        id: 1,
        year: 1993,
        name: 'Bekzod',
        surname: 'Abdulhayev',
    },
    {
        id: 2,
        year: 1998,
        name: 'Akbarjon',
        surname: 'Abdulhayev',
    },
    {
        id: 3,
        year: 1993,
        name: 'Mirabdulla',
        surname: 'Abdulhayev',
    },
    {
        id: 4,
        year: 2003,
        name: 'Barkamol',
        surname: 'Abdulhayev',
    },{
        id: 5,
        year: 1997,
        name: 'Jamshid',
        surname: 'Abdulhayev',
    },
    {
        id: 6,
        year: 1995,
        name: 'Mirzohid',
        surname: 'Abdulhayev',
    },
    {
        id: 7,
        year: 2004,
        name: 'Abror',
        surname: 'Abdulhayev',
    },

];

var obj= {
    od: 6,
    year: 2002,
    name: 'Abdulla',
    surname: 'Abdulkhaev',
};


const {id, year, surname, name} =obj;
console.log(name);


function funC(status){
    console.log(status);
}
funC('Mentor');


//Class
class classF{
    constructor(status){
        // console.log(status);
        this.status = status;
    }
    getName(){
        console.log(this.status);
    }
 }
const user=new classF('Ali');
user.getName();
