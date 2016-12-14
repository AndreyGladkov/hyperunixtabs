exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    css: `
      ${config.css || ''}
      .tab_icon {
        left: 7px;
      }
      .tab_text {
        margin-left: 0;
        transition: margin-left 4s ease-in-out 1s;
      }
      .tab_text:hover {
        margin-left: 28px;
      }
    `
  });
}
