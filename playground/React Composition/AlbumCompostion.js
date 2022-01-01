import React from 'react';


class AlbumCard extends React.Component {

    render() {
        return (
            <>
                <div style={this.props.styles} className='image'>Some Image</div>
                <div className='card'>
                    <div className='album-info'>
                        <h1 style={{ color: 'blue' }}>{this.props.title}</h1>
                        <h2 style={{ color: 'blue' }}>{this.props.name}</h2>
                        <ul>
                            {this.props.genres.map(genre => {
                                return <li style={{color: 'blue'}} key={genre}>{genre}</li>
                            })}
                        </ul>

                        <div className='songs'>
                            {this.props.songs.map(song => {
                                return (
                                    <div style={{color: 'blue'}} key={song.title}>
                                        <h1>{song.title}</h1>
                                        <p>{song.songLength}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <hr />
            </>
        );
    }
}

/* ------------------------------- AlbumCard2 ------------------------------- */

export const AlbumCard2 = ({styles, ...props}) => {
    return(
        <div>
            <div style={styles}>Album Two Image</div>
            <AlbumInfo {...props}/>
            <hr/>
        </div>
    );
}

const AlbumInfo = ({title, name: artist, genres, songs}) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{artist}</h2>
            <ul>
                {genres.map(genre => {
                    return <li key={genre}>{genre}</li>
                })}
            </ul>
            <SongContainer songs={songs}/>
        </div>
    );
}

const SongContainer = ({songs}) => {
    return (
        <div>
            {songs.map(song => <SongCard song={song} key={song.title}/>)}
        </div>
    );
}

const SongCard = ({song}) => {
    return (
        <div >
            <h3>{song.title}</h3>
            <h4>{song.songLength}</h4>
        </div>
    );
}

/* ------------------------------- AlbumCard3 ------------------------------- */
export const AlbumCard3 = ({styles, title, name: artist, genres, songs}) => {
    return (
        <div>
            <div style={styles}>Alubum 3</div>
            <Card title={title}>
                <h2>{artist}</h2>
                <ul>
                    {genres.map(genre => {
                        return <li key={genre}>{genre}</li>
                    })}
                </ul>
                <div>{songs.map(song => <SongCard2 song={song} key={song.title} />)}</div>
            </Card>
        </div>
    );
}

const Card = ({children, title}) => {
    return (
        <>
            <h1>{title}</h1>
            <div>
                {children}
            </div>
        </>
    );
}

const SongCard2 = ({song}) => {
    return (
        <Card title={song.title}>
            <div>{song.songLength}</div>
        </Card>
    );
}

export default AlbumCard;