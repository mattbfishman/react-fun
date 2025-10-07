import {Error} from '../Components/Error';


const renderStepComponent = (configItem, parent, extras) => {
    const {Dialog, Component, labelText, name, className, errorMessage, componentType} = configItem;
    const additionalProps = configItem?.additionalProps ?? {};

    const standardProps = {
        name,
        className,
        labelText,
        errorMessage,
        ...extras,
        ...additionalProps
    }; 

    if(Dialog){
        standardProps.Dialog = Dialog;
    } 

    if(componentType === 'input'){
        standardProps.type = configItem?.type;
    }

    return (
        <div key={name} className={`${parent}_container`}>
            <Component {...standardProps}/>
            <Error message={extras?.errors?.[name]?.message} />
        </div>
    )
}

export{renderStepComponent}