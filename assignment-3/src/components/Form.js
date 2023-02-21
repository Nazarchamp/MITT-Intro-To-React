import {useForm} from "react-hook-form";
import '../styles/form.css';

function Form() {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors}
    } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>First Name</label>
            <input placeholder="John"
                {...register("firstName", {
                    required: true,
                    pattern: /^[A-Za-z]+$/i
                })}
            />
            {errors?.firstName?.type === "required" && <p>This field is required</p>}
            {errors?.firstName?.type === "pattern" && (
                <p>Alphabetical characters only</p>
            )}

            <label>Last Name</label>
            <input placeholder="Doe" {...register("lastName", {pattern: /^[A-Za-z]+$/, required: true})} />
            {errors?.lastName?.type === "pattern" && (
                <p>Alphabetical characters only</p>
            )}
            {errors?.lastName?.type === "required" && <p>This field is required</p>}


            <label>Year</label>
            <input placeholder="YYYY" {...register("year", {pattern: /^[0-9]+$/, maxLength:4, minLength:4, required:true})} />
            {errors?.year?.type === "pattern" && (
                <p>Numbers only</p>
            )}
            {errors?.year?.type === "required" && <p>This field is required</p>}

            {errors?.year?.type === "maxLength" && <p>Four Character Limit</p>}
            {errors?.year?.type === "minLength" && <p>Four Characters Required</p>}


            <label>Email</label>
            <input placeholder="jdoe@company.co" {...register("email", {pattern: /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/i, required: true})} />
            {errors?.email?.type === "pattern" && (
                <p>Enter a Valid Email</p>
            )}
            {errors?.email?.type === "required" && <p>This field is required</p>}

            <label>Phone Number</label>
            <input placeholder="XXX-XXX-XXXX" {...register("number", {maxLength:12, minLength:12, pattern: /^\d{3}-\d{3}-\d{4}$/, required: true})} />
            {errors?.number?.type === "pattern" && (
                <p>Enter a Valid Phone Number</p>
            )}
            {errors?.number?.type === "required" && <p>This field is required</p>}
            {errors?.number?.type === "maxLength" && <p>Twelve Character Limit</p>}
            {errors?.number?.type === "minLength" && <p>Twelve Characters Required</p>}

            <input type="submit"/>
        </form>
    );
}

export default Form;