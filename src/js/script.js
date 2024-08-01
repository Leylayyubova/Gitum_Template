document.addEventListener('DOMContentLoaded', () => {
    function filterTable(filter) {
        const items = document.querySelectorAll('.item');
        items.forEach(item => {
            if (filter === 'all' || item.getAttribute('meta') === filter) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    }

    const filterButtons = document.querySelectorAll('.menu li');
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


document.addEventListener('DOMContentLoaded', function() {
    const counts = document.querySelectorAll('.count');

    counts.forEach(count => {
        const value = parseInt(count.getAttribute('data-value').replace(/[^0-9]/g, ''));
        count.addEventListener('mouseenter', () => {
            let start = 0;
            const h2 = count.querySelector('h2');
            const duration = 2000;
            const increment = Math.ceil(value / (duration / 50));
            const countUp = setInterval(() => {
                start += increment;
                if (start > value) {
                    start = value;
                    clearInterval(countUp);
                }
                h2.textContent = formatNumber(start);
            }, 50);
        });
    });

    function formatNumber(num) {
        if (num >= 1000) {
            return `${(num / 1000).toFixed(1)} k+`;
        }
        return num;
    }
});
