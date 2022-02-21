import {range} from 'd3-array';
import {scaleQuantile} from 'd3-scale';

export function updatePercentiles(featureCollection, accessor,colorScheme) {
  const {features} = featureCollection;
  const scale = scaleQuantile().domain(features.map(accessor)).range(range(9));
  return {
    type: 'FeatureCollection',
    features: features.map(f => {
      const value = colorScheme.find(item => item.state === accessor(f)).id;
      const properties = {
        ...f.properties,
        value,
       
      };
      return {...f, properties};
    })
  };
}
