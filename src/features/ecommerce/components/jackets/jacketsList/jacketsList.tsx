import { JacketsType } from '../../../models/jackets';
import { JacketItem } from '../jacketItem/jacketItem';

export function JacketList({ item }: { item: JacketsType[] }) {
    return (
        <>
            <ul>
                {item.map((item: JacketsType) => (
                    <li key={item.id}>
                        <JacketItem item={item}></JacketItem>
                    </li>
                ))}
            </ul>
        </>
    );
}
