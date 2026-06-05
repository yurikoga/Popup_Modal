// Pegando os elementos necessários
const openModalBtn = document.getElementById('openModalBtn');
const modalOverlay = document.getElementById('modalOverlay');
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.getElementById('cancelBtn');

// Função para abrir o modal
function openModal() {
    modalOverlay.classList.add('active');
}

// Função para fechar o modal
function closeModal() {
    modalOverlay.classList.remove('active');
}

// Evento do botão inicial 'Excluir Foto'
openModalBtn.addEventListener('click', openModal);

// Evento do botão 'Cancel'
cancelBtn.addEventListener('click', closeModal);

// Evento do botão 'Yes, Delete!'
confirmBtn.addEventListener('click', () => {
    // Aqui você colocaria a lógica real de exclusão
    console.log("Foto excluída com sucesso.");
    
    // Mostra um feedback visual antes de fechar (opcional)
    confirmBtn.innerText = "Deleting...";
    confirmBtn.style.opacity = "0.7";
    
    setTimeout(() => {
        closeModal();
        // Reseta o botão para o estado original
        confirmBtn.innerText = "Yes, Delete!";
        confirmBtn.style.opacity = "1";
    }, 1000); // Espera 1 segundo
});

// Fecha o modal ao clicar no fundo escurecido (overlay)
modalOverlay.addEventListener('click', (event) => {
    // Garante que o clique foi no overlay e não na caixa branca
    if (event.target === modalOverlay) {
        closeModal();
    }
});

// Fecha o modal ao pressionar a tecla 'Esc'
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});
