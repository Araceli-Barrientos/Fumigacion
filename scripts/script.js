  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');   // muestra/oculta menú
    btn.classList.toggle('hidden');    // oculta botón hamburguesa al abrir menú
  });

  // Opcional: ocultar menú cuando se hace clic en un enlace
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');    // oculta el menú
      btn.classList.remove('hidden');  // vuelve a mostrar el botón hamburguesa
    });
  });