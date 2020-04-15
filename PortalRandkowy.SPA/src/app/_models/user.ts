import { Photo } from './photo';

export interface User {
    // Zakładka Podstawowe informacje
    id: number;
    username: string;
    gender: string;
    age: number;
    zodiacSign: string;
    created: Date;
    lastActive: Date;
    city: string;
    country: string;

    // Zakładka Info
    growth: string;
    eyeColor: string;
    hairColor: string;
    martialStatus: string;
    education: string;
    profession: string;
    children: string;
    languages: string;

    // Zakładka O mnie
    motto: string;
    description: string;
    personality: string;
    lookingFor: string;

    // Zakładka Pasje/Zainteresowania
    interests: string;
    freeTime: string;
    sport: string;
    movies: string;
    music: string;

    // Zakładka Preferencje
    iLike: string;
    idoNotLike: string;
    makesMeLaugh: string;
    itFeelsBestIn: string;
    friendeWouldDescribeMe: string;

    // Zakładka Zdjęcia
    photos: Photo[];
    photoUrl: string;
}
