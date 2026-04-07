const radios = document.querySelectorAll('input[name="tipo"]');

const formNatural = document.getElementById('form-natural');
const formEmpresa = document.getElementById('form-empresa');

radios.forEach(radio => {
    radio.addEventListener('change', () => {

        if (radio.value === 'natural' && radio.checked) {
            formNatural.classList.remove('formulario-oculto');
            formNatural.classList.add('formulario-activo');

            formEmpresa.classList.remove('formulario-activo');
            formEmpresa.classList.add('formulario-oculto');
        }

        if (radio.value === 'empresa' && radio.checked) {
            formEmpresa.classList.remove('formulario-oculto');
            formEmpresa.classList.add('formulario-activo');

            formNatural.classList.remove('formulario-activo');
            formNatural.classList.add('formulario-oculto');
        }

    });
});
