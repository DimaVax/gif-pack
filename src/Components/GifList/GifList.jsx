import { Component } from "react";

export class GifList extends Component {
    state = {
        gifData: this.props.gifList
    }
    render() {
        return(
            <ul>
                {this.state.gifData.map((gif) => {
                    {console.log(gif)}
                    return(
                    <li>
                        <img src={gif.bitly_gif_url} alt="r" />
                    </li>
                )})}

            </ul>
        )
    }
}