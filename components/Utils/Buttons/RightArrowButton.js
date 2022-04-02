import React from 'react'
import RightArrowIcon from "../../../icons/RightArrowIcon";

const RightArrowButton = ({ handleNextWeek }) => {
    return (
        <div onClick={() => handleNextWeek()} className='w-[42.11px] h-[27px] cursor-pointer rounded-md text-white bg-[#FC4D6D] flex items-center justify-center'>
            <RightArrowIcon />
        </div>
    )
}

export default RightArrowButton;