import React from 'react'
import RightArrowIcon from '../../../icons/RightArrowIcon'

const RightArrowButton = ({ handleNextWeek }) => {
  return (
    <div
      onClick={() => handleNextWeek()}
      className="flex h-[27px] w-[42.11px] cursor-pointer items-center justify-center rounded-md bg-[#FC4D6D] text-white"
    >
      <RightArrowIcon />
    </div>
  )
}

export default RightArrowButton
