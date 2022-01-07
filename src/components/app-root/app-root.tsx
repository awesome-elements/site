import { Component, ComponentInterface, h } from '@stencil/core';
import '@awesome-elements/layout';
import '@awesome-elements/markdown';

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
              <stencil-route url="/" exact={true}>
                <app-home />
              </stencil-route>
              <stencil-route url="/docs" exact={true}>
                <app-docs />
              </stencil-route>
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
