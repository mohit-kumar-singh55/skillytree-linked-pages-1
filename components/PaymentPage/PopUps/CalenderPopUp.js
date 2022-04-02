import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import LeftArrowButton from "../../Utils/Buttons/LeftArrowButton";
import RightArrowButton from "../../Utils/Buttons/RightArrowButton";
import { addDays, startOfDay, startOfWeek, format, nextDay, previousDay, isToday, isPast } from "date-fns";
import CrossIcon from '../../../icons/CrossIcon';
import PopUpButton from '../../Utils/Buttons/PopUpButton';

const CalenderPopUp = ({ setOpenPopUp, setTotalSelectedTimes, link }) => {
    const [selectedTimes, setSelectedTimes] = useState([]);
    const [weekDates, setWeekDates] = useState(takeWeek());
    const copyTimeRef = useRef();


    const weekDays = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    const randomTime = [
        ['14:30', '15:30', '16:30', '17:30', '18:30', '19:30'],
        ['12:30', '15:30', '18:20', '19:35', '20:30', '21:30', '22:25', '23:00'],
        ['11:25', '15:30', '12:45', '15:45', '16:50'],
        ['10:30', '11:45', '12:00', '13:25', '15:25', '20:25'],
        ['12:20', '14:20', '16:20', '17:45', '18:25', '19:45', '20:45'],
        [],
        ['10:45', '11:55', '13:45', '16:45', '18:45'],
    ]

    // function to take week dates
    function takeWeek(start = new Date()) {
        let date = startOfWeek(startOfDay(start));
        const week = [...Array(7)].map((_, i) => addDays(date, i));
        return week;
    }

    // getting fist and last days every time buttons press
    let firstDay = weekDates[0];
    let firstDayString = firstDay?.toDateString();
    let LastDay = weekDates[6];
    let LastDayString = LastDay?.toDateString();


    // to store the timeslots with their dates
    const handleTimeSlot = (rowIndex, colIndex) => {
        if ((selectedTimes.filter((key) => key.id === (weekDates[rowIndex].toDateString().split(' ').join('') + randomTime[rowIndex][colIndex]))).length > 0) {
            const tempSelected = [...selectedTimes].filter((key) => key.id !== (weekDates[rowIndex].toDateString().split(' ').join('') + randomTime[rowIndex][colIndex]))
            setSelectedTimes(tempSelected);
        }
        else {
            const newTime = {
                date: weekDates[rowIndex].toDateString(),
                time: randomTime[rowIndex][colIndex],
                id: weekDates[rowIndex].toDateString().split(' ').join('') + randomTime[rowIndex][colIndex]
            }

            const tempSelected = [...selectedTimes];
            tempSelected.push(newTime);

            setSelectedTimes(tempSelected);

            // setSelectedTimes(selectedTimes.length);
        }
    }


    // *************** Selected items are stored in an array with Date and Time selected and Id is to filter tham individually ********************
    console.log(selectedTimes);


    useEffect(() => {
        setTotalSelectedTimes(selectedTimes?.length);
    }, [selectedTimes, setTotalSelectedTimes])


    // on click of right button
    const handleNextWeek = () => {
        let lastDate = [...weekDates][6];
        const newWeek = takeWeek(nextDay(lastDate, 0));

        setWeekDates(newWeek);


        // // To CopyTime
        // if(copyTimeRef.current.checked){
        //     let 
        // }
        // console.log(copyTimeRef.current.checked);
    }


    // on click of left button
    const handleLastWeek = () => {
        let firstDate = [...weekDates][0];
        const newWeek = takeWeek(previousDay(firstDate, 0));

        setWeekDates(newWeek);
    }

    return (
        <div className='w-[406px] h-[594px] sm:w-[521px] sm:h-[683px] text-[#FC4D6D] rounded-3xl bg-white shadow-xl'>
            {/* top */}
            <TopHeader setOpenPopUp={setOpenPopUp} />

            {/* main */}
            <div className='flex flex-col sm:px-4 sm:py-2 p-2 pt-4 w-full items-center'>
                <div className='pb-4 flex items-center flex-col w-full'>
                    {/* top */}
                    <div className='sm:pb-8 pb-3 sm:pt-5 flex items-center justify-between w-full px-3 flex-wrap'>
                        <div className='hidden sm:inline-block'>
                            <LeftArrowButton handleLastWeek={handleLastWeek} />
                        </div>

                        {/* Date */}
                        <p className='text-[#383737] font-medium  font-poppins'>
                            {format(weekDates[0], 'dd')} {firstDayString.split(' ')[1]} - {format(weekDates[6], 'dd')} {LastDayString.split(' ')[1]}
                        </p>

                        {/* only for les than sm */}
                        <div className='sm:hidden flex items-center justify-between gap-8'>
                            <LeftArrowButton handleLastWeek={handleLastWeek} />
                            <RightArrowButton handleNextWeek={handleNextWeek} />
                        </div>

                        {/* CopyTimeSlot */}
                        <div className='flex items-center justify-center space-x-1 form-check'>
                            <input ref={copyTimeRef} type="checkbox" id="copyTime" className='border border-[#1180BE] rounded-md w-[18px] h-[18px] form-check-input appearance-none bg-white checked:bg-blue-600 checked:border-blue-600 checked:text-blue-600 focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain cursor-pointer' />
                            <label htmlFor="copyTime" className='text-[#373737] font-medium'>Copy Lastweek Time Slots</label>
                        </div>

                        <div className='hidden sm:inline-block'>
                            <RightArrowButton handleNextWeek={handleNextWeek} />
                        </div>
                    </div>

                    {/* center */}
                    <div className='sm:w-[472px] sm:h-[441px] overflow-y-scroll bg-[#FFF1F3] w-[360.95px] h-[383.56px] rounded-xl px-1 py-2'>
                        <div className='flex flex-col gap-2 font-poppins'>
                            {/* weekdays */}
                            <div className='flex items-center justify-between gap-1 text-center px-2 sm:px-4'>
                                {weekDays?.map((day, i) => (
                                    <p key={i} className='text-[#565656] font-bold uppercase w-7 text-sm'>{day}</p>
                                ))}
                            </div>

                            {/* weekdates */}
                            <div className='flex items-center justify-between gap-1 text-center px-2 sm:px-4 pb-3'>
                                {weekDates?.map((date, i) => (
                                    <p key={i} className={`text-[#454545] font-semibold rounded-full w-7 p-[1px] bg-gradient-to-br ${isToday(date) ? 'text-white from-[#FC4D6D] to-[#FDA02F]' : ''}`}>
                                        {format(date, 'dd')}
                                    </p>
                                ))}
                            </div>

                            {/* TimeSlots */}
                            <div className='flex justify-between gap-2'>
                                {randomTime?.map((times, rowIndex) => (
                                    <div key={rowIndex} className='flex flex-col w-full gap-3'>
                                        {times.length > 0 ? (
                                            times?.map((time, colIndex) => (
                                                <p key={colIndex} className={`font-medium sm:font-semibold text-sm px-[3px] sm:px-3 sm:py-[1px] rounded-full cursor-pointer transition duration-200 text-center ${(selectedTimes?.filter((key) => key.id === (weekDates[rowIndex].toDateString().split(' ').join('') + randomTime[rowIndex][colIndex]))).length > 0 ? 'bg-[#FC4D6D] text-white' : ''}`}
                                                    onClick={() => handleTimeSlot(rowIndex, colIndex)}
                                                >
                                                    {time}
                                                </p>
                                            ))
                                        ) : (
                                            <p key={rowIndex} className={`font-medium sm:font-semibold text-sm px-[3px] sm:px-3 sm:py-[1px] rounded-full cursor-default text-center text-[#B4B4B4] `}>
                                                NA
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* bottom */}
                <BottomButton selectedTimes={selectedTimes} link={link} />
            </div>
        </div >
    )
}

export default CalenderPopUp;


// Top Title
const TopHeader = ({ setOpenPopUp }) => {
    return (
        <div className='flex w-full h-10 justify-between items-center px-5 py-7 border-b border-[#DCDCDC]'>
            <p className='font-bold text-xl'>Select Your Hourly Slots</p>
            <span onClick={() => setOpenPopUp({ ...false, calendarPopUp: false })}>
                <CrossIcon />
            </span>
        </div>
    )
}


// Bottom Button and Sessions selected
const BottomButton = ({ selectedTimes, link }) => {
    return (
        <div className='flex items-center justify-between gap-4 w-full px-3 bottom-0'>
            {/* Left */}
            <div className='flex justify-center items-center gap-2'>
                <div className='text-[#373737] font-medium'>
                    <p className='text-right sm:text-lg '>Total Hourly</p>
                    <p>Sessions Selected</p>
                </div>
                <h2 className='font-bold text-5xl'>{selectedTimes.length}</h2>
            </div>

            {/* Right */}
            <PopUpButton label="Proceed" link={link} />
        </div>
    )
}