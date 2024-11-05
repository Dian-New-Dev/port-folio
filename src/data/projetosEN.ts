interface projetosEN {
    nome: string;
    descricao: string;
    thumbnail: string;
    categoria: string;
    status: string;
    tecnologias: string;
    link: string;
    repositorio: string;

}

const projetosEN:projetosEN[] = [
    {
        nome: 'Landing Page Gallery',
        descricao: 'Landing Page where I reunite links for all other LPs made by me.',
        thumbnail: './assets/thumbnails/lps.png',
        categoria: 'Landing Page.',
        tecnologias: 'Vite, React, Tailwdind, Typescript.',
        status: 'Deployed.',
        repositorio: 'https://github.com/Dian-New-Dev/landing-pages',
        link: 'https://dian-new-dev.github.io/landing-pages/',
    },
    {
        nome: 'Infinita Tenebrae',
        descricao: 'Full-stack blog with a cosmic theme.',
        thumbnail: './assets/thumbnails/infinita.png',
        categoria: 'Web App',
        status: 'Deployed.',
        tecnologias: 'Vite, React, React Router, Tailwdind, Typescript, NodeJS, Express, MongoDB, Docker.',
        repositorio: 'https://github.com/Dian-New-Dev/mini-blog',
        link: 'https://infinita-tenebrae.onrender.com/',
    },
    {
        nome: 'The Twentieth',
        descricao: 'Browser game.',
        thumbnail: './assets/thumbnails/vigesimo.png',
        categoria: 'Web App',
        status: 'Deployed.',
        tecnologias: 'Vite, React, React Router, Tailwdind, Typescript, NodeJS, Express, MongoDB.',
        repositorio: 'https://github.com/Dian-New-Dev/Jogo-da-Memoria',
        link: 'https://dian-new-dev.github.io/Jogo-da-Memoria/'
    },

]

export default projetosEN;