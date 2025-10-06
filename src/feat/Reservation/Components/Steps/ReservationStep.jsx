import { renderStepComponent } from "../../../../helpers/renderStepComponent";

function ReservationStep({handleSubmit, formHelpers, config}) {
    return (
        <form className="ReservationStepForm" onSubmit={(e) => handleSubmit(e)}>
            <div className="ReservationStepForm__header">Book A Table</div>
            <div className="ReservationStepForm__subheader">This is where you'll add the details of your booking.</div>

            {config.map(configItem => (
              renderStepComponent(configItem, 'ReservationStepForm', formHelpers)
            ))}
        
            <button type='submit' className="ReservationStepForm__button ReservationStepForm__button--submit">Book Table</button>
        </form>
    )
}

export {ReservationStep};