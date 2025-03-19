import React, {useState} from 'react';
import SimpleHeader from "../GlobalComponents/SimpleHeader.jsx";
import {v4 as uuidv4} from "uuid";
import SimpleInput from "../GlobalComponents/SimpleInput.jsx";
import SimpleButton from "../GlobalComponents/SimpleButton.jsx";


function Form({headers, inputs, onSubmit}) {

    const [formData, setFormData] = useState(
        inputs.reduce((acc, input) => ({...acc, [input.name]: ""}), {})
    );

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(formData)
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <form onSubmit={(e) => onSubmit(e, formData)}>
            {headers.map((header) => {
                return (
                    <div key={uuidv4()}>
                        <SimpleHeader tag={header.tag} text={header.text}/>
                    </div>
                );
            })}
            {inputs.map((input, index) => {
                return (
                    <div key={`input-${input.name}-${index}`}>
                        <SimpleInput type={input.type} placeholder={input.placeholder} onChange={handleChange}
                                     name={input.name}/>
                    </div>
                )
            })

            }
            <SimpleButton text={"Register"} type={"submit"}/>
        </form>
    );
}

export default Form;