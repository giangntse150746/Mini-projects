module.exports = function ({ header, content, footer }) {
  return `
      <div class="container">
          <header>${header}</header>
          <main>${content}</main>
          <footer>${footer}</footer>
      </div>
  `;
};
