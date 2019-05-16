import React from 'react';
import * as type from 'yup';
// import { checkValidation, runValidation } from './utils';


const typeToFormErrors = err => {
    const errors = {};
    err.inner.forEach(item => {
        if (!errors[item.path]) {
            errors[item.path] = item.message;
        }
    });
    return errors;
};

export const checkValidation = err => Object.keys(err).length === 0;

export const runValidation = (schema, values) => (
    new Promise(resolve => {
        schema.validate(values, { abortEarly: false }).then(() => {
            resolve({});
        }, err => {
            resolve(typeToFormErrors(err));
        });
    })
);

const initialState = {
    field: {
        email: '',
        password: ''
    },
    error: {},
    touched: {},
    isValid: false
};

const setState = 'SET_STATE';

function myreducer(state, action) {
    switch (action.type) {
        case setState:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

const schema = type.object().shape({
    email: type.string()
        .email('not a valid email !')
        .required('email required !'),
    password: type.string()
        .required('password required !')
        .min(6, 'min. 6 char !')
});

export default function LoginDemo() {
    const [{
        field,
        error,
        touched,
        isValid
    }, dispatch] = React.useReducer(myreducer, initialState);

    const handleChange = async ({ target: { name, value } }) => {
        const schemaErrors = await runValidation(schema, {
            ...field, [name]: value
        });
        dispatch({
            type: setState,
            payload: {
                error: schemaErrors,
                field: { ...field, [name]: value },
                touched: { ...touched, [name]: true },
                isValid: checkValidation(schemaErrors)
            }
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        alert(`email: ${field.email} and password: ${field.password}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="email"
                value={field.email}
                onChange={handleChange}
            />
            {(touched && touched.email) && (error && error.email) && (
                <i>
                    {error.email}
                </i>
            )}
            <br />
            <input
                type="password"
                name="password"
                value={field.password}
                onChange={handleChange}
            />
            {(touched && touched.password) && (error && error.password) && (
                <i>
                    {error.password}
                </i>
            )}
            <br />
            <button type="submit" disabled={!isValid}>Login</button>
        </form>
    );
}
