import React from "react";
import { connect } from "react-redux";
import { userActions } from "../../_actions";
import "./Submit.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import axios from "axios";

import logo from "../../assets/logo.png";

class Submit extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    // this.props.logout();

    this.state = {
      step: 0,
   
      lang: "id",
      password: "",
      hospitals: [],
      submitted: false,
      contentEng: [],
      contentIdn: [],
      full_name: "",
      gender: "",
      dob: "",
      email: "",
      phone: "",
      visited_hosp: "",
      pcr_antigen: null,
      fever_history: null,
      breathing_difficulty: null,
      cough_history: null,
      runny_nose: null,
      losing_smell: null,
      losing_taste: null,
      body_aches: null,
      vomit: null,
      // createdAt: new Date(),
      // updatedAt: new Date(),
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitEnd = this.submitEnd.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleStart1 = this.handleStart1.bind(this);
    this.handleLast = this.handleLast.bind(this);
    this.changeLang = this.changeLang.bind(this);
    this.changeGen = this.changeGen.bind(this);
    this.changeHosp = this.changeHosp.bind(this);
    this.handleNo = this.handleNo.bind(this);
    this.handleYes = this.handleYes.bind(this);
  }
  componentDidMount() {
    axios
      .get(`https://mysiloam-api-staging.siloamhospitals.com/user/v1/form-web`)
      .then((res) => {
        const contents = res.data.data;
        // console.log("contnet ", contents);
        this.setState({ contentEng: contents.en, contentIdn: contents.id });
      });
      axios
      .get(`https://siloamtest-backend.herokuapp.com/api/v1/hospitals`,{
        headers: { 
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }})
      .then((res) => {
        const hospitals = res.data;
       
        this.setState({hospitals : hospitals})
        // this.setState({ contentEng: contents.en, contentIdn: contents.id });
      });
  }
  populateOptions(options) {
   const optional = Object.values(options)
   console.log("optional",optional[1])
    return optional[1].map((option, index) => (
      <option key={index} value={option.name}>{option.name}</option>
    ));
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  submitEnd(){
    const {email, password,full_name, contentEng, contentIdn, step, lang, genre,dob,phone,visited_hosp,pcr_antigen,fever_history,breathing_difficulty,cough_history,runny_nose,losing_smell,losing_taste,body_aches,vomit } = this.state;
    this.props.submitForm(email, password,full_name, contentEng, contentIdn, step, lang, genre,dob,phone,visited_hosp,pcr_antigen,fever_history,breathing_difficulty,cough_history,runny_nose,losing_smell,losing_taste,body_aches,vomit)
  }
  handleStart1() {
  
    this.setState({ step: 1 });
  }
  handleStart() {
  
    this.setState({ step: 2 });
  }
  handleLast() {
    this.setState({ step: 3 });
  }
  changeLang(event) {
    // console.log("change",this.lang,event.target.value)
    this.setState({ lang: event.target.value });
  }
  changeHosp(event) {
    console.log("change", event.target.value);
    this.setState({ visited_hosp : event.target.value})
    // this.setState({lang: event.target.value});
  }
  changeGen(event) {
    
    this.setState({ gender : event.target.value})
    // this.setState({lang: event.target.value});
    console.log("change", this);
  }
  handleNo(e){
    this.setState({
      [e.target.name]: false,
    });
    // console.log("e",e.target.name)
  }
  handleYes(e){
    this.setState({
      [e.target.name]: true,
    });
    console.log("YES",e.target.name)
  }

  handleSubmit() {
    // const { history } = this.props;
    // e.preventDefault();
    this.setState({ step: 2 });
    // const { email, password } = this.state;
    // console.log("aa");
 
      // console.log("here");
      // this.props.submitForm()
    
  }

  render() {
    
    const { email,hospitals,full_name, contentEng, contentIdn, step, lang, genre,dob,phone,visited_hosp,pcr_antigen,fever_history,breathing_difficulty,cough_history,runny_nose,losing_smell,losing_taste,body_aches,vomit } =
      this.state;
    return (
      <div>
        <header className="header">
          <img className="logo" src={logo} alt="Logo" />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={lang}
            onChange={this.changeLang}
          >
            <MenuItem value={"en"}>English</MenuItem>
            <MenuItem value={"id"}>Indonesia</MenuItem>
          </Select>
        </header>
        {this.hospitals}
        {step === 0 && (
          <div>
            <div className="content">
              <div className="image__container">
                <img
                  className="image__landing"
                  src="https://mysiloam-api-staging.siloamhospitals.com/storage-down/mysiloam-form/mysiloam-form-16160655464527037.png"
                  alt='Logo'
                ></img>
              </div>
              <div className="title__container">
                <div className="title__landing">
                  <span className="inner__landing">
                    {lang === "id" ? contentIdn.title : contentEng.title}
                  </span>
                </div>
                <div
                  className="content__landing"
                  dangerouslySetInnerHTML={{
                    __html:
                      lang === "id" ? contentIdn.webDesc : contentEng.webDesc,
                  }}
                ></div>
              </div>
            </div>

            <div className="yellowBtn__container">
              <button className="yellow__button" onClick={this.handleStart1}>
                Start
              </button>
            </div>
          </div>
        )}
        {step === 1 && (
          <div className="content">
            <div className="login">
              <form className="login__form" onSubmit={this.handleSubmit}>
                <h1>Health Declaration Form</h1>
                <div className="form__row">
                <input
                  type="text"
                  name="full_name"
                  placeholder="Full Name"
                  onChange={this.handleChange.bind(this)}
                  value={full_name}
                />
                <select value={genre} onChange={this.changeGen}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                
                </div>
                <div className="form__row">
                <input
                  type="date"
                  name="dob"
                  placeholder="Date Of Birth ( dd/mm/yy)"
                  onChange={this.handleChange.bind(this)}
                  value={dob}
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange.bind(this)}
                  value={email}
                />
                </div>
                <div className="form__row">
                 <input
                  type="text"
                  name="phone"
                  placeholder="Handphone Number"
                  onChange={this.handleChange.bind(this)}
                  value={phone}
                />
               
                 <select value={visited_hosp} onChange={this.changeHosp}>
                  {this.populateOptions(hospitals)}
                </select>
               
                </div>
                
                <button  disabled={phone ===""} style={phone !== ""? {background:"rgb(254, 207, 0)"}: {background:"rgb(216, 216, 216)",color:"rgb(151, 151, 151)"}}type="submit" className="yellow__button">
                  Next
                </button>    
                
              </form>
            </div>
          </div>
        )}
          {step === 2 && (
             <div style={{justifyContent:"flex-end",margin:"0px 50px"}} className="content">
             <div style={{alignItems:"flex-start"}} className="login">
                <span >{lang === "id" ?"Apakah Anda memiliki hasil PCR atau antigen dalam kurun waktu <10 hari dengan hasil non-reaktif ?" : "Do you have PCR or antigen test result within the last 10 days with a non-reactive result?"}</span>
                 <div>
                 <button name="pcr_antigen" onClick={this.handleNo} style={pcr_antigen === false ? {background: "rgb(52, 145, 20)",border: "1px solid rgb(52, 145, 20)",color: "rgb(248, 248, 248)"}:null} className="choose_btn">
                   No
                 </button> 
                 <button name="pcr_antigen" onClick={this.handleYes} style={pcr_antigen === true ? {background: "rgb(52, 145, 20)",border: "1px solid rgb(52, 145, 20)",color: "rgb(248, 248, 248)"}:null} className="choose_btn">
                   Yes
                 </button>     
            </div>
            <button onClick={this.handleLast}  disabled={pcr_antigen ===null} style={pcr_antigen !== null? {background:"rgb(254, 207, 0)"}: {background:"rgb(216, 216, 216)",color:"rgb(151, 151, 151)"}} className="yellow__button">
                  Next
                </button> 
             </div>

              
           </div>
           
          )}
             {step === 3 && (
               <div style={{justifyContent:"flex-end",margin:"0px 50px"}} className="content">
                 
               <div style={{alignItems:"flex-start"}} className="login">
               <span >{lang === "id" ? "Apakah Anda memiliki gejala berikut dalam 14 hari?" : "Do you have any of these following symptoms within the last 14 days?"}</span>
                 <div className="question__container">
                  <span >{lang === "id" ? "Demam atau riwayat demam" : "Fever or History of Fever"}</span>
                   <div>
                   <button name="fever_history" onClick={this.handleNo} style={fever_history === false ? {background: "rgb(52, 145, 20)",border: "1px solid rgb(52, 145, 20)",color: "rgb(248, 248, 248)"}:null} className="choose_btn">
                     No
                   </button> 
                   <button name="fever_history" onClick={this.handleYes} style={fever_history === true ? {background: "rgb(52, 145, 20)",border: "1px solid rgb(52, 145, 20)",color: "rgb(248, 248, 248)"}:null} className="choose_btn">
                     Yes
                   </button>  
                   </div>   
              </div>
              <div className="question__container">
                  <span >{lang === "id" ? "Kesulitan bernafas" : "Breathing Difficulty"}</span>
                   <div>
                   <button name="breathing_difficulty" onClick={this.handleNo} style={breathing_difficulty === false ? {background: "rgb(52, 145, 20)",border: "1px solid rgb(52, 145, 20)",color: "rgb(248, 248, 248)"}:null} className="choose_btn">
                     No
                   </button> 
                   <button name="breathing_difficulty" onClick={this.handleYes} style={breathing_difficulty === true ? {background: "rgb(52, 145, 20)",border: "1px solid rgb(52, 145, 20)",color: "rgb(248, 248, 248)"}:null} className="choose_btn">
                     Yes
                   </button>  
                   </div>   
              </div>
              <div className="question__container">
                  <span >{lang === "id" ? "Batuk atau riwayat batuk" :"Cough or History of Cough"}</span>
                   <div>
                   <button name="cough_history" onClick={this.handleNo} style={cough_history === false ? {background: "rgb(52, 145, 20)",border: "1px solid rgb(52, 145, 20)",color: "rgb(248, 248, 248)"}:null} className="choose_btn">
                     No
                   </button> 
                   <button name="cough_history" onClick={this.handleYes} style={cough_history === true ? {background: "rgb(52, 145, 20)",border: "1px solid rgb(52, 145, 20)",color: "rgb(248, 248, 248)"}:null} className="choose_btn">
                     Yes
                   </button>  
                   </div>   
              </div>
              <div className="question__container">
                  <span >{lang === "id" ? "pilek" :"Runny Nose" }</span>
                   <div>
                   <button name="runny_nose" onClick={this.handleNo} style={runny_nose === false ? {background: "rgb(52, 145, 20)",border: "1px solid rgb(52, 145, 20)",color: "rgb(248, 248, 248)"}:null} className="choose_btn">
                     No
                   </button> 
                   <button name="runny_nose" onClick={this.handleYes} style={runny_nose === true ? {background: "rgb(52, 145, 20)",border: "1px solid rgb(52, 145, 20)",color: "rgb(248, 248, 248)"}:null} className="choose_btn">
                     Yes
                   </button>  
                   </div>   
              </div>
              <div className="question__container">
                  <span >{lang === "id" ? "Kehilangan daya penciuman" : "Losing sense of smell"}</span>
                   <div>
                   <button name="losing_smell" onClick={this.handleNo} style={losing_smell === false ? {background: "rgb(52, 145, 20)",border: "1px solid rgb(52, 145, 20)",color: "rgb(248, 248, 248)"}:null} className="choose_btn">
                     No
                   </button> 
                   <button name="losing_smell" onClick={this.handleYes} style={losing_smell === true ? {background: "rgb(52, 145, 20)",border: "1px solid rgb(52, 145, 20)",color: "rgb(248, 248, 248)"}:null} className="choose_btn">
                     Yes
                   </button>  
                   </div>   
              </div>
              <div className="question__container">
                  <span >{lang === "id" ? "Kehilangan daya perasa" : "Losing sense of taste" }</span>
                   <div>
                   <button name="losing_taste" onClick={this.handleNo} style={losing_taste === false ? {background: "rgb(52, 145, 20)",border: "1px solid rgb(52, 145, 20)",color: "rgb(248, 248, 248)"}:null} className="choose_btn">
                     No
                   </button> 
                   <button name="losing_taste" onClick={this.handleYes} style={losing_taste === true ? {background: "rgb(52, 145, 20)",border: "1px solid rgb(52, 145, 20)",color: "rgb(248, 248, 248)"}:null} className="choose_btn">
                     Yes
                   </button>  
                   </div>   
              </div>
              <div className="question__container">
                  <span >{lang === "id" ? "Nyeri Otot " : "Body Aches" }</span>
                   <div>
                   <button name="body_aches" onClick={this.handleNo} style={body_aches === false ? {background: "rgb(52, 145, 20)",border: "1px solid rgb(52, 145, 20)",color: "rgb(248, 248, 248)"}:null} className="choose_btn">
                     No
                   </button> 
                   <button name="body_aches" onClick={this.handleYes} style={body_aches === true ? {background: "rgb(52, 145, 20)",border: "1px solid rgb(52, 145, 20)",color: "rgb(248, 248, 248)"}:null} className="choose_btn">
                     Yes
                   </button>  
                   </div>   
              </div>
              <div className="question__container">
                  <span >{lang === "id" ? "Muntah atau diare" :"Vommitting or diarrhea" }</span>
                   <div>
                   <button name="vomit" onClick={this.handleNo} style={vomit === false ? {background: "rgb(52, 145, 20)",border: "1px solid rgb(52, 145, 20)",color: "rgb(248, 248, 248)"}:null} className="choose_btn">
                     No
                   </button> 
                   <button name="vomit" onClick={this.handleYes} style={vomit === true ? {background: "rgb(52, 145, 20)",border: "1px solid rgb(52, 145, 20)",color: "rgb(248, 248, 248)"}:null} className="choose_btn">
                     Yes
                   </button>  
                   </div>   
              </div>
              <button onClick={this.submitEnd}  disabled={pcr_antigen ===null} style={pcr_antigen !== null? {background:"rgb(254, 207, 0)"}: {background:"rgb(216, 216, 216)",color:"rgb(151, 151, 151)"}} className="yellow__button">
                    Submit
                  </button> 
               </div>
             </div>
             )}
      </div>
    );
  }
}

function mapState(state) {
  return
}
const actionCreators = {
  submitForm: userActions.submitForm,
};

const connectedSubmitPage = connect(mapState, actionCreators)(Submit);

export { connectedSubmitPage as Submit };
