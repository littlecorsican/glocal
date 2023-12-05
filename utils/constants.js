export const states={
    0 : "Selangor",
    1: "Kedah" ,
    2 : "Pahang" ,
    3 : "Negeri Sembilan" ,
    4 : "Terengganu" ,
    5 : "Johor" ,
    6 : "Perak" ,
    7 : "Kelatan" ,
    8 : "Penang" ,
    9 : "Sabah" ,
    10 : "Perlis" ,
    12 : "Melaka" ,
    13: "Perak" ,
    14 : "Sarawak" ,
    15 : "WP Kuala Lumpur" 
}
export const title = {
    0 : "Mr",
    1 : "Mrs",
    2 : "Ms"
}

// export const salutation = {
//     0 : "Mr",
//     1 : "Mrs",
//     2 : "Ms"
// }
export const salutation = [
    {text: "Mr", code:"MR"},
    {text: "Mrs", code:"MRS"},
    {text: "Ms", code:"MS"},
]

// export const gender = {
//     0 : "Male",
//     1 : "Female"
// }
export const gender = [
    {text: "Male", code:"Male"},
    {text: "Female", code:"Female"},
]

export const relationship = {
    0 : "Sister",
    1 : "Brother",
    2 : "Parent",
    3 : "Son",
    4 : "Daughter",
    5 : "Friend"
}

export const razorPayBaseUrl = "https://www.onlinepayment.com.my/RMS/pay"
//https://www.onlinepayment.com.my/RMS/pay/SB_cahayanurholida/?amount=27&orderid=ODSFJS342&vcode=d34c26cbb06f83c8e3ed5e81d263f077

export const review = [
    {
        title1 : "Convenient & Smooth",
        description1 :"Our trip was outstanding! Nicolas was enthusiastic, energetic and very knowledgeable in history and culture as well as having a host of interesting anecdotes to share.",
        star1 : 5,
        title2 : "Utterly fantastic. ",
        description2 :"Marion was a delightful host, funny and kind, and so full of interesting historical knowledge.",
        star2 : 4
    },
    {
        title1 : "Highly recommended",
        description1 :"Time constraint for Muslims as Maghrib prayer needed to be done very very very quickly. Other than that, just amazing, magnificent views, talented driver, beautiful KL and refreshing night breeze",
        star1 : 5,
        title2 : "Amazing",
        description2 :"We truly enjoyed the night trips. ",
        star2 : 5
    },
    {
        title1 : "Highly recommended",
        description1 :"Amazing experience, booked the 2 day tour and it was totally worth it. Bunhak (our guide) and Mr. San (our driver) did an excellent job!!! Thank you so much!",
        star1 : 5,
        title2 : "Convenient & Smooth",
        description2 :"An amazing trip to umrah from start to finish. Iqra from Al Hadi booked all of our travel arrangements and offered us a great package. Even during our trip at it was easy to contact the travel agent if we needed anything.",
        star2 : 5
    },
]

export const faq = [
    {
        id: 1,
        title: 'IS THERE ANY MUTAWWIF (GROUP LEADER) FOR THE TRIP?',
        description: 'COMPANY will provide an experienced Mutawwif from Malaysia to guide you throughout your Umrah journey.'
    },
    {
        id: 2,
        title: 'WHAT DOCUMENTS ARE NEEDED FOR VISA APPLICATION?',
        description: 'COMPANY will provide an experienced Mutawwif from Malaysia to guide you throughout your Umrah journey.'
    },
    {
        id: 3,
        title: 'WHAT TYPE OF VACCINE IS NEEDED FOR UMRAH?',
        description: 'COMPANY will provide an experienced Mutawwif from Malaysia to guide you throughout your Umrah journey.'
    },
    {
        id: 4,
        title: 'IS THERE A NEED FOR AN ADDITIONAL INSURANCE?',
        description: 'COMPANY will provide an experienced Mutawwif from Malaysia to guide you throughout your Umrah journey.'
    },
    {
        id: 5,
        title: 'WHEN WILL THE UMRAH COURSE BE HELD?',
        description: 'COMPANY will provide an experienced Mutawwif from Malaysia to guide you throughout your Umrah journey.'
    },
]

export const payment_status = {
    "00": "Succesful Payment",
    "11" : "Payment Failed",
    "22": "Payment still pending"
}


export const email_host = "mail.kakijalan.com.my"
export const email_port = "465"
export const email_useSSL = true
export const email_to = 'cahayanur.holidays@gmail.com'

export const payment_mode = {
    pay_full_amount: 0,
    pay_deposit_only: 1
}