import { useParams } from "react-router-dom";

const ExternalLinkHnadler = ()=>{
    const {url} = useParams();

window.location.href = url;

return null
};

export default ExternalLinkHnadler