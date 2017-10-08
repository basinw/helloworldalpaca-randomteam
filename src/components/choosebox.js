import React , { Component } from 'react';
import styled , {injectGlobal} from 'styled-components';

const Box = styled.div`
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    background:#bfbfe2;
    padding:3em;
    border-radius:15px;
    z-index:10;
`
injectGlobal`
    .btn-outline-purple {
        color: #7b7ba3;
        background-color: transparent;
        background-image: none;
        border-color: #7b7ba3;
    }
    .btn-outline-purple:hover {
        color: #fff;
        background-color: #7b7ba4;
        border-color: #7b7ba4;
    }
`
class ChooseBox extends Component{
    state = {
        team : ["Front-End","Design","Game","Infra"],
        name: ''
    }

    // async componentWillMount() {
    //     let data = await fetch(`//localhost:3003/api/v1/all`)
    //         .then(resp => resp.json())
    //         .then(data => data) 
    //     console.log(data)
    // }

    onClickBtn = async (team) =>{
        let teams = this.state.team
        let name = this.state.name
        let url = '//localhost:3003/api/v1/random/'
        if(name.length < 3) {
            alert('please insert name more than 3 character!')
        }else{

        }
    }
    render(){
        return(
            <div>
                <Box>
                    <input style={{ marginBottom: '10px' }} type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}/>
                    {
                        this.state.team.map(team => (
                            <button key={team} className="btn btn-outline-dark btn-block" onClick={()=>this.onClickBtn(team)}>{team}</button>
                        ))
                    }
                    {
                        this.state.ip
                    }
                    
                </Box>
            </div>
        );
    }
}

export default ChooseBox