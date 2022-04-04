import Link from 'next/link'
import React, { useState } from 'react'
import CourseCart from './CourseCart'
import CalenderPopUp from '../components/PaymentPage/PopUps/CalenderPopUp'
import { useRecoilState } from 'recoil'
import { openPopUps } from '../Atoms/PopUpAtoms'
import { totalSelectedSlots } from '../Atoms/PopUpAtoms'

function TutorsList() {
  const [openPopUp, setOpenPopUp] = useRecoilState(openPopUps)
  const [totalSelectedTimes, setTotalSelectedTimes] =
    useRecoilState(totalSelectedSlots)

  return (
    <main className="mx-auto flex h-[calc(100vh-79px)] w-full max-w-[calc(1440px-160px)] snap-y snap-mandatory flex-wrap items-center justify-evenly gap-y-[6rem] gap-x-2 overflow-scroll overflow-x-hidden scroll-smooth py-11 transition  delay-150 duration-1000 ease-in-out lg:justify-around">
      {Array.from(Array(15), (_, index) => index + 1).map((index) => (
        <Link href={'/tutors'} passHref key={index}>
          <CourseCart
            tutorId={index} //TODO Replace this with actual tutor id
            setOpenPopUp={setOpenPopUp}
            topRightTitle={'top tutors'}
            coverImg="/Images/CourseCart/girl-using-tablet.png"
            tutorName={'Radhakishan J.'}
            countryLogo={'/Images/CourseCart/united-kingdom.svg'}
            tutorImg={'/Images/CourseCart/girl-looking-up.png'}
          />
        </Link>
      ))}

      {/* TimeSlot PopUp */}
      {openPopUp.calendarPopUp && (
        <div className="absolute z-40 flex w-full items-center justify-center bg-gray-50/5">
          <CalenderPopUp
            setOpenPopUp={setOpenPopUp}
            setTotalSelectedTimes={setTotalSelectedTimes}
            link={'/payment'}
          />
        </div>
      )}
    </main>
  )
}

export default TutorsList
