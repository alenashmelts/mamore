import './Grid.css'
import { Card } from '../card/Card'
import { images } from "./../../data";


export default function Grid( {images, finishedItems, checkItem}) {
    const [visibleItems, setVisibleItems] = React.useState([]);

    const handleCardClic = (id) =>{
        if(finishedItems.includes(id) || visibleItems.includes(id)){
            return;
        }
        switch (visibleItems.length){
            case 0:
                setVisibleItems([id]);
                break;
                case 1:
                    setVisibleItems((items) => [...items, id]);
                    checkItems(visibleItems[0], id);
                    setTimeout(() => {
                        setVisibleItems([]);
                    }, 1000);
                    break;
                    default:
                        setVisibleItems([]);
        }
    };
    // console.log(images)
    return (
        <div className='container'>
            {
                images.map((item) => (
                    <Card
                        key={item.id}
                        url={item.url}
                      
                    ></Card>
                ))
            }

           
            
        </div>
    )
}