import { Auth0Provider } from '@auth0/auth0-react';
import { TodoContextProvider } from '../../context/todo/provider';
import { Layout } from '../layout/layout';
import { AppRoutes } from '../routes/app.routes';

export function App() {
    return (
        <Layout>
            <TodoContextProvider>
                <AppRoutes></AppRoutes>
            </TodoContextProvider>
        </Layout>
    );
}
