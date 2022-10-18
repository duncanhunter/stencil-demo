import { Component, Host, h, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "my-button",
  styleUrl: "my-button.css",
  shadow: true,
})
export class MyButton {
  @Event() myClick: EventEmitter;

  render() {
    return (
      <Host>
        <button onClick={() => this.myClick.emit()}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
