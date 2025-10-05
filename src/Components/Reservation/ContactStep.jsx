

function ContactStep({handleSubmit, register, errors}) {
    return (
        <form className="main" onSubmit={(e) => handleSubmit(e)}>
            <div>
                You have a reservation for time on date with x people
            </div>

            <button type='submit' className="submitButton">Confirm</button>
        </form>
    )
}

export {ContactStep};