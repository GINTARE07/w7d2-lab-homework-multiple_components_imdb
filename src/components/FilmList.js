import Film from "./Film";

const FilmList = ({allFilms, name}) => {
    const filmNodes = allFilms.map((film) => {
        return <Film key = {film.id} filmObj = {film.name}/>
    });

    return 
        <>
            <ul>{filmNodes}</ul>
        </>


}

export default FilmList;