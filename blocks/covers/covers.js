export default async function decorate(block) {
  [...block.children].forEach((row) => {
    const classes = ['image', 'label'];
    [...row.children].forEach((cell, i) => {
      if (classes[i]) cell.classList.add(`covers-${classes[i]}`);
    });
    const [year, month] = row.children[1].textContent.split('/').map((t) => t.trim());
    const a = document.createElement('a');
    a.href = `/issues/${year}-${month}.pdf`;
    a.append(row.children[0].querySelector('picture'));
    row.children[0].append(a);
  });
}
