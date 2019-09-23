document.addEventListener('DOMContentLoaded', () => {
    const feature = document.createElement('p')
    feature.textContent = 'Feature 1 initialized'
    feature.style.fontSize = '30px'
    document.querySelector('body').appendChild(feature)
})