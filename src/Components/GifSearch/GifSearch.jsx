import { Component } from "react";
import { GifList } from "../GifList/GifList";

export class GifSearch extends Component {
  state = {
    keyword: "",
    gifList: [],
  };
  componentDidMount() {
    try {
      const data = fetch(`
        https://api.giphy.com/v1/stickers/packs/3138/stickers?api_key=nA4C3PcnalbYQL3hCOEP0hcTM58Rglt4&limit=25&offset=0&q=${this.state.keyword}`)
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            gifList: data.data,
          });
        });
    } catch (error) {
      console.log("server error" + error);
    }
  }
  sendWord = (event) => {
    event.preventDefault();
    this.setState({
      keyword: event.target.elements.search.value,
    });
    console.log(this.state.keyword);
  };

  render() {
    return (
      <>
        <form onSubmit={this.sendWord}>
          <input name="search" type="text" placeholder="Пошук..." />
          <button type="submit">Шукати</button>
        </form>
        <GifList gifList={this.state.gifList}/>
      </>
    );
  }
}
