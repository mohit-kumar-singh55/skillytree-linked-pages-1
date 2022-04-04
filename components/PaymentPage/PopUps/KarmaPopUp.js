import React from 'react'
import CrossIcon from '../../../icons/CrossIcon'
import PopUpButton from '../../Utils/Buttons/PopUpButton'

const KarmaPopUp = ({ setOpenPopUp, totalSelectedTimes }) => {
  return (
    <div className="h-[594px] w-[406px] rounded-3xl bg-white text-[#FC4D6D] sm:h-[683px] sm:w-[521px]">
      {/* top */}
      <TopHeader setOpenPopUp={setOpenPopUp} />

      {/* main */}
      <div className="flex w-full flex-col items-center p-2 pt-4 sm:px-4 sm:py-2">
        <div className="flex w-full flex-col items-center pb-4 pt-5">
          {/* center */}
          <div className="h-[381.56px] w-[360.95px] overflow-y-scroll rounded-xl bg-[#FFF1F3] px-1 py-2 sm:h-[506px] sm:w-[472px]">
            <div className="flex w-full flex-col items-center gap-5 px-3 pt-2">
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

export default KarmaPopUp

// Top Title
const TopHeader = ({ setOpenPopUp }) => {
  return (
    <div className="flex h-10 w-full items-center justify-between border-b border-[#DCDCDC] px-5 py-7">
      <p className="text-xl font-bold">Apply Karma Points</p>
      <span onClick={() => setOpenPopUp({ ...false, karmaPopUp: false })}>
        <CrossIcon />
      </span>
    </div>
  )
}

// Available Points
const AvailablePoints = () => {
  return (
    <div className="flex h-[42.23px] w-[335.54px] items-center justify-between rounded-2xl bg-[#FFFFFF] px-4 font-roboto text-[16px] sm:h-[56px] sm:w-[455px] sm:text-[20px]">
      <p className="font-bold text-[#5E5252]">Available Points</p>
      <p className="font-semibold text-[#777777]">150</p>
    </div>
  )
}

// Points Worth
const PointsWorth = () => {
  return (
    <div className="flex h-[42.23px] w-[335.54px] items-center justify-between rounded-2xl bg-[#FFFFFF] px-4 font-roboto text-[16px] sm:h-[56px] sm:w-[455px] sm:text-[20px]">
      <p className="font-bold text-[#5E5252]">Points Worths</p>
      <p className="font-semibold text-[#777777]">$150.00</p>
    </div>
  )
}

// Points To Redeem
const PointsToRedeem = () => {
  return (
    <div className="flex h-[113.86px] w-[335.54px] flex-col justify-center gap-5 rounded-2xl bg-[#FFFFFF] px-4 font-roboto text-[16px] sm:h-[151px] sm:w-[455px] sm:text-[20px]">
      <p className="font-bold text-[#5E5252]">Enter Points To Redeem!!</p>
      <div className="flex items-center justify-between">
        <input
          className="h-[30.92px] w-[164.38px] rounded-md border-2 border-[#CACACA] text-[16px] font-semibold text-[#555555] outline-none focus:outline-none sm:h-[41px] sm:w-[218px] sm:text-[18px]"
          type="number"
        />
        <p className="flex h-[30.92px] w-[101.04px] items-center justify-center rounded-xl bg-[#ADFFB0] text-center font-semibold text-[#07740C] sm:h-[41px] sm:w-[134px]">
          $100
        </p>
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
