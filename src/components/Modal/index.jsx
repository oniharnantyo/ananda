import Swal from 'sweetalert2';
export const FailedModal = Swal.mixin({
    background: '#262626',
    color: '#fff',
    denyButtonText: 'Close',
    position: 'top',
    showConfirmButton: false,
    showDenyButton: true,
    timerProgressBar: true,
    width: window.screen.width / 3,
});
