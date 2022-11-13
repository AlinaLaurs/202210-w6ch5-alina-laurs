import { DressList } from '../../components/dresses/dressesList/dressesList';
import { useDresses } from '../../hooks/hookDresses/useDresses';

function DressesPage() {
    const { dresses } = useDresses();
    return (
        <main>
            <h2>Dresses page</h2>
            <DressList item={dresses} />
        </main>
    );
}

export default DressesPage;
