import React , { Component } from 'react';
import styled , {injectGlobal} from 'styled-components';
import team from '../team.json'
import swal from 'sweetalert2'

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
        team : team.team,
        name: ''
    }

    onClickBtn = async (team) =>{
        // let teams = this.state.team
        let name = this.state.name
        let rand = Math.floor(Math.random() * 10)
        let url = '//localhost:3003/api/v1/id/'
        if(name.length < 3) {
            alert('please insert name more than 3 character!')
        }else{
            url += rand
            let data = await fetch(url)
                .then(resp => resp.json())
                .then(data => data)
            console.log(data)
            if(data.status && data.id !== undefined) {
                swal({
                    title: 'Welcome to ``develop`` team',
                    html: `${name}, you got id number <div style="font-size: 3em; font-weight: bold; margin-top: 10px;">${data.id}</div>`,
                    type: 'success',
                    confirmButtonText: 'OK'
                })
            }else{
                swal({
                    title: 'Fail',
                    text: `try again!`,
                    type: 'warning',
                    confirmButtonText: 'OK',
                })
            }
            // let data = await fetch(url, {
            //     method: 'post',
            //     body: JSON.stringify(opts)
            // })
            //     .then(resp => resp.json())
            //     .then(data => data)
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
                </Box>
            </div>
        );
    }
}

export default ChooseBox