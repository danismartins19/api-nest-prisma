/* eslint-disable prettier/prettier */
import * as moment from 'moment';

export function testData(data : string):boolean{
    const result = moment(data, 'DD/MM/YYYY', true).isValid();
    return result;
}