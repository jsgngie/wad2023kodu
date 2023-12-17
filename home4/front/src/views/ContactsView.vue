<template>
  <div class="contacts">
    <h1>Kontaktid</h1>
    <p><b>Evert</b><br>evert@web.ee</p>
    <p><b>Joosep</b><br>joosep@web.ee</p>
    <p><b>Triinu</b><br>triinu@web.ee</p>
  </div>
</template>

<script>
export default {
  name: "ContactsView",
}

</script>

<style>

h1 {
  color: #003049;
}

.contacts {
  margin: auto auto;
  display: flex;
  flex-direction:column;
  width:300px;
  padding:15px;
  border-radius: 5px;
  background-color: #fdf0d5;
}

.contacts p {
  margin-left: auto;
  margin-right:auto;
  padding:16px;
  background-color: #780000;
  color: white;
  border-radius: 10px;
  width: 150px;
}

</style>