<template>
  <section v-editable="blok" :class="blok.class">
    <form
      :id="blok._uid"
      :action="blok.formEndpoint"
      class="flex flex-wrap"
      method="post"
      @submit="formSubmit"
    >
      <div
        v-for="inputField in blok.inputs"
        :key="inputField.name"
        v-editable="inputField"
        :class="inputField.wrapperClass"
        class="input-form"
      >
        <label :for="inputField._uid" :class="inputField.fieldLabelClass">
          {{ inputField.label }}
        </label>
        <input
          :id="inputField._uid"
          v-model.trim="$v.form[inputField.name].$model"
          :type="inputField.type"
          :name="inputField.name"
          :placeholder="inputField.placeholder"
          :class="{
            [inputField.fieldClass]: true,
            [inputField.fieldErrorClass]: $v.form[inputField.name].$error,
          }"
        />
        <div v-if="$v.form[inputField.name].$error" class="h-6">
          <div
            v-for="{ component, errorMessage } in inputField.validators"
            :key="component"
            :class="inputField.warningClass"
          >
            <div v-if="!$v.form[inputField.name][component]">
              {{ errorMessage }}
            </div>
          </div>
        </div>
      </div>
      <button type="submit" :form="blok._uid" class="form-btn ml-auto" :class="blok.submitButtonClass">
        {{ blok.submitButtonText }}
      </button>
    </form>
  </section>
</template>

<script>
  import * as validators from 'vuelidate/lib/validators'

  export default {
    props: {
      blok: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        form: this.blok.inputs.reduce(
          (prevFields, inputField) => ({
            ...prevFields,
            [inputField.name]: '',
          }),
          {}
        ),
      }
    },
    computed: {
      fieldRules() {
        return this.blok.inputs.reduce(
          (prevFields, inputField) => ({
            ...prevFields,
            [inputField.name]: this.generateFieldRules(inputField.validators),
          }),
          {}
        )
      },
    },
    validations() {
      return {
        form: this.fieldRules,
      }
    },
    methods: {
      generateFieldRules(fieldValidators) {
        return fieldValidators.reduce(
          (prevValidators, validator) => ({
            ...prevValidators,
            [validator.component]: validator.param
              ? validators[validator.component](validator.param)
              : validators[validator.component],
          }),
          {}
        )
      },
      formSubmit(e) {
        if (this.$v.form.$invalid) {
          this.$v.form.$touch()
          e.preventDefault()
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
.input-form {
  padding: 20px 0;
}

.form-btn {
  width: 20%;
  border-radius: 10px;
  margin: 20px;
  height: 40px;
  background: #ed1c24;
  color: #ffffff;
  border-radius: 30px;
  float: right;
}

label {
  display: block;
  padding-left: 10px;
  color:rgba(51,51,51,.5);
 }

 input {
    width: 100%;
    padding: 10px;
    border-radius: 15px;
    border: 1px solid rgba(51,51,51,.25);
 }

</style>
