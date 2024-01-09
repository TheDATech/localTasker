import * as Yup from "yup";

export const ContactSchema = Yup.object({
    contact_type: Yup.string().required('Select is required!'),
    full_name: Yup.string().min(2).max(20).required("Please enter full name!"),
    email: Yup.string().email("Please enter a valid email address").required("Email address is required!"),
    phone_number: Yup.string().required("Please enter phone number!"),
    message: Yup.string().required("Message is required!")
})

export const JobApplySchema = Yup.object({
    user_name: Yup.string().min(2).max(10).required('Please enter full name!'),
    user_email: Yup.string().email("Please enter a valid email address").required("Email address is required!"),
    user_message: Yup.string().required("Message is required!")
})

export const SubcriptionSchema = Yup.object({
    email: Yup.string().email("Please enter a valid email address").required("Email address is required!")
})
