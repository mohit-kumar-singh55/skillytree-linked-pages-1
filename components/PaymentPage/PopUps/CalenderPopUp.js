import React, { useState, useRef, useEffect } from 'react'
import LeftArrowButton from '../../Utils/Buttons/LeftArrowButton'
import RightArrowButton from '../../Utils/Buttons/RightArrowButton'

import {
  addDays,
  startOfDay,
  startOfWeek,
  format,
  nextDay,
  previousDay,
  isToday,
  isPast,
} from 'date-fns'
import CrossIcon from '../../../Icons/CrossIcon'
import PopUpButton from '../../Utils/Buttons/PopUpButton'
import axios from 'axios'
import Router from 'next/router'
const CalenderPopUp = ({ setOpenPopUp, setTotalSelectedTimes, link }) => {
  const [selectedTimes, setSelectedTimes] = useState([])
  const [weekDates, setWeekDates] = useState(takeWeek())
  const [randomTimes, setRandomTimes] = useState([])
  const [clashedTimings, setClashedTimings] = useState([])
  const copyTimeRef = useRef()
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const weekDays = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']

  useEffect(() => {
    const initialDate = weekDates[0]
    axios
      .get(`${API_URL}/booking/week`, {
        params: { startDate: initialDate },
      })
      .then((response) => {
        setRandomTimes(response.data.data.totalSlots)
      })
  }, [API_URL, weekDates])

  // function to take week dates
  function takeWeek(start = new Date()) {
    let date = startOfWeek(startOfDay(start))
    const week = [...Array(7)].map((_, i) => addDays(date, i))
    return week
  }

  // getting fist and last days every time buttons press
  let firstDay = weekDates[0]
  let firstDayString = firstDay?.toDateString()
  let LastDay = weekDates[6]
  let LastDayString = LastDay?.toDateString()

  // to store the timeslots with their dates
  const handleTimeSlot = (rowIndex, colIndex, time, rawDate, id) => {
    if (
      selectedTimes.filter(
        (key) =>
          key.id ===
          weekDates[rowIndex].toDateString().split(' ').join('') +
            randomTimes[rowIndex][colIndex]
      ).length > 0
    ) {
      const tempSelected = [...selectedTimes].filter(
        (key) =>
          key.id !==
          weekDates[rowIndex].toDateString().split(' ').join('') +
            randomTimes[rowIndex][colIndex]
      )
      setSelectedTimes(tempSelected)
    } else {
      const newTime = {
        date: rawDate.toDateString(),
        rawDate,
        time,
        id,
      }

      setSelectedTimes([...selectedTimes, newTime])
    }
  }

  // *************** Selected items are stored in an array with Date and Time selected and Id is to filter tham individually ********************

  useEffect(() => {
    setTotalSelectedTimes(selectedTimes?.length)
  }, [selectedTimes, setTotalSelectedTimes])

  // on click of right button
  const handleNextWeek = () => {
    let lastDate = [...weekDates][6]
    const newWeek = takeWeek(nextDay(lastDate, 0))

    setWeekDates(newWeek)

    // // To CopyTime
    // if(copyTimeRef.current.checked){
    //     let
    // }
    // console.log(copyTimeRef.current.checked);
  }

  // on click of left button
  const handleLastWeek = () => {
    let firstDate = [...weekDates][0]
    const newWeek = takeWeek(previousDay(firstDate, 0))

    setWeekDates(newWeek)
  }

  const createMeetings = () => {
    //TODO Update the tutor and student id here
    axios
      .post(`${API_URL}/booking/create`, {
        selectedTimes,
        tutor: 'tutor_id',
        student: 'student_id',
      })
      .then((res) => {
        console.log(res.data)
        alert('submitted')
        Router.push('/bookings')
      })
      .catch((err) => {
        const clashed = err.response.data.message.clashedTimings.map((item) => {
          return item.id
        })

        setClashedTimings(clashed)

        alert('clash detected, please select another time slot')

        //Auto remove clashed timings
        // const clashedItems = selectedTimes.filter(
        //   (item) => clashed.filter((clash) => item.id !== clash.id).length > 0
        // );
        // setSelectedTimes(clashedItems);
      })
  }

  return (
    <div className="h-[594px] w-[406px] rounded-3xl bg-white text-[#FC4D6D] sm:h-[683px] sm:w-[521px]">
      {/* top */}
      <TopHeader setOpenPopUp={setOpenPopUp} />

      {/* main */}
      <div className="flex w-full flex-col items-center p-2 pt-4 sm:px-4 sm:py-2">
        <div className="flex w-full flex-col items-center pb-4">
          {/* top */}
          <div className="flex w-full flex-wrap items-center justify-between px-3 pb-3 sm:pb-8 sm:pt-5">
            <div className="hidden sm:inline-block">
              <LeftArrowButton handleLastWeek={handleLastWeek} />
            </div>

            {/* Date */}
            <p className="font-poppins font-medium  text-[#383737]">
              {format(weekDates[0], 'dd')} {firstDayString.split(' ')[1]} -{' '}
              {format(weekDates[6], 'dd')} {LastDayString.split(' ')[1]}
            </p>

            {/* only for les than sm */}
            <div className="flex items-center justify-between gap-8 sm:hidden">
              <LeftArrowButton handleLastWeek={handleLastWeek} />
              <RightArrowButton handleNextWeek={handleNextWeek} />
            </div>

            {/* CopyTimeSlot */}
            <div className="form-check flex items-center justify-center space-x-1">
              <input
                ref={copyTimeRef}
                type="checkbox"
                id="copyTime"
                className="form-check-input h-[18px] w-[18px] cursor-pointer appearance-none rounded-md border border-[#1180BE] bg-white bg-contain bg-center bg-no-repeat transition duration-200 checked:border-blue-600 checked:bg-blue-600 checked:text-blue-600 focus:outline-none"
              />
              <label htmlFor="copyTime" className="font-medium text-[#373737]">
                Copy Lastweek Time Slots
              </label>
            </div>

            <div className="hidden sm:inline-block">
              <RightArrowButton handleNextWeek={handleNextWeek} />
            </div>
          </div>

          {/* center */}
          <div className="h-[383.56px] w-[360.95px] overflow-y-scroll rounded-xl bg-[#FFF1F3] px-1 py-2 sm:h-[441px] sm:w-[472px]">
            <div className="flex flex-col gap-2 font-poppins">
              {/* weekdays */}
              <div className="flex items-center justify-between gap-1 px-2 text-center sm:px-4">
                {weekDays?.map((day, i) => (
                  <p
                    key={i}
                    className="w-7 text-sm font-bold uppercase text-[#565656]"
                  >
                    {day}
                  </p>
                ))}
              </div>

              {/* weekdates */}
              <div className="flex items-center justify-between gap-1 px-2 pb-3 text-center sm:px-4">
                {weekDates?.map((date, i) => (
                  <p
                    key={i}
                    className={`w-7 rounded-full bg-gradient-to-br p-[1px] font-semibold text-[#454545] ${
                      isToday(date)
                        ? 'from-[#FC4D6D] to-[#FDA02F] text-white'
                        : ''
                    }`}
                  >
                    {format(date, 'dd')}
                  </p>
                ))}
              </div>

              {/* TimeSlots */}
              <div className="flex justify-between gap-2">
                {randomTimes &&
                  randomTimes.map((times, rowIndex) => (
                    <div key={rowIndex} className="flex w-full flex-col gap-3">
                      {times.length > 0 ? (
                        times?.map((time, colIndex) => {
                          const timeB = randomTimes[rowIndex][colIndex]
                          const rawDate = weekDates[rowIndex]
                          const id =
                            rawDate.toDateString().split(' ').join('') + timeB
                          return (
                            <p
                              key={colIndex}
                              className={`cursor-pointer rounded-full px-[3px] text-center text-sm font-medium transition duration-200 sm:px-3 sm:py-[1px] sm:font-semibold ${
                                (selectedTimes?.filter(
                                  (key) =>
                                    key.id ===
                                    weekDates[rowIndex]
                                      .toDateString()
                                      .split(' ')
                                      .join('') +
                                      randomTimes[rowIndex][colIndex]
                                )).length > 0
                                  ? `${
                                      clashedTimings.includes(id)
                                        ? 'bg-blue-600'
                                        : 'bg-[#FC4D6D]'
                                    } text-white`
                                  : ''
                              }`}
                              onClick={() =>
                                handleTimeSlot(
                                  rowIndex,
                                  colIndex,
                                  timeB,
                                  rawDate,
                                  id
                                )
                              }
                            >
                              {time}
                            </p>
                          )
                        })
                      ) : (
                        <p
                          key={rowIndex}
                          className={`cursor-default rounded-full px-[3px] text-center text-sm font-medium text-[#B4B4B4] sm:px-3 sm:py-[1px] sm:font-semibold `}
                        >
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

        <BottomButton
          selectedTimes={selectedTimes}
          link={link}
          setOpenPopUp={setOpenPopUp}
        />
        <button onClick={createMeetings}>TEMP SUBMIT</button>
      </div>
    </div>
  )
}

export default CalenderPopUp

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

// Bottom Button and Sessions selected
const BottomButton = ({ selectedTimes, link, setOpenPopUp }) => {
  return (
    <div className="bottom-0 flex w-full items-center justify-between gap-4 px-3">
      {/* Left */}
      <div className="flex items-center justify-center gap-2">
        <div className="font-medium text-[#373737]">
          <p className="text-right sm:text-lg ">Total Hourly</p>
          <p>Sessions Selected</p>
        </div>
        <h2 className="text-5xl font-bold">{selectedTimes.length}</h2>
      </div>

      {/* Right */}
      <PopUpButton label="Proceed" link={link} setOpenPopUp={setOpenPopUp} />
    </div>
  )
}
