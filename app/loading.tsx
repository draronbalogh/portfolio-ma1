
const LoadingKomponens = function({kepAdjaTovabb}){
    return(
        <progress id="file" max="100" value={kepAdjaTovabb}>{kepAdjaTovabb}%</progress>
    )
}
export default LoadingKomponens;