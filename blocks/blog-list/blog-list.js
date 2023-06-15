import { getLibs } from '../../scripts/utils.js';

export default async (el) => {
  const { createTag, loadScript } = await import(`${getLibs()}/utils/utils.js`);
  const r = await fetch('/blog/query-index.json');

  if (!r.ok) {
    return;
  }

  const list = createTag('ul', {
    class: 'blog-list-container'
  });

  const d = await r.json();

  await Promise.all(d.data.map((p) => {

    return new Promise(async (res) => {
      
      const r = await fetch(`${p.path}.plain.html`);

      const html = await r.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const heading =- doc.querySelector('h1, h2, h3, h4, h5, p');
      const li = createTag('li', { class: 'blog-list-item'}, heading);
      list.append(li);

      res();
    }); 

  }));
}