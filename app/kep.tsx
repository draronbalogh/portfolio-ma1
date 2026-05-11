import LoadingKomponens from './loading';


const Kep = function({kepekEgyediLeirasa, kepEgyediUrl, loadingPagetolAKepenAtaLoading}){
    return (
        <div>            
            <img src={kepEgyediUrl} /> 
            <p>{kepekEgyediLeirasa}</p>      
            <LoadingKomponens kepAdjaTovabb={loadingPagetolAKepenAtaLoading*3} />
        </div>
    )
}
export default Kep;