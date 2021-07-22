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
students.sort((a,b) => a.name.localeCompare(b.name));
   console.log(students);


console.log("****************************************************");
console.log("****************************************************");
console.log("****************************************************");


students.map((value) =>{
    if(value.year < 2000)
    console.log(value);
})
