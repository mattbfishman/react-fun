

function ContactStep({handleSubmit, formHelpers}) {
    const {formData} = formHelpers;
    const time = formData?.time ?? '';
    const date = formData?.date ?? '';
    const people = formData?.people ?? '';
    return (
        <form className="main" onSubmit={(e) => handleSubmit(e)}>
            <div>
                You have a reservation for {time} on {date} with {people}
            </div>

            <button type='submit' className="submitButton">Confirm</button>
        </form>
    )
}

export {ContactStep};