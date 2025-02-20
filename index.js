const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 500;

        if(count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 2);
        } else {
            counter.innerText = target.toLocaleString() + '+'; 
        }
    };
    
    updateCounter();
});