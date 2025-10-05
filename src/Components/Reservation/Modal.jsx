import {useRef, useState} from 'react';


function Modal({label, Dialog, className, name, register, ...rest}) {
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
        }
    }

    return (
        <div className={className} onClick={() => {openDialog()}}>
            <div className='modalLabel'>
                {label}
            </div>
            <input name={name} {...register(name, { required: `${label} is required`})} className='modalValue' value={modalValue}/>
            {Dialog && <Dialog ref={dialogRef} setValue={handleValue} {...rest}/>}
        </div>
    );
}

export {Modal};