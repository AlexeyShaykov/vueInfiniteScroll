<template>
  <li class="user-card">
    <div 
      :style="backgroundStyles(user.picture.large)" 
      class="user-card__photo"
    />
    <div class="name-email-container">
      <div class="name-email-container__name">
        {{ fullName }}
      </div>
      <a 
        :href="`mailto:${user.email}`"
        class="name-email-container__email"
      >
        {{ user.email }}
      </a>
    </div>
  </li>
</template>

<script>
/**
   * Card with users info
   * @displayName Card
   */
export default {
  name: 'Card',
  props: {
	  /**
       * Object with user info
       */
    user: {
      type: Object,
      default: () => ({ 
          name: {
            fist: '',
            last: ''
          },
          email: '',
          picture: {
            'large': '',
            'medium': '',
            'thumbnail': ''
          }
       })
    },
  },
  computed: {
	  /**
       * user full name
       * @return{string}
       */
    fullName() {
      const { first, last } = this.user.name;
      return `${first} ${last}` 
    }
  },
  methods: {
	/**
         * Retrun user photo on template
         * @param{string} image user large picture
         * @return{string} css style with background image
    */
    backgroundStyles(image) {
      return {
        'background-image': `url(${image})`,
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.user-card {
  display: flex;
  padding: 16px;
  background-color: #f1f9f9;
  margin-bottom: 10px;

  &__photo {
    min-width: 50px;
    width: 50px;
    height: 50px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
  }

  & .name-email-container {
        margin-left: 20px;
        overflow: hidden;

        > * {
          display: block;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        &__name {
            font-size: 20px;
            color: #706c61;
        }

        &__email {
          transition: opacity .3s;
          &:hover {
            opacity: .5;
          }
        }
  }
}

@media (max-width: 320px) {
  .user-card {
    & .name-email-container {
      margin-left: 8px;
    }
  }
}
</style>