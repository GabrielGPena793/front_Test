import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import DatePicker from "react-multi-date-picker"
import InputIcon from "react-multi-date-picker/components/input_icon"
import './searchBar.css'


const weekDays = ["Dom", "Seg", "Ter", "Qua", "Quin", "Sex", "Sab"];
const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]


export const CustomDropdown = (props) => (
  <>
    {/* {props.name} */}
    <div class="col col-12 col-md-5 offset-xl-2 col-xl-3 mb-4">
      <select
        className="form-control "
        name="{props.name}"
        onChange={props.onChange}
      >
        <option defaultValue>Escolha o local de retirada {props.name}</option>
        {props.options.map((item, index) => (
          <option key={index} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>

    <div class="col col-12 col-md-5 col-xl-3 mb-4">
      <DatePicker
        mode="range"
        numberOfMonths={2}
        range
        weekDays={weekDays}
        months={months}
        placeholder="Data de retirada - Data de devolução"
        format="DD/MMM/YYYY"
        render={<InputIcon />}
        containerClassName="form-control"
      />
    </div>
    <div class="col col-12 col-md-2 col-xl-2 mb-4">
      <button className="btn btn-primary btn-search form-control">Buscar</button>
    </div>

  </>
)
export default class CustomListDropDown extends React.Component {
  constructor() {
    super()
    this.state = {
      collection: [],
      value: '',
    }
  }
  componentDidMount() {
    fetch('https://back-end-booking.herokuapp.com/v1/cities')
      .then((response) => response.json())
      .then((res) => this.setState({ collection: res }))
  }
  onChange = (event) => {
    this.setState({ value: event.target.value })
  }
  render() {
    return (
      <div className="container-fluid search-bar-div" id="search-bar">
        <div className="row">
          <div className="title"><h1 className="search-bar-title">Reserve agora seu carro</h1></div>

          <CustomDropdown
            name={this.state.name}
            options={this.state.collection}
            onChange={this.onChange}
          />
        </div>
      </div>

    )
  }
}
