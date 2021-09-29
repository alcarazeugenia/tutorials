/* Export & import statements (Modules) */

/* ---  Example of an export default

File: person.js

const person = { 
    name: "Name"
}
export default person

The import would then be:

import person from "./person.js" // you can name the import as you want


*/

/* ---  Example of exports  (not default)

File: utility.js

export const clean = ()=>{...}

export const baseData=10

The import would then be:

import {baseData, clean } from "./utility.js" // names of the imports are defined by the export
import {baseData as Data } from "./utility.js" // You can rename with "as"
import * as bundled from "./utility.js" // With import * you create an object of all the exports, and then use the features as properties e.g. bundle.dataBase



*/
