import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "my-input",
  styleUrl: "my-input.css",
  shadow: true,
})
export class MyInput {
  @Prop() value: string;

  @Event() myChange: EventEmitter;

  private onInput = (event) => {
    this.value = event.target.value;
    this.myChange.emit({ value: this.value });
  };

  render() {
    return <input value={this.value} onInput={this.onInput} type="text" />;
  }
}
