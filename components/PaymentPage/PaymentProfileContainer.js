import React, { useEffect } from 'react'
import Image from 'next/image'
import userImage from '../../public/Images/userImage.png'
import hat from '../../public/Images/hat.svg'
import ukFlag from '../../public/Images/ukFlag.svg'

const PaymentProfileContainer = ({
  openPopUp,
  setOpenPopUp,
  totalSelectedTimes,
}) => {
  let baseTotal = totalSelectedTimes * 10
  let transactionFee = baseTotal / 10 // 10% of BT
  let subTotal = baseTotal + transactionFee
  let couponDiscount = subTotal / 10 // 10% of ST
  let karmaPoints = Math.round(5 * subTotal) / 100 // 5% of ST
  let discountedTotal = Math.round(subTotal - couponDiscount) - karmaPoints
  let tax1 = Math.round(9 * discountedTotal) / 100 // 9% of DT
  let tax2 = Math.round(9 * discountedTotal) / 100
  let finalPayableTotal = Math.round(discountedTotal + tax1) + tax2 // 9% of DT

  return (
    <div className="flex h-[594px] w-[406px] flex-col gap-4 sm:h-[683px] sm:w-[490px]">
      {/* Profile */}
      <Profile setOpenPopUp={setOpenPopUp} />

      {/* Time and Money */}
      <TimeAndMoney
        openPopUp={openPopUp}
        setOpenPopUp={setOpenPopUp}
        totalSelectedTimes={totalSelectedTimes}
        baseTotal={baseTotal}
      />

      {/* Payment Details */}
      <PaymentDetails
        setOpenPopUp={setOpenPopUp}
        baseTotal={baseTotal}
        transactionFee={transactionFee}
        subTotal={subTotal}
        couponDiscount={couponDiscount}
        karmaPoints={karmaPoints}
        discountedTotal={discountedTotal}
        tax1={tax1}
        tax2={tax2}
        finalPayableTotal={finalPayableTotal}
      />

      {/* Button */}
      <PayNow setOpenPopUp={setOpenPopUp} />
    </div>
  )
}

export default PaymentProfileContainer

// Profile
const Profile = ({ setOpenPopUp }) => {
  return (
    <div className="flex h-[82px] w-[406px] items-center justify-between rounded-lg bg-[#FBFBFB] px-[9px] py-[10px] sm:h-[109px] sm:w-[491px] sm:px-[23px] sm:py-[13px]">
      {/* Image and details */}
      <div className="flex items-center gap-3 sm:gap-5">
        <div className="relative h-[60.41px] w-[61.95px] rounded-lg border-2 border-[#FC4D6D] sm:h-[80px] sm:w-[79px]">
          <Image src={userImage} alt="user" layout="fill" objectFit="contain" />
        </div>
        <div className="flex flex-col gap-2 sm:gap-5">
          <div className="flex items-center gap-2 sm:gap-4">
            <p className="text-[16px] font-bold text-[#665F60] sm:text-lg">
              ELLA . H
            </p>
            {/* greenTick */}
            <svg
              className="h-[15.86px] w-[16.47px] sm:h-[21px] sm:w-[21px]"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.6587 3.41101C12.13 2.72986 10.4221 2.56112 8.78965 2.92995C7.15723 3.29877 5.68776 4.1854 4.6004 5.4576C3.51305 6.72981 2.86607 8.31942 2.75595 9.98936C2.64584 11.6593 3.07849 13.3201 3.98938 14.7241C4.90027 16.128 6.24059 17.1999 7.81045 17.7799C9.38031 18.3599 11.0956 18.4169 12.7005 17.9424C14.3054 17.4679 15.7139 16.4873 16.7159 15.1469C17.718 13.8064 18.2599 12.178 18.2609 10.5044V9.66522C18.2609 8.90883 18.874 8.29566 19.6304 8.29566C20.3868 8.29566 21 8.90883 21 9.66522V10.5052C20.9987 12.7695 20.2655 14.9734 18.9098 16.7869C17.5541 18.6004 15.6484 19.9271 13.4771 20.5691C11.3058 21.2111 8.98512 21.134 6.86119 20.3493C4.73726 19.5646 2.92389 18.1144 1.69151 16.2149C0.459129 14.3154 -0.126219 12.0685 0.0227606 9.80914C0.171741 7.5498 1.04707 5.39915 2.51819 3.67794C3.98932 1.95672 5.97742 0.757161 8.186 0.258163C10.3946 -0.240835 12.7053 -0.0125362 14.7735 0.90901C15.4644 1.21686 15.7749 2.02651 15.4671 2.71742C15.1592 3.40833 14.3496 3.71886 13.6587 3.41101Z"
                fill="#03CD0B"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.6151 2.40474C21.1279 2.94478 21.1283 3.8208 20.616 4.36138L11.866 13.5943C11.6199 13.854 11.286 13.9999 10.9378 14C10.5896 14.0001 10.2556 13.8543 10.0094 13.5948L7.38442 10.8277C6.87186 10.2874 6.87186 9.41134 7.38442 8.87103C7.89699 8.33072 8.72801 8.33072 9.24058 8.87103L10.937 10.6593L18.759 2.40572C19.2713 1.86514 20.1023 1.8647 20.6151 2.40474Z"
                fill="#03CD0B"
              />
            </svg>
            <div className="relative  h-[15.86px] w-[14.9px] rounded-full sm:h-[21px] sm:w-[21px]">
              <Image
                src={ukFlag}
                alt="flag"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative h-[15.1px] w-[17.25px] sm:h-[20px] sm:w-[22px]">
              <Image src={hat} alt="hat" layout="fill" objectFit="contain" />
            </div>
            <p className="text-[12px] text-[#474747] sm:text-[15px]">English</p>
          </div>
        </div>
      </div>

      {/* Button to review times */}
      <button
        onClick={() => setOpenPopUp({ ...false, calendarPopUp: true })}
        className="h-[55.53px] w-[150.1px] rounded-md border border-[#FC4D6D] font-poppins text-[12px] font-semibold text-[#434343] transition-all duration-300 focus:border-2 sm:h-[64px] sm:w-[173px] sm:text-sm"
      >
        <p>Click to Review</p>
        <p>Selected TimeSlots</p>
      </button>
    </div>
  )
}

