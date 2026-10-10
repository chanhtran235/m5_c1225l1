import {useRef} from "react";
import {addNew, getAll} from "../../service/studentService.js";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

const validator = Yup.object({
    id:Yup.number().required("Yêu nhâp id").min(1,"Id phải dương") ,
    name: Yup.string().required("Yêu cầu nhập tên")
        .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/,"Tên không đúng định dạng!")
})

const Add = () => {
    const navigate = useNavigate()
    const handleAdd = (value)=>{
        console.log( value)
        let isSuccess = addNew(value);
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
                id:"",
                name:""
            }}
                    onSubmit={handleAdd}
                    validationSchema={validator}
            >
              <Form>
                  <div>
                      <p>ID</p>
                      <Field type ="text" name = "id"/>
                      <ErrorMessage name={'id'} className={'text-danger'} component={'small'}/>
                  </div>
                  <div>
                      <p>Name</p>
                      <Field type ="text" name = "name"/>
                      <ErrorMessage name={'name'} className={'text-danger'} component={'small'}/>

                  </div>
                  <button type={"submit"}>Thêm mới</button>
              </Form>
            </Formik>
        </>

    )
}

export default Add;