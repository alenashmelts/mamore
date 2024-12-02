import{Header} from './../../header/Header';
import{Grid} from './../../grid/Grid';
import{Card} from './../../card/Card';
import{Footer} from './../../footer/Footer';
import { images } from '../../../data';

export function PageGamePage(){
    const {finishedItems, handleReset, stepsCount, CheckItems, isWin} = useGame(images);
    return(
        <section className="game container">
 <div>
            <Header/>
            <Grid/>
            <Footer/>
        </div>
        <Grid
        images={images}
        finishedItems={finishedItems}
        CheckItems={CheckItems}
        />
        {isWin &&(
            <Modal>
                <h3 className='modal-caption'>Победа!</h3>
                <p className='modal-description'>
                    Вы собрали все пары за {stepCount} шагов
                </p>
                <button
                className='button modal-button'
                type='button'
                onClick={handleReset}
                >
                    Новая игра
                </button>
            </Modal>
        )}
        </section>
       
    )
}