import { db, collection, addDoc } from './firebase-config.js';

document.getElementById('btnMostrarFormulario').addEventListener('click', () => {
    document.getElementById('formularioInscripcion').style.display = 'block';
});

document.getElementById('inscripcionForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());

    try {
        await addDoc(collection(db, "inscripciones"), formValues);
        alert("¡Formulario enviado con éxito!");
        event.target.reset();
        document.getElementById('formularioInscripcion').style.display = 'none';
    } catch (error) {
        alert("Error al enviar el formulario: " + error.message);
    }
});
