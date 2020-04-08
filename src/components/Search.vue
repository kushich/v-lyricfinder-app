<template>
  <v-card class="mx-auto" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">Search For A Song</v-list-item-title>
        <v-list-item-subtitle
          >Get the lyrics for any song</v-list-item-subtitle
        >
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Song Title...  "
            required
          />
          <v-btn color="blue" @click="resetValidation">
            Get Track Lyrics
          </v-btn>
        </v-form>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>
