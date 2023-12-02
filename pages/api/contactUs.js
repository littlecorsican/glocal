import api from 'api'

const handler = async(req, res)=> {

    if (req.method === 'POST') {
      try {
        const url = `${api().contactUs}`
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
            if (response.successful) {
              return res.status(200).json({
                status:1,
                contactUs: response?.contactUs
              });
            }
            return res.status(500).json({
              status: 0,
              message: "error",
            });
        })
      } catch(err) {
        console.log("error")
        return res.status(500).json({
          status: 0,
          message: "error",
          data : err.toString()
        });
      }
  
  
  
    }
  }
  
  
  export default handler
  
  
  
  