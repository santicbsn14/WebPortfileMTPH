import React,{useState, useEffect}  from "react";
import { useParams } from "react-router-dom";
import { getWorkshopByNav } from '../../client';
import './workshops.css'
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
    <div className="container-workshops"  style={{width:'max-content', position:'relative', top:'-290px', left:'650px'}}>
      {isLoading ? <Loader></Loader> : <Workshops workshop={workshop}/> }
    </div>
  )
}
export default WorkshopsContainer