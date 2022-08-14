export default async function decorate(block) {
  [...block.children].forEach((row) => {
    const classes = ['image', 'label'];
    [...row.children].forEach((cell, i) => {
      if (classes[i]) cell.classList.add(`covers-${classes[i]}`);
    });
  });
}
