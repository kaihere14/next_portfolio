

const FooterBlur = () => {
  return (
   <div className="hidden md:block sticky bottom-0 h-10 w-screen left-0 right-0 bg-cover z-101 ">
    <div className="absolute inset-0 bg-linear-to-t from-white/30 via-white/10 to-transparent backdrop-blur-[3px]"></div>
  </div>
  )
}

export default FooterBlur