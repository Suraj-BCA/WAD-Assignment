document.addEventListener('DOMContentLoaded', function() {
    var dt = document.getElementById('w-dropdown-toggle-4');
    var dc = document.getElementById('w-dropdown-list-4');

    if (dt && dc) {
        dt.addEventListener('click', function(e) {
            e.stopPropagation(); 

            dc.style.display = (dc.style.display === 'block') ? 'none' : 'block';
        });

        document.body.addEventListener('click', function(event) {
            if (!dt.contains(event.target) && !dc.contains(event.target)) {
                dc.style.display = 'none';
            }
        });
    }
});
