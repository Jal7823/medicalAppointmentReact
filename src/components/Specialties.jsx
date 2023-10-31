
function Specialties({icon,specialty}) {
  return (
    <>
    <div className="flex flex-col p-2 m-4 text-center">
        <i className={`text-red-700 ${icon} text-3xl`}></i>
        <p className="text-2xl text-red-700">{specialty}</p>
    </div>
    </>
  )
}

export default Specialties