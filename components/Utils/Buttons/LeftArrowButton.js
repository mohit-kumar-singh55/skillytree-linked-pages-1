import React from 'react'
import LeftArrowIcon from "../../../icons/LeftArrowIcon";

const LeftArrowButton = ({ handleLastWeek }) => {
    return (
        <div onClick={() => handleLastWeek()} className='w-[42.11px] h-[27px] rounded-md text-white bg-[#FC4D6D] flex items-center justify-center cursor-pointer'>
            <LeftArrowIcon />
        </div>
    )
}

export default LeftArrowButton;