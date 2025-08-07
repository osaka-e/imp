// DOM要素の取得
const modalOverlay = document.getElementById('modal-overlay');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalCloseButton = document.getElementById('modal-close-button');
const galleryItems = document.querySelectorAll('.gallery-item');

// ギャラリーアイテムにクリックイベントを追加
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        // データ属性から情報を取得
        const title = item.getAttribute('data-title');
        const description = item.getAttribute('data-description');
        const imageSrc = item.getAttribute('data-image');
        
        // モーダルに情報を設定
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalImage.src = imageSrc;
        modalImage.alt = title;
        
        // モーダルを表示
        modalOverlay.style.display = 'flex';
        
        // ボディのスクロールを無効化
        document.body.style.overflow = 'hidden';
    });
});

// モーダルを閉じる関数
function closeModal() {
    modalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 閉じるボタンのクリックイベント
modalCloseButton.addEventListener('click', closeModal);

// オーバーレイのクリックでモーダルを閉じる
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// ESCキーでモーダルを閉じる
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.style.display === 'flex') {
        closeModal();
    }
});

// 画像の読み込みエラー処理
modalImage.addEventListener('error', () => {
    modalImage.style.display = 'none';
});

modalImage.addEventListener('load', () => {
    modalImage.style.display = 'block';
});

