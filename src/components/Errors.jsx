
function Errors() {
  return (
    <div>
      <div className=" bg-red-200  p-8 rounded font-bold">
        <i className="fa fa-times bg-red-700 text-white p-2 rounded-full text-[10px]"></i>{" "}
        Verificar que el servidor esté funcionando correctamente,ya que no
        conecta,el servidores reporta:
        <p className="ml-6 p-4 animate-pulse ">
          Cannot read properties of undefined data
        </p>
      </div>
    </div>
  );
}

export default Errors;
