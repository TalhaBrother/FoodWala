import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { db } from "../firebase/firebaseConfig.js"
import { collection, addDoc } from "firebase/firestore";


const Register = () => {

    const schema = yup.object({
        username: yup.string().required("Enter Username!"),
        address: yup.string().required("Enter you address!"),
    }).required();


    const { register, handleSubmit, control, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            username: "",
            address: ""
        }
    });

    const onSubmit = async (data) => {
        try {
            await addDoc(collection(db, "cities"), data);
            console.log("Data added: ", data);
            reset()

        } catch (error) {
            console.error("Error adding Data!",error.message)
        }
        console.log(data)
        reset()
    }
    return (
        <>
            <div>Register</div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="username"
                    control={control}
                    rules={{ required: "Username is required" }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            name="username"
                            error={!!errors.username}
                            helperText={errors.username?.message}
                            label='user'
                        />
                    )}
                />
                <Controller
                    name="address"
                    control={control}
                    rules={{ required: "Address is required" }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            name="address"
                            error={!!errors.address}
                            helperText={errors.address?.message}
                            label='Address'
                        />

                    )}

                />
                <Button type="submit" variant="contained">Submit</Button>

            </form>
        </>

    )

}
export default Register;