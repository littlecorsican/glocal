import api from 'api'

const handler = async(req, res)=> {

    if (req.method === 'POST') {
        //console.log("req", req)
        console.log("body", req.body, typeof req.body)
        // const body = JSON.parse(req.body)
        // console.log("body2", body, typeof body)
      try {
        const url = `${api().sendCustomerDetails}`
        console.log("url", url)
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(req.body),
          headers : {
            "Content-Type" : "application/json",
          }
        })
        .then(response => response.text())
        .then(async response => {
          try {
            console.log("response", response, typeof response)
            return res.status(200).json(response);
          } catch {
              throw Error(response);
          }
          
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
  
  
  
  