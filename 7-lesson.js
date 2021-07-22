var students= [
    {
        id: 1,
        name: 'Bekzod',
        surname: 'Abdulhayev',
    },
    {
        id: 2,
        name: 'Akbarjon',
        surname: 'Abdulhayev',
    },
    {
        id: 3,
        name: 'Mirabdulla',
        surname: 'Abdulhayev',
    },
    {
        id: 4,
        name: 'Barkamol',
        surname: 'Abdulhayev',
    },{
        id: 5,
        name: 'Jamshid',
        surname: 'Abdulhayev',
    },
    {
        id: 6,
        name: 'Mirzohid',
        surname: 'Abdulhayev',
    },
    {
        id: 7,
        name: 'Abror',
        surname: 'Abdulhayev',
    },

];


students.sort(function(a, b){
    var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
    if (nameA < nameB) 
     return -1;
    if (nameA > nameB)
     return 1;
    return 0; 
   });
   console.log(students);