import api from "../api.js"

export const validation=(api)=>{ 
    const api = api()
    switch(api) {
        case "referenceList":
            
            break
            
    }
    
}


const checkIfObjHasProperty=(obj, property)=>{
    for (let i = 0 ; i < property.length; i++) {
        if (!obj.hasOwnProperty(property[i])) {
            return false
        } 
    }
    return true
}

const checkIfArrayIsEmpty=(arr)=>{
    if (!Array.isArray(arr)) {
        return false
    }
    if (arr.length == 0) {
        return false
    }
    return true
}

export const validateReferenceList=(input)=>{
    //check if have countryList
    if (!checkIfObjHasProperty(input, ["countryList"])) return false
    if (!checkIfArrayIsEmpty(input.countryList)) return false
    return true
}

export const validateOnlineBookingConfigList=(input)=>{
    return checkIfArrayIsEmpty(input)
}

export const validateIpayConfigList=(input)=>{
    if (!checkIfObjHasProperty(input, ["ipayConfigList"])) return false
    return checkIfArrayIsEmpty(input.ipayConfigList)
}

export const validateTourdepdetail=(input)=>{
    return !checkIfObjHasProperty(input, ["tourDep", "idBase", "idTourPkg", "tourDepItemList", "tourPkg", "tourTypeCode"])
}