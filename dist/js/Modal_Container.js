function openModal(type) {
    let modalBodyContent = '';

    if (type === 'cv') {
        modalBodyContent = `
            <input type="password" id="password" class="form-control" placeholder="Enter password" />
        `;
    } else if (type === 'certificati') {
        modalBodyContent = `
            <input type="password" id="password" class="form-control" placeholder="Enter password" />
            <div id="documentList" class="d-none">
                <ul class="list-group">
                    <li class="list-group-item"><a href="assets/Certificati/Industrial Maintenance-Installation.pdf" target="_blank">Industrial Maintenance-Installation</a></li>
                    <li class="list-group-item"><a href="assets/Certificati/Document2.pdf" target="_blank">Document 2</a></li>
                    <li class="list-group-item"><a href="assets/Certificati/Document3.pdf" target="_blank">Document 3</a></li>
                    <!-- Add more documents as needed -->
                </ul>
            </div>
        `;
    }

    // Struttura del box modal
    const modalHTML = `
        <div class="modal fade" id="passwordModal" tabindex="-1" aria-labelledby="passwordModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="passwordModalLabel">Inserisci la password per il download</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ${modalBodyContent}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annulla</button>
                        <button type="button" class="btn btn-primary" onclick="checkPassword('${type}')">Conferma</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('modalContainer').innerHTML = modalHTML;
    const modal = new bootstrap.Modal(document.getElementById('passwordModal'));
    modal.show();
}