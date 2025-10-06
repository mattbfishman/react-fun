import {Error} from '../Components/Error';

const renderStepComponent = (configItem, parent, extras) => {
    const {Dialog, Component, label, name, className, errorMessage} = configItem;
    const additionalProps = configItem?.additionalProps ?? {};

    const innerProps = {
        name,
        className,
        label,
        errorMessage,
        ...extras,
        ...additionalProps
    }; 

    if(Dialog){
        innerProps.Dialog = Dialog;
    } 

    return (
        <div key={name} className={`${parent}_modalContainer`}>
            <Component {...innerProps}/>
            <Error message={extras?.errors?.[name]?.message} />
        </div>
    )
}

export{renderStepComponent}