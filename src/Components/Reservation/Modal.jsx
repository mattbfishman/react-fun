import {useRef, useState} from 'react';
function Modal({label, Dialog, className, ...rest}) {
    const dialogRef = useRef();
    const [modalValue, setModalValue] = useState('')

    const openDialog = () => {
        if(dialogRef.current){
            console.log('here');
            if(!dialogRef.current.open){
                dialogRef.current.showModal();
            }
        } 
    }

    const handleSubmit = (value) => {
        if(value){
            setModalValue(value);
        }
    }


    return (
        <div className={className} onClick={() => {openDialog()}}>
            <div className='modalLabel'>
                {label}
            </div>
            {modalValue && 
                <div>
                    {modalValue}
                </div>
            }
            {Dialog && <Dialog ref={dialogRef} submit={handleSubmit} {...rest}/>}
        </div>
    );
}

export {Modal};