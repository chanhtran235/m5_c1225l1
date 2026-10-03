
const listStudent = [
    {
        id:1,
        name:"chánh"
    },
    {
        id:2,
        name:"tiến"
    },
    {
        id:3,
        name:"hải"
    }
];

export function getAll(){

    return [...listStudent];
}
