function Error ({message}) {
    if(message){
        return (
            <div>
                {message}
            </div>
        )
    } 

    return null;
}

export {Error}