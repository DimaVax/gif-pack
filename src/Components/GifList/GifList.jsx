import { Component } from "react";
import styles from "./GifList.module.scss"

export class GifList extends Component {
    state = {
        gifData: this.props.gifList
    }
    render() {
        return(
            <ul className={styles.list}>
                {this.props.gifList.map((gif) => {
                    // {console.log(gif)}
                    return(
                    <li className={styles.item} key={gif.id}>
                         <img className={styles.img} src={gif.images.fixed_height.url} alt={gif.title} />
                    </li>
                )})}

            </ul>
        )
    }
}