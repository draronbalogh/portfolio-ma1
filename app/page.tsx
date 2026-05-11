import Kep from "./kep";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">        
       <Kep kepekEgyediLeirasa='aron' kepEgyediUrl='kep1.jpg'/> 
       <Kep kepekEgyediLeirasa='ketto'  kepEgyediUrl='kep2.jpg' /> 
       <Kep kepekEgyediLeirasa='harom'  kepEgyediUrl='kep3.jpg' />
    </div>
  );
}
