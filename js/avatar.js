const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarPreviewElement = document.querySelector('.ad-form-header__preview img');
const avatarUploadElement = document.querySelector('.ad-form__field input[type=file]');

avatarUploadElement.addEventListener('change', () => {
  const file = avatarUploadElement.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      avatarPreviewElement.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
});

export {avatarPreviewElement};
