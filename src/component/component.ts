import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./styles.scss";

@customElement("axa-custom")
export class AxaCustom extends LitElement {
  static override styles = css`
    ${styles}
  `;

  @property({ type: String })
  name: string = "You're all set up to start Working on Webcomponents ! ";
  
  override render() {
    return html`<div class="container">Hello, ${this.name}</div> `;
  }
}
