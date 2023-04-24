import Swal from 'sweetalert2/dist/sweetalert2.all';
import '@sweetalert2/theme-dark';
import './style.css';
import fetchCoins from './api/api';
import { renderBoard, clearBoard } from './components';

const inputCoin = document.getElementById('user-input');
const searchBtn = document.getElementById('search-coin');

function search() {
  const base = inputCoin.value.toUpperCase();
  try {
    fetchCoins(base)
      .then((rates) => {
        renderBoard(base, rates);
      })
      .catch((error) => {
        clearBoard();
        Swal.fire(
          'Ops...',
          `${error.message}`,
          'error',
        );
        console.log(error.message);
      });
  } catch (error) {
    Swal.fire(
      'Ops...',
      `${error.message}`,
      'error',
    );
    console.log(error.message);
  }
}

window.onload = () => {
  searchBtn.addEventListener('click', search);
};
