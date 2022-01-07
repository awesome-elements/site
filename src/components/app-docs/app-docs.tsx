import { Component, Host, h, ComponentInterface, State } from '@stencil/core';

@Component({
  tag: 'app-docs',
  styleUrl: 'app-docs.css',
  shadow: true,
})
export class AppDocs implements ComponentInterface {
  private readonly contents = {
    name: 'Docs',
    children: [
      {
        name: 'Intro',
        markdownUrl: '',
      },
      {
        name: 'Layout',
        children: [
          {
            name: 'Wrap',
            markdownUrl: 'https://raw.githubusercontent.com/awesome-elements/layout/main/src/components/awesome-wrap/readme.md',
          },
        ],
      },
    ],
  };

  @State() markdown: string;

  render() {
    return (
      <Host>
        <awesome-flex>
          <awesome-flex-item id="contents" xs={3}>
            <app-tree-view
              data={this.contents}
              onItemClicked={async ({ detail }) => {
                const response = await fetch(detail['markdownUrl']);
                const markdown = await response.text();
                this.markdown = markdown;
              }}
            />
          </awesome-flex-item>
          <awesome-flex-item id="detail">
            <awesome-markdown markdown={this.markdown}>
              <template
                ref={el =>
                  (el.innerHTML = `<link rel="stylesheet" href="https://awesome-elements.github.io/markdown/assets/markdown-modest.css" />
                <link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@11.3.1/styles/default.min.css" />`)
                }
              ></template>
            </awesome-markdown>
          </awesome-flex-item>
        </awesome-flex>
      </Host>
    );
  }
}
