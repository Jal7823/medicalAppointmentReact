
function Loading() {
  return (
    <div className="flex justify-center mt-8 ">
      <button type="button" className="text-4xl text-green-500 animate-pulse p-4 rounded" disabled>
        <svg
          className="animate-spin h-5 w-5 mr-3 "
          viewBox="0 0 24 24"
        ></svg>
        Cargando...
      </button>
    </div>
  );
}

export default Loading;
