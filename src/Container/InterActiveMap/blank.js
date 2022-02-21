import React, {useState, useEffect, useMemo, useCallback} from 'react';
import { useLocation } from "react-router-dom";
import ReactMapGL, {SVGOverlay, Source, Layer} from 'react-map-gl';
import mapboxgl from "mapbox-gl"; 
import {useDispatch, useSelector} from 'react-redux'
import {scaleQuantile} from 'd3-scale';
import {range} from 'd3-array';
import { useNavigate } from "react-router-dom";
import GeoJSON from 'geojson'
// import "./App.css"
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default; 


export default function Blank(props) {
  
  const location = useLocation();
  const allstates = useSelector(state=>state.states)
  const stops = useSelector(state=>state.stops)
  const [loading, setLoading] = useState(true);
  const [statedata, setStatedata] = useState({});
  const [hoverInfo, setHoverInfo] = useState(null);
  const TOKEN="pk.eyJ1IjoiYW5hc25hZGVlbXNoZWlraCIsImEiOiJja2kxa2J6enMwMWprMndwYWd0NmIwZHY3In0.rxQDw8BqDleyTMby9WZPKg";
  const [mapstyle, setmapstyle] = useState('');
  const [viewport, setViewport]  =useState({
      longitude: 9.0820,
      latitude: 8.6753,
      zoom: 5,
      pitch: 0,
      bearing: 0,
});
  let statearray;
  var totalarea=0;
  const regions_centers = {
    "Abia": {lngLat:[7.528318630048943, 5.419426058427689],style:"mapbox://styles/anasnadeemsheikh/ckz85923y000g15nzyfrs1er5"},
    "Adamawa": {lngLat: [12.347180151796636, 9.272064905334929],style:"mapbox://styles/anasnadeemsheikh/ckz859jun000j14ns47e0h06w"},
    "Akwa Ibom": {lngLat:[7.848054572305443, 4.942294502355054],style:"mapbox://styles/anasnadeemsheikh/ckz859xqz000u15o14ux6okja"},
    "Anambra": {lngLat: [6.945535750335097, 6.238862293142006],style:"mapbox://styles/anasnadeemsheikh/ckz85a4qn000d14qh98hnfd86"},
    "Bauchi": {lngLat: [10.078239389277968, 10.882775507027716],style:"mapbox://styles/anasnadeemsheikh/ckz85a8yi000t14o06ukgaz8h"},
    "Bayelsa": {lngLat: [6.12167294604194, 4.814410778942445],style:"mapbox://styles/anasnadeemsheikh/ckz85aclz000b14p6vky4m9yy"},
    "Benue": {lngLat: [8.841020374499607, 7.3629604610778046],style:"mapbox://styles/anasnadeemsheikh/ckz85agns000g14p4ig82jo50"},
    "Borno": { lngLat: [13.14305587136323, 11.837152733370957],style:"mapbox://styles/anasnadeemsheikh/ckz85ak9h000g14ta9vzku8vo"},
    "Cross River": {lngLat: [8.603027254418208, 5.881925928772191],style:"mapbox://styles/anasnadeemsheikh/ckz85ao21000v15o1xf1lzxgw"},
    "Delta": { lngLat: [6.000183865046637, 5.711292680811383],style:"mapbox://styles/anasnadeemsheikh/ckz85ar4y000k14nsnqhwd8is"},
    "Ebonyi": {lngLat: [8.025387844291885, 6.240609746439986],style:"mapbox://styles/anasnadeemsheikh/ckz85avn2000h15nz73yr6dkk"},
    "Edo": {lngLat: [5.943211634318317, 6.615132959902127],style:"mapbox://styles/anasnadeemsheikh/ckz85aypw000w15o19n1c5698"},
    "Ekiti": {lngLat: [5.322961382787582, 7.7208126012944405],style:"mapbox://styles/anasnadeemsheikh/ckz85b1nt000h14taxzsdbap6"},
    "Enugu": {lngLat: [7.443999583982304, 6.513307368037815],style:"mapbox://styles/anasnadeemsheikh/ckz85b3r5000p14qq61vsrk0g"},
    "Gombe": {lngLat: [11.214221674909112, 10.379996838827296],style:"mapbox://styles/anasnadeemsheikh/ckz85b67d000c14p6vgqs6hg1"},
    "Imo": {lngLat: [7.08594014230502, 5.585683792528869],style:"mapbox://styles/anasnadeemsheikh/ckz85b8ea000m15o2dgx3scem"},
    "Jigawa": {lngLat: [9.474086929434606, 12.151499535699003],style:"mapbox://styles/anasnadeemsheikh/ckz85baii000u14o0uhrj5btu"},
    "Kaduna": {lngLat: [7.68957058539138, 10.367238703410877],style:"mapbox://styles/anasnadeemsheikh/ckz85bcim000d14p6vxtp95ae"},
    "Kano": {lngLat: [8.56558722287744, 11.691486551639741],style:"mapbox://styles/anasnadeemsheikh/ckz85bekl000g15s6hho87fjt"},
    "Katsina": {lngLat: [7.70507625080495, 12.333883715417954],style:"mapbox://styles/anasnadeemsheikh/ckz85bgn1000i14p44dma9p68"},
    "Kebbi": {lngLat: [4.458573449538363, 11.744970920090822],style:"mapbox://styles/anasnadeemsheikh/ckz85bj18000o15o2i7hxfoys"},
    "Kogi": {lngLat: [6.737944099167493, 7.789835796886763],style:"mapbox://styles/anasnadeemsheikh/ckz85blfo000h15s684sk2c0m"},
    "Kwara": {lngLat: [4.483991406500564, 9.084772125609874],style:"mapbox://styles/anasnadeemsheikh/ckz85byzk000p15o2r3e5dbbt"},
    "Lagos": {lngLat: [3.590640162489507, 6.513271649095785],style:"mapbox://styles/anasnadeemsheikh/ckz840exf000n14o0z9mq0zqv"},
    "Nasarawa": {lngLat: [8.25515044898367, 8.549394831154743],style:"mapbox://styles/anasnadeemsheikh/ckz8vaeli000414tahqensr20"},
    "Niger": {lngLat: [5.665936992681253, 9.97009456069604],style:"mapbox://styles/anasnadeemsheikh/ckz85cf2b000h15muuwfophy9"},
    "Ogun": {lngLat: [3.624399754212533, 6.972689817087769],style:"mapbox://styles/anasnadeemsheikh/ckz85ch95000i15nzqbcyj29y"},
    "Ondo": {lngLat: [5.221235600194916, 6.908484589302162],style:"mapbox://styles/anasnadeemsheikh/ckz85ckcp000e14p60bcu1wce"},
    "Osun": {lngLat: [4.544664399849893, 7.563671159813154],style:"mapbox://styles/anasnadeemsheikh/ckz85cn80000914meiz2jlvlx"},
    "Oyo": {lngLat: [3.650561257971077, 8.115458428467974],style:"mapbox://styles/anasnadeemsheikh/ckz85cpwr000f14p6b3vuisxc"},
    "Plateau": {lngLat: [9.422861258818529, 9.258880310285306],style:"mapbox://styles/anasnadeemsheikh/ckz85cs4l000i15s6qpihv8ya"},
    "Rivers": {lngLat: [6.929103793974093, 4.932965648383799],style:"mapbox://styles/anasnadeemsheikh/ckz85d9ux000k14pstr7dqx3c"},
    "Sokoto": {lngLat: [5.3101188487075035, 12.90149788086228],style:"mapbox://styles/anasnadeemsheikh/ckz85d7ib000m14nzqjy9nljv"},
    "Taraba": {lngLat: [10.789672576869606, 8.022674986775527],style:"mapbox://styles/anasnadeemsheikh/ckz85d50o000c14rk7d3a592g"},
    "Yobe": { lngLat: [11.344708046255477, 12.204367946689743],style:"mapbox://styles/anasnadeemsheikh/ckz85d2ot000x15o1geyrb5hy"},
    "Zamfara": {lngLat: [6.20652119921229, 12.049877892479032],style:"mapbox://styles/anasnadeemsheikh/ckz85d0e6000j15nzj55yg6xm"},
    "Federal Capital Territory": {lngLat: [7.223576256312555, 8.867048784441636],style:"mapbox://styles/anasnadeemsheikh/ckz8ut5zv000h14s6sbhodn9y"},
  }
  useEffect(() => {
    let statenameraw = location.pathname.split('/')[1];
    let statename = statenameraw.replace(/%20/g, " ");
    statearray={type:"FeatureCollection", features:[]}
    if(allstates != 0){
      allstates.features.map((feature)=>{
       
      if(statename === feature.properties.admin1Name) {
        totalarea+=feature.properties.Shape_Leng;
        statearray.features.push(feature);
        setLoading(false);
      }
     })
     setStatedata(statearray);

     var scale = scaleQuantile().domain([11, 65]).range(range(7.8, 6.8, -0.2));
     
     setmapstyle(regions_centers[statename].style);
     setViewport({
      longitude: regions_centers[statename].lngLat[0],
      latitude: regions_centers[statename].lngLat[1],
      zoom: scale(totalarea),
      pitch: 0,
      bearing: 0,
     });
    }
    console.log(mapstyle);
     // console.log(statearray.features[0].geometry.coordinates[0][0][0][0]);
  }, [allstates]);

  const onHover = useCallback(event => {
    const {
      features,
      srcEvent: {offsetX, offsetY}
    } = event;
   
    const hoveredFeature = features && features[0];

    setHoverInfo(
      hoveredFeature
        ? {
            feature: hoveredFeature,
            x: offsetX,
            y: offsetY
          }
        : null
    );
  }, []);
  
  return  <div className='maps'>
            <ReactMapGL
                 {...viewport}
                width='100%'
                height='100%'
                mapStyle={mapstyle}
                onViewportChange={setViewport}
                mapboxApiAccessToken={TOKEN}
                interactiveLayerIds={['data']}
                onHover={onHover}
                >
                {/* <SVGOverlayMarker libraries={lib} radius={8}/> */}
                
                <Source id='cjson' type="geojson" data={statedata}>
                    {
                      loading ?
                       null
                      :
                      <Layer
                        id="data"
                        type="fill"
                        source='cjson'
                        paint={{
                        "fill-color": {
                            property: 'value',
                             stops: stops
                          },
                        "fill-opacity": 0.3
                        }} >

                      </Layer>
                    }
                   
                </Source>
                {hoverInfo && (
                <div className="tooltip" style={{left: hoverInfo.x, top: hoverInfo.y}}>
                    <div>State: {hoverInfo.feature.properties.admin1Name}</div>
                    <div>Region: {hoverInfo.feature.properties.admin2Name}</div>
                    <div>Area: {hoverInfo.feature.properties.Shape_Area}</div>
                </div>
                )}

                
             </ReactMapGL>
             
         </div>;
}
