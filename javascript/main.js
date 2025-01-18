window.addEventListener('load', function () {
    if(localStorage.getItem('version') !== '1.0.1') {
        localStorage.setItem('version', '1.0.1');
        location.reload(true);  // Forzar la recarga sin usar la caché
    }
});


// CODIGO DE BANNER PRINCIPAL //

document.addEventListener("DOMContentLoaded", function() {
    var index = 0;
    var images = document.querySelectorAll('.banner img');

    // Pre-cargar las imágenes y hacer que estén listas
    var totalImages = images.length;
    var loadedImages = 0;

    // Función para marcar la imagen como cargada
    function imageLoaded() {
        loadedImages++;
        if (loadedImages === totalImages) {
            // Cuando todas las imágenes estén cargadas, iniciar la animación
            startBannerAnimation();
        }
    }

    // Asignar evento de carga a todas las imágenes
    images.forEach(function(img) {
        img.onload = imageLoaded; // Se llama cuando la imagen está completamente cargada
        // Si la imagen ya está en cache, llamamos a la función de carga inmediatamente
        if (img.complete) {
            imageLoaded();
        }
    });

    // Función para iniciar la animación del banner
    function startBannerAnimation() {
        // Inicialmente, todas las imágenes son invisibles
        images.forEach(function(img) {
            img.style.opacity = '0';
        });

        // Asegurarse de que la primera imagen se muestre
        images[index].style.opacity = '1';

        // Iniciar el ciclo de cambio de imágenes
        setInterval(function() {
            // Ocultar la imagen actual
            images[index].style.opacity = '0';

            // Cambiar al siguiente índice
            index = (index + 1) % images.length;

            // Mostrar la nueva imagen
            images[index].style.opacity = '1';
        }, 3000); // Cambiar cada 3 segundos
    }
});


// CÓDIGO PARA REDIRIGIR AL COMIENZO DE LA PÁGINA

function redirectToTop() {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.location.href = '#';
  }
  
  window.onload = function() {
    redirectToTop();
  }
  
  
  
//CÓDIGO OVERLAY//

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const body = document.body;
    const currentRight = sidebar.style.right;

    // Si el sidebar está oculto, lo mostramos junto con el overlay
    if (currentRight === "-250px" || currentRight === "") {
        sidebar.style.right = "0";
        overlay.style.display = "block";
        body.classList.add('no-scroll'); // Deshabilitar desplazamiento
    } else {
        // Si el sidebar está visible, lo ocultamos junto con el overlay
        sidebar.style.right = "-250px";
        overlay.style.display = "none";
        body.classList.remove('no-scroll'); // Habilitar desplazamiento
    }
}
// Seleccionar los elementos del sidebar y overlay
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const hamburger = document.querySelector('.hamburger');

// Función para mostrar el sidebar y overlay
hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');  // Muestra el sidebar
    overlay.classList.add('active');  // Muestra el overlay
    document.body.classList.add('no-scroll'); // Bloquea el scroll de la página
});

// Función para ocultar el sidebar y overlay cuando se hace clic en el overlay
overlay.addEventListener('click', () => {
    sidebar.classList.remove('active'); // Oculta el sidebar
    overlay.classList.remove('active'); // Oculta el overlay
    document.body.classList.remove('no-scroll'); // Desbloquea el scroll de la página
});



// DÓGIDO SUBMENU-SIDEBAR 

function toggleDropdown() {
    var submenu = document.querySelector('.submenu');
    // Alterna la visibilidad del submenú
    if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'block';
    }
}


// CÓDIGO FLECHA-SUBMENU-SIDEBAR

function toggleDropdown(dropdownId, link) {
    const dropdown = document.getElementById(dropdownId);
    const arrow = link.querySelector('.arrow'); // Buscar el span de la flecha
    
    // Alternar la visibilidad del submenu
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    
    // Alternar la clase 'hover' en el enlace de "Cervezas"
    link.classList.toggle('hover');
    
    // Cambiar la dirección de la flecha
    if (dropdown.style.display === 'block') {
        arrow.innerHTML = '&#9650;'; // Flecha hacia arriba
        arrow.style.transform = 'rotate(180deg)';
    } else {
        arrow.innerHTML = '&#9660;'; // Flecha hacia abajo
        arrow.style.transform = 'rotate(0deg)';
    }
}

hamburger.addEventListener('click', () => {
    sidebar.classList.add('active');  // Muestra el sidebar
    overlay.classList.add('active');  // Muestra el overlay
    document.body.classList.add('no-scroll'); // Bloquea el scroll de la página
});




