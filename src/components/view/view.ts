export abstract class View {
    protected container: HTMLElement;
  
    constructor(containerId: string) {
      const element = document.getElementById(containerId);
      this.container = element;
    }

    clear(): void {
      this.container.innerHTML = '';
    }

    abstract render(data: unknown): void;
  }