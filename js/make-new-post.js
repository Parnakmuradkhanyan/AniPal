/*Модель*/

class profileEditModel {

    constructor() {
        
    }
 
 }
 
 /*Вид*/
 
 class profileEditView {
    constructor() {
        this.newPostPhoto = document.getElementById('newPostPhoto');
        this.previewImage = document.getElementById('new-post-image-preview');
        this.icon = document.getElementById('icon');
    }

    clearInput() {
        this.newPostPhoto.value = '';
    }

    displayImage(src) {
        this.previewImage.src = src;
        this.icon.style.display = 'block';
    }
}
 
 
 /*Контролер*/
 
 class profileEditController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.newPostPhoto.addEventListener('change', this.handlePhotoChange.bind(this));
    }

    handlePhotoChange(event) {
        const input = event.target;
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.view.displayImage(e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
}

 /*Ініціалізація*/
 
 const model = new profileEditModel();
 const view = new profileEditView();
 const controller = new profileEditController(model, view);
 