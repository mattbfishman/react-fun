import './TimeDialog.css';
function TimeDialog({ref, setValue, start = '12:00', closed = '23:00', increments = 30}) {
    const handleButtonClick = (e) => {
        if(e.target.nodeName === 'BUTTON'){
            const value = e.target.value;
            if(value){
                setValue(value);
                ref.current.close();
            }
        }
    }

    const createRange = () => {
        let startHour = parseInt(start.split(':')[0]);
        const closedHour = closed.split(':')[0];
        const minutes = 60 / increments;
        const diff = (closedHour - startHour) * minutes;
        const range = [];

        for(var i = 0; i <= diff; i++){
            const partOfHour = i % minutes;

            const addedMinutes = increments * partOfHour;
            const displayMinutes = addedMinutes == 0 ? '00' : addedMinutes;

            range.push(`${startHour}:${displayMinutes}`);
            if(partOfHour == 3){
                startHour++;
            }
        }

        return range;

    }
    
    const times = createRange();

    return (
        <dialog ref={ref}>
            <div>
                <div className="timeContainer" onClick={(e) => {handleButtonClick(e)}}>
                    {times.map((time) => {
                        return <button type="button" className='timeButton' key={`${time}-selectTime`} value={time}>{time}</button>
                    })}
                </div>
            </div>
        </dialog>
    )
}

export {TimeDialog}