import tattooImg from '../assets/img-7d5ea4e332f9568a8d2715c301d23c0e.jpg';

export interface Service {
    name: string;
    id: number;
    description: string;
    img: string;
}

export const SERVICES = [
    {
        name: 'TATTOO',
        id: 1,
        description: 'homepage.tattoo',
        img: tattooImg
    },
    {
        name: 'PIERCINGS',
        id: 2,
        description: 'homepage.piercings',
        img: 'https://placehold.co/1920x300',
    },
    {
        name: 'ART GALLERY',
        id: 3,
        description: 'homepage.art',
        img: 'https://placehold.co/1920x300',
    }
]