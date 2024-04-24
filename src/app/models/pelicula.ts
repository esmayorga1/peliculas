export interface Pelicula {      
    Title: string
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string,
    description?: string;
    category: string[];
    duration?: string;
    main_actors?: string;
    director?: string;
}

