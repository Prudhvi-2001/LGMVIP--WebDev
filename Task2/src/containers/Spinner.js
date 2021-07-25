import Loader from "react-loader-spinner";
import './styles.css';

const LoaderComp = ()=>{
    return(
        //used to display the loader when the api is fetching data
        <div className='app'>
            <Loader
            type="BallTriangle"
            color="#00BFFF"
            height={90}
            width={90}
            timeout={2000}
            />
       </div>
    );
}
export default LoaderComp
