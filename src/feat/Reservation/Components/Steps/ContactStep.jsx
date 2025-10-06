

function ContactStep({handleSubmit, formHelpers}) {
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
            <input type="tel"/>
            <input type="email"/>
            <input type="text"/>

            <button onClick={goBack} className="ReservationStepForm__button ReservationStepForm__button--back">Go Back</button>
            <button type='submit' className="ReservationStepForm__button">Confirm</button>
        </form>
    )
}

export {ContactStep};