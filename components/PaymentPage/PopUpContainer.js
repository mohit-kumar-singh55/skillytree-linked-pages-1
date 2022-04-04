import React from 'react';
import CalenderPopUp from './PopUps/CalenderPopUp';
import CouponPopUp from './PopUps/CouponPopUp';
import KarmaPopUp from './PopUps/KarmaPopUp';
import WalletPopUp from './PopUps/WalletPopUp';

const PopUpContainer = ({ openPopUp, setOpenPopUp, setTotalSelectedTimes, totalSelectedTimes }) => {
    return (
        <div className='w-[406px] h-[594px] sm:w-[521px] sm:h-[683px] bg-[#FFFFFF] rounded-3xl shadow-md'>
            {openPopUp.calendarPopUp && (
                <CalenderPopUp setOpenPopUp={setOpenPopUp} setTotalSelectedTimes={setTotalSelectedTimes} />
            )}

            {openPopUp.couponPopUp && (
                <CouponPopUp setOpenPopUp={setOpenPopUp} totalSelectedTimes={totalSelectedTimes} />
            )}

            {openPopUp.karmaPopUp && (
                <KarmaPopUp setOpenPopUp={setOpenPopUp} totalSelectedTimes={totalSelectedTimes} />
            )}

            {openPopUp.walletPopUp && (
                <WalletPopUp setOpenPopUp={setOpenPopUp} totalSelectedTimes={totalSelectedTimes} />
            )}
        </div>
    )
}

export default PopUpContainer;