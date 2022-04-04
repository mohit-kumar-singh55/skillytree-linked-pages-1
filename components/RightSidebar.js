import Link from 'next/link'
import { useRouter } from 'next/router'

function SideBar() {
  const router = useRouter()
  return (
    <div className="md:mt-9 md:p-7">
      <nav>
        <ul className="flex flex-row overflow-x-scroll text-[14px] md:flex-col ">
          <li
            className={` mr-[36px] w-32 justify-center text-center font-roboto font-semibold  md:pb-9 md:text-xl ${
              router.pathname === '/tutorDashboard/myprofile/basicDetails'
                ? 'text-pink'
                : 'text-[#878787]'
            } `}
          >
            <Link href="/tutorDashboard/myprofile/basicDetails">
              <a>Basic Details</a>
            </Link>
          </li>
          <li
            className={`mr-[36px] justify-center text-center font-semibold md:pb-9 md:text-xl ${
              router.pathname === '/tutorDashboard/myprofile/timeAvailability'
                ? 'text-pink'
                : 'text-[#878787]'
            }  router.pathname == "/" ? active :text-[pink] w-32 font-roboto`}
          >
            <Link href="/tutorDashboard/myprofile/timeAvailability">
              <a>Time Availability</a>
            </Link>
          </li>

          <li
            className={`mr-[36px] justify-center text-center font-semibold md:pb-9 md:text-xl ${
              router.pathname === '/tutorDashboard/myprofile/photo'
                ? 'text-pink'
                : 'text-[#878787]'
            }  router.pathname == "/" ? active :text-[pink] w-32 font-roboto`}
          >
            <Link href="/tutorDashboard/myprofile/photo">
              <a>Photo</a>
            </Link>
          </li>
          <li
            className={`mr-[36px] justify-center text-center font-semibold md:pb-9 md:text-xl ${
              router.pathname === '/tutorDashboard/myprofile/video'
                ? 'text-pink'
                : 'text-[#878787]'
            }  router.pathname == "/" ? active :text-[pink] w-32 font-roboto`}
          >
            <Link href="/tutorDashboard/myprofile/video">
              <a>Video</a>
            </Link>
          </li>
          <li
            className={`mr-[36px] justify-center text-center font-semibold md:pb-9 md:text-xl ${
              router.pathname === '/tutorDashboard/myprofile/qualifications'
                ? 'text-pink'
                : 'text-[#878787]'
            }  router.pathname == "/" ? active :text-[pink] w-32 font-roboto`}
          >
            <Link href="/tutorDashboard/myprofile/qualifications">
              <a>Qualifications</a>
            </Link>
          </li>
          <li
            className={`mr-[36px] justify-center text-center font-semibold md:pb-9 md:text-xl ${
              router.pathname === '/tutorDashboard/myprofile/settings'
                ? 'text-pink'
                : 'text-[#878787]'
            }  router.pathname == "/" ? active :text-[pink] w-32 font-roboto`}
          >
            <Link href="/tutorDashboard/myprofile/settings">
              <a>Profile</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default SideBar
