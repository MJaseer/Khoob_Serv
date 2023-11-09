import * as yup from 'yup';

export class Validator {

    private phoneRegExp = /^\d{10}$/; 

    passwordSchema = yup.string().min(8, 'Password must be at least 8 characters')
        .max(20, 'String cannot be longer than 20 characters')
        .matches(/[a-z]+/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]+/, 'Password must contain at least one uppercase letter')
        .matches(/[\d]+/, 'Password must contain at least one digit')
        .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]+/, 'Password must contain at least one special character');

    emailSchema = yup.string()
        .required('Email is required')
        .email('Email must be a valid format');

    strinSchema = yup.string().min(5, 'Password must be at least 8 characters')
        .max(20, 'String cannot be longer than 20 characters');

    phoneNumberSchema = yup.string()
        .required('Phone number is required')
        .matches(this.phoneRegExp, 'Phone number must be 10 digits long');

}
