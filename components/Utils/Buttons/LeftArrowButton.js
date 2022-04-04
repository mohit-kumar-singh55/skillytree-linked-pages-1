import React from 'react'
import LeftArrowIcon from '../../../icons/LeftArrowIcon'

const LeftArrowButton = ({ handleLastWeek }) => {
  return (
    <div
      onClick={() => handleLastWeek()}
      className="flex h-[27px] w-[42.11px] cursor-pointer items-center justify-center rounded-md bg-[#FC4D6D] text-white"
    >
      <LeftArrowIcon />
    </div>
  )
}

export default LeftArrowButton
