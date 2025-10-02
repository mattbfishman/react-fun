import {useRef, useState} from 'react';

const ID = 'modalParent';
function Modal({label, Dialog, className, name, ...rest}) {
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
        <div id={ID} className={className} onClick={() => {openDialog()}}>
            <div className='modalLabel'>
                {label}
            </div>
            {modalValue && 
                <input required className='modalValue' name={name} value={modalValue} readOnly/>
            }
            {Dialog && <Dialog ref={dialogRef} setValue={handleValue} {...rest}/>}
        </div>
    );
}

export {Modal};