import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import {useState, useMemo, useRef} from 'react';
import useDebounce from './useDebounce';

import './FilterInput.css'
import useClickOutside from "./useClickOutside";

const MOCK_USERS = [
    {name: 'Matt', id: 1},
    {name: 'Mike', id: 2},
    {name: 'Mort', id: 3},
    {name: 'Nick', id: 4},
    {name: 'Nicky', id: 5},
    {name: 'Nicki', id: 6},
    {name: 'Alex', id: 7},
    {name: 'Peter', id: 8},
    {name: 'Joe', id: 9},
    {name: 'Brian', id: 10},
    {name: 'Carlos', id: 11},
    {name: 'AJ', id: 12},
    {name: 'Austin', id: 13},
    {name: 'Kyle', id: 14},
    {name: 'Tommy', id: 15},
]

function FilterInput () { 
    const [open, setIsOpen] = useState(true);
    const filterRef = useRef(null);

    useClickOutside(filterRef, () => {
        setIsOpen(false);
    });

    const caret = open ? <FaCaretUp/> : <FaCaretDown/>

    return (
        <div ref={filterRef}>
            <div className="filterInput" onClick={() => {
                setIsOpen(!open);
            }}>
                Author {caret}
            </div>
            <FilterPanel data={MOCK_USERS} show={open}/>
        </div>
    )
}

function FilterPanel ({data = [], show}) {
    const [filterText, setFilterText] = useState('');
    const debouncedFilterText = useDebounce(filterText, 250);

    const sortedData = useMemo(() => {
        return data.sort((a, b) => {
            if(a.name > b.name){
                return 1;
            } else if (a.name < b.name){
                return -1;
            } 

            return 0;
        });
    }, [data]);

    const updateFilterText = (e) => {
        setFilterText(e.target.value);
    }

    const filteredData =  useMemo(() => {
        const len = debouncedFilterText.length;
        return sortedData.filter((item) => {
            const lowercaseName = item.name.toLowerCase();
            return lowercaseName.substring(0, len) === debouncedFilterText;
        })
    }, [debouncedFilterText, sortedData])

    return (
        <div className={ show ? 'filterPanel' : 'filterPanel hidden'}>
            <div>
                Filter By Author
            </div>
            <input onChangetype="text" onChange={(e) => {updateFilterText(e)}} value={filterText} className="filterSearch" placeholder="Filter Users"/>
            <div className="filterItems">
                {
                    filteredData.map((item) => {
                        return (
                            <div key={item.id}>
                                {item.name}
                            </div>
                        )
                    })
                }
                {filteredData.length === 0 && 
                    <div>
                        No Data Found
                    </div>
                }
            </div>
        </div>
    )
}

export default FilterInput;