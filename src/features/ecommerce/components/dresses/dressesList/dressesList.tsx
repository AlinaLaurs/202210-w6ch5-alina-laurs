import { DressesType } from '../../../models/dresses';
import { DressItem } from '../dressItem/dressItem';

export function DressList({ item }: { item: DressesType[] }) {
    return (
        <>
            <ul>
                {item.map((item: DressesType) => (
                    <li key={item.id}>
                        <DressItem item={item}></DressItem>
                    </li>
                ))}
            </ul>
        </>
    );
}
