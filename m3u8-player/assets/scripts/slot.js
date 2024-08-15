module.exports = function render(template, slots = {}) {
  return template(slots);
};
