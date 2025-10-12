import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { db } from "../firebase/firebaseConfig.js"
import { collection, addDoc } from "firebase/firestore";


const Register = () => {

  const schema = yup.object({
    fullName: yup.string().required("Full Name is required!"),
    email: yup.string().email("Enter a valid email").required("Email is required!"),
    phone: yup
      .string()
      .matches(/^[0-9]{11}$/, "Phone number must be 11 digits")
      .required("Phone is required!"),
    address: yup.string().required("Enter your address!"),
    city: yup.string().required("City is required!"),
    postalCode: yup
      .string()
      .matches(/^[0-9]{5}$/, "Postal code must be 5 digits")
      .required("Postal Code is required!"),
    country: yup.string().required("Country is required!"),
  }).required();

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
    }
  });

  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, "deliveries"), data);
      console.log("Data added: ", data);
      reset();
    } catch (error) {
      console.error("Error adding Data!", error.message);
    }
  };

  return (
    <>
      <h2>Delivery Information</h2>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", flexDirection: "column", gap: 2, width: "300px",backgroundColor:"white"}}
      >
        <Controller
          name="fullName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Full Name"
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone Number"
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          )}
        />

        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Address"
              error={!!errors.address}
              helperText={errors.address?.message}
            />
          )}
        />

        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="City"
              error={!!errors.city}
              helperText={errors.city?.message}
            />
          )}
        />

        <Controller
          name="postalCode"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Postal Code"
              error={!!errors.postalCode}
              helperText={errors.postalCode?.message}
            />
          )}
        />

        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Country"
              error={!!errors.country}
              helperText={errors.country?.message}
            />
          )}
        />

        <Button type="submit" variant="contained">Submit</Button>
      </Box>
    </>
  );
};

export default Register;
