import { DressesType } from '../../../models/dresses';

export function DressItem({ item }: { item: DressesType }) {
    return (
        <>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} width="200px" />
            <p>{item.price}€</p>
        </>
    );
}
