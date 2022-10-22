import { MotoCard } from './MotoCard';
import motos from '../data/motos.json';

export function MotosGrid(){
    return(
        <ul className='motos'>
            {motos.map((moto) => (
                <MotoCard key={moto.id} moto={moto} />
            ))}
        </ul>
    )
}