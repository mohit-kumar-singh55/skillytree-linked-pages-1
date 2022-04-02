import React from 'react';
import CrossIcon from '../../../icons/CrossIcon';
import PopUpButton from "../../Utils/Buttons/PopUpButton";
import Image from "next/image";
import wallet from "../../../public/Images/wallet.svg";

const WalletPopUp = ({ setOpenPopUp, totalSelectedTimes }) => {
    return (
        <div className='w-[406px] h-[594px] sm:w-[521px] sm:h-[683px] text-[#FC4D6D] rounded-3xl bg-white'>
            {/* top */}
            <TopHeader setOpenPopUp={setOpenPopUp} />

            {/* main */}
            <div className='flex flex-col sm:px-4 sm:py-2 p-2 pt-4 w-full items-center'>
                <div className='pb-4 pt-2 flex items-center flex-col w-full'>
                    {/* center */}
                    <div className='sm:w-[472px] sm:h-[506px] overflow-y-scroll bg-[#FFF1F3] w-[360.95px] h-[381.56px] rounded-xl px-1 py-2'>
                        <div className='w-full flex items-center flex-col gap-5 px-3 pt-2 text-[#FFFFFF] font-roboto'>
                            {/* top sticky */}
                            <div className='flex items-center justify-between sm:text-[18px] text-[15px] tracking-widest sm:w-[441px] sm:h-[44px] w-[336.53px] h-[33.58px] pl-1 pr-3 bg-[#FC4D6D] rounded-lg'>
                                <div className='flex items-center justify-between gap-1'>
                                    <div className='relative sm:w-[38.6px] w-[29.45px] sm:h-[35.51px] h-[27.1px]'>
                                        <Image src={wallet} alt="wallet" layout='fill' objectFit='contain' />
                                    </div>
                                    <p className='font-bold'>
                                        Your Balance :
                                    </p>
                                </div>
                                <p className='font-bold'>
                                    $120
                                </p>
                            </div>

                            {/* cards */}
                            <div className='flex flex-col relative overflow-hidden justify-center gap-5 font-poppins capitalize sm:w-[437px] sm:h-[170px] w-[333.53px] h-[129.73px] p-5 bg-[#FC4D6D] bg-gradient-to-br from-[#FC4D6D] to-[#FDA02F] rounded-xl'>
                                <p className='w-[50%] font-semibold sm:text-[21.07px] text-[16.79px] z-10'>
                                    Add $100 to your wallet & get
                                </p>
                                {/* gradient circle */}
                                <span className='absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-transparent to-[#FFB65D96] sm:-top-[122px] sm:-left-[85px] -top-[142px] -left-[124px]' />
                                {/* map on this cards component */}
                                <Cards />
                            </div>
                        </div>
                    </div>
                </div>

                {/* bottom */}
                <BottomButton totalSelectedTimes={totalSelectedTimes} />
            </div>
        </div>
    )
}

export default WalletPopUp;

// Top Title
const TopHeader = ({ setOpenPopUp }) => {
    return (
        <div className='flex w-full h-10 justify-between items-center px-5 py-7 border-b border-[#DCDCDC]'>
            <p className='font-bold text-xl'>Pay From Wallet</p>
            <span onClick={() => setOpenPopUp({ ...false, walletPopUp: false })}>
                <CrossIcon />
            </span>
        </div>
    )
}


// Cards
const Cards = () => {
    return (
        <div className='flex justify-between items-center z-10'>
            <p className='font-extrabold text-[22.13px] sm:text-[29px]'>
                $10 extra
            </p>
            <button className='border-none bg-[#FFFFFF] text-[#FC4D6D] sm:text-[15px] text-[12px] sm:w-[87px] sm:h-[27px] w-[71.11px] h-[22.07px] font-bold text-center rounded-full'>
                Buy Now
            </button>
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
            <PopUpButton label="Proceed" />
        </div>
    )
}