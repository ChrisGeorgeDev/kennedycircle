import React from 'react';
// import './inputFieldStyles.scss';

const InputField = props => {

    //Checks if all the fields are filled and if an @ sign is used in the email field
    const validateInput = values => {

        if (values.some(f => f === "") || values[0].indexOf("@") === -1) {
            return true
        } else {
            return false
        }


    }
    if (props.type === "submit") {
        return (
            <input
                className='fplan-cta mx-auto'
                type='submit'
                value={props.label}
                disabled={validateInput(props.formValues)}
            />
        )
    } else if (props.type === "textarea") {
        return (
            <label className="inputField__label">
              <p className='sr-only'>{props.label}</p>  
                <textarea
                    onChange={(e) => props.onChangeHandler(e.target.value)}
                    placeholder={props.placeholder}
                    value={props.value}
                    required={props.isRequired}
                    className="inputField__field"
                    rows={7}
                    name={props.name}
                />
            </label>
        );
    } else {
        return (
            <label className="inputField__label">
              <p className='sr-only'>{props.label}</p>  
                <input
                    onChange={(e) => props.onChangeHandler(e.target.value)}
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    required={props.isRequired}
                    className="form-input appearance-none mt-1 block w-full"
                    name={props.name}
                />
            </label>
        );
    }


};

// export default React.memo(InputField);
export default InputField;