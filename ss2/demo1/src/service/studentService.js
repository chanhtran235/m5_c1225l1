
const studentList = [
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

    return [...studentList];
}
export function deleteById(id){
    for (let i = 0; i <studentList.length ; i++) {
        if (studentList[i].id==id){
            studentList.splice(i,1);
            break;
        }
    }
}
export function addNew(student){
    studentList.push(student);
}