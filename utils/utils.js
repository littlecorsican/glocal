export const groupTourPackageWithLocation=(array)=>{
    const groupedTourPackage = array.reduce((grouped, value)=>{
        const { idTourPkg } = value
        grouped[idTourPkg] = value
        
        return grouped 
    }, [])
    console.log("groupedTourPackage", groupedTourPackage)
    return groupedTourPackage.filter((value)=>{
        return value != undefined || value != null || value != ""
    })
}


// NONE OF THE FUNCTIONS BELOW THIS COMMENT IS CURRENTLY IN USED
// STORING FOR POTENTIAL FUTURE USE

export const addTourBookingIdToStorage=(id)=>{
    localStorage.setItem("tourBookingId", id)
}

export const getTourBookingIdToStorage=()=>{
    return localStorage.getItem("tourBookingId")
}

export const removeTourBookingIdToStorage=()=>{
    return localStorage.removeItem("travellerDetails")
}


export const setTravellerDetails=(obj)=>{
    localStorage.setItem("travellerDetails", obj)
}

export const getTravellerDetails=()=>{
    return localStorage.getItem("travellerDetails")
}

export const removeTravellerDetails=()=>{
    return localStorage.removeItem("travellerDetails")
}
