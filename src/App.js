import React, { Component } from 'react';
import styled , {injectGlobal} from 'styled-components'
import ScrollLock from 'react-scrolllock';
import Particles from 'react-particles-js';
import ChooseBox from './components/choosebox';


const Container = styled.div`
  min-width:100vw;
  min-height:100vh;
  overflow:hidden;
  position:relative;
  display:flex;
  align-items:flex-end;
  z-index:9;
  @media only screen(max-width:575px){
    min-height:90vh;
  }
`
injectGlobal`
  body{
    background:#e8f8fd;
    overflow:hidden !important;
  }
  .alpaca{
    width:17%;
    position:absolute;
    bottom:0;
    left:0;
    z-index:1;
  }
  .alpaca.pink{
    left:13%;
    bottom:-5%;
  }
  .alpaca.blue{
    left:40%;
    bottom:-3%;
  }
  .alpaca.green{
    left:60%;
    bottom:11%;
  }
  .alpaca.grey{
    left:76.5%;
    bottom:13%;
  }
  @media (max-width: 575px) {
    body{
      height:90vh;
    }

    .mountain{
      max-width:105%;
      width:105%;
    }
    .alpaca{
      width:30%;
    }
    .alpaca.pink{
      left:9%;
      bottom:-3%;
    }
    .alpaca.blue{
      left: 34%;
      bottom: -2%;
    }
    .alpaca.green{
      left: 55%;
      bottom: 3%;
    }
    .alpaca.grey{
      bottom: 3%;
    }
  }
  
`

class App extends Component {
  isiPhone = () =>{
      const iDevices = [
        'iPhone Simulator',
        'iPod Simulator',
        'iPhone',
        'iPod'
      ];
      if (!!navigator.platform) {
        while (iDevices.length) {
          if (navigator.platform === iDevices.pop()){ return true; }
        }
      }
      return false;
  }
  isFacebookApp = () =>{
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
  }
  
  componentDidMount() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      const windowHeight = window.innerHeight-144;
      document.body.style.height = windowHeight;
    }
  }
  render() {
    return (
      <div>
        <ChooseBox/>
        <Particles params={{
            		particles: {
            			number: {
                    value: 100,
                    density: {
                      enable: false,
                      value_area: 800
                    }
                  },
                  color: {
                    value: "#7b7ba3"
                  },
                  shape: {
                    type: "star",
                    stroke: {
                      width: 0,
                      color: "#000000"
                    },
                    polygon: {
                      nb_sides: 5
                    },
                    image: {
                      src: "http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg",
                      width: 100,
                      height: 100
                    }
                  },
                  opacity: {
                    value: 0.2805971106514665,
                    random: false,
                    anim: {
                      enable: false,
                      speed: 1,
                      opacity_min: 0.1,
                      sync: false
                    }
                  },
                  size: {
                    value: 4,
                    random: true,
                    anim: {
                      enable: false,
                      speed: 40,
                      size_min: 0.1,
                      sync: false
                    }
                  },line_linked: {
                      enable: false,
                      distance: 150,
                      color: "#ffffff",
                      opacity: 0.4,
                      width: 1
                    },
                    move: {
                      enable: true,
                      speed: 1,
                      direction: "left",
                      random: false,
                      straight: true,
                      out_mode: "out",
                      bounce: false,
                      attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                      }
                    }
                  },
                  interactivity: {
                    detect_on: "canvas",
                    events: {
                      onhover: {
                        enable: false,
                        mode: "grab"
                      },
                      onclick: {
                        enable: false,
                        mode: "repulse"
                      },
                      resize: true
                    },
                    modes: {
                      grab: {
                        distance: 200,
                        line_linked: {
                          opacity: 1
                        }
                      },
                      bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                      },
                      repulse: {
                        distance: 200,
                        duration: 0.4
                      },
                      push: {
                        particles_nb: 4
                      },
                      remove: {
                        particles_nb: 2
                      }
                    }
                  },
                  retina_detect: true
            		}
            	}
              style={{
                width:'100%',
                position:'absolute',
                zIndex:'-1',
              }}/>
        <Container>
          <img className="mountain img-fluid" src={require('./static/img/mountain.png')} style={{zIndex:'3'}} alt=""/>
          <img className="alpaca pink img-fluid" src={require('./static/img/alpacamood-01.png')} alt=""/>
          <img className="alpaca blue img-fluid" src={require('./static/img/alpacamood-05.png')} alt=""/>
          <img className="alpaca green img-fluid" src={require('./static/img/alpacamood-07.png')} alt=""/>
          <img className="alpaca grey img-fluid" src={require('./static/img/alpacamood-04.png')} alt=""/>
        </Container>
        <ScrollLock/>
      </div>
    );
  }


}

export default App;
