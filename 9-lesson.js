const ar = [
    { id: 1, name: 'Muhammadali 1'},
    { id: 2, name: 'Muhammadali 2'},
    { id: 3, name: 'Muhammadali 3'},
    { id: 4, name: 'Muhammadali 4'},
    { id: 5, name: 'Muhammadali 5'},
    { id: 6, name: 'Muhammadali 6'},
];

const ochirish = (id) => {
    const yangi = ar.filter((e) => e.id !=id);
    console.log(yangi);
};

ochirish(1);