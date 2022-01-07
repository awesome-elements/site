import { Component, ComponentInterface, h, Host } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome implements ComponentInterface {
  render() {
    return <Host>Home Page</Host>;
  }
}
