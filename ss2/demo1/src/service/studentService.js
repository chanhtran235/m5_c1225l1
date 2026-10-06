
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
export function deleteById(id){
    for (let i = 0; i <listStudent.length ; i++) {
        if (listStudent[i].id==id){
            listStudent.splice(i,1);
            break;
        }
    }
}
