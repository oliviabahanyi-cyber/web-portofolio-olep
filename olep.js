document.addEventListener("DOMContentLoaded", function () {
    const photoFrame = document.getElementById("photoFrame");
    const photoModal = document.getElementById("photoModal");
    const profileImg = document.getElementById("profileImg");
    const modalImg = document.getElementById("modalImg");
    const closeModal = document.getElementById("closeModal");

    // Modal popup saat foto diklik
    photoFrame.addEventListener("click", function () {
        modalImg.src = profileImg.src;
        photoModal.style.display = "flex";
    });

    // Tutup modal saat tombol close diklik
    closeModal.addEventListener("click", function () {
        photoModal.style.display = "none";
    });

    // Tutup modal saat mengklik di luar gambar
    photoModal.addEventListener("click", function (event) {
        if (event.target === photoModal) {
            photoModal.style.display = "none";
        }
    });
});