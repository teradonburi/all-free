// custom-button.ts

class CustomButton extends HTMLElement {
  text: string = '';

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['text'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      switch (name) {
        case 'text':
          this.text = newValue || '';
          break;
      }
      this.render();
    }
  }

  connectedCallback() {
    this.render();
    this.addEventListener('click', this.handleClick.bind(this));
  }

  private render() {
    if (!this.shadowRoot) return 
    this.shadowRoot.innerHTML = CustomButton.render(this);
  }

  public static render(args: any) {
    return `
      <style>
        /* Add your styles here */
        :host {
          display: inline-block;
        }
        button {
          padding: 10px 15px;
          font-size: 16px;
          cursor: pointer;
        }
        button[disabled] {
          cursor: not-allowed;
        }
      </style>
      <button>${args?.text}</button>
    `
  }

  public static renderSSR(document: Document) {
    const elements = document.querySelectorAll('custom-button')
  
    for (const element of elements) {
      const attributes = element.attributes

      const args: any = {}
      for (const attr of attributes) {
        args[attr.name] = attr.value
      }
      // render declative shadow dom
      const buttonHtml = `
        <template shadowrootmode="open">
          ${CustomButton.render(args)}
        </template>
      `
      element.innerHTML = buttonHtml
    }
  
    return document.documentElement.outerHTML
  }

  private handleClick() {
    // Handle button click event
    console.log('Button Clicked!');
  }
}

if (!customElements.get('custom-button')) {
  customElements.define('custom-button', CustomButton);
}

export { CustomButton };