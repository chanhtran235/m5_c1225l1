import {useEffect, useRef, useState} from "react";
import {addNew} from "../../service/studentService.js";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {getAll} from "../../service/classService.js";

const validator = Yup.object({
    name: Yup.string().required("Yêu cầu nhập tên")
        .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/,"Tên không đúng định dạng!")
})

const Add = () => {
    const navigate = useNavigate()
    const [classList, setClassList]= useState([])
    useEffect(()=>{
        console.log("----------useEffect------------");
        const fetData = async ()=>{
            const list = await getAll();
            setClassList(list);
        }
        fetData();
    },[])
    const handleAdd = async (student)=>{
        student = {
            ...student,
            classCG: JSON.parse(student.classCG)
        }
        console.log(student)
        let isSuccess = await addNew(student);
        if (isSuccess){
            toast.success("Thêm mới thành công");
        }else {
            toast.error("Thêm mới thất bại");
        }
        navigate("/dashboard/student");
    }
    return (
        <>
            <Formik initialValues={{
                name:""
            }}
                    onSubmit={handleAdd}
                    validationSchema={validator}
            >
              <Form>
                  <div>
                      <p>Name</p>
                      <Field type ="text" name = "name"/>
                      <ErrorMessage name={'name'} className={'text-danger'} component={'small'}/>

                  </div>
                  <div>
                      <p>Class Name</p>
                      <Field as ="select" name = "classCG">
                          <option>-----Chọn-----</option>
                          {
                              classList.map(cls=>(
                                  <option key={cls.id} value={JSON.stringify(cls)}>{cls.name}</option>
                              ))
                          }
                      </Field>
                  </div>
                  <button type={"submit"}>Thêm mới</button>
              </Form>
            </Formik>
        </>

    )
}

export default Add;