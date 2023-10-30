import InfoBox from "../components/InfoBox"
import Specialties from "../components/Specialties"

function Index() {
  return (
    <div>
      <div className="flex justify-around">
        <InfoBox title='ORIENTACIÓN MÉDICA TELEFÓNICA' phone='721636821' msg='aca va el msj' />
        <InfoBox title='URGENCIAS y EMERGENCIAS' phone='721636821' msg='aca va el msj' />
        <InfoBox title='ATENCIÓN DE VENTAS' phone='721636821' msg='aca va el msj' />
      </div>
      <div className="container-fluid">
      <div className="flex justify-around m-4">
        <Specialties icon='fa fa-heart' specialty='especialidad' />
        <Specialties icon='fa fa-heart' specialty='especialidad'  />
        <Specialties icon='fa fa-heart' specialty='especialidad'  />
        <Specialties icon='fa fa-heart' specialty='especialidad'  />
      </div>
      </div>
    </div>
  )
}

export default Index