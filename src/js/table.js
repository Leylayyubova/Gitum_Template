document.addEventListener('DOMContentLoaded', () => {
    function filterTable(filter) {
        const tables = document.querySelectorAll('table');
        tables.forEach(table => {
            const items = table.querySelectorAll('.item');
            items.forEach(item => {
                if (filter === 'all' || item.getAttribute('meta') === filter) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    const filterButtons = document.querySelectorAll('ul li');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.getAttribute('filter');
            filterTable(filter);
        });
    });

    filterTable('all');
});
