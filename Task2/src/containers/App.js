import React, {Component}  from 'react';
import SearchBox from '../components/Search';
import CardList from '../components/UsersList';
import Scroll from '../components/Down';
import Navbar from '../components/Navigationbar/Navigation';
import Loader from './Spinner';
import './styles.css';

class App extends Component{

    constructor(){
        super()
        //defining the states
        this.state={
            robots: [],
            searchfeild: '',
            isButtonClicked: false
        }
    }

    //function when the button is clicked .
    //it fetches the api
    //and stores in robots
    
    onButtonSubmit = () => {
        //changes the state of the button is clicked
        this.setState({isButtonClicked: !this.isButtonClicked})
        const timer = setTimeout(() => {
            //fetches the api which is provided in letsgrowmore
            fetch('https://reqres.in/api/users?page=2').then(response=> {
            return response.json();
            })
            .then(users=>{
                this.setState({robots: users.data})
            });
        }, 3000);
        return () =>clearTimeout(timer);
    }

    //function used to change the searchfield
    onSearchChange = (event) => {
        this.setState({searchfeild: event.target.value})
    }

    render(){

        //used to filter the robots bt their first name
        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.first_name.toLowerCase().includes(this.state.searchfeild.toLowerCase());
        })

        //at the starting
        //when the user has not clicked the button
        //and the api is not fetched
        if(this.state.robots.length === 0 && this.state.isButtonClicked === false){
            return (
              <div>
                <Navbar onButtonSubmit={this.onButtonSubmit}/>
            
                <h6 style={{color:'white',marginLeft:'300px',marginTop:'150px',padding:'10px;',fontSize:'17px'}}>

                LetsGrowMore, is a ground based organisation which aims<br></br>
                 at building the future through nourishing the present. <br></br>
                 We at Lets Grow More believes in making our youth specially<br></br>
                  the students self aware and to explore the untouched world<br></br>
                   of technology and tremendous growth making fields and our<br></br>
                   belief finally took us where we are standing today. <br></br>
                   Today we are an officially MSME registered start up with<br></br>
                    nearly 100 people working under the same establishment.<br></br>
                     Today, we have nearly conducted more than a decade inspiring <br></br>
                     webinars connecting an audience of more than 100 people,<br></br>
                      inspiring them and at the same time serving them with key <br></br>
                      services.<br></br>
                      <img src="https://www.brahmakumaris.com/wp-content/uploads/2015/08/Lets-Plant-More-Trees-To-Save-Ourselves.jpg" style={{marginLeft:'500px',marginTop:'-250px',borderRadius:'40px'}} className="image"></img>

                </h6>
            
              </div>
            );

        }

        //when the button is clicked and the api is being called
        //but no data is fetched
        else if(this.state.robots.length === 0){
            return (
                <>
                  <Navbar onButtonSubmit={this.onButtonSubmit}/>
                  <h1 className='tc'></h1>
                  <Loader className='loader'></Loader>
                </>
              );
        }

        //when the button is clicked and the api has fetched data
        else{
            return(
                <>
                  <Navbar onButtonSubmit={this.onButtonSubmit}/>
                  <div style={{textAlign:'center',color:'white'}}>
                      <h2>User Cards</h2>
                      <SearchBox searchChange={this.onSearchChange}/>
                      <Scroll>
                        <CardList robots={filteredRobots}/>
                      </Scroll>

                  </div>
                 </>
              );
        }

    }

}

export default App;
