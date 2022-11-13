import { JacketList } from '../../components/jackets/jacketsList/jacketsList';
import { useJackets } from '../../hooks/hookJackets/useJackets';

function JacketsPage() {
    const { jackets } = useJackets();
    return (
        <main>
            <h2>Jackets page</h2>
            <JacketList item={jackets} />
        </main>
    );
}

export default JacketsPage;
