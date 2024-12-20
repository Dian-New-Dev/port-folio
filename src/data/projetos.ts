import lpThumbnail from '../assets/thumbnails/lps.png';
import infinitaThumbnail from '../assets/thumbnails/infinita.png';
import vigesimoThumbnail from '../assets/thumbnails/vigesimo.png';

interface projetos {
    nome: string;
    descricao: string;
    thumbnail: string;
    categoria: string;
    status: string;
    tecnologias: string;
    link: string;
    repositorio: string;

}

const projetos:projetos[] = [
    {
        nome: 'Galeria de Landing Pages',
        descricao: 'Landing Page onde reúno links para todas as landing pages produzidas por mim.',
        thumbnail: lpThumbnail,
        categoria: 'Landing Page.',
        tecnologias: 'Vite, React, Tailwdind, Typescript.',
        status: 'Deployed.',
        repositorio: 'https://github.com/Dian-New-Dev/landing-pages',
        link: 'https://dian-new-dev.github.io/landing-pages/',
    },
    {
        nome: 'Infinita Tenebrae',
        descricao: 'Blog full-stack com temática cósmica.',
        thumbnail: infinitaThumbnail,
        categoria: 'Web App',
        status: 'Deployed.',
        tecnologias: 'Vite, React, React Router, Tailwdind, Typescript, NodeJS, Express, MongoDB, Docker.',
        repositorio: 'https://github.com/Dian-New-Dev/mini-blog',
        link: 'https://infinita-tenebrae.onrender.com/',
    },
    {
        nome: 'O Vigésimo',
        descricao: 'Jogo de navegador.',
        thumbnail: vigesimoThumbnail,
        categoria: 'Web App',
        status: 'Deployed.',
        tecnologias: 'Vite, React, Tailwdind, Typescript.',
        repositorio: 'https://github.com/Dian-New-Dev/Jogo-da-Memoria',
        link: 'https://dian-new-dev.github.io/Jogo-da-Memoria/'
    },

]

export default projetos;