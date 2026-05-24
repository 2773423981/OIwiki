document.addEventListener('DOMContentLoaded', function () {
  mermaid.initialize({ startOnLoad: false, theme: 'dark' });

  var pres = document.querySelectorAll('.article-content pre');
  var found = false;

  pres.forEach(function (pre) {
    var code = pre.textContent.trim();
    if (code.startsWith('graph') || code.startsWith('flowchart') || code.startsWith('sequenceDiagram')) {
      var div = document.createElement('div');
      div.className = 'mermaid';
      div.textContent = code;
      pre.replaceWith(div);
      found = true;
    }
  });

  if (found) mermaid.run();
});
