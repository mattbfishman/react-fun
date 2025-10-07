function Input({type, labelText, name, className, register, setValue}) {
    return (
        <div>
            <label>{labelText}</label>
            <input type={type} name={name} />
        </div>
    )
}

export {Input};