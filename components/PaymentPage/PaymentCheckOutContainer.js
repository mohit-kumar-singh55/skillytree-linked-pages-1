import React, { useState } from 'react'
import PaymentProfileContainer from './PaymentProfileContainer'
import PopUpContainer from './PopUpContainer'
import { useRecoilState } from 'recoil'
import { openPopUps } from '../../Atoms/PopUpAtoms'
import { totalSelectedSlots } from '../../Atoms/PopUpAtoms'

const PaymentCheckOutContainer = () => {
  const [openPopUp, setOpenPopUp] = useRecoilState(openPopUps)
  const [totalSelectedTimes, setTotalSelectedTimes] =
    useRecoilState(totalSelectedSlots)

  return (
    <div className="mx-auto flex h-full min-h-fit w-full flex-wrap-reverse items-center justify-center gap-10 bg-[#F8D3A87A] py-10">
      <PopUpContainer
        setOpenPopUp={setOpenPopUp}
        totalSelectedTimes={totalSelectedTimes}
        openPopUp={openPopUp}
        setTotalSelectedTimes={setTotalSelectedTimes}
      />
      <PaymentProfileContainer
        setOpenPopUp={setOpenPopUp}
        totalSelectedTimes={totalSelectedTimes}
        openPopUp={openPopUp}
      />
    </div>
  )
}

export default PaymentCheckOutContainer
