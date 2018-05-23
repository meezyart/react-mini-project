// import * as R from 'ramda';

import trackItems from "./fakeData";
// import Request from 'superagent'

console.log('getting data..');

export const fetchActivity = async () => {
        // console.log('fetch activies api...  ', trackItems);
        // can be replaced with Request Axios or superagent
     
        return new Promise(resolve => resolve(trackItems));
  }


