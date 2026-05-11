interface KepProps {
    kepekEgyediLeirasa: string;
    kepEgyediUrl: string;
}

const Kep = function({kepekEgyediLeirasa, kepEgyediUrl}:KepProps){
    return (
        <div>            
            <img src={kepEgyediUrl} /> 
            <p>{kepekEgyediLeirasa}</p>
            <progress id="file" max="100" value="70">70%</progress>
        </div>
    )
}
export default Kep;