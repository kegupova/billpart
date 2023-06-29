<template>
    <div class="Item_info">
        <hr>
            <p v-for="item in items" :key="item.id">
                <strong>{{ item.name }}</strong>     х{{ item.cost }}₽. <br>Выбрали: {{ item.people.join(', ') }}
            </p>
        <hr>


    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true
        }
    }
};
</script>
<style scoped>
.Item_info{

    border: none;
    border-radius: 5px;
    padding: 5px;
    background-color: #eedecd;
    text-align: left;
}

</style>