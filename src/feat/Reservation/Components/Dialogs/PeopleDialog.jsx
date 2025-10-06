const PhoneRange = Array.from(Array(10).keys())
import './PeopleDialog.css'
function PeopleDialog({ref, setValue}) {

    const handleButtonClick = (e) => {
        if(e.target.nodeName === 'BUTTON'){
            const value = e.target.value;
            if(value){
                setValue(value);
                ref.current.close();
            }
        }
    }
    return (
        <dialog ref={ref}>
            <div>
                <div className="peopleContainer" onClick={(e) => {handleButtonClick(e)}}>
                    {PhoneRange.map((num) => {
                        const displayNumber = num + 1;
                        const display = displayNumber === 1 ? `${displayNumber} person` : `${displayNumber} people`
                        return(
                            <button type="button" className='peopleButton' key={`people:${displayNumber}`} value={display}>{displayNumber}</button>
                        )
                    })}
                </div>
            </div>
        </dialog>
    )
}

export {PeopleDialog}