import { newSpecPage } from '@stencil/core/testing';
import { MyInput } from '../my-input';

describe('my-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyInput],
      html: `<my-input></my-input>`,
    });
    expect(page.root).toEqualHtml(`
      <my-input>
        <mock:shadow-root>
        <input type="text">
        </mock:shadow-root>
      </my-input>
    `);
  });
});
