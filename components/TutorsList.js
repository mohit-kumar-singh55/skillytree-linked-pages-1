import Link from 'next/link';
import React from 'react';
import CourseCart from './CourseCart';

function TutorsList() {
  return (
    <main
      className="flex h-[calc(100vh-79px)] snap-y snap-mandatory overflow-scroll overflow-x-hidden scroll-smooth transition delay-150 duration-1000 ease-in-out w-full max-w-[calc(1440px-160px)] items-center justify-evenly gap-y-[6rem] gap-x-2  py-11 lg:justify-around flex-wrap mx-auto">
      {Array.from(Array(15), (_, index) => index + 1).map((index) => (
        <Link href={'/tutors'} passHref key={index}>
          <CourseCart
            href={'/tutors'}
            topRightTitle={'top tutors'}
            coverImg="/Images/CourseCart/girl-using-tablet.png"
            tutorName={'Radhakishan J.'}
            countryLogo={'/Images/CourseCart/united-kingdom.svg'}
            tutorImg={'/Images/CourseCart/girl-looking-up.png'}
          />
        </Link>
      ))}
    </main>
  )
}

export default TutorsList;