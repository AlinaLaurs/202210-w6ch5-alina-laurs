import { JacketsType } from '../../../models/jackets';

export function JacketItem({ item }: { item: JacketsType }) {
    return (
        <>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} width="200px" />
            <p>{item.price}€</p>
        </>
    );
}
