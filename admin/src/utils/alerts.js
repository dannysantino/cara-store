export const updateAlert = (type, item, message) => {
    document.getElementById('alert-box').innerHTML = `
        <div class='alert alert-${type} alert-dismissible fade show' role='alert'>
            ${type === 'success'
            ? '<i class="bi bi-check-circle-fill me-2"></i>'
            : '<i class="bi bi-exclamation-triangle-fill me-2"></i>'}
                <strong>${item}</strong> ${message}
                <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>
        </div>
    `
}