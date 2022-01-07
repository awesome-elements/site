import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot implements ComponentInterface {
  render() {
    return (
      <div>
        <header>
          <h1>Awesome-Elements</h1>
        </header>

        <main>
          <stencil-router historyType="hash">
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
