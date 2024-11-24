<template>
<section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form @submit.prevent="handleLogin">
          <div v-if="message" :class="['alert', messageType === 'success' ? 'alert-success' : 'alert-danger']">
              {{ message }}
            </div>
          <div data-mdb-input-init class="form-outline mb-4">
            <label class="form-label" for="form1Example13">Username</label>
            <input 
              type="text" 
              id="form1Example13" 
              class="form-control form-control-lg" 
              v-model="username"
              />
          </div>

          <div data-mdb-input-init class="form-outline mb-4">
            <label class="form-label" for="form1Example23">Password</label>
            <input
              type="password"
              id="form1Example23"
              class="form-control form-control-lg"
              v-model="password"
              />
          </div>
          <button id="sign-in-button" type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg btn-block">Sign in</button>
          <div class="d-flex justify-content-end mt-3">
              <p>
                Don't have an account? 
                <a href="/register" class="fw-bold sign-up-button">Sign Up</a>
              </p>
            </div>
        </form>
      </div>
    </div>
  </div>
</section>
  </template>
  
  <script>
import axios from 'axios';

export default {
  data() {
    return {
      username: "",
      password: "",
      message: "",
      messageType: "",
      statusLogin:"",
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post("http://localhost:8081/api/auth/login", {
          username: this.username,
          password: this.password,
        });
        this.statusLogin = response.data.status;
        this.messageType = "sucess";
        if(this.statusLogin === "OK") {
          this.$router.replace({ name: 'home' });
        }
        this.message = response.data.message;
      } catch (error) {
        this.message = error.response.data.message;
        this.messageType = "error";
      }
    }
  },
};
</script>

  
  <style scoped>
.vh-100 {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.vh-100::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("../assets/background.png") no-repeat center center;
  background-size: cover;
  opacity: 0.84; /* Adjust this value for desired opacity */
  z-index: -1;
}

  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #000000;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  h2 {
    margin-bottom: 20px;
    color: #333;
  }
  
  .input-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  label {
    display: block;
    font-weight: bold;
    color: #555;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #1d221d;
    color: white;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .error {
    color: red;
    margin-top: 10px;
  }
  .divider:after,
  divider:before {
    content: "";
    flex: 1;
    height: 1px;
    background: #eee;
  }
  .h-custom {
    height: calc(100% - 73px);
  }
  @media (max-width: 450px) {
    .h-custom {
      height: 100%;
    }
  }
  #sign-in-button {
    background-color: #918a74;
    color: white;
  }
  #sign-in-button:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(253, 192, 192, 0.3);
  }
  .sign-up-button {
    color: rgb(94, 90, 90)
  }
  </style>
  