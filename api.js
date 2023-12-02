
const api=()=>{
    console.log(process.env.NEXT_PUBLIC_NODE_ENV)
    if (process.env.NEXT_PUBLIC_NODE_ENV == "development") {
        return {
            "referenceList": "https://trevabook.ddns.net/trevabook-admin/api/v1/referenceList",
            "tourPackageWithLocation": "https://trevabook.ddns.net/trevabook-admin/api/v1/tourpackagelistwithlocation",
            "bookingList": "https://trevabook.ddns.net/trevabook-admin/api/v1/bookingList",
            "tourpkgdetail": "https://trevabook.ddns.net/trevabook-admin/api/v1/tourpkgdetail",
            "tourdepdetail": "https://trevabook.ddns.net/trevabook-admin/api/v1/tourdepdetail",
            "makeBookingOnline": "https://trevabook.ddns.net/trevabook-admin/api/v1/makeBookingOnline",
            "sendCustomerDetails": "https://trevabook.ddns.net/trevabook-admin/api/v1/sendCustomerDetails",
            "cancelBooking": "https://trevabook.ddns.net/trevabook-admin/api/v1/cancelBooking",
            "onlineBookingConfigList": "https://trevabook.ddns.net/trevabook-admin/api/v1/onlineBookingConfigList",
            "iPayConfigList": "https://trevabook.ddns.net/trevabook-admin/api/v1/ipayConfigList",
            "tourpkglist": "https://trevabook.ddns.net/trevabook-admin/api/v1/tourpkglist",
            "contactUs": "https://trevabook.ddns.net/trevabook-admin/api/v1/contactUs",
        }
        
    } else if (process.env.NEXT_PUBLIC_NODE_ENV == "production") {
        const base = "https://kakijalan.ddns.net/kakijalan-admin/api/v1"
        return {
            "referenceList": `${base}/referenceList`,
            "tourPackageWithLocation": `${base}/tourpackagelistwithlocation`,
            "bookingList": `${base}/bookingList`,
            "tourpkgdetail": `${base}/tourpkgdetail`,
            "tourdepdetail": `${base}/tourdepdetail`,
            "makeBookingOnline": `${base}/makeBookingOnline`,
            "sendCustomerDetails": `${base}/sendCustomerDetails`,
            "cancelBooking": `${base}/cancelBooking`,
            "onlineBookingConfigList": `${base}/onlineBookingConfigList`,
            "iPayConfigList": `${base}/ipayConfigList`,
            "tourpkglist": `${base}/tourpkglis`,
            "contactUs": `${base}/contactUs`,
        }
    }


}

export default api