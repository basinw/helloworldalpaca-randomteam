import React , { Component } from 'react';
import styled , {injectGlobal} from 'styled-components';
import swal from 'sweetalert2'
import instance from '../libs/axios'

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
    .id-team {
        font-size: 3em;
        font-weight: bold;
        margin-top: 10px;
    }
`
const InputName = styled.input.attrs({
    type: 'text'
})`
    margin-bottom: 10px;
    text-align: center;
`

class ChooseBox extends Component{
    state = {
        team : [],
        name: ''
    }

    async componentWillMount() {
        let team = await instance.get('/team')
            .then(res => res.data)
        this.setState({
            team: team.team
        })
    }
    
    onClickBtn = async (team) =>{
        let name = this.state.name
        if(name.length < 3) {
            alert('please insert name more than 3 character!')
        }else{
            let data = await instance.post('/id', {
                name: name,
                team: team
            }).then(res => res.data)
            if(data.status && data.id !== undefined) {
                swal({
                    title: 'Welcome to ``'+team+'`` team',
                    html: `${name}, you got id number <div class="id-team">${data.id}</div>`,
                    type: 'success',
                    confirmButtonText: 'OK'
                })
            }else{
                swal({
                    title: 'Fail',
                    text: `May be your selection team is full!`,
                    type: 'warning',
                    confirmButtonText: 'OK',
                })
            }
        }
        this.setState({
            name: ''
        })
    }
    render(){
        return(
            <div>
                <Box>
                    <InputName value={ this.state.name } onChange={ (e) => this.setState({ name: e.target.value }) } />
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