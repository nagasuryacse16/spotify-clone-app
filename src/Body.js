import React from 'react';
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';

function Body({spotify}) {

    const [{discover_weekly}, dispatch] =useDataLayerValue();
    return ( 
        <div className='body'>
            <Header spotify={spotify}/>

            <div className='body__info'>
                <img src='https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/e_DclGDp3HIECpVumaSAKmuB1yIUKVfzS572MRi0KonVPU5LHTVM5XDfrl0nYMBo3Kv-SlB5805Vsu95tBKgA07qKrNRaOr9gDaRLGGTze8=/NzI6OTU6ODFUMDItNTAtMg=='
                     alt='Discover weekly'
                />
                <div className='body__infoText'>
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            <div className='body__songs'>
                <div className='body__icons'>
                    <PlayCircleFilledIcon className='body__shuffle'/>
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon/>
                </div>

                {/*list of songs*/}
                {discover_weekly?.tracks.items.map(item =>(
                    <SongRow track={item.track}/>
                ))}
            </div>
        </div>
     );
}

export default Body;
