import {useRef, useState} from 'react';


function Modal({labelText = '', Dialog, className, name = '', register, setValue, errorMessage = '', ...rest}) {
    const dialogRef = useRef();
    const [modalValue, setModalValue] = useState('')
    const [open, setOpen] = useState(false);

    const openDialog = () => {
        if(dialogRef.current){
            if(!dialogRef.current.open && !open){
                dialogRef.current.showModal();
                setOpen(true);
            }
        } 
    }

    const handleValue = (value) => {
        if(value){
            setModalValue(value);
            dialogRef.current.close();
            setOpen(close);
            setValue(name, value);
        }
    }

    return (
        <div className={className} onClick={() => {openDialog()}}>
            <div className='ReservationModal__Label'>
                {labelText}
            </div>
            <input name={name} {...register(name, { required: errorMessage})} className='ReservationModal__Value' value={modalValue}/>
            {Dialog && <Dialog ref={dialogRef} setValue={handleValue} {...rest}/>}
        </div>
    );
}

export {Modal};