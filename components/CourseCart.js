import Link from 'next/link'
import Image from 'next/image'

function CourseCart({
  coverImg,
  topRightTitle,
  tutorName,
  tutorImg,
  countryLogo,
  tutorId,
}) {
  return (
    <div className="flex snap-center rounded-md transition-all ease-in-out">
      <div className="w-[350px] overflow-hidden rounded-2xl  pb-[20px] font-poppins shadow-xl ring-2 ring-[#FC4D6D] ring-opacity-10">
        <CoverSection />
        <TutorDetails
          space={'-mt-[1.8rem] ml-[105px] '}
          imgPosition={'-top-[3rem] left-[-5.5rem]'}
        />
        <div className="flex flex-col items-center gap-3 py-4 px-2">
          <Language />
          <ActiveFinishedRatingBox />
          <Description />
          <BookTrialBtn space={'my-4'} tutorId={tutorId} />
        </div>
        <ViewAndChat space={'px-4'} />
      </div>
    </div>
  )

  function CoverSection() {
    return (
      <div className="relative  h-[210px] overflow-hidden rounded-t-2xl rounded-br-[30px]">
        <Image
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/RQAAuEB4mUJ9Y0AAAAASUVORK5CYII="
          // priority
          src={coverImg}
          height={191}
          width={383}
          alt="user"
        />
        <div className="transparent-box absolute top-0 rounded-br-3xl px-[23px] py-[10px] text-center font-poppins text-[12px] font-bold uppercase text-white ">
          {topRightTitle}
        </div>
        <div className="absolute top-[10px] right-[18px]">
          <div className="relative h-[18px] w-[14px]">
            <Image
              src="/Images/CourseCart/Bookmark.png"
              layout="fill"
              objectFit="contain"
              alt="bookmark"
            />
          </div>
        </div>
      </div>
    )
  }

  function TutorDetails({ space, imgPosition }) {
    return (
      <div className={`relative ${space}   flex    items-center    `}>
        <div
          className={` absolute  ${imgPosition}  mr-4 flex h-[75px] w-[75px] items-center justify-center rounded-full ring-2 ring-white`}
        >
          <Image src={tutorImg} alt="tutor" height={75} width={75} />
        </div>
        <div className="flex gap-[8px]   ">
          <span className="text-[14px] font-semibold ">{tutorName}</span>
          <div>
            <Image
              className="self-center"
              src="/Images/CourseCart/verify-icon.svg"
              height={13}
              width={13}
              alt="icon"
            />
          </div>
          <div>
            <Image
              className="self-center"
              src={countryLogo}
              width={14}
              height={15}
              alt="country"
            />
          </div>
        </div>
      </div>
    )
  }

  function Language({ space }) {
    return (
      <div
        className={`text-[11px] font-medium text-[#474747] ${space} mb-[18px] flex w-full flex-col items-start gap-[12.55px] pl-3`}
      >
        <span className="flex items-center gap-[15px]">
          <Image
            src="/Images/CourseCart/topper-cap.svg"
            width={22}
            height={18}
            alt="cap"
          />
          <span>English, Geography, +3</span>
        </span>
        <span className="flex items-center gap-[15px]">
          <Image
            src="/Images/CourseCart/voice.svg"
            width={24}
            height={15}
            alt="voice"
          />
          <span>English (Native), Hindi (Conversational) +1</span>
        </span>
      </div>
    )
  }

  function ActiveFinishedRatingBox({ space }) {
    return (
      <div
        className={`flex   ${space} mb-2 w-full  justify-between gap-2 px-3 text-[13px] font-bold`}
      >
        <TransparentBox title={'Active '} title2={'Students'} num="3" />
        <TransparentBox title={'Session '} title2={'finished'} num="45" />
        <TransparentBox title={'4.5'} title2={'Rating'} img={true} num="172" />
      </div>
    )
    function TransparentBox({ title, num, title2, img }) {
      return (
        <div
          className=" transparent-box    flex h-[54px] w-[100px] flex-col
          items-center justify-center rounded-xl px-4 text-center font-monts text-[11px] capitalize"
        >
          <div className="text-[#474747]">
            <span className="flex items-center justify-center  leading-[16px]">
              {title}
              <div className={img ? 'ml-1 block self-center' : 'hidden'}>
                <Image
                  height={10}
                  width={10}
                  src="/Images/CourseCart/star.svg"
                  alt="star"
                />
              </div>
            </span>
            {title2}
          </div>
          <div className="text-[#FC4D6D]">{num}</div>
        </div>
      )
    }
  }

  function Description() {
    return (
      <div
        className={` px-4 font-monts text-xs font-semibold capitalize text-[#606060]   `}
      >
        <span className="font-extrabold">Brief :</span> dolor sit amet,
        consectetur elit. Fringilla enim, at rhoncus nisl, condimentum,Fringilla
        enim,
        <span>.....</span>
      </div>
    )
  }

  function BookTrialBtn({ space, tutorId }) {
    return (
      // TODO Replace this url with new location of Booking Page
      <Link href={`http://localhost:3000?tutorId=${'tutor_id'}`}>
        <div
          className={`relative z-20 flex justify-center ${space} cursor-pointer`}
        >
          <a className="inline-block w-[220px] rounded-full px-6 py-2 text-center text-[14px] font-[600] text-[#FC4D6D] shadow-lg drop-shadow-lg backdrop-blur-md transition duration-150 ease-in-out hover:bg-[#FC4D6D] hover:text-white ">
            Book Trial | $20/hr
          </a>
          <div className="-z-20">
            <div className="gradientCircle left-[75px] top-[-4px] h-[15px] w-[15px] " />
            <div className="gradientCircle -bottom-2 right-[-7px] h-[35px] w-[35px]" />
            <div className="gradientCircle top-[1rem] left-[-2px] h-[27px] w-[27px]" />
          </div>
        </div>
      </Link>
    )
  }

  function ViewAndChat({ space }) {
    return (
      <div
        className={`${space} flex items-center justify-between font-monts text-[12px] font-semibold text-[#474747]`}
      >
        <Link href={'/'}>
          <a className="flex items-center">
            <span>
              <Image
                src="/Images/CourseCart/eye.svg"
                height={12}
                width={19}
                alt="eye"
              />
            </span>
            <span className="ml-[6px]">QuickView Details</span>
          </a>
        </Link>
        <Link href={'/'}>
          <a className="flex items-center">
            <span>
              <Image
                src="/Images/CourseCart/inbox.svg"
                width={17}
                height={17}
                alt="inbox"
              />
            </span>
            <span className="ml-[6px]">Chat with Tutor</span>
          </a>
        </Link>
      </div>
    )
  }
}

export default CourseCart
