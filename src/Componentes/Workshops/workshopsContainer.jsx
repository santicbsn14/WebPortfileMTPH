import React,{useState, useEffect}  from "react";
import { useLocation, useParams } from "react-router-dom";
import { urlFor, getWorkshopByNav } from '../../client';
import Loader from '../Loader/loader';
import Workshops from "./workshops";



function WorkshopsContainer(){
  
  const [workshop, setWorkshop] = useState()
  const {title} = useParams()
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const result = await getWorkshopByNav(title);
      setWorkshop(result)
      setIsLoading(false)
    };
    fetchData();
  }, [title]);
  
  return(
    <div style={{width:'max-content', position:'relative', right:'0px', top:'-290px', left:'650px'}}>
      {isLoading ? <Loader></Loader> : <Workshops workshop={workshop}/> }
      
    </div>
  )
}
export default WorkshopsContainer