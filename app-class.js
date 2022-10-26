
function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element
    }
    throw new Error(
        `Please check "${selection}" selector, no such element exists`
      );
}


class Gallery{
    constructor(element) {
        this.container = element;
        this.list = [...element.querySelector('.img')];
        //target
        this.modal = getElement('.modal');
        this.modalImg = getElement('.main-img');
        this.modalImages = getElement('.modal-images')
        this.closeBtn = getElement('.close-btn');
        this.prevBtn = getElement('.prev-btn');
        this.nextBtn = getElement('.next-btn');

        this.closeModal = this.closeModal.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.prevImage = this.prevImage.bind(this)
        this.chooseImage = this.chooseImage.bind(this);

        this.container.addEventListener("click", function (e) {
            if (e.target.classList.contains("img")) {
                this.modalOpen(e.target, this.list);

            }
        })

    }
    openModal(selectedImage, list) {
        this.setMainImage(selectedImage)
        this.modalImages.innerHTML = list
            .map((image) => {
            return <img src="${image.src}" />
        })
    }
}