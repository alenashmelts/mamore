import './Grid.css'
import {Card} from '../card/Card'
import { images } from "../../data.js";


export function Grid() {
    return(
        <div>
            {
                images.map((item)=>(
                   <Card 
            key={item.id}
            path={item.url}
            /> 
                ))
            }
            
        </div>
    )
}