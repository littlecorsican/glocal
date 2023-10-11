import React from 'react'
import CustomDropDown from '../CustomDropDown'
import Image from 'next/image';
import api from 'api'

export default class SearchBar extends React.Component {
  constructor() {
      super();
      this.state = {
        months : [
            "JANUARY",
            "FEBUARY",
            "MARCH",
            "APRIL",
            "MAY",
            "JUNE",
            "JULY",
            "AUGUST",
            "SEPTEMBER",
            "OCTOBER",
            "NOVEMBER",
            "DECEMBER"
        ],
        category : [],
        countries : [],
        matchedCountries : [],
        inputValue : ""
        // monthDisplay : "none",
        // categoryDisplay : "none"
      }
      this.destinationRef = React.createRef();
      this.monthRef = React.createRef();
      this.categoryRef = React.createRef();
  }

    handleKeyDown=(e)=>{
        let matchedCountries = []
        let inputValue = e.target.value
        this.setState({ 
            matchedCountries : [],
            inputValue : inputValue
        }, ()=>{
            for (let i of this.state.countries) {
                if (i.countryName.toLowerCase().startsWith(inputValue.toLowerCase()) && inputValue != "" ) {
                    matchedCountries.push(i.countryName)
                }
            }
            this.setState({
                matchedCountries : matchedCountries
            })
        })

    }

    handleSearch =()=> {
        let month = this.monthRef.current.innerText
        let category = this.categoryRef.current.innerText
        let destination = this.destinationRef.current.value
        const intMonth = {
            "JANUARY" : 1,
            "FEBUARY" : 2,
            "MARCH" : 3,
            "APRIL" : 4,
            "MAY" : 5,
            "JUNE" : 6,
            "JULY" : 7,
            "AUGUST" : 8,
            "SEPTEMBER" : 9,
            "OCTOBER" : 10,
            "NOVEMBER" : 11,
            "DECEMBER" : 12,
            "MONTH" : 0
        }

        if (category == "CATEGORY") {
            alert("You must pick a category")
            return
        }
        
        let categoryToParam = {
            "CRUISE" : "cruise",
            "TOURS" : "tour",
            "TOUR" : "tour",
            "TOURS:INBOUND" : "tour",
            "TOURS:OUTBOUND" : "tour",
            "UMRAH" : "umrah",
        }

        console.log(`/${categoryToParam[category]}?${destination ? `destination=${destination}` : ""}${parseInt(month) ? `&month=${intMonth[month]}` : "" }&category=${category}`)
        location.href = `/${categoryToParam[category]}?${destination ? `destination=${destination}` : ""}${parseInt(month) ? `&month=${intMonth[month]}` : "" }&category=${category}`
    }

  autoInput=(value)=>{
    this.destinationRef.current.value = value
    this.setState({ 
        matchedCountries : [],
        inputValue : ""
    })
  }
  componentDidMount() {
    console.log(api())
    try {
        fetch(api().referenceList)
        .then(rawResult => rawResult.json())
        .then(jsonData => {
            this.setState({ countries : jsonData.countryList , category : jsonData.tourTypeList })
        });
    } catch (error) {

        console.log('There was an error', error);
    }
  }

  render() {
    return (
        <>
            <div id="banner" className="mb-5 d-flex" style={{width: "90%", margin: "auto"}}>
                <div className="position-relative bg-transparent container-fluid d-flex flex-column justify-content-center align-items-center" style={{marginTop: "-70px", zIndex: 2}}>
                    <div className="d-flex flex-column flex-xl-row justify-content-center bg-white shadow p-4 py-xl-5 gap-2 gap-xl-2 col-12 col-xl-10">
                        <div className="d-flex flex-column col-sm">
                            <input type="text" id="destination_input" className="form-control h-100" style={{backgroundColor: "#f5f5f5", border: "1px solid #e8e2d6", color: "#460000"}} placeholder="SEARCH DESTINATION..." onKeyUp={this.handleKeyDown} ref={this.destinationRef} />
                            {/* the drop down box */}
                            <div className="lis-className position-relative">
                                <ul className="list position-absolute justify-content-end flex-column overflow-auto p-0 text-center" style={{borderRadius: "5px", fontFamily: 'Montserrat', minWidth: "256px", maxHeight: "263px", cursor: "pointer", fontFamily: 'Poppins', background: "rgba(255, 255, 255, 0.9)", zIndex:"100", boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.25)", marginTop: "4px"}}>
                                    {
                                        this.state.matchedCountries.map((value,index)=>{
                                            return <li className="py-3 mb-0 li_class text-uppercase list-items" key={index} style={{cursor: 'pointer'}} onClick={()=>this.autoInput(value)}><b>{value.substring(0, this.state.inputValue.length)}</b>{value.substring(this.state.inputValue.length)}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div id="month_selection_div" className="d-flex justify-content-between position-relative col-sm" > 
                            <CustomDropDown                                     
                                title="MONTH" 
                                data = {this.state.months} ref={this.monthRef}
                                objectKey="" // key in the object that we will be using its value to form our dropdown UL LI list
                             />
                        </div>
                        <div id="category_selection_div" className="d-flex justify-content-between position-relative col-sm" >
                            <CustomDropDown                                     
                                title="CATEGORY" 
                                data = {this.state.category} radio={true} ref={this.categoryRef} 
                                objectKey="code" // key in the object that we will be using its value to form our dropdown UL LI list
                            />
                        </div>
                        <button 
                            type="button"
                            className="btn btn-primary"
                            style={{backgroundColor: "#2158AA", border: "none", fontFamily:'Montserrat', fontWeight:"700", padding:"1rem 2.5rem"}}
                            onClick={this.handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
  }
}



