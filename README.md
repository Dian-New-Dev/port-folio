# Passos

1) npm add react-router-dom

2) fixar vulnerabilidades

3) criar pasta pages e colocar páginas individuais lá

4) import createBroswerRouter no arquivo principal

5) const router = createBroswerRouter([]) para estabelecer rotas

6) add routerprovided no import do createBroswerROuter

7) faz RouterProvider router={router} o entry point

8) adiciona rotas no array

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/profiles', // url
        element: <ProfilesPage /> //respectivo componente
    }
]);

9) Faz componente de: errorElement: <div>404 Not Found</div>, abaixo de element: <HOmePage />

10) 