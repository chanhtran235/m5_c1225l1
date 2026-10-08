import {useRef} from "react";
import {addNew, getAll} from "../../service/studentService.js";

const Add = ({handleReloading}) => {
    // useRef;
    const idRef = useRef(null);
    const nameRef = useRef(null);
    const handleAdd = ()=>{
        const newStudent = {
            id: idRef.current.value,
            name:nameRef.current.value
        }
        idRef.current.value = "";
        nameRef.current.value = "";
        addNew(newStudent);
        handleReloading();
    }
    return (
        <div className={'w-50'}>
            <h3>Thêm mới</h3>
            <input ref={idRef} placeholder={'Nhập mã'}/>
            <input ref={nameRef} placeholder={'Nhập tên'}/>
            <button onClick={handleAdd} className={'btn-success btn-sm'}>Lưu</button>
        </div>
    )
}

export default Add;