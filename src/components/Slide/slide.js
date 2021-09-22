import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slide.css';

export default class Slide extends React.Component{
    render(){
        return (// eslint-disable-next-line
            <div>
                <img width={'1420px'} height={'100%'} background-position={'center'}
                background-repeat={'no-repeat'}
                background-size={'cover'} src="https://i.ibb.co/Rj5TGZC/meals.jpg" alt=""/>
            </div>
        )
    }
}


