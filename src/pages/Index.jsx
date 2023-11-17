import InfoBox from "../components/InfoBox";
import Sliders from "../components/Sliders";
import Specialties from "../components/Specialties";



function Index() {
 

  return (
    <div className="animate-fade-down animate-once">
      <div>
        <Sliders />
      </div>
      <div className="flex flex-wrap justify-around mt-2">
        <InfoBox
          title="ORIENTACIÓN MÉDICA TELEFÓNICA"
          phone="721636821"
          msg="aca va el msj"
        />
        <InfoBox
          title="URGENCIAS y EMERGENCIAS"
          phone="721636821"
          msg="aca va el msj"
        />
        <InfoBox
          title="ATENCIÓN DE VENTAS"
          phone="721636821"
          msg="aca va el msj"
        />
      </div>

      <div className="container-fluid">
        <div className="flex flex-wrap justify-around m-4">
          <Specialties icon="fa fa-heart" specialty="especialidad" />
          <Specialties icon="fa fa-heart" specialty="especialidad" />
          <Specialties icon="fa fa-heart" specialty="especialidad" />
          <Specialties icon="fa fa-heart" specialty="especialidad" />
        </div>
      </div>
    </div>
  );
}

export default Index;
