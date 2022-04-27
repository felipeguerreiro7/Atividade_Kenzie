import '../Form/style.css'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = ({products, setProducts}) => {

    const Schema = yup.object().shape({
        code:yup.number("digite um numero!").required("campo obrigatorio!"), 
        name:yup.string().required("campo obrigatorio!"), 
        description:yup.string().required("campo obrigatorio!"), 
        price:yup.number().required("campo obrigatorio!"), 
        discount:yup.number().required("campo obrigatorio!")
    })

    const  {register, handleSubmit, formState : {errors} } = useForm({resolver: yupResolver(Schema)})

    const onSubmit = (data) => {
        setProducts([...products,data])
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="code">New code:</label>
            <input type="text" id="code" name="code" {...register('code')}/>
            {errors.code && <p>{errors.code.message}</p>}
            <label htmlFor="name">New name:</label>
            <input type="text" id="name" name="name" {...register('name')}/>
            <label htmlFor="description">New description:</label>
            <input type="text" id="description" name="description" {...register('description')}/>
            <label htmlFor="price">New price:</label>
            <input type="text" id="price" name="price" {...register('price')}/>
            {errors.price && <p>{errors.code.message}</p>}
            <label htmlFor="discount">New discount:</label>
            <input type="text" id="discount" name="discount" {...register('discount')}/>
            {errors.discount && <p>{errors.code.message}</p>}
            <button type='submit'> Send! </button>
        </form>
            
    )
}

export default Form