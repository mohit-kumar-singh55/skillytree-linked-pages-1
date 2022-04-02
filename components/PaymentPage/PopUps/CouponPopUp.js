import React from 'react';
import CrossIcon from '../../../icons/CrossIcon';
import PopUpButton from "../../Utils/Buttons/PopUpButton";

const CouponPopUp = ({ setOpenPopUp, totalSelectedTimes }) => {
    const couponDetails = [
        { percentOff: 50, code: 'SKILLY123E', offer: 'Valid on order above $200' },
        { percentOff: 50, code: 'SKILLY123E', offer: 'Valid on order above $200' },
        { percentOff: 50, code: 'SKILLY123E', offer: 'Valid on order above $200' },
        { percentOff: 50, code: 'SKILLY123E', offer: 'Valid on order above $200' },
        { percentOff: 50, code: 'SKILLY123E', offer: 'Valid on order above $200' },
        { percentOff: 50, code: 'SKILLY123E', offer: 'Valid on order above $200' },
        { percentOff: 50, code: 'SKILLY123E', offer: 'Valid on order above $200' },
    ]

    return (
        <div className='w-[406px] h-[594px] sm:w-[521px] sm:h-[683px] text-[#FC4D6D] rounded-3xl bg-white'>
            {/* top */}
            <TopHeader setOpenPopUp={setOpenPopUp} />

            {/* main */}
            <div className='flex flex-col sm:px-4 sm:py-2 p-2 pt-4 w-full items-center'>
                <div className='pb-4 flex items-center flex-col w-full'>
                    {/* top */}
                    <InputTop />

                    {/* center */}
                    <div className='sm:w-[472px] sm:h-[441px] overflow-y-scroll bg-[#FFF1F3] w-[360.95px] h-[383.56px] rounded-xl px-1 py-2'>
                        <div className='w-full flex items-center flex-col gap-3 px-3'>
                            {/* Mapping on the cards */}
                            {couponDetails?.map((value, i) => (
                                <CouponCards key={i} value={value} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* bottom */}
                <BottomButton totalSelectedTimes={totalSelectedTimes} />
            </div>
        </div>
    )
}

export default CouponPopUp;


// Top Title
const TopHeader = ({ setOpenPopUp }) => {
    return (
        <div className='flex w-full h-10 justify-between items-center px-5 py-7 border-b border-[#DCDCDC]'>
            <p className='font-bold text-xl'>Apply Discount Coupon</p>
            <span onClick={() => setOpenPopUp({ ...false, couponPopUp: false })}>
                <CrossIcon />
            </span>
        </div>
    )
}


// Input Box
const InputTop = () => {
    return (
        <div className='sm:pb-6 pb-3 sm:pt-4 flex items-center w-full px-3 flex-wrap'>
            <div className='px-3 w-full flex sm:items-start'>
                <input className='sm:w-[258px] sm:h-[36px] w-full h-[32px] px-4 py-1 font-roboto text-[#989898] placeholder:text-[#989898] placeholder:font-roboto text-[13px] outline-none border-2 border-[#CACACA] rounded-md'
                    type="text"
                    placeholder='Enter Coupon Code Here'
                />
            </div>
        </div>
    )
}


// Coupon Cards
const CouponCards = ({ value }) => {
    return (
        <div className='w-full flex flex-col gap-2 font-roboto border-b border-b-[#8B8B8B] pb-4'>
            <div className='flex items-center justify-between'>
                <p className='font-semibold text-[#4B4747] sm:text-[16px] text-[14px]'>
                    {value.percentOff}% OFF
                </p>
                <p className='text-[#757575] sm:w-[124px] sm:h-[25px] w-[94.23px] h-[19px] sm:text-[15px] text-[13px] border border-dotted border-[#C1C1C1] text-center'>
                    {value.code}
                </p>
            </div>
            <div className='flex items-center justify-between text-[13px] sm:text-[14px]'>
                <p className='text-[#828282]'>
                    {value.offer}
                </p>
                <button className='border-none text-[#E31E24] sm:text-[16px] text-[14px] font-semibold sm:w-[124px] sm:h-[25px] w-[94.23px] h-[19px] text-center'>
                    Apply
                </button>
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