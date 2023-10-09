import api from 'api'

const handler = async(req, res)=> {

    if (req.method === 'POST') {
        //console.log("req", req)
        console.log("body", req.body, typeof req.body)
        // const body = JSON.parse(req.body)
        // console.log("body2", body, typeof body)
      try {
        const url = `${api().makeBookingOnline}`
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(req.body),
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
  
  
  
  