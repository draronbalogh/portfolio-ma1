import Kep from "./kep";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">        
       <Kep kepekEgyediLeirasa='aron' kepEgyediUrl='kep1.jpg'  loadingPagetolAKepenAtaLoading='20' />        
       <Kep kepekEgyediLeirasa='ketto'  kepEgyediUrl='kep2.jpg' loadingPagetolAKepenAtaLoading='90' /> 
       <Kep kepekEgyediLeirasa='harom'  kepEgyediUrl='kep3.jpg' loadingPagetolAKepenAtaLoading='10' />     
    </div>
  );
}
