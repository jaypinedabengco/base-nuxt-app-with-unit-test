<template lang="pug">
    div.notification.is-danger
        | {{ message }}
</template>

<script>
export default {
    name: 'Notification',
    props: {
        message: {
            type: String,
            required: true
        }
    }
}
</script>