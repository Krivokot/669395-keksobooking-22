const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const photoPreviewElement = document.querySelector('.ad-form__photo');
const photoUploadElement = document.querySelector('.ad-form__upload input[type=file]');

photoPreviewElement.appendChild(document.createElement('img'));

const imagePreviewElement = photoPreviewElement.querySelector('img');
imagePreviewElement.setAttribute('width', '70px')
imagePreviewElement.setAttribute('height', '70px')

photoUploadElement.addEventListener('change', () => {
  const file = photoUploadElement.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      imagePreviewElement.src = reader.result;

    });

    reader.readAsDataURL(file);
  }
});

export {imagePreviewElement, photoPreviewElement};
