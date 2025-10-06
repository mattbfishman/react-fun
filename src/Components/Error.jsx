import './Error.css'
function Error ({message}) {
    if(message){
        return (
            <div className="Error">
                {message}
            </div>
        )
    } 

    return null;
}

export {Error}