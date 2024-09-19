
import { useRef } from "react"
import Form from "./Form"
import Input from "./control/Input"

export default function CustomerForm(){
    
    const name = useRef()
    const phone = useRef()
    const surname = useRef()

    function handlerSubmit(){
        const data ={
            name:name.current.value,
            surname:surname.current.value,
            phone:phone.current.value,
        }
        console.log(data)
    }

    return(
        <Form submit={handlerSubmit}>
            <Input id="name" label="Introduzca el nombre" ref={name} />
            <Input id="surname" label="Introduzca el apellido" ref={surname} />
            <Input id="phone" label="Introduzca el telefono" ref={phone} />
            <div className='control'>
                <button type="submit">Enviar</button>
            </div>
        </Form>
    )
}