import {DNA} from "react-loader-spinner";


export default function Spinner({}){
    return <div className="mx-auto">
        <DNA
        visible={true}
        height="50%"
        width="50%"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
    />
    </div>
}