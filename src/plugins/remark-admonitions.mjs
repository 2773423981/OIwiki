import { visit } from 'unist-util-visit';

export function remarkAdmonitions() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === 'containerDirective') {
        const data = node.data || (node.data = {});
        const name = node.name;
        
        if (name === 'spoiler') {
          data.hName = 'details';
          data.hProperties = { class: 'spoiler' };
        } else {
          data.hName = 'div';
          data.hProperties = { class: `admonition admonition-${name}` };
        }
      }
    });
  };
}
