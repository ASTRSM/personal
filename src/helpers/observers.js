export const heroObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const aside = document.querySelector('aside')
      if (entry.isIntersecting) {
        aside.classList.add('opacity-0')
      } else {
        aside.classList.remove('opacity-0')
      }
    })
  })

  observer.observe(document.querySelector('#hero'))
}
