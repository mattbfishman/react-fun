import { renderStepComponent } from "../../../../helpers/renderStepComponent";

function ContactStep({handleSubmit, formHelpers, config}) {
    const {formData} = formHelpers;
    const time = formData?.time ?? '';
    const date = formData?.date ?? '';
    const people = formData?.people ?? '';
    const {goBack} = formHelpers;

    return (
        <form className="ReservationStepForm" onSubmit={(e) => handleSubmit(e)}>
            <div>
                You have a reservation for {time} on {date} with {people}
            </div>

            {config.map(configItem => (
              renderStepComponent(configItem, 'ReservationStepForm', formHelpers)
            ))}

            <button onClick={goBack} className="ReservationStepForm__button ReservationStepForm__button--back">Go Back</button>
            <button type='submit' className="ReservationStepForm__button">Confirm</button>
        </form>
    )
}

export {ContactStep};