// Time and Money
const TimeAndMoney = ({
  setOpenPopUp,
  openPopUp,
  totalSelectedTimes,
  baseTotal,
}) => {
  return (
    <div className="flex h-[97px] w-[406px] justify-between rounded-lg bg-[#FBFBFB] px-[15px] py-[12px] font-roboto text-[18px] font-bold sm:h-[109px] sm:w-[491px] sm:px-[23px] sm:py-[13px] sm:text-lg">
      <div className="flex flex-col items-center justify-between sm:items-start">
        <p className=" text-[#9D9898] ">Total Sessions</p>
        <p className="text-[#2D2D2D]">
          {totalSelectedTimes} Hrs{' '}
          <small
            onClick={() =>
              setOpenPopUp({
                ...false,
                calendarPopUp: openPopUp.calendarPopUp ? false : true,
              })
            }
            className="ml-2 cursor-pointer border-b border-b-[#FC4D6D] pb-[0.5px] font-poppins font-medium text-[#FC4D6D] sm:pb-[1px]"
          >
            Edit
          </small>
        </p>
      </div>
      <div className="flex flex-col justify-between">
        <p className="text-[#9D9898]">Fee/Hr</p>
        <p className="text-[#2D2D2D]">$10</p>
      </div>
      <div className="flex flex-col items-center justify-between sm:items-end">
        <p className="text-[#9D9898]">Base Total</p>
        <p className="text-[#2D2D2D]">${baseTotal}</p>
      </div>
    </div>
  )
}

// Payment Details
const PaymentDetails = ({
  setOpenPopUp,
  baseTotal,
  transactionFee,
  subTotal,
  couponDiscount,
  karmaPoints,
  discountedTotal,
  tax1,
  tax2,
  finalPayableTotal,
}) => {
  return (
    <div className="flex h-[346px] w-[406px] flex-col rounded-lg bg-[#FBFBFB] px-[9px] py-[10px] font-poppins text-[15px] font-medium text-[#8C8C8C] sm:h-[349px] sm:w-[491px] sm:px-[23px] sm:py-[13px]">
      <div className="flex h-[85%] flex-col justify-between border-b border-b-[#565656] pb-4">
        <div className="flex items-center justify-between">
          <p>Base Total &#40;Total 21 hours x $10&#41;</p>
          <p>${baseTotal}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Transactional Fee</p>
          <p>${transactionFee}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Sub Total</p>
          <p>${subTotal}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="border-b-[1.5px] border-b-[#A9A9A9]">
            Apply Coupon Discount
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpenPopUp({ ...false, couponPopUp: true })}
              className="sm:text[14px] h-[21.9px] w-[127px] rounded-md border border-[#A9A9A9] text-[13px] font-semibold text-[#A9A9A9] sm:h-[25px] sm:w-[145px]"
            >
              XMASTEN
            </button>
            <p className="text-[#FC4D6D]">-${couponDiscount}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="border-b-[1.5px] border-b-[#A9A9A9]">
            Apply Karma Points
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpenPopUp({ ...false, karmaPopUp: true })}
              className="sm:text[14px] h-[21.9px] w-[127px] rounded-md border border-[#A9A9A9] text-[13px] font-semibold text-[#A9A9A9] sm:h-[25px] sm:w-[145px]"
            >
              11.5 Points
            </button>
            <p className="text-[#FC4D6D]">-${karmaPoints}</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p>Discounted Total</p>
          <p className="text-[#15C11C]">${discountedTotal}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Tax 1</p>
          <p>${tax1}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Tax 2</p>
          <p>${tax2}</p>
        </div>
      </div>

      {/* Total */}
      <div className="mt-3 flex h-[10%] items-center justify-between text-lg font-semibold">
        <p>Final Payable Total</p>
        <p className="text-[#5F5F5F]">${finalPayableTotal}</p>
      </div>
    </div>
  )
}

// Bottom pay Now
const PayNow = ({ setOpenPopUp }) => {
  return (
    <div className="flex justify-end pt-2">
      <button
        onClick={() => setOpenPopUp({ ...false, walletPopUp: true })}
        className="h-[37px] w-full rounded-full bg-gradient-to-r from-pink to-gradient_yellow px-4 text-center text-lg font-bold text-white sm:h-[37px] sm:w-[133px]"
      >
        Pay Now
      </button>
    </div>
  )
}
