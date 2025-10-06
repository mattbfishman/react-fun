import {useState} from 'react';

const PLACEMENTS = [
    {index: 1, symbol: '('},
    {index: 4, symbol: ') '},
    {index: 7, symbol: '-'}
]

const BACKSPACE = 'Backspace';


function PhoneNumber() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectionRange, setSelectionRange] = useState([]);

    const removeAnyLettersAndValidate = (input = '', max = 10) => {
        let lettersRemoved = input.replace(/[^0-9]/gi, ''); 
        if(lettersRemoved.length > max){
            lettersRemoved = lettersRemoved.slice(0, max) 
        }
        return lettersRemoved
    }

    const addSpecialCharacters = (input = '') => {
        const currentPhoneNumberLength = input.length;
        let modifiedNumber = input.split(''); 

        if(currentPhoneNumberLength > 0){
            PLACEMENTS.forEach(({index, symbol}) => {
                if(currentPhoneNumberLength >= index){
                    const diff = modifiedNumber.length - input.length;
                    const modifier = index + diff - 1;
                    modifiedNumber.splice(modifier, 0, symbol);
                }
            })
        }

        return modifiedNumber.join('');
    }

    const handleChange = (e) => {
        const phoneNumber = e.target.value || '';
        const newPhoneNumber = validatePhoneNumber(phoneNumber);
        setPhoneNumber(newPhoneNumber);

    }
    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberAllNumbers = removeAnyLettersAndValidate(phoneNumber);

        const phoneNumberWithSpecialCharacters = addSpecialCharacters(phoneNumberAllNumbers);

        return phoneNumberWithSpecialCharacters;
    }

    const getHighlightedText = (e) => {
        const {target} = e;
        const {selectionEnd, selectionStart} = target;
        if(selectionEnd > -1 && selectionStart > -1){
            setSelectionRange(() => {
                return [selectionStart, selectionEnd]
            });
        }
    }

    const checkForDeletion = (e) => {
        if(e.key === BACKSPACE){
            if(selectionRange.length > 0){
                const newPhoneNumber = `${phoneNumber.substring(0, selectionRange[0])}${phoneNumber.substring(selectionRange[1], phoneNumber.length)}`;
                const validatedPhoneNumber = validatePhoneNumber(newPhoneNumber);
                setPhoneNumber(validatedPhoneNumber);
                e.preventDefault();
            } 
        }

    }

    return <input maxLength={14} onMouseUp={(e) => {getHighlightedText(e)}} onKeyDown={(e) => {checkForDeletion(e)}} onChange={(e) => {handleChange(e)}} value={phoneNumber} type="tel"/>
}

export default PhoneNumber;