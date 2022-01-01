import React from 'react';
import {render} from 'react-dom';
import ContextAPI from './ContextAPI/Composition 2';
import ContextApi2 from './ContextAPI/ContextApi2';
import AlbumCard, {AlbumCard2, AlbumCard3} from './React Composition/AlbumCompostion';
import Compostion from './React Composition/Compostion';
import './style.scss';

class Playground extends React.Component{

    state = {
        visibility: {
            context: false,
            composition: false,
            albumCard: false,
            albumCard2: false,
            albumCard3: false,
            contextApi2: true
        },
        genres: ['Love', 'Motivation', 'Romantic'],
        songs: [{title: 'Titile One', songLength: '4.56'},
                {title: 'Title Two', songLength: '5.67'},
                {title: 'Title Three', songLength: '2.45'}],
        styles: {width: '100px', height:'100px', backgroundColor: 'yellow'}
    }

    render(){
        return (
            <>
                {this.state.visibility.context && <ContextAPI/>}
                {this.state.visibility.composition && <Compostion />}
                { this.state.visibility.albumCard && <AlbumCard 
                title='Ranjish hai Sahi' 
                name='Ali Sethi' 
                genres={this.state.genres}
                songs={this.state.songs}
                styles={this.state.styles}
                />}
                {this.state.visibility.albumCard && <AlbumCard2 
                title='Ranjish hai Sahi' 
                name='Ali Sethi' 
                genres={this.state.genres}
                songs={this.state.songs}
                styles={this.state.styles}
                />}
                {this.state.visibility.albumCard3 && <AlbumCard3 
                title='Ranjish hai Sahi' 
                name='Ali Sethi' 
                genres={this.state.genres}
                songs={this.state.songs}
                styles={this.state.styles}
                />}
                {this.state.visibility.contextApi2 && <ContextApi2 />}
            </>
        );
    }
}

render(<Playground />, document.querySelector('.root'));

