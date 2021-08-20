<template>
  <section class="h-screen bg-white font-sans">
    <div class="flex flex-col h-full mx-auto lg:justify-center lg:flex-row">
      <div class="relative flex flex-col items-center justify-center w-full px-2 py-20 lg:w-3/5       sm:py-40 sm:px-12 xl:mr-24">
        <img class="w-full h-full absolute inset-0" src="~/assets/images/login_bg.jpg" alt="" srcset="">
        <div class="flex items-end absolute inset-0 p-16 pb-10">
          <div>
            <h2 class=" text-4xl text-white pb-8 font-semibold">
              TRANSPORT REVENUE MANAGEMENT 
              <br>  SYSTEM
            </h2>
            <p class="text-sm text-primary-100">Copyright© 2021 Synercom Group. All rights reserved <br></p>
          </div>
        </div>
      </div>
      <form
        class="flex 2xl:pl-10 2xl:pr-16 w-full bg-white lg:w-2/5 dark:bg-gray-900"
        @submit.prevent="submit"
      >
        <div
          class="flex flex-col w-full px-12 py-1 xl:w-2/3 dark:text-gray-100 xl:px-0"
        >
          <div class="2xl:py-16 py-8">
            <Logo size="big" />
          </div>
          <div class="sm:px-6 md:px-0 2xl:pt-12 pt-6 2xl:pb-6">
            <h3
              class="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl text-primary-900"
            >
              Welcome Aboard
            </h3>
            <p class=" text-tertiary-600 leading-5 pt-2">Log in with your data. Contact your 
               <br> admin to get your data.
              </p>
          </div>
          <div class="w-full ">
           
            <div class="pt-6" >
              <Input :error="errors.email" type="email" v-model="form.email" id="email" lable="Your Email Address" />
              <p class="text-xs text-red-600" v-show="errors.email"> {{errors.email}} </p>
            </div>


            <div class="pt-8" >
              <Input :error="errors.password" class="" v-model="form.password" id="password" lable="Password" />
               <p class="text-xs text-red-600" v-show="errors.password"> {{errors.password}} </p>
            </div>



          </div>
          <div class="flex justify-between w-full pt-10">
            <div class="flex items-center">
              <input
                id="rememberme"
                name="rememberme"
                class="w-5 h-5 mr-2 bg-primary-500 rounded"
                type="checkbox"
              />
              <label for="rememberme" class="text-sm text-tertiary-600">Remember Me </label>
            </div>
          </div>
          <div class="w-full 2xl:pt-12 pt-6">
            <button
              type="submit"
              class="w-full block px-8 py-3 mt-6 text-sm text-white transition duration-150 ease-in-out bg-primary-400 rounded  focus:outline-none hover:bg-primary-500"
            >
              Login
            </button>
            <p class="mt-6 text-sm text-center">
              
              <a class="text-primary-500 underline" href="javascript: void(0)"
                >Forget Password?</a
              >
            </p>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
// ben@trems.ng
// password
import Logo from '~/components/Logo.vue'
import Input from '~/components/form/Input.vue'
export default {
  name: 'Login',
  components: {
    Logo,
    Input
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      errors: []
    }
  },
  mounted() {},
  methods: {
    validEmail: function (email) {
       var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    async submit() {
      try {

        this.$toast.show('Logging in...', {
          theme: "outline", 
            position: "top-right", 
            duration : 5000
        })

        this.errors = [];

        if (!this.form.password) {
          this.errors.password = "Password required.";
        }
        if (!this.form.email) {
          this.errors.email = 'Email required.';
        }
        //  else if (!this.validEmail(this.from.email)) {
        //   console.log(this.validEmail(this.from.email))
        //   this.errors.email = 'Valid email required.';
        // }

        if (this.errors.email || this.errors.password) {
          return 
        }

        const response = await this.$auth.loginWith('laravelSanctum', {
          data: this.form,
        })
        console.log(response)
      } catch (error) {
        console.log(error.response)
        if(error.response) {
          this.$toast.error('Error while authenticating', {
            theme: "outline", 
            position: "top-right", 
            duration : 5000
          })
        }
      }
    },
  },
}
</script>
