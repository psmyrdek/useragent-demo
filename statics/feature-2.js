document.addEventListener('DOMContentLoaded', () => {
    const feature = document.createElement('p')
    feature.textContent = 'Feature 2 initialized'
    feature.style.color = '#ff7575';
    feature.style.fontSize = '30px'
    document.querySelector('body').appendChild(feature)
})