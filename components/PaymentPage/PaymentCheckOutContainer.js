import React, { useState } from 'react';
import PaymentProfileContainer from './PaymentProfileContainer';
import PopUpContainer from './PopUpContainer';
import { useRecoilState } from "recoil";
import { openPopUps } from "../../Atoms/PopUpAtoms";
import { totalSelectedSlots } from "../../Atoms/PopUpAtoms";

const PaymentCheckOutContainer = () => {
    const [openPopUp, setOpenPopUp] = useRecoilState(openPopUps);
    const [totalSelectedTimes, setTotalSelectedTimes] = useRecoilState(totalSelectedSlots);

    return (
        <div className='flex w-full min-h-fit h-full py-10 flex-wrap-reverse justify-center gap-10 mx-auto items-center bg-[#F8D3A87A]'>
            <PopUpContainer setOpenPopUp={setOpenPopUp} totalSelectedTimes={totalSelectedTimes} openPopUp={openPopUp} setTotalSelectedTimes={setTotalSelectedTimes} />
            <PaymentProfileContainer setOpenPopUp={setOpenPopUp} totalSelectedTimes={totalSelectedTimes} openPopUp={openPopUp} />
        </div>
    )
}

export default PaymentCheckOutContainer;