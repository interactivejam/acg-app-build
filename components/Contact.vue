<template>
  <form id="form">
  <p class="form__errors" style="display: none;">Please fill in all fields.</p>

  <label for="name_input">Name</label><br>
  <input type="text" id="name_input" name="name"><br>
  <label for="message_input">Message</label><br>
  <textarea type="textarea" id="message_input" name="message"></textarea>

  <p class="form__success" style="display: none;">Sent successfully!</p>
  <p class="form__sending" style="display: none;">Sending...</p>

  <button type="submit" class="g-recaptcha form__button"
    data-sitekey="YOUR_RECAPTCHA_PUBLIC_KEY"
    data-callback="handleFormSubmit"
    data-badge="inline">Submit</button>
</form>
</template>

<script>

</script>

<style scoped>

</style>
