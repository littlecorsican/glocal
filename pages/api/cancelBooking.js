import api from 'api'

const handler = async(req, res)=> {

    if (req.method === 'POST') {
        //console.log("req", req)
        console.log("body", req.body, typeof req.body)
      try {
        const url = `${api().cancelBooking}`
        fetch(url, {
          method: 'POST',
          body: req.body,
          headers : {
            "Content-Type" : "application/json",
          }
        })
        .then(response => response.json())
        .then(async response => {
            console.log("response", response, typeof response)
            return res.status(200).json(response);
        })
      } catch(err) {
        return res.status(500).json({
          status: "error",
          message: "error",
          data : err
        });
      }
  
  
  
    }
  }
  
  
  export default handler
  
  
  
  