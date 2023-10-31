function InfoBox({ title, phone, msg }) {
  return (
    <>
      <div className="flex flex-col border-2 text-center p-4 rounded min-w-[400px] max-w-[400px]">
        <p className="text-5xl mt-4 ">📱</p>
        <p className="text-2xl mt-4 font-bold">{title}</p>
        <p className="text-2xl mt-4">{phone}</p>
        <p className="text-2xl mt-4">{msg}</p>
      </div>
    </>
  );
}

export default InfoBox;
