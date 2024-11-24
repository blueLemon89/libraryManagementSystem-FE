<template>
  <div class="container my-5">
    <div class="text-center mb-5">
      <h1 class="display-4">Welcome to the Library Management System</h1>
      <p class="lead">Manage all your library resources efficiently and easily.</p>
    </div>

    <div class="row">
      <div class="col-md-4">
        <router-link to="/books" class="text-decoration-none">
          <div class="card h-100">
            <div class="card-body text-center">
              <h2 class="card-title">Books</h2>
              <p class="card-text">View, add, edit, and delete books in the library collection.</p>
            </div>
          </div>
        </router-link>
      </div>

      <div class="col-md-4">
        <router-link to="/users" class="text-decoration-none">
          <div class="card h-100">
            <div class="card-body text-center">
              <h2 class="card-title">Users</h2>
              <p class="card-text">Manage library members, registration, and profiles.</p>
            </div>
          </div>
        </router-link>
      </div>

      <div class="col-md-4">
        <router-link to="/borrow" class="text-decoration-none">
          <div class="card h-100">
            <div class="card-body text-center">
              <h2 class="card-title">Borrow & Return</h2>
              <p class="card-text">Track borrowed books and manage returns efficiently.</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.card {
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
}
</style>
