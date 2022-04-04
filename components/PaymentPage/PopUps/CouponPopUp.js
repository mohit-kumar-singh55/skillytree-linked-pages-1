import React from 'react'
import CrossIcon from '../../../icons/CrossIcon'
import PopUpButton from '../../Utils/Buttons/PopUpButton'

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
    <div className="h-[594px] w-[406px] rounded-3xl bg-white text-[#FC4D6D] sm:h-[683px] sm:w-[521px]">
      {/* top */}
      <TopHeader setOpenPopUp={setOpenPopUp} />

      {/* main */}
      <div className="flex w-full flex-col items-center p-2 pt-4 sm:px-4 sm:py-2">
        <div className="flex w-full flex-col items-center pb-4">
          {/* top */}
          <InputTop />

          {/* center */}
          <div className="h-[383.56px] w-[360.95px] overflow-y-scroll rounded-xl bg-[#FFF1F3] px-1 py-2 sm:h-[441px] sm:w-[472px]">
            <div className="flex w-full flex-col items-center gap-3 px-3">
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

export default CouponPopUp

// Top Title
const TopHeader = ({ setOpenPopUp }) => {
  return (
    <div className="flex h-10 w-full items-center justify-between border-b border-[#DCDCDC] px-5 py-7">
      <p className="text-xl font-bold">Apply Discount Coupon</p>
      <span onClick={() => setOpenPopUp({ ...false, couponPopUp: false })}>
        <CrossIcon />
      </span>
    </div>
  )
}

// Input Box
const InputTop = () => {
  return (
    <div className="flex w-full flex-wrap items-center px-3 pb-3 sm:pb-6 sm:pt-4">
      <div className="flex w-full px-3 sm:items-start">
        <input
          className="h-[32px] w-full rounded-md border-2 border-[#CACACA] px-4 py-1 font-roboto text-[13px] text-[#989898] outline-none placeholder:font-roboto placeholder:text-[#989898] sm:h-[36px] sm:w-[258px]"
          type="text"
          placeholder="Enter Coupon Code Here"
        />
      </div>
    </div>
  )
}

// Coupon Cards
const CouponCards = ({ value }) => {
  return (
    <div className="flex w-full flex-col gap-2 border-b border-b-[#8B8B8B] pb-4 font-roboto">
      <div className="flex items-center justify-between">
        <p className="text-[14px] font-semibold text-[#4B4747] sm:text-[16px]">
          {value.percentOff}% OFF
        </p>
        <p className="h-[19px] w-[94.23px] border border-dotted border-[#C1C1C1] text-center text-[13px] text-[#757575] sm:h-[25px] sm:w-[124px] sm:text-[15px]">
          {value.code}
        </p>
      </div>
      <div className="flex items-center justify-between text-[13px] sm:text-[14px]">
        <p className="text-[#828282]">{value.offer}</p>
        <button className="h-[19px] w-[94.23px] border-none text-center text-[14px] font-semibold text-[#E31E24] sm:h-[25px] sm:w-[124px] sm:text-[16px]">
          Apply
        </button>
      </div>
    </div>
  )
}

// Bottom Button and Sessions selected
const BottomButton = ({ totalSelectedTimes }) => {
  return (
    <div className="bottom-0 flex w-full items-center justify-between gap-4 px-3">
      {/* Left */}
      <div className="flex items-center justify-center gap-2">
        <div className="font-medium text-[#373737]">
          <p className="text-right sm:text-lg ">Total Hourly</p>
          <p>Sessions Selected</p>
        </div>
        <h2 className="text-5xl font-bold">{totalSelectedTimes}</h2>
      </div>

      {/* Right */}
      <PopUpButton label="Apply" />
    </div>
  )
}
