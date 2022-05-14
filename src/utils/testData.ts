/* eslint-disable prettier/prettier */
import moment from 'moment';

export function testData(data : string){
    const result = moment(data, 'DD/MM/YYYY', true).isValid();
    return result;
}