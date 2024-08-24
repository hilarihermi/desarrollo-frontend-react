import { useState } from "react";

const useForm = (initialValues) => {
    const [values, setValue] = useState(initialValues);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValue(
            {
                ...values,
                [name]: value,
            }
        );
    };

    const resetForm = () => {
        setValue(initialValues);
    };

    const clearForm = () => {
        const clearedValues = Object.keys(initialValues).reduce((acc, key) => {
            acc[key] = '';
            return acc;
        }, {});
        setValue(clearedValues);
    };

    return [values, handleChange, resetForm,clearForm]; 
}

export default useForm;