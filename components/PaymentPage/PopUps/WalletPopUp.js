import React from 'react'
import CrossIcon from '../../../icons/CrossIcon'
import PopUpButton from '../../Utils/Buttons/PopUpButton'
import Image from 'next/image'
import wallet from '../../../public/Images/wallet.svg'

const WalletPopUp = ({ setOpenPopUp, totalSelectedTimes }) => {
  return (
    <div className="h-[594px] w-[406px] rounded-3xl bg-white text-[#FC4D6D] sm:h-[683px] sm:w-[521px]">
      {/* top */}
      <TopHeader setOpenPopUp={setOpenPopUp} />

      {/* main */}
      <div className="flex w-full flex-col items-center p-2 pt-4 sm:px-4 sm:py-2">
        <div className="flex w-full flex-col items-center pb-4 pt-2">
          {/* center */}
          <div className="h-[381.56px] w-[360.95px] overflow-y-scroll rounded-xl bg-[#FFF1F3] px-1 py-2 sm:h-[506px] sm:w-[472px]">
            <div className="flex w-full flex-col items-center gap-5 px-3 pt-2 font-roboto text-[#FFFFFF]">
              {/* top sticky */}
              <div className="sticky top-0 z-20 flex h-[33.58px] w-[336.53px] items-center justify-between rounded-lg bg-[#FC4D6D] pl-1 pr-3 text-[15px] tracking-widest sm:h-[44px] sm:w-[441px] sm:text-[18px]">
                <div className="flex items-center justify-between gap-1">
                  <div className="relative h-[27.1px] w-[29.45px] sm:h-[35.51px] sm:w-[38.6px]">
                    <Image
                      src={wallet}
                      alt="wallet"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <p className="font-bold">Your Balance :</p>
                </div>
                <p className="font-bold">$120</p>
              </div>

              {/* cards */}
              {/* map on this cards component */}
              <Cards />
            </div>
          </div>
        </div>

        {/* bottom */}
        <BottomButton totalSelectedTimes={totalSelectedTimes} />
      </div>
    </div>
  )
}

export default WalletPopUp

// Top Title
const TopHeader = ({ setOpenPopUp }) => {
  return (
    <div className="flex h-10 w-full items-center justify-between border-b border-[#DCDCDC] px-5 py-7">
      <p className="text-xl font-bold">Pay From Wallet</p>
      <span onClick={() => setOpenPopUp({ ...false, walletPopUp: false })}>
        <CrossIcon />
      </span>
    </div>
  )
}

// Cards
const Cards = () => {
  return (
    <div className="relative flex h-[129.73px] w-[333.53px] flex-col justify-center gap-5 overflow-hidden rounded-xl bg-[#FC4D6D] bg-gradient-to-br from-[#FC4D6D] to-[#FDA02F] p-5 font-poppins capitalize sm:h-[170px] sm:w-[437px]">
      <p className="z-10 w-[50%] text-[16.79px] font-semibold sm:text-[21.07px]">
        Add $100 to your wallet & get
      </p>
      {/* gradient circle */}
      <span className="absolute -top-[142px] -left-[124px] h-[300px] w-[300px] rounded-full bg-gradient-to-r from-transparent to-[#FFB65D96] sm:-top-[122px] sm:-left-[85px]" />
      <div className="z-10 flex items-center justify-between">
        <p className="text-[22.13px] font-extrabold sm:text-[29px]">
          $10 extra
        </p>
        <button className="h-[22.07px] w-[71.11px] rounded-full border-none bg-[#FFFFFF] text-center text-[12px] font-bold text-[#FC4D6D] sm:h-[27px] sm:w-[87px] sm:text-[15px]">
          Buy Now
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
      <PopUpButton label="Proceed" />
    </div>
  )
}
