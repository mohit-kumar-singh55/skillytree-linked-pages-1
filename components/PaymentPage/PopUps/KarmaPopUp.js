import React from 'react';
import CrossIcon from '../../../icons/CrossIcon';
import PopUpButton from "../../Utils/Buttons/PopUpButton";

const KarmaPopUp = ({ setOpenPopUp, totalSelectedTimes }) => {
    return (
        <div className='w-[406px] h-[594px] sm:w-[521px] sm:h-[683px] text-[#FC4D6D] rounded-3xl bg-white'>
            {/* top */}
            <TopHeader setOpenPopUp={setOpenPopUp} />

            {/* main */}
            <div className='flex flex-col sm:px-4 sm:py-2 p-2 pt-4 w-full items-center'>
                <div className='pb-4 pt-5 flex items-center flex-col w-full'>
                    {/* center */}
                    <div className='sm:w-[472px] sm:h-[506px] overflow-y-scroll bg-[#FFF1F3] w-[360.95px] h-[381.56px] rounded-xl px-1 py-2'>
                        <div className='w-full flex items-center flex-col gap-5 px-3 pt-2'>
                            {/* Available points */}
                            <AvailablePoints />
                            {/* Points Worths */}
                            <PointsWorth />
                            {/* Points To Redeem */}
                            <PointsToRedeem />
                        </div>
                    </div>
                </div>

                {/* bottom */}
                <BottomButton totalSelectedTimes={totalSelectedTimes} />
            </div>
        </div>
    )
}

export default KarmaPopUp;

// Top Title
const TopHeader = ({ setOpenPopUp }) => {
    return (
        <div className='flex w-full h-10 justify-between items-center px-5 py-7 border-b border-[#DCDCDC]'>
            <p className='font-bold text-xl'>Apply Karma Points</p>
            <span onClick={() => setOpenPopUp({ ...false, karmaPopUp: false })}>
                <CrossIcon />
            </span>
        </div>
    )
}


// Available Points
const AvailablePoints = () => {
    return (
        <div className='flex items-center justify-between sm:text-[20px] text-[16px] px-4 rounded-2xl sm:w-[455px] sm:h-[56px] w-[335.54px] h-[42.23px] font-roboto bg-[#FFFFFF]'>
            <p className='font-bold text-[#5E5252]'>
                Available Points
            </p>
            <p className='text-[#777777] font-semibold'>
                150
            </p>
        </div>
    )
}


// Points Worth
const PointsWorth = () => {
    return (
        <div className='flex items-center justify-between sm:text-[20px] text-[16px] px-4 rounded-2xl sm:w-[455px] sm:h-[56px] w-[335.54px] h-[42.23px] font-roboto bg-[#FFFFFF]'>
            <p className='font-bold text-[#5E5252]'>
                Points Worths
            </p>
            <p className='text-[#777777] font-semibold'>
                $150.00
            </p>
        </div>
    )
}


// Points To Redeem
const PointsToRedeem = () => {
    return (
        <div className='flex flex-col justify-center gap-5 sm:text-[20px] text-[16px] px-4 rounded-2xl sm:w-[455px] sm:h-[151px] w-[335.54px] h-[113.86px] font-roboto bg-[#FFFFFF]'>
            <p className='font-bold text-[#5E5252]'>
                Enter Points To Redeem!!
            </p>
            <div className='flex items-center justify-between'>
                <input className='outline-none focus:outline-none text-[#555555] font-semibold sm:text-[18px] text-[16px] border-2 border-[#CACACA] rounded-md sm:w-[218px] sm:h-[41px] w-[164.38px] h-[30.92px]'
                    type="number"
                />
                <p className='font-semibold flex items-center justify-center text-[#07740C] bg-[#ADFFB0] rounded-xl sm:w-[134px] sm:h-[41px] w-[101.04px] h-[30.92px] text-center'>
                    $100
                </p>
            </div>
        </div>
    )
}


// Bottom Button and Sessions selected
const BottomButton = ({ totalSelectedTimes }) => {
    return (
        <div className='flex items-center justify-between gap-4 w-full px-3 bottom-0'>
            {/* Left */}
            <div className='flex justify-center items-center gap-2'>
                <div className='text-[#373737] font-medium'>
                    <p className='text-right sm:text-lg '>Total Hourly</p>
                    <p>Sessions Selected</p>
                </div>
                <h2 className='font-bold text-5xl'>{totalSelectedTimes}</h2>
            </div>

            {/* Right */}
            <PopUpButton label="Apply" />
        </div>
    )
}