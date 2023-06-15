import { getLibs } from '../../scripts/utils.js';

export default async (el) => {
  const { createTag, getConfig } = await import(`${getLibs()}/utils/utils.js`);
  const { locale } = getConfig();
  const r = await fetch(`${locale.contentRoot}/blog/query-index.json`);
  if (!r.ok) {
    return;
  }
  const ul = createTag('ul', {
    class: 'blog-list-container'
  });
  el.append(ul);
  const d = await r.json();
  await Promise.all(d.data.map((p) => {
    const li = createTag('li', { class: 'blog-list-item' });
    ul.append(li);
    return new Promise(async (res) => {
      const r = await fetch(`${p.path}.plain.html`);
      const html = await r.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const heading = doc.querySelector('h1, h2, h3, h4, h5, p');
      li.append(heading);
      res();
    }); 
  }));
}