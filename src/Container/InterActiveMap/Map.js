import React, {useState, useEffect, useMemo, useCallback} from 'react';
import ReactMapGL, {SVGOverlay, Source, Layer} from 'react-map-gl';
import mapboxgl from "mapbox-gl"; 
import {updatePercentiles} from './utils';
import Blank from './blank';
import {scaleQuantile} from 'd3-scale';
import {range} from 'd3-array';
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";
import './map.css';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default; 
export default function Map() {

    const TOKEN="pk.eyJ1IjoiYW5hc25hZGVlbXNoZWlraCIsImEiOiJja2kxa2J6enMwMWprMndwYWd0NmIwZHY3In0.rxQDw8BqDleyTMby9WZPKg";
    const COLOR_PATTERN_API_PATH = "data/states_colors.json"; //set according to your api call
    var scale = scaleQuantile().domain([480, 1500]).range(range(5, 6.1, 0.05));
    const setzoom = () =>{
      if(window.innerWidth < 420){
        return 4;
      }
      return scale(window.innerHeight);
      
    //  window.innerWidth;
    }
    const [viewport, setViewport]  =useState({
        longitude: 9.0820,
        latitude: 8.6753,
        zoom: setzoom(),
        pitch: 0,
        bearing: 0,
        maxBounds: [
          [0.6486388250396828, 3.558681182378592], // Southwest coordinates
          [15.580529899429365, 14.708736473659997] // Northeast coordinates
        ],
  });
  
  let navigate = useNavigate();
  let stoparray=[];
  const dispatch = useDispatch();
  const [allData, setAllData] = useState(null);
  const [color, setColor] = useState(null);
  const [hoverInfo, setHoverInfo] = useState(null);
  const [stopstate, setStopstate] = useState(null);
  const [loading, setLoading] = useState(true);
  const bounds = [
        [-5.554646968657551, 1.5095513116189778], // Southwest coordinates
        [22.186670139853504, 16.30430389288813] // Northeast coordinates
    ];
  let statearray;
  //  const onViewStateChange = ({viewState}) => setviewState(viewState);

    useEffect(() => {
      fetch("data/nigeria_lga_boundaries.geojson")
      .then(resp => resp.json(),err=> console.log(err))
      .then(json => {
          setAllData(json)
          
        })
         fetch(COLOR_PATTERN_API_PATH)
        .then(resp => resp.json())
        .then(json => {
            setColor(json)
            
            json.forEach(element => {
                stoparray.push([element.id,element.color])
            });
            dispatch({type:'SAVE_STOPS',payload:stoparray})
            setStopstate(stoparray)
            setLoading(false);
          })
        

    }, []);
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
      const data = useMemo(() => {
        return allData && updatePercentiles(allData, f => f.properties.admin1Name, color);
      }, [allData, color]);

      useEffect(() => {
       dispatch({type:'SAVE_STATES',payload:data})
      }, [data]);
      
      const onClick = useCallback(event => {
        event.features[0] && navigate(`/${event.features[0].properties.admin1Name}`);
      }, []);
    

   
      
  return  <div className='maps'>
            <ReactMapGL
                 {...viewport}
                width='100%'
                height='100%'
                mapStyle='mapbox://styles/anasnadeemsheikh/ckz74j4s3002u15lc4sc9km7b'
                onViewportChange={setViewport}
                mapboxApiAccessToken={TOKEN}
                interactiveLayerIds={['data']}
                onHover={onHover}
                onClick={onClick}
                attributionControl={false}
                // mapOptions={{
                //   maxBounds: bounds
                // }}
                >
                {/* <SVGOverlayMarker libraries={lib} radius={8}/> */}
                
                <Source id='cjson' type="geojson" data={data}>
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
                             stops: stopstate
                          },
                        "fill-opacity": 0.1
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
