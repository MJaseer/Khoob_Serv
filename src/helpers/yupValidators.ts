import * as yup from 'yup';

export class Validator{
    
    stringSchema = yup.string().min(5, 'Password must be at least 5 characters').max(20, 'String cannot be longer than 20 characters');

}
