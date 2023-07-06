import { Injectable } from '@angular/core';

export interface NzIconfontOption {
  scriptUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor() { 

  }

  fetchFromIconfont(opt: NzIconfontOption): void {
    const { scriptUrl } = opt;
    if (this._document && !this.iconfontCache.has(scriptUrl)) {
      const script = this._renderer.createElement('script');
      this._renderer.setAttribute(script, 'src', scriptUrl);
      this._renderer.setAttribute(script, 'data-namespace', scriptUrl.replace(/^(https?|http):/g, ''));
      this._renderer.appendChild(this._document.body, script);
      this.iconfontCache.add(scriptUrl);
    }
  }

}
