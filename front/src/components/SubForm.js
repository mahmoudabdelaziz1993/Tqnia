import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useForm } from "react-hook-form"
import axios from "axios"

function SubForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data, e) => {
        try {
            let call = await axios.post('http://localhost:5050/api/subscribe', data)
            console.log(call)
            e.target.reset();
        } catch (error) {
            console.log(error)
        }

    };


    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                <Form.Text className="text-danger">
                    {errors.email?.type === 'required' && "First name is required"}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Channel</Form.Label>
                <Form.Control type="text" {...register("channel", { required: true, minLength: 2 })} />
                <Form.Text className="text-danger">
                    {errors.channel?.type === 'required' && "First name is required"}</Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" className="my-3 font-weight-bolder text-capitalize">
                subscribe</Button>
        </Form>

    )
}

export default SubForm
