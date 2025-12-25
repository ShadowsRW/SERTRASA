document.getElementById('requestForm').addEventListener('submit', function(event)
{
    event.preventDefault();
    alert('Solicitud enviada. Nos pondremos en contacto contigo pronto.');
    this.reset();
});